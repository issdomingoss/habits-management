import styled from 'styled-components';

export const ContainerHome = styled.div`
    text-align: center;
    @media (min-width: 1024px){
        height: 100vh;
    }
`;

export const NavHome = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 40px;
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

    @media (min-width:768px){
        font-size:1.3rem;
    }
    
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

    @media (min-width:768px){
        font-size:1.3rem;
    }

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


    @media (min-width: 768px) {
        img{
            width:400px;
            height: 300px;
            margin:35px 0px;
        }
    }

    @media (min-width: 1024px){
        img{
            width:500px;
            height: 400px;
            margin:35px 0px;
        }
    }

`;

export const ImgLogo = styled.img`
    width:100px;
`;

export const ContainerTitle = styled.div`
    margin:30px 0px;
    
    h2{
        font-size: 1.9rem;
    }

    text-align: left;
    width:200px;
    margin:0 auto;

    @media (min-width: 768px){

        width: 400px;
    
        h2{
            font-size: 3.5rem;
        }
    }
`;

export const ContainerSubTitle = styled.div`
    text-align: left;
    width: 200px;
    margin: 20px auto;

    @media (min-width: 768px){

        width: 400px;

        p{
            font-size: 1.4rem;
        }
    }
`;

export const ContainerButtonGetStarted = styled.div`
    
    margin: 30px;
    
    button{
        background-color: var(--red);
        border:none;
        padding:15px 20px;
        border-radius:40px;
        font-weight: bold;
        color:var(--white);
        text-transform: uppercase;
    }

    button:hover{
        color:var(--black);
        cursor: pointer;
        transition:0.5s;
    }

    @media (min-width: 768px){
        
        button{
            font-size: 1.3rem;
        }
    }

`;

export const ContainerMainFlex = styled.div`
    @media (min-width:1024px){
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 45px 0px;
    }
`;

export const Footer = styled.div`
    margin-top: 100px;
    margin-bottom: 10px;

    footer{
        display: flex;
        align-items: center;
        justify-content: center;

        p{
            font-size: 11px;
        }
    }

    @media (min-width:768px){

        footer{
            p{
                font-size: 14px;
            }
        }
    }
`;