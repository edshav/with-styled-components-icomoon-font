import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
    src: url('fonts/icomoon.eot?tmeheb');
    src: url('fonts/icomoon.eot?tmeheb#iefix') format('embedded-opentype'),
      url('fonts/icomoon.ttf?tmeheb') format('truetype'),
      url('fonts/icomoon.woff?tmeheb') format('woff'),
      url('fonts/icomoon.svg?tmeheb#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
`;