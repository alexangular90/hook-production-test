import {useSelector} from "react-redux";
import ProductCart from "../../components/ProductCart/ProductCard";
import {StyledCart} from "../../components/ProductCart/StyledProductCart";
import {
    DeliveryHeader,
    InputsGrid, ItemsNumber, StyledCartWrapper, StyledDeliveryAddress, StyledPayments, StyledTotalPrice
} from "./StyledCartPage";
import Input from "../../components/Input/Input";
import PaymentInfo from "../../parts/PaymentInfo/PaymentInfo";
import Button from "../../components/Button/Button";

import delIcon from '../../assets/svgIcons/delIcon.svg'

const CartPage = () => {
    const items = useSelector(state => state.cartData.items)
    const totalPrice = useSelector(state => state.cartData.totalPrice)

    return (
        <StyledCartWrapper>
            <StyledCart>
                <StyledDeliveryAddress>
                    <DeliveryHeader>
                        <span>Delivery address</span>
                        <Button onlyIcon img={delIcon}/>
                    </DeliveryHeader>
                    <InputsGrid>
                        <Input type="text" label={"London"}/>
                        <Input type="text" label={"Flat"}/>
                        <Input type="text" label={"Floor"}/>
                        <Input type="text" label={"Block"}/>
                    </InputsGrid>
                </StyledDeliveryAddress>
                <ItemsNumber children={`${items.length} items`}/>
                {items.map(item => <ProductCart key={item.id} {...item} cart/>)}
            </StyledCart>
            <span>Payment</span>
            <StyledCart>
                <Input type="text" label={"PromoCode"}/>
            </StyledCart>
            <StyledCart>
                <StyledPayments>
                    <PaymentInfo name={"Order:"} count={4}/>
                    <PaymentInfo name={"Delivery"} count={0.4}/>
                    <PaymentInfo promocode name={"PromoCode"} count={4}/>
                    <StyledTotalPrice>
                        <PaymentInfo name={"Total"} count={totalPrice}/>
                    </StyledTotalPrice>
                </StyledPayments>
            </StyledCart>
        </StyledCartWrapper>
    )
}
export default CartPage