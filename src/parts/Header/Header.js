import {Back, Content, StyledHeader, Title} from "./StyledHeader";
import backArrow from '../../assets/svgIcons/backArrow.svg'
import {useSelector} from "react-redux";
import {useHistory, useLocation} from 'react-router-dom'

const Header = () => {
    const resize = useSelector(state => state.utils.resize)
    const history = useHistory()
    const location = useLocation()

    return (
        <>
            <StyledHeader resize={resize}/>
            <Content>
                <Back src={backArrow} onClick={history.goBack}/>
                <Title children={location.pathname === '/' ? "Milk & Cheese" : 'Cart'}/>
            </Content>
        </>

    )
}
export default Header