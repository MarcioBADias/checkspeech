import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,500&display=swap');
    *{
        box-sizing: border-box;
        font-family: 'poppins', sans-serif;
        margin: 0;
        padding: 0;
    }

    :root {
        --cor-dark-primary: #262b2b;
        --cor-dark-secondary: #868686;
        --cor-green-primary: #2bed3e;
        --cor-green-secondary: #377d3f;
        --cor-light-primary: #f1f1f1;
        --cor-light-secondary: #e9e9e9;
    }

    body{
        background-color: var(--cor-dark-primary);
        color: var(--cor-light-primary);
    }
`

export default GlobalStyles;