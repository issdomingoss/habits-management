import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 68px;
  background-color: var(--red);

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 70px;
    height: 50px;
  }

  nav {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      svg {
        font-size: 32px;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 768px) {
    height: 79px;
  }
  
  @media (min-width: 1440px) {
    height: 83px;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  right: 0;
  background-color: var(--red);

  ul{
    text-decoration: none;
    list-style: none;

    li{
      border: 1px solid black;
      width: 150px;
      padding: 10px;
      color: var(--white);

      &:hover{
        background-color: var(--white);
        color: var(--red);
        transition: 0.5s;
      }

      @media (min-width: 1024px){
        border: none;
        font-size: 22px;
      }
    }
  }

  &:hover{
    display: block;
  }

  @media (min-width:1024px){
    display: block;
    
    ul{
      display: flex;
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  @media (min-width:1024px){
    display: flex;
    align-items: center;
  }

  &:hover ${DropdownContent} {
    display: block;
  }
`;

export const ContainerNone = styled.div`
  @media (min-width:1024px){
    display: none;
  }
`;
