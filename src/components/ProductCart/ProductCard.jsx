import {
    CountPrice,
    Name,
    Price, ProductActions,
    ProductFooter,
    ProductHeader,
    ProductImage,
    StyledContent,
    StyledCart, ShopActions
} from "./StyledProductCart";
import {svgIcons} from "../../assets/svgIcons";
import trashIcon from '../../assets/svgIcons/trash.svg'
import addIcon from '../../assets/svgIcons/add.svg'
import Button from "../Button/Button";

const ProductCart = ({name, countPrice, price, small}) => {
    return (
        <StyledCart small={small}>
            <StyledContent small={small}>
                {small ? <></> : <ProductHeader>{svgIcons?.map(item => item.path)}</ProductHeader>}
                <ProductImage
                    src="https://ogorod-foodmarket.ru/image/catalog/molochnye-produkty/moloko/6/428083220-moloko-prostokvashino-2-5-930-ml.png"
                    alt={name}
                    small={small}/>
                {small ? <></> : <span style={{marginBottom: "15px"}}>- - -</span>}
                <Name children={name} small={small}/>
                <CountPrice children={countPrice} small={small}/>
                <ProductFooter small={small}>
                    <Price children={price} small={small}/>
                    <ShopActions>
                        <Button small={small} secondary img={trashIcon}/>
                        <span>2</span>
                        <Button small={small} img={addIcon}/>
                    </ShopActions>
                </ProductFooter>
                {small
                    ? <></>
                    : <ProductActions>
                        <span>Nutrition</span>
                        <span>Ingredients</span>
                        <span>Other</span>
                    </ProductActions>}
            </StyledContent>
        </StyledCart>
    )
}
export default ProductCart