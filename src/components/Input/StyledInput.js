import styled from 'styled-components'

export const StyledInput = styled.div`
  display: flex;
  position: relative;

  input {
    width: 100%;
    padding: 22px 11px 11px 11px;
    background: #FFFFFF;
    border: 1px solid #EBEBEB;
    border-radius: 8px;
    font-size: 14px;

    :focus {
      border: 1px solid #FFB000;
    }
  }

  span {
    position: absolute;
    color: #878786;
    left: 10px;
    transition: 0.2s;
    font-size: ${props => props.focus ? "12px" : "16px"};
    transform: translateY(${props => props.focus ? "5px" : "15px"});
    z-index: 1;
  }
`