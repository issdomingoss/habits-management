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

export const Image = styled.div`
  width: 73px;
  cursor: pointer;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 110px;
  }
  @media (min-width: 1440px) {
    width: 110px;
  }
`;