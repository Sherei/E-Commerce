import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import "./hero.css"
export const Herosection = () => {
    return <>
        <div className='container-fluid mt-5'>
            <div className='row home_row1 mb-5'>
                <div className='col-lg-6 col-sm-12 px-5 d-flex flex-column justify-content-center home_col1'>
                    <p className='welcome'>welcome to </p>
                    <h1>BuyRight</h1>
                    <p className='detail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, earum hic sequi laborum atque consectetur laboriosam? Id, autem laborum sapiente, veritatis alias itaque quod similique laboriosam tempora eligendi sequi inventore.</p>
                    <button className='mt-3'>Shop Now</button>
                </div>
                <div className='col-lg-6 sol-sm-12 px-5 home_swiper'>
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        navigation={false}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src="pair-trainers.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="ryan-plomp-jvoZ-Aux9aw-unsplash-removebg-preview.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="Watche16-834x1024.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="png-clipart-pocket-watch-clock-men-s-watch-watch-accessory-poster-removebg-preview.png" alt="" /></SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    </>
}
