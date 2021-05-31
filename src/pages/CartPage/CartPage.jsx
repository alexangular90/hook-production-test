import {useSelector} from "react-redux";
import ProductCart from "../../components/ProductCart/ProductCard";
import {StyledProductPageWrapper} from "../ProductPage/StyledProductPage";
import {StyledCart} from "../../components/ProductCart/StyledProductCart";
import {ItemsNumber} from "./StyledCartPage";

const CartPage = () => {
    const items = useSelector(state => state.cartData.items)

    return (
        <StyledProductPageWrapper>
            <StyledCart>
                <ItemsNumber children={`${items.length} items`}/>
                {items.map(item => <ProductCart cart {...item}/>)}
            </StyledCart>
        </StyledProductPageWrapper>
    )
}
export default CartPage