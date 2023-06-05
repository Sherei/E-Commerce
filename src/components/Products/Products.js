import React, { useState, useEffect } from 'react'
import "./product.css"
import { BsFillGridFill, BsListStars, BsFillFunnelFill } from "react-icons/bs"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { BsFillMicFill } from "react-icons/bs";
// import axios from "axios"


export const Products = () => {
  let data = [
    {
      title: "Iphone 14 pro max",
      price: "7800",
      category: "Mobiles",
      desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      img: "iphone15ultrateaser.png"
    },
    {
      title: "Laptop Hp",
      price: "4000",
      category: "Laptops",
      desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",

      img: "photo-1460353581641-37baddab0fa2.jpg"
    },
    {
      title: "Best Shoes",
      price: "1500",
      desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",

      category: "Clothes",
      img: "pair-trainers.jpg"
    },
    {
      title: "Laptop Hp",
      price: "4000",

      desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      category: "Laptops",
      img: "photo-1460353581641-37baddab0fa2.jpg"
    },
    {
      title: "Laptop Hp",
      price: "4000",

      desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      category: "Laptops",
      img: "photo-1460353581641-37baddab0fa2.jpg"
    }, {
      title: "Laptop Hp",
      price: "4000",

      desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      category: "Laptops",
      img: "photo-1460353581641-37baddab0fa2.jpg"
    }, {
      title: "Laptop Hp",
      price: "4000",

      desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      category: "Laptops",
      img: "photo-1460353581641-37baddab0fa2.jpg"
    }, {
      title: "Laptop Hp",
      price: "4000",

      desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      category: "Laptops",
      img: "photo-1460353581641-37baddab0fa2.jpg"
    },

  ]

  let [minPrice, setMinPrice] = useState("0")
  let [maxPrice, setMaxPrice] = useState("10000")
  let [search, setSearch] = useState("")
  let [activeGrid, setActiveGrid] = useState("grid")
  let [sort, setSortOrder] = useState("")
  let [showFilter, setShowFilter] = useState(true);

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
    <div className='container-fluid min-vh-100'>
      <div className='row'>
        <div className='col-lg-2 px-2 py-5 main-col1'>
          <div className=' d-flex flex-column flex-wrap'>
            <div className='position-relative'>
              <input
                type="search"
                className="px-2 w-100"
                placeholder="Search Anything"
                style={{
                  border: "none", border: "1px solid #dddfe0", borderRadius: "10px",
                  height: "35px",
                  outline: "none",
                }}
                value={search || transcript}
                onChange={(SearchInput)}
              />
              <span>
                <button className="mic_hover" onClick={(Startlistening)}>  <BsFillMicFill /></button>
              </span>
            </div>
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
            {showFilter &&
              <>
                <div className='categories'>
                  <h2 className='mb-4' style={{ fontSize: '24px', fontWeight: '700' }}>Category</h2>
                  <div className='px-3'>
                    <p>All</p>
                    <p>Mobile</p>
                    <p>Laptop</p>
                    <p>Watches</p>
                    <p>Camera</p>
                    <p>Accessories</p>
                  </div>
                </div>

                <div>
                  <h2 className='my-4' style={{ fontSize: '24px', fontWeight: '700' }}>Price Range</h2>
                  <div className='px-3'>
                    <span>Min Value: {minPrice}</span>
                    <input type="range" min="0" max="10000" value={minPrice} className='range_class' onChange={(Minvalue)} />
                    <br />
                    <span>Min Value:{maxPrice}</span>
                    <input type="range" min="0" max="10000" className='range_class' value={maxPrice} onChange={(Maxvalue)} />
                  </div>
                </div>
                <div className='d-flex justify-content-center'>
                  <button className='btn btn-danger text-uppercase my-4'>Clear filter</button>
                </div>
              </>
            }
          </div>
        </div>


        <div className='col-lg-10 px-4 py-5 min-vh-100 main_col'>
          <div className='row d-flex justify-content-between pb-5'>
            <div className='col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between px-5'>
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
              <p><b> {data.filter((product) => {
                let productPrice = parseInt(product.price);
                let lowerCaseTitle = product.title.toLowerCase();
                let lowerCaseCategory = product.category.toLowerCase();
                let lowerCaseSearch = (search || transcript).toLowerCase();
                return (
                  productPrice >= minPrice &&
                  productPrice <= maxPrice &&
                  (lowerCaseTitle.includes(lowerCaseSearch) ||
                    lowerCaseCategory.includes(lowerCaseSearch))
                );
              }).length} </b> Products</p>

              <select onChange={(e) => { setSortOrder(e.target.value) }} style={{
                border: "none", border: "1px solid #dddfe0",
                outline: "none",
              }}>
                <option value="">All</option>
                <option value="asc">Price (Highes)</option>
                <option value="desc">Price (Lowest)</option>
              </select>
            </div>
          </div>
          <div className='row d-flex gap-5 justify-content-center align-items-center'>
            {activeGrid === "grid" && data.filter((product) => {
              let productPrice = parseInt(product.price);
              let lowerCaseTitle = product.title.toLowerCase();
              let lowerCaseCategory = product.category.toLowerCase();
              let lowerCaseSearch = (search || transcript).toLowerCase();
              return (
                productPrice >= minPrice &&
                productPrice <= maxPrice &&
                (lowerCaseTitle.includes(lowerCaseSearch) ||
                  lowerCaseCategory.includes(lowerCaseSearch))
              );
            }).map((product) => {
              return <div className='col-lg-3 col-md-5 col-sm-5 col-xsm-5 px-2 py-2 min-h-75 product-main'>
                <div className='product_img' >
                  <img src={product.img} alt="" style={{ width: "100%", height: "100%" }} />
                  <div className='slide_overlay'></div>
                </div>
                <button className='px-2 py-1' style={{
                  position: "absolute", top: "15px", right: "10px", border: "none", width: "fit-content", background: "white",
                  borderRadius: "40px"

                }}>{product.category}</button>
                <div className='d-flex justify-content-between align-items-center pt-3'>
                  <p style={{ color: "black", fontWeight: "500" }}>{product.title}</p>
                  <p className='text-right' style={{ color: "#6254F3", fontWeight: "600", width: "35%" }}>Rs. {product.price}</p>
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
              let lowerCaseCategory = product.category.toLowerCase();
              let lowerCaseSearch = (search || transcript).toLowerCase();
              return (
                productPrice >= minPrice &&
                productPrice <= maxPrice &&
                (lowerCaseTitle.includes(lowerCaseSearch) ||
                  lowerCaseCategory.includes(lowerCaseSearch))
              );
            }).map((product) => {
              return (
                <div className='col-lg-12 col-sm-12 l-display py-2 '>
                  <div className="row mt-3 l-services py-2">
                    <div className="col-lg-5 l-services-img">
                      <div className='l-service_card_img'>
                        <img src={product.img} alt='' />
                        <div className='l-slide_overlay'></div>
                        <button className='service_btn'>{product.category}</button>
                      </div>
                    </div>
                    <div className="col-lg-7 l-service_card_d">
                      <h2>{product.title}</h2>
                      <p className='price'>Rs. {product.price}</p>
                      <p className='desc pr-5'>{product.desc}</p>
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
