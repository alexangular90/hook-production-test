import React from "react";
import SwiperCore, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./SwiperCStyle.css";
import {ProductImage} from "../ProductCard/StyledProductCart";
import {CartImage} from "./StyledSwiperC";

SwiperCore.use([Pagination]);

const SwiperC = ({small, images, cart}) => {
    return (
        <React.Fragment>
            {cart
                ? <div style={{paddingRight: "10px"}}>
                    <CartImage cart={cart} src={images[0]} alt=""/>
                </div>
                : <Swiper pagination={true} className="mySwiper">
                    {images?.map((item, index) =>
                        <SwiperSlide key={index}>
                            <ProductImage small={small} src={item}/>
                        </SwiperSlide>)}
                </Swiper>
            }


        </React.Fragment>
    )
}

export default SwiperC