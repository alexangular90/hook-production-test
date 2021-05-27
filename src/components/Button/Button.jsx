import {StyledButton} from "./StyledButton";

const Button = ({onClick, children, img, secondary, small}) => {
    return (
        <StyledButton small={small}
                      secondary={secondary}
                      img={img}
                      children={children}
                      onClick={onClick}/>
    )
}
export default Button