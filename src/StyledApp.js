import {createGlobalStyle} from 'styled-components'
import MuktaBold from './assets/fonts/Mukta/Mukta-Bold.ttf';
import NotoSansBold from './assets/fonts/Noto_Sans/NotoSans-Bold.ttf';
import NotoSansRegular from './assets/fonts/Noto_Sans/NotoSans-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
  
  body {
    margin: 0;
    font-size: 16px;
    background-color: #F5F4F2;
    font-family: "Noto Sans", sans-serif;
  }

  @font-face {
    font-family: 'Mukta Bold';
    src: local('Mukta Bold'), local('Mukta Bold'),
    url(${MuktaBold}) format('opentype');
  }

  @font-face {
    font-family: 'Noto Sans Bold';
    src: local('Noto Sans Bold'), local('Noto Sans Bold'),
    url(${NotoSansBold}) format('opentype');
  }

  @font-face {
    font-family: 'Noto Sans Regular';
    src: local('Noto Sans Regular'), local('Noto Sans Regular'),
    url(${NotoSansRegular}) format('opentype');
  }
`

