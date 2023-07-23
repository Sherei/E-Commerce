import React, { useState } from 'react'
import "./single.css"
export const Singlepage = () => {

  let [price, setprice] = useState("1")

  let total = + 15000 * price + parseInt(250);

  return <>

    <div className='container'>
      <div className='row' style={{ minHeight: '100vh' }}>
        <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center'>
          <div className='border' style={{ width: "95%", height: "300px" }}>
            <img src="pair-trainers.jpg" alt="" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 py-5'>
          <div className='mb-5'>
            <h1 style={{ color: "red", fontWeight: "600" }}>Iphone 12 pro max</h1>
          </div>
          <div>
            <p style={{ lineHeight: "35px" }}>Iphone Iphone Iphone Iphone Iphone Iphone Iphone Iphone Iphone Iphone Iphone Iphone
              Iphone Iphone Iphone Iphone Iphone Iphone Iphone Iphone Iphone Iphone Iphone Iphone Iphone Iphone Iphone  </p>
          </div>
          <div className='d-flex gap-4 align-items-center'>
            <p style={{ fontWeight: "700", fontSize: "20px" }}>Select Color</p>
            <label>
              <input type="radio" name="color" value="black" /> Black
            </label>
            <label>
              <input type="radio" name="color" value="red" /> Red
            </label>
            <label>
              <input type="radio" name="color" value="blue" /> Blue
            </label>
            <label>
              <input type="radio" name="color" value="green" /> Green
            </label>
          </div>

          <div className='d-flex gap-4 align-items-center'>
            <label style={{ fontWeight: "700", fontSize: "20px" }}>Select Quantity</label>
            <input type="number" className='form-control mb-2 mr-sm-2' defaultValue="1" min={"1"} style={{ width: "80px" }}
              onChange={(e) => {
                setprice(e.target.value)
              }} />
          </div>
          <div>
            <p style={{ fontWeight: "700", fontSize: "20px" }}>Price: 15000 Rs.</p>
          </div>
          <div>
            <p className='d-flex gap-2'>
              <input type="radio" name="shipping" value="299" /> <span style={{color:"red", fontWeight:"600"}}> Shipping Fee within Pakistan: 299 Rs.</span> 
            </p>
            <p className='d-flex gap-2'>
              <input type="radio" name="shipping" value="500" /> <span style={{color:"red", fontWeight:"600"}}> Shipping Fee Outside Pakistan: 500 Rs.</span>
            </p>
          </div>

          <div>
            <p style={{ fontWeight: "700", fontSize: "20px" }}>Total Price : {total} Rs. </p>
          </div>
          <div className='mt-5'>
            <button className='btn btn-danger'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>

  </>
}
