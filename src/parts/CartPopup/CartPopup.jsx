import {useSelector} from "react-redux";
import {StyledCheckout, StyledContent, StyledInfo, StyledWrapper} from "./StyledCartPopup";

import speed from '../../assets/svgIcons/speed.svg'
import {Link, useLocation} from "react-router-dom";

const CartPopup = () => {
    const totalPrice = useSelector(state => state.cartData.totalPrice)
    const location = useLocation()


    return (
        <>{Math.trunc(totalPrice)
            ? <StyledWrapper>
                <StyledContent>
                    <StyledInfo>
                        <div>
                            <img src={speed} alt="speed-delivery"/>
                        </div>
                        <div>
                            <span>Delivery:</span>
                            <span>25-30 min</span>
                        </div>
                    </StyledInfo>
                    <StyledInfo>
                        <div>
                            <span>Total:</span>
                            <span>£ {totalPrice}</span>
                        </div>
                    </StyledInfo>
                    <Link to={"/cart"}>
                        <StyledCheckout children={location.pathname === '/' ? 'Checkout' : 'Pay'}/>
                    </Link>
                </StyledContent>
            </StyledWrapper>
            : <></>}
        </>
    )
}

export default CartPopup