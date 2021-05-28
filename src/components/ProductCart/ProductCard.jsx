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
import {useDispatch} from "react-redux";
import {setItems} from "../../redux/Slices/trashSlice";
import {useState} from "react";


const ProductCart = ({name, countPrice, price, small, id, images}) => {
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()

    const itemRef = {
        name: name,
        countPrice: countPrice,
        price: price,
        id: id,
        count: 0
    }

    const onAddItem = () => {
        setCount(count + 1)
        dispatch(setItems(itemRef))
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
                        <Button small={small} secondary img={trashIcon}/>
                        <span>{count}</span>
                        <Button onClick={onAddItem} small={small} img={addIcon}/>
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