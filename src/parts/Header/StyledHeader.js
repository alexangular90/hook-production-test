import styled from 'styled-components'

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.resize ? "50px" : "123px"};
  background-color: #FCAE00;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  transition: 0.2s;
  z-index: -1;
`

export const Content = styled.header`
  width: 100%;
  height: 50px;
  //padding: 0 12px 0 12px;
  align-items: center;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: #FCAE00;
  z-index: 2;
`

export const Back = styled.img`
  position: absolute;
  left: 10px;
`
export const Title = styled.span`
  font-family: 'Mukta Bold', sans-serif;
  font-size: 1.5em;
`