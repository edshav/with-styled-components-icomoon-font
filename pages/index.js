import React from 'react';
import styled, { css } from 'styled-components';

const addFont = css`
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

const HtmlEntity = styled.span`
  ${addFont}
`;

const Icon = styled.span`
  ${addFont}

  &:before {
    content: '\ea14';
  }
`;

export default () => (
  <React.Fragment>
    <Title>My page</Title>
    <hr />
    Works:{' '}
    <HtmlEntity>&#xea14;</HtmlEntity>
    <hr />
    Doesnt work:{' '}
    <Icon />
  </React.Fragment>
);
