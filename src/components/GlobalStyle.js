import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body{
      background: #1b1b1b;
      font-family: 'Inter', sans-serif;
/*font-family: 'Lobster', cursive; */
  }
  button{
      font-weight: bold;
      font-family: 'Inter', sans-serif;
      font-size: 1.1rem;
      cursor: pointer;
      padding: 1rem 2rem;
      border: 3px solid #23d997;
      background: transparent;
      color: white;
      transition: all 0.3s ease;
      &:hover{
          background-color: #23d997;
          color: white;
      }
  }
  h2{
      font-weight: lighter;
      font-size: 4rem;
  }
  h3{
      color:white;
  }
  h4{
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;
  }
  a{
      font-size: 1.1rem;
  }
  span{
      font-weight: bold;
      color: #23d997;
  }
  p{
      padding: 3rem 0rem;
      color:#ccc;
      font-size: 1.4rem;
      line-height: 150%;
  }

`;

export default GlobalStyle;
