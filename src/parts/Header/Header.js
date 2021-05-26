import {Back, Content, ShadowLayout, StyledHeader, Title} from "./StyledHeader";
import backArrow from '../../assets/svgIcons/backArrow.svg'
import {useSelector} from "react-redux";

const Header = () => {
    const resize = useSelector(state => state.utils.resize)

    return (
        <>
            <StyledHeader resize={resize}/>
            <Content>
                <Back src={backArrow}/>
                <Title children={"Milk & Cheese"}/>
            </Content>
        </>

    )
}
export default Header