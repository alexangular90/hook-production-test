import styled from "styled-components";

export const StyledCart = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  margin-bottom: ${props => props.cart ? "0" : "24px"};
  border-bottom: ${props => props.cart ? "1px solid #F4F3F3" : "unset"};
`

export const StyledContent = styled.div`
  display: flex;
  max-height: ${props => props.small ? "228px" : "460px"};
  width: ${props => props.small ? "152px" : ""};
  flex-direction: ${props => props.cart ? "row" : "column"};;
  padding: ${props => props.cart ? "12px 14px 12px 14px" : "10px 16px 10px 16px"};
  font-family: "Noto Sans Regular", sans-serif;
`

export const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ProductImage = styled.img`
  object-fit: contain;
  height: ${props => props.small ? "100px" : "190px"};
  margin-bottom: 35px;
`

export const ProductHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 14px;

  svg {
    margin-right: 6px;

    &:last-child {
      margin-right: 0;
    }
  }
`


export const Name = styled.span`
  font-size: ${props => props.small ? "0.8125em" : "1em"};
  margin-bottom: 13px;
  height: ${props => props.small ? "36px" : "unset"};
  width: 80%;
  // white-space: ${props => props.cart ? "nowrap" : "unset"}; /* Запрещаем перенос строк */
  // overflow: hidden; /* Обрезаем все, что не помещается в область */
  // text-overflow: ellipsis; /* Добавляем многоточие */
`

export const PricesBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${props => props.cart ? "row-reverse" : "column"};
  
  > span {
    margin-right: 6px;
  }
`

export const CountPrice = styled.span`
  font-size: ${props => props.small || props.cart ? "0.75em" : "1em"};
  font-family: "Noto Sans Regular", sans-serif;
  margin-bottom: ${props => props.cart ? "0" : "7px"};
  color: #999999;
`

export const Price = styled.span`
  font-family: "Mukta", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: ${props => props.small || props.cart ? "1em" : "1.875em"};
`


export const ProductFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${props => props.small || props.cart ? "unset" : "13px"};
  margin-bottom: ${props => props.small || props.cart ? "unset" : "16px"};
  border-bottom: ${props => props.small || props.cart ? "" : "1px solid #EBEBEB"};
`

export const ShopActions = styled.div`
  display: flex;
  align-items: center;


  span:first-child {
    color: #FFBC41;
    font-weight: bold;
  }

  > span {
    font-weight: bold;
    padding-left: 12px;
    padding-right: 12px;
  }
`

export const ProductActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;

  span {
    color: #FFB000;
    font-weight: bold;
  }
`