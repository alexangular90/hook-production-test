import {BuyWithThisProduct, ScrollArea, StyledProductPageWrapper} from "./StyledProductPage";
import ProductCart from "../../components/ProductCart/ProductCard";
import TrashPopup from "../../parts/trashPopup/TrashPopup";

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
            <TrashPopup/>
        </StyledProductPageWrapper>
    )
}

export default ProductPage