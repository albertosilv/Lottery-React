import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'
export const Container = styled.div``
export const GlobalStyle  = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Inter', sans-serif;
  }
  body {
    background: #F7F7F7;
    color: #3D3D4D;
  }
  body, input, button {
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;