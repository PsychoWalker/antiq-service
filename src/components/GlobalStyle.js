import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
      --background-primary-light: 233, 233, 233;
      --accent-light: 37, 89, 88;
    
      --background-primary-dark: 25, 48, 66;
      --accent-dark: 90, 182, 204;
      
      --background-block-light: 255, 255, 255;
      --accent-block-light: 0 0 0;
      
      --background-block-dark: 35, 68, 76;
      --accent-block-dark: 90, 182, 204;
    }
    
    [data-theme='light'] {
      --background-primary: var(--background-primary-light);
      --accent: var(--accent-light);
      --background-blocks: var(--background-block-light);
      --accent-blocks: var(--accent-block-light);
    }
    
    [data-theme='dark'] {
      --background-primary: var(--background-primary-dark);
      --accent: var(--accent-dark);
      --background-blocks: var(--background-block-dark);
      --accent-blocks: var(--accent-block-dark);
    }
    
    * {
          box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: Roboto, sans-Serif;
      background: rgb(var(--background-primary));
      color: rgb(var(--accent));
    }
    
    .App {
    font-family: Roboto, sans-Serif;
      background: rgb(var(--background-primary));
      color: rgb(var(--accent));
    }
`
