import { Global, css } from "@emotion/react";
import React from "react";

const GlobalStyled = () => (
   <Global
    styles={css`
      * {
        margin: 0px;
        padding: 0px;
      }

      html,
      body {
        background-color: #FCC21B;
        height: 100%;
        width: 100%;
      }

      @font-face {
        font-family: 'Roboto';
        src: url('../assets/Roboto-Regular.ttf');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: 'RobotoSlab';
        src: url('../assets/RobotoSlab-Regular.ttf');
        font-weight: normal;
        font-style: normal;
      }
    `}
  /> 
);

export default GlobalStyled;
