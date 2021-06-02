import styled from 'styled-components'

export const StyledRowInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({info}) => info ? "12px" : "16px"};
  font-weight: normal;
  width: 100%;
  color: ${({promocode}) => promocode ? '#E5243F' : 'black'};
  
  > span {
    width: ${({info}) => info ? '40%' : 'unset'};
  }
  
  > span:first-child {
    color: ${({info}) => info ? '#878786' : 'black'};
    width: ${({info}) => info ? '45%' : 'unset'};
  }
`