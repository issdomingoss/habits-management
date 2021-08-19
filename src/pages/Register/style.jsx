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
    padding: 30px;
    background-color: var(--white);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width:768px){
        width: 50%;
        height: 100%;
    }
`;

export const Img = styled.img`
    width: 90px;
    height: 60px;
    margin: 15px 0px;
`;

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    margin: 6px 0px;

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

    span{
        text-align: center;
        width: 208px;
        color:var(--red);
    }
`;

export const Title = styled.h2`
    margin-bottom: 30px;
`;

export const ButtonCreateAccount = styled.button`
    background-color:var(--red);
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    color: var(--white);
    margin: 20px;

    &:hover{
        color:var(--black);
        transition:0.5s;
        cursor: pointer;
    }
`;

//desktop

export const ContainerDesktop = styled.div`
    display: flex;
    
    @media (min-width: 768px){
        margin: 20px;
    }
`;

export const ContainerImgRegister = styled.div`
    
    img{
        display: none;
    }
    
    @media (min-width: 768px){
        img{
            display: block;
            height: 100%;
            width: 100%;
        }
    }
`;
