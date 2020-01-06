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

const HtmlEntity = styled.p`
  ${addFont}
  width: 2rem;
  height: 2rem;
  background-color: oldlace;
`;

const Icon = styled.div`
  ${addFont}
  width: 2rem;
  height: 2rem;
  background-color: grey;

  &:before {
    content: '\uea14';
    background-color: yellowgreen;
    /* font-size: 2rem; */
  }
`;

export default () => (
  <React.Fragment>
    <Title>My page</Title>
    <hr />
    <HtmlEntity>&#xea14;</HtmlEntity>
    <hr />
    <Icon />
  </React.Fragment>
);
