import styled from 'styled-components';

export const ContainerBackGround = styled.div`
    background-color: var(--red);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    line-height: 1rem;
`;

export const Form = styled.form`
    background-color: var(--white);
    padding: 30px;
    border-radius: 7px;
    margin-bottom: 50px;
`;

export const Img = styled.img`
    width: 60px;
    height: 50px;
    margin: 30px 0px;
`;

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 25px 0px;

    input{
        background-color:var(--white);
        border: 1px solid var(--black);
        border-radius: 5px;
        padding: 7px;
        width: 208px;
    }

    input:focus{
        background-color:white;
    }
`;

export const Title = styled.h2`
    margin-bottom: 30px;
`;

export const ButtonCreateAccount = styled.button`
    background-color:var(--red);
    border: none;
    padding: 10px 20px;
    border-radius:20px;
    color:var(--white);

    &:hover{
        color:var(--black);
        transition:0.5s;
        cursor: pointer;
    }
`;