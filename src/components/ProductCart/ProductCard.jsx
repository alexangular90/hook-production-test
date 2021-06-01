import {
    CountPrice, Name, Price, ProductActions, ProductFooter, ProductHeader, StyledContent,
    StyledCart, ShopActions, PricesBlock
} from "./StyledProductCart";
import {svgIcons} from "../../assets/svgIcons";
import trashIcon from '../../assets/svgIcons/trash.svg'
import addIcon from '../../assets/svgIcons/add.svg'
import Button from "../Button/Button";
import SwiperC from "../Swiper/SwiperC";
import {useDispatch, useSelector} from "react-redux";
import {deleteItem, setItems} from "../../redux/Slices/CartSlice";

const ProductCart = ({name, countPrice, price, small, id, images, cart}) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cartData.items)

    const itemRef = {
        name: name,
        images: images,
        countPrice: countPrice,
        price: price,
        id: id
    }

    const addItem = () => {
        dispatch(setItems(itemRef))
    }

    const delItem = () => {
        dispatch(deleteItem(itemRef))
    }

    return (
        <StyledCart cart={cart} small={small}>
            <StyledContent small={small} cart={cart}>
                {small || cart ? <></> :
                    <ProductHeader>{svgIcons.map((item, index) => <span
                        key={index}>{item.path}</span>)}</ProductHeader>}
                <SwiperC cart={cart} images={images} small={small}/>
                <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                    <Name children={name} small={small}/>
                    <ProductFooter cart={cart} small={small}>
                        <PricesBlock cart={cart}>
                            <CountPrice children={countPrice} cart={cart} small={small}/>
                            <Price children={`£ ${price}`} small={small} cart={cart}/>
                        </PricesBlock>
                        <ShopActions>
                            {(items.find(el => el.id === id ? el.count.length !== 0 : false))
                                ? <>
                                    <Button onClick={delItem} small={small} secondary img={trashIcon}/>
                                    <span>{(items.find(el => el.id === id) || {count: 0}).count}</span>
                                </>
                                : <span>Add</span>}
                            <Button onClick={addItem} small={small} img={addIcon}/>
                        </ShopActions>
                    </ProductFooter>
                </div>
                {small || cart
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