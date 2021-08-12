import styled from 'styled-components';

export const ContainerBackGround = styled.div`
    background-color: var(--red);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
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

export const ContainerInputLogin = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    margin: 10px 0px;
    
    input{
            border: 1px solid var(--black);
            border-radius: 5px;
            padding: 7px;
            width: 208px;
        }

    input:focus{
            background-color: #fff;
        }
`;

export const ImgLogo = styled.img`
    width: 90px;
    height: 60px;
    margin: 15px 0px;
`;

export const ButtonLogin = styled.button`
    background-color:var(--red);
    border: none;
    padding: 10px 50px;
    border-radius:20px;
    color:var(--white);
    margin-top: 15px;

    &:hover{
        color: var(--black);
        transition: 0.5s;
        cursor: pointer;
    }
`;

export const ImgLogin = styled.img`
    margin-top: 15px;
    border-radius: 20px;
`;

//desktop

export const ContainerDesktop = styled.div`
    display: flex;
    
    @media (min-width: 768px){
        margin: 20px;
    }
`;

export const ContainerImgDesktop = styled.div`
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