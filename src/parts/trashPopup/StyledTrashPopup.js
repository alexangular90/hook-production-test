import styled from 'styled-components'
import {StyledButton} from '../../components/Button/StyledButton'

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 68px;
  background: #333333;
  z-index: 30;
  color: white;
  font-family: "Noto Sans", sans-serif;
`

export const StyledContent = styled.div`
  display: flex;
  padding: 0 10px 0 10px;
  width: 100%;
  justify-content: space-between;
`

export const StyledCheckout = styled(StyledButton)`
  min-width: 119px;
  border-radius: 8px;
  color: black;
  font-weight: 600;
`

export const StyledInfo = styled.div`
  display: flex;
  
  > span {
    
  }
  
  > img {
    margin-right: 10px;
    align-items: center;
    
  }

  > div {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    font-size: 10px;
    
    > span:nth-child(2n) {
      font-weight: 600;
      font-size: 16px;
    }
  }
`