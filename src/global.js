import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vh;
    height: 100vh;
    font-family: Arial, sans-serif;
    background-color:#f0f2f5;
  }
`;

export default GlobalStyle;
