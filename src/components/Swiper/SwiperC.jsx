import React from "react";
import SwiperCore, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./SwiperCStyle.css";
import {useSelector} from "react-redux";
import {ProductImage} from "../ProductCart/StyledProductCart";

SwiperCore.use([Pagination]);

const SwiperC = ({small}) => {
    const images = useSelector(state => state.productData.product.images)

    return (
        <Swiper pagination={true} className="mySwiper">
            {images.map(item =>
                <SwiperSlide>
                    <ProductImage small={small} src={item}/>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default SwiperC