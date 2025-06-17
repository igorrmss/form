import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'Roboto', sans-serif;
  }

  body {
    font-size: 16px;
    background: #F6F5FC;
    color: #222;
  }
`