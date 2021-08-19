import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 20px;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    margin-top: 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-left: 1%;
  box-shadow: 10px 7px 10px 5px rgba(0, 0, 0, 0.75);
`;

export const Wrap = styled.div`
  background: var(--white);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 99%;
  height: 80px;
  text-align: center;
  border: outset white;
  margin-left: 1%;

  @media (min-width: 1200px) {
    background: var(--white);
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    text-align: center;
    border: outset white;
  }
  .description-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2px;
  }
  .accord-bar-text {
    font-size: 12px;
    font-weight: bold;
    color: var(--black);
    margin: 6px;
    max-width: 25ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (min-width: 700px) {
      font-size: 15px;
      font-weight: bold;
      color: var(--black);
      margin: 6px;
      max-width: 35ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    @media (min-width: 1200px) {
      font-size: 15px;
      margin: 6px;
      max-width: 45ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .AiFillEdit {
    color: var(--red);
    cursor: pointer;
    margin-right: 25px;
  }
  .AiFillEdit:hover {
    background-color: black;
    color: var(--white);
  }
  .AiFillEdit:active {
    background-color: black;
    color: var(--red);
  }

  .FiMinus {
    color: var(--green);
    cursor: pointer;
  }

  .FiMinus:hover {
    background-color: black;
    color: var(--white);
  }

  .FiPlus {
    color: var(--green);
    cursor: pointer;
  }
  .FiPlus:hover {
    background-color: black;
    color: var(--white);
    border-radius: 10px;
  }

  span {
    margin-right: 1.5rem;
  }
`;
export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2%;
  padding-right: 1%;
  margin: 1px;
  width: 100%;

  .accord-bar-subtext {
    font-size: 15px;
    font-weight: bold;
    margin-left: 20px;
  }
  .accord-goal-text {
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    margin: 10px 0;
    width: 100%;
    border: 1px solid;
    border-color: transparent;
    border-radius: 10px;
    background-color: var(--red);
    padding: 10px 0 28px;
    box-shadow: 0 1px 3px 0 rgb(26 24 29 / 62%), 0 1px 2px 0 rgb(26 24 29 / 24%);

    p {
      font-size: 20px;
      text-align: left;
      text-indent: 10px;
      margin: 10px 0;
      font-weight: 700;
      color: var(--white);
    }
  }
`;

export const Lista = styled.div`
  font-size: 22px;
  padding: 5px;

  height: 50px;

  border: 1px solid;
  border-color: transparent;
  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0 1px 3px 0 rgb(26 24 29 / 62%), 0 1px 2px 0 rgb(26 24 29 / 24%);
  margin: 3px;
  display: flex;
  align-items: center;

  .check-icon {
    margin: 10px;
    color: var(--green);
  }
`;

export const ButtonCreate = styled.button`
  background-color: var(--red);
  border: none;
  padding: 10px 50px;
  border-radius: 20px;
  color: var(--white);
  margin-top: 5px;

  &:hover {
    color: var(--black);
    transition: 0.5s;
    cursor: pointer;
  }
`;

export const ContainerModal = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 80px;
  background: transparent;
  .modal {
    transition: 0.3s;
    position: absolute;
    margin-left: -80%;
    margin-top: -40px;
    min-height: 50px;
    width: 82%;
    max-width: 448px;
    border: 1px solid;
    border-color: transparent;
    border-radius: 5px;
    background-color: var(--white);
    box-shadow: 0 1px 3px 0 rgb(26 24 29 / 62%), 0 1px 2px 0 rgb(26 24 29 / 64%);
    @media (min-width: 700px) {
      transition: 0.3s;
      position: absolute;
      margin-left: -62%;
      margin-top: -40px;
      min-height: 50px;
      width: ${(props) => (props.isModal === false ? "300px" : "99%")};
      max-width: 448px;
      border: 1px solid;
      border-color: transparent;
      border-radius: 5px;
      background-color: var(--white);
      box-shadow: 0 1px 3px 0 rgb(26 24 29 / 62%),
        0 1px 2px 0 rgb(26 24 29 / 64%);
    }
    .card__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-size: 21px;
        font-weight: 700;
        color: var(--black);
        margin-left: ${(props) => (props.isModal === false ? "21px" : "0px")};
        flex: ${(props) => (props.isModal === false ? "inherit" : "1")};
      }
      .icons-header {
        margin-top: 5px;
        svg {
          margin-right: 15px;
          font-size: 40px;
          cursor: pointer;
        }

        .check-icon {
          color: var(--green);
        }
      }
    }

    .form-container {
      .form__header {
        padding: 24px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        h4 {
          width: 150px;
          font-size: 20px;
          font-weight: 700;
          color: var(--black);
        }
        .container-buttons {
          display: flex;
          flex-direction: row;
          .cancel-button {
            margin-right: 16px;
            font-size: 14px;
            width: 60px;
            border: none;
            background-color: var(--white);
            &:hover {
              text-decoration: underline;
            }
          }
          .save-button {
            transition: 0.4s;
            font-size: 14px;
            font-weight: 700;
            padding: 5px;
            width: 60px;
            border-radius: 3px;
            border: 0.5px solid;
            border-color: transparent;
            box-shadow: 0 1px 3px 0 rgb(26 24 29 / 12%),
              0 1px 2px 0 rgb(26 24 29 / 24%);
            &:hover {
              border-color: var(--green);
              color: var(--green);
            }
          }
        }
      }
      .container-inputs {
        width: 80%;
        margin: 0 auto;
        padding-bottom: 20px;

        .text-input {
          margin: 10px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          p {
            font-size: 18px;
            font-weight: 700;
            color: var(--black);
            margin: 5px;
          }
          input {
            width: 100%;
            border-radius: 3px;
            border: 0.5px solid;
            border-color: transparent;
            box-shadow: 0 1px 3px 0 rgb(26 24 29 / 12%),
              0 1px 2px 0 rgb(26 24 29 / 24%);
            height: 30px;
            text-indent: 5px;
            font-size: 15px;
            &::placeholder {
              color: var(--red);
            }
          }
        }
      }
    }
  }
`;
