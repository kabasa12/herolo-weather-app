import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
},
body {
    height: 100vh;
    width: 100vw;
    background-color:yellow;
  }
header{
    background-color: red;
  }
`;