import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --white-color: #f7f7f7;
        --red-color: #dc3545;
        --green-color: #28a745;
        --on-color: #424242;
        --low-color: #ccc;
        --dark-color: #1C1C1C;
        --table-color: #95A5A6;
        --special-color: #b19386;
        --static-font: #424242;
    }

    [theme='dark'] {
        --first-color: #1C1C1C;
        --second-color: #e49517;
        --logo-color: #e49517;
        --hover-color: #aaaaaa;
        --font-color: #aaaaaa;
        --button-font-color: #1C1C1C;
        --switch-color: #1c1c1c;
        --svg-one: #fff;
    }

    [theme='light'] {
        --first-color: #ebebeb;
        --second-color: #de020a;
        --logo-color: #424242;
        --hover-color: #02139A;
        --font-color: #424242;
        --button-font-color: #FFF5CC;
        --switch-color: #aaaaaa;
        --svg-one: #000;
    }

    *, 
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        overflow-x: hidden;
    }

    body {
        font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
        font-size: 1rem;
        scroll-behavior:smooth;
        overflow-x: hidden;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
        color: var(--font-color);
    }

    .displayImportant {
        display: block;
    }

    .NodeIcon:hover path {
        fill: #3C873A;
    }

    .NpmIcon:hover path {
        fill: #CC3534;
    }

    .ReactIcon:hover path {
        fill: #61DBFB;
    }

    .JSIcon:hover path {
        fill: #F0DB4F;
    }

    .DatabaseIcon:hover path {
        fill: #4DB33D;
    }
`