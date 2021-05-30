import {
    CountPrice,
    Name,
    Price, ProductActions,
    ProductFooter,
    ProductHeader,
    StyledContent,
    StyledCart, ShopActions
} from "./StyledProductCart";
import {svgIcons} from "../../assets/svgIcons";
import trashIcon from '../../assets/svgIcons/trash.svg'
import addIcon from '../../assets/svgIcons/add.svg'
import Button from "../Button/Button";
import SwiperC from "../Swiper/SwiperC";
import {useDispatch, useSelector} from "react-redux";
import {deleteItem, setItems, sumItem} from "../../redux/Slices/CartSlice";
import {useEffect, useState} from "react";

const ProductCart = ({name, countPrice, price, small, id, images}) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.trashData.items)

    const itemRef = {
        name: name,
        countPrice: countPrice,
        price: price,
        id: id,
        count: 1
    }

    const addItem = () => {
        dispatch(setItems(itemRef))
    }

    const delItem = () => {
        dispatch(deleteItem(itemRef))
    }

    return (
        <StyledCart small={small}>
            <StyledContent small={small}>
                {small ? <></> :
                    <ProductHeader>{svgIcons.map((item, index) => <span
                        key={index}>{item.path}</span>)}</ProductHeader>}
                <SwiperC images={images} small={small}/>
                <Name children={name} small={small}/>
                <CountPrice children={countPrice} small={small}/>
                <ProductFooter small={small}>
                    <Price children={price} small={small}/>
                    <ShopActions>
                        <Button onClick={delItem} small={small} secondary img={trashIcon}/>
                        <span>{items.length ? items.map(item => item.id === id ? item.count : 0) : 0}</span>
                        <Button onClick={addItem} small={small} img={addIcon}/>
                    </ShopActions>
                </ProductFooter>
                {small
                    ? <></>
                    : <ProductActions>
                        <span>Nutrition</span>
                        <span>Ingredients</span>
                        <span>Other</span>
                    </ProductActions>}
            </StyledContent>
        </StyledCart>
    )
}
export default ProductCart