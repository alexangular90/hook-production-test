import styled from 'styled-components'

export const StyledProductPageWrapper = styled.div`
  padding-right: 24px;
  padding-left: 24px;
  margin-right: auto;
  margin-left: auto;

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