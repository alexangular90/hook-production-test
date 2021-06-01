import styled from 'styled-components'

export const StyledPaymentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: normal;
  width: 100%;
  color: ${props => props.promocode ? '#E5243F' : 'black'};
`