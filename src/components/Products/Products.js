import React, { useState, useEffect } from 'react'
import "./product.css"
import { BsFillGridFill, BsListStars, BsFillFunnelFill } from "react-icons/bs"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { BsFillMicFill } from "react-icons/bs";
import axios from 'axios';
import { toast } from 'react-toastify';


export const Products = () => {

  const [data, setData] = useState([]);

  let [minPrice, setMinPrice] = useState("0");
  let [maxPrice, setMaxPrice] = useState("10000000");
  let [search, setSearch] = useState("")
  let [activeGrid, setActiveGrid] = useState("grid")
  let [sort, setSortOrder] = useState("")
  let [showFilter, setShowFilter] = useState(true);
  let [category, setCategory] = useState("all")

  useEffect(() => {
    axios.get('/product').then((res) => {
      try {
        if (res) {
          setData(res.data)
        }
      } catch (e) {
        console.log(e)
      }
    })
  }, [])

  let maximum = data.reduce((max, item) => {
    return item.price > max ? item.price : max;
  }, 0);

  let Minvalue = (e) => {
    setMinPrice(parseInt(e.target.value))
  }
  let Maxvalue = (e) => {
    setMaxPrice(parseInt(e.target.value))
  }
  let SearchInput = (e) => {
    setSearch(e.target.value || transcript || (e.target.value && transcript))
    resetTranscript()
  }

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  let Startlistening = () => {
    SpeechRecognition.startListening()
  }

  function ClearFilter(){
    setCategory("all")

  }

  if (sort === "asc") {
    data.sort((a, b) => parseInt(b.price) - parseInt(a.price));
  } else if (sort === "desc") {
    data.sort((a, b) => parseInt(a.price) - parseInt(b.price));
  } else {
    data.sort().reverse()
  }
  if (!browserSupportsSpeechRecognition) {
    return <h1>Your Browser doesn't Support Speech Recognition.</h1>;
  }
  
  return <>
    <div className='container-fluid min-vh-100' style={{ overflow: "hidden" }}>
      <div className='row'>
        <div className='col-lg-12 col-sm-12 mt-4'>
          <h1>Welcome to BuyRight Store</h1>
        </div>
        <div className='col-lg-12 col-sm-12 px-2 main-col1'>
          <div className='row mb-5'>
            <div className='col-lg-12 col-sm-12 d-flex justify-content-end'>
              {showFilter &&
                <>
                  <div className='py-4 d-flex px-4 gap-2' onClick={() => setShowFilter(false)}>
                    <div style={{ fontSize: "20px", color: "red" }}><BsFillFunnelFill /></div>
                    <p className='' style={{ marginTop: ".1rem", fontSize: "20px", fontWeight: "600" }}>Filters</p>
                  </div>
                </>
              }
              {!showFilter &&
                <>
                  <div className='py-4 d-flex px-4 gap-2' onClick={() => setShowFilter(true)}>
                    <div style={{ fontSize: "20px" }}><BsFillFunnelFill /></div>
                    <p className='' style={{ marginTop: ".1rem", fontSize: "20px", fontWeight: "600" }}>Filters</p>
                  </div>
                </>
              }
            </div>
            <div className='col-lg-3 col-sm-12'>
              <div className='position-relative'>
                <input
                  type="search"
                  className="w-100 form-control mb-2 mr-sm-2"
                  placeholder="Search Anything"
                  value={search || transcript}
                  onChange={(SearchInput)}
                />
                <span>
                  <button className="mic_hover" onClick={(Startlistening)}>  <BsFillMicFill /></button>
                </span>
              </div>
            </div>

            <div className='col-lg-3 col-sm-12'>
              {showFilter &&
                <>
                  <div className='categories'>
                    <div>
                      <select className="form-control mb-2 mr-sm-2" onChange={(e) => {
                        setCategory(e.target.value.toLowerCase())
                      }}>
                        <option value="All">All</option>
                        <option value="Mobiles">Mobiles</option>
                        <option value="Laptops">Laptops</option>
                        <option value="Camera">Camera</option>
                        <option value="Watches">Watches</option>
                        <option value="Accessories">Accessories</option>
                      </select>
                    </div>
                  </div>
                </>}
            </div>
            <div className='col-lg-3 col-sm-12'>

              {showFilter &&
                <>
                  <div className='d-flex'>
                    <div className='px-3'>
                      <span>Min Value: {minPrice}</span>
                      <input type="range" min="0" max={maximum - 1000} value={minPrice} className='range_class' onChange={(Minvalue)} />
                    </div>
                    <div>
                      <span>Max Value:{maxPrice}</span>
                      <input type="range" min="0" max={maximum} className='range_class' value={maxPrice} onChange={(Maxvalue)} />
                    </div>
                  </div>
                </>
              }
            </div>
            <div className='col-lg-3 col-sm-12'>
              {showFilter &&
                <>
                  <div className='d-flex justify-content-center'>
                    <button className='btn btn-danger text-uppercase' onClick={ClearFilter}>Clear filter</button>
                  </div>
                </>
              }
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////// */}

        <div className='col-lg-12  min-vh-100 main_col'>
          <div className='row d-flex justify-content-between pb-5 px-4'>
            <div className='col-lg-3 col-sm-12 d-flex justify-content-center'>
              <div className='d-flex'>
                <div
                  className={`grid_icon ${activeGrid === "grid" ? "active" : ""}`}
                  onClick={() => setActiveGrid("grid")}
                >
                  <BsFillGridFill />
                </div>
                <div
                  className={`grid_icon ${activeGrid === "list" ? "active" : ""}`}
                  onClick={() => setActiveGrid("list")}
                >
                  <BsListStars />
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-sm-4 text-center'>
              <p><b> {data.filter((product) => {
                let productPrice = parseInt(product.price);
                let lowerCaseTitle = product.title.toLowerCase();
                let productCategory = product.category.toLowerCase();
                let lowerCaseSearch = (search || transcript).toLowerCase();
                return (
                  productPrice >= minPrice &&
                  productPrice <= maxPrice &&
                  (lowerCaseTitle.includes(lowerCaseSearch)) &&
                  (category === "all" || category === productCategory)
                );
              }).length} </b> Products</p>
            </div>
            <div className='col-lg-3 col-sm-12 d-flex justify-content-center'>
              <select className='form-control mb-2 mr-sm-2' onChange={(e) => { setSortOrder(e.target.value) }} style={{
                border: "none", border: "1px solid #dddfe0",
                outline: "none",
              }}>
                <option value="">All</option>
                <option value="asc">Price (Highes)</option>
                <option value="desc">Price (Lowest)</option>
              </select>
            </div>
          </div>

          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <div className='row d-flex justify-content-center align-items-center px-5'>
            {activeGrid === "grid" && data.filter((product) => {
              let productPrice = parseInt(product.price);
              let lowerCaseTitle = product.title.toLowerCase();
              let productCategory = product.category.toLowerCase();
              let lowerCaseSearch = (search || transcript).toLowerCase();
              return (
                productPrice >= minPrice &&
                productPrice <= maxPrice &&
                (lowerCaseTitle.includes(lowerCaseSearch)) &&
                (category === "all" || category === productCategory)
              );
            }).map((product) => {
              return <div className='col-lg-3 col-md-5 col-sm-5 col-xsm-5  mb-4'>
                <div className='product-main'>
                  <div className='product_img' >
                    <img src={product.pic} alt="Network Error" style={{ width: "100%", height: "100%" }} />
                    <div className='slide_overlay'></div>
                  </div>
                  <button className='px-2 py-1' style={{
                    position: "absolute", top: "5px", right: "18px", border: "none", width: "fit-content", background: "white",
                    borderRadius: "40px"
                  }}>{product.category}</button>
                  <div className='d-flex justify-content-between align-items-center px-2 py-2'>
                    <p style={{ color: "black", fontWeight: "500" }}>{product.title.slice(0, 20)}<span style={{ color: "blue" }}>...</span></p>
                    <p className='text-right' style={{ color: "#6254F3", fontWeight: "600", width: "35%" }}>Rs. {product.price}</p>
                  </div>
                </div>
              </div>
            })
            }

          </div>


          {/* //////////////////////////////////////////////////// */}.


          <div className='row'>
            {activeGrid === "list" && data.filter((product) => {
              let productPrice = parseInt(product.price);
              let lowerCaseTitle = product.title.toLowerCase();
              let productCategory = product.category.toLowerCase();
              let lowerCaseSearch = (search || transcript).toLowerCase();
              return (
                productPrice >= minPrice &&
                productPrice <= maxPrice &&
                (lowerCaseTitle.includes(lowerCaseSearch)) &&
                (category === "all" || category === productCategory)
              );
            }).map((product) => {
              return (
                <div className='col-lg-6 col-sm-12 l-display py-2 px-5'>
                  <div className="row l-services py-2">
                    <div className="col-lg-5 l-services-img">
                      <div className='l-service_card_img'>
                        <img src={product.pic} alt="Network Error" />
                        <div className='l-slide_overlay'></div>
                        <button className='service_btn'>{product.category}</button>
                      </div>
                    </div>
                    <div className="col-lg-7 l-service_card_d">
                      <h2>{product.title.slice(0, 40)}<span style={{ color: "blue" }}>...</span></h2>
                      <p className='price'>Rs. {product.price}</p>
                      <p className='desc pr-5'>{product.description.slice(0, 60)}<span style={{ color: "blue" }}>...</span></p>
                      <button className='btn btn-primary mb-3'>Read more</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>



        </div>
      </div>

    </div >
  </>
}
