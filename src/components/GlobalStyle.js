import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      --color-bg: #ffffff;
      --color-bg2: #ECECEC;
      --color-text: #333;
	  --color-primary: #202020;
	  --color-secondary: #fef200;
	  --color-tertiary: #171717;
      --color-quaternary: #ffffff;
	  --color-error: #e74c3c;
  }

  html {
      @media (max-width: 1700px) {
          font-size: 75%;
      }
      @media (max-width: 1300px) {
          font-size: 80%;
      }
  }
  img {
  overflow-clip-margin: padding-box;
}

  body{
      background: var(--color-bg);
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
  }
  button{     
      cursor: pointer;      
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
  h4{
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;
  }
  a{
      font-size: 1.1rem;
      text-decoration: none;
      color: inherit;
  }
  span{
      font-weight: bold;
      color: #23d997;
  }
  p{
      color: var( --color-text);
      font-size: 1.4rem;
      line-height: 150%;
  }

`

export default GlobalStyle
