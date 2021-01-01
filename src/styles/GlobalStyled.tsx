import { Global, css } from '@emotion/react';
import React from 'react';

const GlobalStyled = () => (
  <Global
    styles={css`
      /* cyrillic-ext */
      @font-face {
        font-family: 'Roboto';
        src: url('https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff2');}
      * {
        margin: 0px;
        padding: 0px;
      }

      html,
      body {
        background-color: #fcc21b;
        height: 100%;
        width: 100%;
      }

      a{
        text-decoration: none;
        
      }
    `}
  />
);

export default GlobalStyled;
