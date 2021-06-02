import styled from 'styled-components'
import {StyledProductPageWrapper} from "../ProductPage/StyledProductPage";

export const StyledCartWrapper = styled(StyledProductPageWrapper)`
`

export const ItemsNumber = styled.span`
  font-weight: bold;
  padding: 0 0 12px 20px;
  display: block;
`

export const StyledDeliveryAddress = styled.div`
  padding: 15px;
`

export const DeliveryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 19px;

  > span {
    font-weight: bold;
  }
`

export const InputsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 9px;
  grid-template-areas: "first first first";

  > div:first-child {
    grid-area: first;
  }
`

export const StyledInfoGrid = styled.div`
  display: grid;
  grid-area: prices;
  grid-template-areas: "prices";
  gap: ${({info}) => info ? "13px" : "7px"};
`

export const StyledTotalPrice = styled.div`
  > div {
    font-size: 24px;
    font-weight: bold;
    margin-top: 24px;
  }
`

export const InfoGridWrapper = styled.div`
  padding: 15px;
`

export const StyledPaymentTitle = styled.span`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`

export const StyledEmptyCart = styled.div`
  padding: 55px;
  text-align: center;

  > span {
    font-weight: bold;
    font-size: 25px;
  }
`