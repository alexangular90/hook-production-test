import {
    BuyWithThisProduct,
    EnergyCell,
    EnergyGrid,
    ScrollArea,
    StyledCartInfo,
    StyledHideButton, StyledIngredients,
    StyledNutrition,
    StyledOther,
    StyledProductPageWrapper
} from "./StyledProductPage";
import ProductCart from "../../components/ProductCart/ProductCard";
import {StyledCart} from "../../components/ProductCart/StyledProductCart";
import {useState} from "react";
import InfoGrid from "../../parts/StyledInfoGrid/InfoGrid";
import RowInfo from "../../parts/StyledInfoGrid/RowInfo/RowInfo";
import chevronDown from '../../assets/svgIcons/chevronDown.svg'

const ProductPage = (product) => {
    const [collapse, setCollapse] = useState(false)

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
            <StyledCart>
                <StyledCartInfo>
                    <StyledNutrition>
                        <a name="nutrition"/>
                        <span>Nutrition</span>
                        <p>{product.nutrition.info}</p>
                        <ul>
                            {product.nutrition.points.map(item => <li>{item}</li>)}
                        </ul>
                        {collapse
                            ? <EnergyGrid collapse={collapse}>
                                {product.nutrition.energyValues.map(item =>
                                    <EnergyCell>
                                        <span>{`${item.amount} ${item?.unit}`}</span>
                                        <span>{item.name}</span>
                                        <span>{`${item.rl} % Rl`}</span>
                                    </EnergyCell>
                                )}
                            </EnergyGrid>
                            : <></>
                        }
                        <StyledHideButton collapse={collapse}>
                            <button onClick={() => setCollapse(!collapse)}>
                                {collapse ? "Hide" : "Show"}
                            </button>
                            <img src={chevronDown} alt=""/>
                        </StyledHideButton>
                    </StyledNutrition>
                    <StyledIngredients>
                        <a name="ingredients"/>
                        <span>Ingredients</span>
                        <p>{product.ingredients}</p>
                    </StyledIngredients>
                    <StyledOther>
                        <a name="other"/>
                        <span>Other</span>
                        <InfoGrid info>
                            {product.other.map((item, index) =>
                                <RowInfo key={index}
                                         name={item.name}
                                         value={`${item.value} ${item.unit}`}
                                         info
                                />)}
                        </InfoGrid>
                    </StyledOther>
                </StyledCartInfo>
            </StyledCart>
        </StyledProductPageWrapper>
    )
}

export default ProductPage