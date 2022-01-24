import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Yuji Boku', serif;
    padding: 20px 60px;
    font-size:18px;
    @media screen and (max-width:800px){
    font-size:12px;
    padding:15px;
    }
  }
  
  a{
    text-decoration: none;
    color: black;
  }
  
  *{
    box-sizing: border-box;
  }
`