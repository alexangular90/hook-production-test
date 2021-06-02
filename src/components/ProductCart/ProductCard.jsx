import {
    CountPrice, Name, Price, ProductActions, ProductFooter, ProductHeader, StyledContent,
    StyledCart, ShopActions, PricesBlock, ProductBody
} from "./StyledProductCart";
import {svgIcons} from "../../assets/svgIcons";
import trashIcon from '../../assets/svgIcons/trash.svg'
import addIcon from '../../assets/svgIcons/add.svg'
import favorites from '../../assets/svgIcons/favorites.svg'
import favoriteFill from '../../assets/svgIcons/favoritesFill.svg'
import Button from "../Button/Button";
import SwiperC from "../Swiper/SwiperC";
import {useDispatch, useSelector} from "react-redux";
import {deleteItem, setItems} from "../../redux/Slices/CartSlice";
import {useState} from "react";
import {Link} from "react-router-dom";

const ProductCart = ({name, countPrice, price, small, id, images, cart}) => {
    const [addFavorite, setAddFavorite] = useState(false)
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
                {small || cart
                    ? <></>
                    : <ProductHeader>
                        {svgIcons.map((item, index) => <span
                            key={index}>{item.path}</span>)}
                        <Button onClick={() => setAddFavorite(!addFavorite)}
                                img={addFavorite ? favoriteFill : favorites}
                                onlyIcon/>
                    </ProductHeader>}
                <SwiperC cart={cart} images={images} small={small}/>
                <ProductBody>
                    <Name children={cart ? `${name.substr(0, 20)}...` : name}
                          small={small} cart={cart}/>
                    <ProductFooter cart={cart} small={small}>
                        <PricesBlock cart={cart}>
                            <CountPrice children={countPrice} cart={cart} small={small}/>
                            <Price children={`£ ${price}`} small={small} cart={cart}/>
                        </PricesBlock>
                        <ShopActions>
                            {(items.find(el => el.id === id ? el.count.length !== 0 : false))
                                ? <>
                                    <Button onClick={delItem} small={small} img={trashIcon} cart={cart} secondary/>
                                    <span>{(items.find(el => el.id === id) || {count: 0}).count}</span>
                                </>
                                : <span onClick={addItem}>Add</span>}
                            <Button onClick={addItem} img={addIcon} small={small} cart={cart}/>
                        </ShopActions>
                    </ProductFooter>
                </ProductBody>
                {small || cart
                    ? <></>
                    : <ProductActions>
                        <span>
                            <a href={"#nutrition"}>
                                Nutrition
                            </a>
                        </span>
                        <span>
                             <a href={"#ingredients"}>
                                Ingredients
                            </a>
                        </span>
                        <span>
                             <a href={"#other"}>
                                other
                            </a>
                        </span>
                    </ProductActions>}
            </StyledContent>
        </StyledCart>
    )
}
export default ProductCart