import React, { useState } from 'react'
import { BsFillGridFill, BsListStars } from "react-icons/bs"
import "./product.css"
export const Products = () => {

  let [price, setPrice] = useState("200000");
  let [sortOrder, setSortOrder] = useState("");

  let handleInput = (e) => {
    setPrice(e.target.value);
  }

  function Filterclear() {
    setPrice("200000")
    setSortOrder("")
    console.log("hello")
  }

  let data = [
    {
      title: "Shoes",
      category: "Clothe",
      img: "photo-1460353581641-37baddab0fa2.jpg",
      price: "245"
    },
    {
      title: "Iphone 15",
      category: "Mobile",
      img: "iphone15ultrateaser.png",
      price: "20000"
    },
    {
      title: "Laptop",
      category: "Laptop",
      img: "photo-1618424181497-157f25b6ddd5.jpg",
      price: "15700"
    },
    {
      title: "Iphone 15",
      category: "Mobile",
      img: "iphone15ultrateaser.png",
      price: "4000"
    },
    {
      title: "Shoes",
      category: "Clothe",
      img: "photo-1460353581641-37baddab0fa2.jpg",
      price: "50000"
    },
    {
      title: "Iphone 15",
      category: "Mobile",
      img: "iphone15ultrateaser.png",
      price: "10000"
    },
    {
      title: "Laptop",
      category: "Laptop",
      img: "photo-1618424181497-157f25b6ddd5.jpg",
      price: "45000"
    },
    {
      title: "Iphone 15",
      category: "Mobile",
      img: "iphone15ultrateaser.png",
      price: "55000"
    },
    {
      title: "Shoes",
      category: "Clothe",
      img: "photo-1460353581641-37baddab0fa2.jpg",
      price: "1100"
    },
    {
      title: "Laptop",
      category: "Laptop",
      img: "photo-1618424181497-157f25b6ddd5.jpg",
      price: "8500"
    },
    {
      title: "Iphone 15",
      category: "Mobile",
      img: "iphone15ultrateaser.png",
      price: "15450"
    },
    {
      title: "Shoes",
      category: "Clothe",
      img: "photo-1460353581641-37baddab0fa2.jpg",
      price: "7500"
    },
  ]
  if (sortOrder === "asc") {
    data.sort((a, b) => parseInt(a.price) - parseInt(b.price));
  } else if (sortOrder === "desc") {
    data.sort((a, b) => parseInt(b.price) - parseInt(a.price));
  } else {
    data.sort();
  }

  return <>
    <div className='container-fluid px-4'>
      <div className='row my-4'>
        <div className='col-lg-2 col-sm-12 px-3  mb-5 product_filter_col'>
          <div className='mb-4'>
            <input type="search" placeholder='Search' />
          </div>
          <div className='mb-4'>
            <p className='product-heading'>Category</p>
            <p className='active'>All</p>
            <p className='active'>Mobiles</p>
            <p className='active'>Laptop</p>
            <p className='active'>Camera</p>
            <p className='active'>Watches</p>
            <p className='active'>Accessories</p>
          </div>
          <div className='mb-4'>
            <p className='product-heading'>Price: {price}</p>
            <input
              type="range"
              min="250"
              max="200000"
              value={price}
              onChange={handleInput}
            />
          </div>
          <button type="button" className="btn btn-danger text-uppercase" onClick={(Filterclear)}>Clear Filter</button>

        </div>

        {/* /////////////////////////////////////////////////////////////////////////////// */}



        <div className='col-lg-10 col-md-10 col-sm-10 px-3   mb-5 product_col2'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-4 d-flex gap-2 '>
              <div className='grid_icon'>
                <BsFillGridFill />
              </div>
              <div className='grid_icon'>
                <BsListStars />
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4 ' >
              <div className='products_number d-flex justify-content-center' style={{ fontWeight: "600" }}>
                <p>12 Products</p>
              </div>
            </div>
            <div className='col-lg-4 col-sm-4 '>
              <div className='d-flex justify-content-end select'>
                <select name="" id="" onChange={(e) => setSortOrder(e.target.value)}>
                  <option value="">All</option>
                  <option value="desc">Price (Highest)</option>
                  <option value="asc">Price (Lowest)</option>
                </select>
              </div>
            </div>
          </div>
          <div className='row px-5 mt-3 pb-5'>
            {data
              .filter((product) => product.price < parseInt(price, 10))
              .map((product) => {
                return <div className='col-lg-4 col-sm-6 my-4'>
                  <div className='product_card p-2 card'>
                    <div className='service_card_img'>
                      <img src={product.img} alt="" />
                      <div className='slide_overlay'></div>
                      <button className='service_btn'>{product.category}</button>
                    </div>
                    <div className='d-flex justify-content-between mt-3 px-2'>
                      <div><p>{product.title}</p></div>
                      <div><p className='price'>Rs. {product.price}</p></div>
                    </div>
                  </div>
                </div>
              })}


          </div>

        </div>
      </div>
    </div>
  </>
}
