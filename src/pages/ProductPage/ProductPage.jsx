import {BuyWithThisProduct, ScrollArea, StyledProductPageWrapper} from "./StyledProductPage";
import ProductCart from "../../components/ProductCart/ProductCard";
import CartPopup from "../../parts/CartPopup/CartPopup";

const ProductPage = (product) => {
    return (
        <StyledProductPageWrapper>
            <ProductCart {...product}/>
            <BuyWithThisProduct>
                <span>Buy with this product</span>
                <ScrollArea>
                    {product?.buyWithThisProduct.map(item =>
                        <ProductCart images={item.images} key={item.id} {...item} small/>)}
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
            <CartPopup/>
        </StyledProductPageWrapper>
    )
}

export default ProductPage