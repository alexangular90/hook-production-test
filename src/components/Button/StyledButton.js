import styled from 'styled-components'

export const StyledButton = styled.button`
  height: ${props => props.small || props.cart ? "24px" : "38px"};
  width: ${props => props.small || props.cart ? "24px" : "38px"};
  border-radius: 38px;
  border: unset;
  background-color: ${props => {
    if (props.secondary) {
      return "#F4F3F3"
    } else if (props.onlyIcon) {
      return "unset"
    } else if (!props.secondary && !props.icon) {
      return "#FFBC41"
    }
  }};
  background-image: url(${props => props.img ? props.img : ''});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${props => {
    if (props.small || props.cart) {
      return "10px"
    } else if (props.onlyIcon) {
      return "22px"
    } else if (!props.secondary && !props.icon) {
      return "13px"
    }
  }};
  color: ${props => props.color ? props.color : "white"};
  font-weight: 500;
`