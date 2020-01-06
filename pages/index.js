import React from 'react';
import styled, { css } from 'styled-components';

const addFont = css`
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

  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Html = styled.p`
  ${addFont}
`;

const Icon = styled.p`
  ${addFont}

  &:before {
    content: '\ea14';
  }
`;

export default () => (
  <React.Fragment>
    <Title>My page</Title>
    <hr />
    Works
    <Html>&#xea14;</Html>
    <hr />
    Doesnt work
    <Icon />
  </React.Fragment>
);
