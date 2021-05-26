import {StyledContent, StyledWrapper} from "./StyledProductCart";

const ProductCart = () => {
    return (
        <StyledWrapper>
            <StyledContent>
                <div>инфо</div>
                <div>фото</div>
                <span>Just Milk Semi-Skimmed 6 x 1L (Case of 2)</span>
                <span>1 pc / £1.59</span>
                <div>
                    <div>
                        £1.59
                    </div>
                    <div>
                        <button>корзина</button>
                        <span>2</span>
                        <button>плюс</button>
                    </div>
                </div>
            </StyledContent>
        </StyledWrapper>
    )
}
export default ProductCart