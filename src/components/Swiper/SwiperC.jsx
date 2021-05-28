import React from "react";
import SwiperCore, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./SwiperCStyle.css";
import {ProductImage} from "../ProductCart/StyledProductCart";

SwiperCore.use([Pagination]);

const SwiperC = ({small, images}) => {
    return (
        <Swiper pagination={true} className="mySwiper">
            {images?.map((item, index) =>
                <SwiperSlide key={index}>
                    <ProductImage small={small} src={item}/>
                </SwiperSlide>)}
        </Swiper>
    )
}

export default SwiperC