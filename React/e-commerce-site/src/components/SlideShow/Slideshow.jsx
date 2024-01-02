import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import "swiper/css";
import './swiper.css'

export default function Slideshow() {

    const img1 = require('../../images/farming04-free-img-o9xdxvnzch1gu353cc71s2fv9hgs2o8e1ubsjmmia0.jpg');
    const img2 = require('../../images/image-01-ok9t8tqfmw86q6a5qjwdw95uon8m0ro8dme893gop4.jpg');
    const img3 = require('../../images/image-02-ok9thlk7f88j35jeicf161gqa3zxv2i1l1ldi2gemg.jpg');
    const img4 = require('../../images/farming03-free-img-o9vzqvrix9ebgtwlxr5iwk27s1xblzkum1b4ivvlzc.jpg')

    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={40}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="img1" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="img2" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="img3" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="img4" className='rounded-lg' /></SwiperSlide>
            </Swiper>
        </>
    );
}


