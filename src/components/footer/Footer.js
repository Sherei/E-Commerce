import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
export const Footer = () => {
  return (
    <div className='container-fluid footer'>


      <div className="top-footer ">


        <p>Ready to get started? <br />
          Talk to us today</p>

        <button>Get Started</button>
      </div>

      <div className="row">

        <div className="col-lg-3 col-md-6 mid-footer" >
          <p>BUyRight</p>
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <div className="col-lg-3  col-md-6 mid-footer">
          <p>Subscribe to get important updates</p>
          <form action="">
            <input type="text" placeholder='YOUR E-MAIL' />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="col-lg-3  col-md-6 mid-footer">
          <p>Follow us</p>
          <div className='footer-icon'>
            <span><FaFacebookF></FaFacebookF></span>
            <span><AiFillInstagram></AiFillInstagram></span>
            <span><AiFillYoutube></AiFillYoutube></span>
          </div>
        </div>
        <div className="col-lg-3  col-md-6 mid-footer">
          <p >Call Us</p>
          <p>+923163868103</p>
        </div>
      </div>

      <hr className='hr' />
      <div className="row end-footer">
        <div className="col-lg-6 col-md-6">
          <p>@BuyRIght All Right Reserved</p>
        </div>
        <div className="col-lg-6 col-md-6">
          <p>PRIVACY POLICY <br /> TERMS AND CONDITIONS</p>

        </div>
      </div>

    </div>
  )
}
