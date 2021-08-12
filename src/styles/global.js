import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
    --red: #D73333;
    --white: #ECF4FE;
    --green: #3C910B;
    --black: #000412
}

*{
    margin: 0;
    padding: 0;
    outline: none;
    background-color: var(--white);
    box-sizing: border-box;
}

a{
    text-decoration: none;
    cursor: pointer;
}

button{
    cursor: pointer;
}

`;
