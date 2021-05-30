import {useSelector} from "react-redux";
import {StyledCheckout, StyledContent, StyledInfo, StyledWrapper} from "./StyledTrashPopup";

import speed from '../../assets/svgIcons/speed.svg'
import Button from "../../components/Button/Button";
import {useEffect, useState} from "react";

const TrashPopup = () => {
    const totalPrice = useSelector(state => state.trashData.totalPrice)
    // const [price, setPrice] = useState(0)

    // useEffect(() => {
    //     const sum = Object.keys(items).reduce(function (previous, key) {
    //         return previous + items[key].price;
    //     }, 0);
    //     setPrice(sum)
    // }, [items])

    return (
        <>{totalPrice
            ? <StyledWrapper>
                <StyledContent>
                    <StyledInfo>
                        <img src={speed} alt="speed-delivery"/>
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