import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family: Arial, Helvetica, sans-serif;
  }
  body{ 
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  section {
    display:flex;
    flex-direction: column;
    align-items: center; 
    flex: 1;
    width: 100%;
  } 
  header{
    background-color: rgba(19,13,41,0.5);
    width: 100%;
  } 
  main {
    width:100%;
  }
`;