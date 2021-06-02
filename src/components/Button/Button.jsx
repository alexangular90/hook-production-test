import {StyledButton} from "./StyledButton";

const Button = ({onClick, children, img, secondary, small, onlyIcon, cart, color}) => {
    return (

            <StyledButton small={small}
                          secondary={secondary}
                          img={img}
                          children={children}
                          onClick={onClick}
                          onlyIcon={onlyIcon}
                          cart={cart}
                          color={color}
            />
    )
}
export default Button