import {useSelector} from "react-redux";
import ProductCart from "../../components/ProductCard/ProductCard";
import {StyledCart} from "../../components/ProductCard/StyledProductCart";
import {
    DeliveryHeader,
    InputsGrid,
    ItemsNumber,
    StyledCartWrapper,
    StyledDeliveryAddress,
    InfoGridWrapper,
    StyledTotalPrice, StyledPaymentTitle, StyledEmptyCart,
} from "./StyledCartPage";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import delIcon from '../../assets/svgIcons/delIcon.svg'
import RowInfo from "../../parts/StyledInfoGrid/RowInfo/RowInfo";
import InfoGrid from "../../parts/StyledInfoGrid/InfoGrid";

const CartPage = () => {
    const items = useSelector(state => state.cartData.items)
    const totalPrice = useSelector(state => state.cartData.totalPrice)
    const bigDecimal = require('js-big-decimal');

    return (
        <StyledCartWrapper>
            <StyledCart>
                {items.length !== 0
                    ? <StyledDeliveryAddress>
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
                    : <StyledEmptyCart>
                        <span>Cart is empty &#128546;</span>
                    </StyledEmptyCart>
                }
                {items.length !== 0 ? <ItemsNumber children={`${items.length} items`}/> : <></>}
                {items.map(item => <ProductCart key={item.id} {...item} cart/>)}
            </StyledCart>
            {items.length !== 0
                ? <>
                    <StyledPaymentTitle children={"Payment"}/>
                    <StyledCart>
                        <Input type="text" label={"PromoCode"}/>
                    </StyledCart>
                    <StyledCart>
                        <InfoGridWrapper>
                            <InfoGrid>
                                <RowInfo name={"Order:"} value={`£ ${totalPrice}`}/>
                                <RowInfo name={"Delivery"} value={"£ 0.8"}/>
                                <RowInfo promocode name={"PromoCode"} value={"- £ 0.4"}/>
                                <StyledTotalPrice>
                                    <RowInfo name={"Total"}
                                             value={bigDecimal.add(bigDecimal.subtract(totalPrice, 0.4), 0.8)}/>
                                < /StyledTotalPrice>
                            </InfoGrid>
                        </InfoGridWrapper>
                    </StyledCart>
                </>
                : <></>}
        </StyledCartWrapper>
    )
}

export default CartPage