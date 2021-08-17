import styled from "styled-components";

export const ContainerPerfil = styled.div`
  text-align: center;
`;

export const CardPerfil = styled.div`
  height: 40vh;
  margin: 10vh auto;
  width: 70%;
  border: 1px solid lightgray;
  box-shadow: 0px 4px 3px 0px rgb(0 0 0 / 25%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 9px;

  .containerIcon {
    display: flex;
    justify-content: flex-end;
    margin-right: 15px;
    .editIcon {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
  .userImgContainer {
    background-color: #d73333;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0px 4px 3px 0px rgb(0 0 0 / 25%);

    @media (min-width: 500px) {
      width: 150px;
      height: 150px;
    }

    .userImg {
      width: 50px;
      height: 50px;

      @media (min-width: 500px) {
        width: 90px;
        height: 90px;
      }
    }
  }

  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const ContainerForm = styled.div`
  height: 40vh;
  margin: 10vh auto;
  width: 60%;
  border: 1px solid lightgray;
  box-shadow: 0px 4px 3px 0px rgb(0 0 0 / 25%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 9px;

  @media (min-width: 768px) {
    width: 30%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 80%;
      padding: 5px;
      margin: 5px 0;
      border: 2px solid black;
      border-radius: 5px;

      @media (min-width: 768px) {
        width: 60%;
      }
    }

    button {
      margin-top: 15px;
      width: 100px;
      padding: 10px;
      border: 2px solid #d73333;
      border-radius: 5px;
      background: white;
      color: #d73333;
      font-weight: bold;
    }
    button:hover {
      border: 2px solid gray;
      background: #d73333;
      color: white;
      transition: all ease 500ms;
    }
  }
`;
