import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --primary: #333333;
    --secondary: #e8e8e8;
    --terciare: #990100;
}

body{
    background-color: var(--secondary);
    color: var(--primary);
    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Dosis', sans-serif;
}
ul{list-style-type: none;}
a{text-decoration: none;}
`