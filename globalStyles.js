import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-size: 100%;
    }
    body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    ol,
    ul {
        list-style: none;
    }
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: #333;
    }
    img {
        vertical-align: bottom;
    }
    h1, h2, h3, h4, h5 {
        font-weight: normal;
    }
    input, button {
        background-color: transparent;
        border: none;
    }
`;

export default GlobalStyle;