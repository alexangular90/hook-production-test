import {BuyWithThisProduct, ScrollArea, StyledProductPageWrapper} from "./StyledProductPage";
import ProductCart from "../../components/ProductCart/ProductCard";

const ProductPage = (product) => {
    return (
        <StyledProductPageWrapper>
            <ProductCart product={product} {...product}/>
            <BuyWithThisProduct>
                <span>Buy with this product</span>
                <ScrollArea>
                    {product?.buyWithThisProduct.map(item => <ProductCart {...item} small/>)}
                </ScrollArea>
            </BuyWithThisProduct>
            <div>
                Nutrition
            </div>
            <div>
                Ingridients
            </div>
            <div>
                Other
            </div>
        </StyledProductPageWrapper>
    )
}

export default ProductPage