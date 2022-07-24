const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Noto Sans', sans-serif;    
    }

`;

export default GlobalStyle;
