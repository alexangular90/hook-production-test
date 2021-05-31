import {useSelector} from "react-redux";
import {StyledCheckout, StyledContent, StyledInfo, StyledWrapper} from "./StyledTrashPopup";

import speed from '../../assets/svgIcons/speed.svg'

const TrashPopup = () => {
    const totalPrice = useSelector(state => state.cartData.totalPrice)

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
                    <StyledCheckout children={"Checkout"}/>
                </StyledContent>
            </StyledWrapper>
            : <></>}
        </>
    )
}

export default TrashPopup