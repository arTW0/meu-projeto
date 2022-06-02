import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #FFFF;

    --insta-deep-blue: #274659;
    --insta-yellow:#F29F05;
    --insta-blue: #2484bf;

    --elg-brown: #592D1D;
    --elg-rose: #D9A796;
    --elg-off-white: #FBF7E4;

    --elg-deep-pink: #a66f79;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--elg-off-white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`