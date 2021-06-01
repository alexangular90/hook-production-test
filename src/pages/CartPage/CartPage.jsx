import {useSelector} from "react-redux";
import ProductCart from "../../components/ProductCart/ProductCard";
import {StyledProductPageWrapper} from "../ProductPage/StyledProductPage";
import {StyledCart} from "../../components/ProductCart/StyledProductCart";
import {ItemsNumber} from "./StyledCartPage";
import Input from "../../components/Input/Input";

const CartPage = () => {
    const items = useSelector(state => state.cartData.items)

    return (
        <StyledProductPageWrapper>
            <StyledCart>
                <div>
                    Delivery address
                </div>
                <div>
                    <Input type="text" label={"Flat"}/>
                    <Input type="text" label={"Floor"}/>
                    <Input type="text" label={"Block"}/>
                    {/*<div>*/}
                    {/*    <input type="text"/>*/}
                    {/*    <input type="text"/>*/}
                    {/*    <input type="text"/>*/}
                    {/*</div>*/}
                </div>
                <ItemsNumber children={`${items.length} items`}/>
                {items.map(item => <ProductCart cart {...item}/>)}
            </StyledCart>
        </StyledProductPageWrapper>
    )
}
export default CartPage