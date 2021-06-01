import {StyledPaymentInfo} from "./StyledPaymentInfo";

const PaymentInfo = ({name, count, promocode}) => {
    return (
        <StyledPaymentInfo promocode={promocode}>
            <span>{name}</span>
            <span>£ {count}</span>
        </StyledPaymentInfo>
    )
}
export default PaymentInfo