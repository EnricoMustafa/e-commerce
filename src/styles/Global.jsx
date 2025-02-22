import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --primary: #333333;
    --back: #e8e8e8;
    --terciare: #990100;
}

body{
    background-color: var(--back);
    color: var(--primary);
    font-size: 1.1rem;
    font-weight: 400;
    font-family: 'Dosis', sans-serif;
}
ul{list-style-type: none;}
a{text-decoration: none;}
` 
