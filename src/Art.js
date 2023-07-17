import React from "react";
import { createGlobalStyle } from "styled-components";

//Components
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

export default function Art(){
  const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
 body{
  margin-inline: 10vw;
   background-color: #fff;
   font-family: 'Inter', sans-serif;

   @media(max-width: 500px){
    margin-inline: 20px;
  }
 }
`;


  return(
    <>
    <GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}