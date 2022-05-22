import { createGlobalStyle } from 'styled-components';
import { PopcornTheme } from './';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    padding: 50px 250px 0px 250px;

    background: ${PopcornTheme.colors.tertiary};
    font-family: ${PopcornTheme.fonts.standard};
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  span {
    font-family: ${PopcornTheme.fonts.standard};
    color:${PopcornTheme.colors.accent}
  }

  a {
    text-decoration: none;
  }

`;
