import React from 'react'
import { FaAmazon, FaShopify,FaShopware} from "react-icons/fa";
import {SiFoodpanda,SiBookmyshow} from "react-icons/si"
import "./companies.css"
export const Companies = () => {
  return <>
    <div className='container-fluid company_container mb-5'>
      <div className='row px-5'>
        <div className='col-lg-12 col-sm-12 '>
          <h1>Trusted By 100+ Companies</h1>
        </div>
      </div>
      <div className='row' style={{width:"100%"}}>
        <div className='col-lg-12 col-sm-12 mt-4 d-flex flex-wrap justify-content-between px-5'>
            <div className='company_icon'><FaAmazon /></div>
            <div className='company_icon'><FaShopify /></div>
            <div className='company_icon'><FaShopware /></div>
            <div className='company_icon'><SiFoodpanda /></div>
            <div className='company_icon'><SiBookmyshow /></div>
        </div>
      </div>

    </div>
  </>
}
