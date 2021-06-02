import styled from 'styled-components'
import {StyledContent} from "../../components/ProductCard/StyledProductCart";

export const StyledProductPageWrapper = styled.div`
  padding-right: 24px;
  padding-left: 24px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 90px;


  > div:first-child {
    margin-top: 60px;
  }
`

export const BuyWithThisProduct = styled.div`
  > span {
    display: block;
    font-family: "Mukta Bold", sans-serif;
    margin-bottom: 14px;
  }
`
export const ScrollArea = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  overflow: auto;
`

export const StyledCartInfo = styled(StyledContent)`
  flex-direction: column;
`

export const EnergyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 12px;
  margin-bottom: 17px;
`

export const EnergyCell = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 2px;

  > span:first-child {
    font-size: 18px;
    font-weight: bold;
  }

  > span:nth-child(2n) {
    font-size: 12px;
    color: #999999;
  }

  > span:nth-child(3n) {
    font-size: 10px;
    padding: 4px;
    background: #EBEBEB;
    font-weight: bold;
    display: block;
    width: fit-content;
  }
`
export const StyledHideButton = styled.div`
  display: flex;
  align-items: center;
  transition: 0.3s;
  align-self: center;

  > button {
    background: none;
    border: none;
    color: #FFBC41;
    font-size: 14px;
    font-weight: bold;
  }

  > img {
    transform: rotate(${({collapse}) => collapse ? "" : "180deg"});
  }
`

export const StyledNutrition = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 17px;
  margin-bottom: 17px;
  border-bottom: 1px solid #E7E5E5;

  > span {
    font-size: 16px;
    font-weight: bold;
  }

  ul {
    color: #999999;
    padding-left: 20px;
    padding-bottom: 17px;
    margin-bottom: 17px;
    border-bottom: 1px solid #E7E5E5;
  }
`

export const StyledIngredients = styled.div`
  margin-bottom: 17px;
  border-bottom: 1px solid #E7E5E5;

  > span {
    font-size: 16px;
    font-weight: bold;
  }
`

export const StyledOther = styled.div`

  > span {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 17px;
  }
`