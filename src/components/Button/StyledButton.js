import styled from 'styled-components'

export const StyledButton = styled.button`
  height: ${props => props.small ? "24px" : "38px"};
  width: ${props => props.small ? "24px" : "38px"};
  border-radius: 38px;
  border: unset;
  background-color: ${props => props.secondary ? "#F4F3F3" : "#FFB000"};
  background-image: url(${props => props.img ? props.img : ''});
  background-repeat: no-repeat;
  background-position: center;
  background-size:${props => props.small ? "10px" : "16px"};
  color: white;
  font-weight: 500;
`