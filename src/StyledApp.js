import { createGlobalStyle } from 'styled-components'
import MuktaBold from './assets/fonts/Mukta/Mukta-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 16px;
    background-color: #F5F4F2;
  }

  @font-face {
    font-family: 'Mukta Bold';
    src: local('Mukta Bold'), local('Mukta Bold'),
    url(${MuktaBold}) format('opentype');
  }
`

