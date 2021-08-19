import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin: 15px;
    }
`;

export const ContainerCard = styled.div`
    padding: 15px;
    background-color: var(--red);
    display: flex;
    align-items: center;
    margin: 10px 10px;
    max-width: 700px;
    min-width: 300px;
    justify-content: space-between;

    svg{
        width: 2em;
        height: 2em;
        background-color: var(--white);
        color: var(--blue);
    }

    :hover{
        filter: brightness(0.9);
        cursor: pointer;
        transition: 0.5s;
    }

    h2{
        font-size: 1.2rem;
        color: var(--white);
    }

    img{
        display: none;
    }
`;

export const LinkTo = styled.a`
    text-decoration: none;
    color: #0177B7;
`;