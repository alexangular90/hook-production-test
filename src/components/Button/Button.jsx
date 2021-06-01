import {StyledButton} from "./StyledButton";

const Button = ({onClick, children, img, secondary, small, onlyIcon}) => {
    return (
        <StyledButton small={small}
                      secondary={secondary}
                      img={img}
                      children={children}
                      onClick={onClick}
                      onlyIcon={onlyIcon}
        />
    )
}
export default Button