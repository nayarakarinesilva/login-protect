import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  min-height: 100vh;
  margin: 0;
 background: linear-gradient(
    135deg,
    #F9A8D4,
    #E9A8FF,
    #C4B5FD,
    #93C5FD,
    #60A5FA
  );
}
`;

export default GlobalStyle;
