import {StyledInfoGrid} from "../../pages/CartPage/StyledCartPage";

const InfoGrid = ({children, info}) => {
    return (
        <StyledInfoGrid info={info}>
            {children}
        </StyledInfoGrid>
    )
}
export default InfoGrid