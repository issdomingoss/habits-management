import styled from 'styled-components';

export const ContainerHome = styled.div`
    text-align: center;
`;

export const NavHome = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    align-items: center;
`;

export const ContainerLogo = styled.div`
    img{
        width:60px;
        height: 40px;
        margin:0px;
    }
`;

export const ButtonSignIn = styled.button`
    background-color:var(--white);
    padding:7px;
    border: none;
    color:var(--black);

    margin-right:5px;

    &:hover{
        border-bottom: 1px solid var(--red);
        
    }
`;


export const ButtonSignUp = styled.button`
    background-color:var(--white);
    padding:7px;
    border: none;
    color:var(--red);
    font-weight: bold;

    &:hover{
        border-bottom:1px solid var(--black);
    }
`;

export const ContainerImgHome = styled.div`

    img{
        width:220px;
        height: 200px;
        margin:35px 0px;
    }
`;

export const ImgLogo = styled.img`
    width:100px;
`;

export const ContainerTitle = styled.div`
    margin:30px 0px;
    font-size: 1.3rem;
    text-align: left;
    width:200px;
    margin:0 auto;
`;

export const ContainerSubTitle = styled.div`
    text-align: left;
    width:200px;
    margin:20px auto;
`;

export const ContainerButtonGetStarted = styled.div`
    margin:30px;

    button{
        background-color: var(--red);
        border:none;
        padding:15px 20px;
        border-radius:40px;
        font-weight: bold;
        color:var(--white);
    }

    button:hover{
        color:var(--black);
        cursor: pointer;
        transition:0.5s;
    }
`;