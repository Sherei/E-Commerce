import React from 'react'
import { FaCarSide, FaHandHoldingUsd } from "react-icons/fa";
import { SiAdguard,SiFsecure } from "react-icons/si";

import "./benefits.css"
export const Benefits = () => {
  return <>
    <div className='continer-fluid px-4 benefit_container'>
      <div className='row benefit_row pl-5'>
        <div className='col-lg-4 col-sm-12 mb-4'>
          <div className='benefit_main px-2'>
            <div className='benefit_icon'>
              <FaCarSide />
            </div>
            <div>
              <p className='benefit_detail'>Super Fast and Free Delivery</p>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mb-4'>
          <div className='benefit_main2 mb-4 px-3 py-3'>
            <div className='benefit_icon'>
              <SiAdguard />
            </div>
            <div>
              <p className='benefit_detail'>Non-contact Shipping</p>
            </div>
          </div>
          <div className='benefit_main2 px-3 py-3'>
            <div className='benefit_icon'>
              <FaHandHoldingUsd />
            </div>
            <div>
              <p className='benefit_detail'>Money Back Guaranteed</p>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='benefit_main px-3'>
            <div className='benefit_icon'>
              <SiFsecure />
            </div>
            <div>
              <p className='benefit_detail'>Super Secure Payment System</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
