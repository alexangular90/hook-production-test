import styled from "styled-components";

export const StyledCart = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 24px;
`

export const StyledContent = styled.div`
  display: flex;
  min-height: ${props => props.small ? "228px" : "460px"};
  width: ${props => props.small ? "152px" : ""};
  flex-direction: column;
  padding: 10px 16px 10px 16px;
  font-family: "Noto Sans Regular", sans-serif;
`

export const ProductImage = styled.img`
  object-fit: contain;
  height: ${props => props.small ? "100px" : "190px"};
  margin-bottom: 15px;
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
`
export const CountPrice = styled.span`
  font-size: ${props => props.small ? "0.75em" : "1em"};
  font-family: "Noto Sans Regular", sans-serif;
  margin-bottom: 7px;
  color: #999999;
`

export const Price = styled.span`
  font-family: "Mukta", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: ${props => props.small ? "1em" : "1.875em"};
`


export const ProductFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${props => props.small ? "unset" : "13px"};
  margin-bottom: ${props => props.small ? "unset" : "16px"};
  border-bottom: ${props => props.small ? "" : "1px solid #EBEBEB"};
`

export const ShopActions = styled.div`
  display: flex;
  align-items: center;
  
  > span {
    padding-left: 12px;
    padding-right: 12px;
  }
`

export const ProductActions = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: #FFB000;
    font-weight: bold;
  }
`