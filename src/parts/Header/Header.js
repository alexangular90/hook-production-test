import {Back, Content, StyledHeader, Title} from "./StyledHeader";
import backArrow from '../../assets/svgIcons/backArrow.svg'
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'

const Header = () => {
    const resize = useSelector(state => state.utils.resize)
    const history = useHistory()

    return (
        <>
            <StyledHeader resize={resize}/>
            <Content>
                <Back src={backArrow} onClick={history.goBack}/>
                <Title children={"Milk & Cheese"}/>
            </Content>
        </>

    )
}
export default Header