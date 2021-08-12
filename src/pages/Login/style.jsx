import styled from 'styled-components';

export const ContainerBackGround = styled.div`
    background-color:var(--red);
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Form = styled.form`
    padding: 30px;
    background-color: var(--white);
    border-radius: 7px;
    margin-bottom: 35px;

    img{
        border-radius:100px;
        width: 100px;
        height: 90px;
    }

    div{
        margin:25px 0px;

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
    }
`;

export const ContainerInputLogin = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Img = styled.img`
    width: 60px;
    height: 50px;
    margin: 30px 0px;
`;

export const ButtonLogin = styled.button`
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