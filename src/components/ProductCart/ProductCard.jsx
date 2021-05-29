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
import {deleteItem, setItems} from "../../redux/Slices/trashSlice";


const ProductCart = ({name, countPrice, price, small, id, images, count}) => {
    const dispatch = useDispatch()

    const itemRef = {
        name: name,
        countPrice: countPrice,
        price: price,
        id: id,
        count: 0
    }

    const onAddItem = async () => {
        dispatch(setItems(itemRef))
    }

    const onDeleteItem = () => {
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
                        <Button onClick={onDeleteItem} small={small} secondary img={trashIcon}/>
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