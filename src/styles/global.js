import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    --white: #ECF4FE;
}


*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

a{
    text-decoration: none;
    cursor: pointer;
}

button{
    cursor: pointer;
}

body{
    background-color: var(--white);
}
`;
