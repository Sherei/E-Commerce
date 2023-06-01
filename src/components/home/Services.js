import React from 'react';
import './services.css';

export const Services = () => {

  let data = [
    {
      title: "Shoes",
      category:"Clothes",
      img: "photo-1460353581641-37baddab0fa2.jpg",
      price: "15000"
    },
    {
      title: "Iphone 15",
      category:"Mobiles",
      img: "iphone15ultrateaser.png",
      price: "25000"
    },
    {
      title: "Laptops",
      category:"Laptops",
      img: "photo-1618424181497-157f25b6ddd5.jpg",
      price: "50000"
    },
  ]
  return (
    <>
      <div className='container-fluid container_service'>
        <div className='row px-5 pt-5 service_row1'>
          <div className='col-lg-12 col-sm-12'>
            <p className='welcome text-uppercase'>Check Now </p>
            <h1 className='featured text-uppercase'>Our Featured Services</h1>
          </div>
        </div>
        <div className='row px-5 mt-5 pb-5'>
          {data.map((data) => {
            return <div className='col-lg-4 col-sm-6 my-4'>
              <div className='services_card p-2 card'>
                <div className='service_card_img'>
                  <img src={data.img} alt="" />
                  <div className='slide_overlay'></div>
                  <button className='service_btn'>{data.category}</button>
                </div>
                <div className='d-flex justify-content-between mt-3 px-2'>
                  <div><p>{data.title}</p></div>
                  <div><p className='price'>Rs. {data.price}</p></div>
                </div>
              </div>
            </div>
          })
          }

        </div>
      </div>
    </>
  );
};
