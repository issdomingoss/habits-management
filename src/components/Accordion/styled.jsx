import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  background: #fff;
  margin-top: 200px;
`;

export const Container = styled.div`
  position: absolute;
  top: 30%;
  width: 30%;
  background: #fff;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75); ;
`;

export const Wrap = styled.div`
  background: #d73333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%auto;
  height: 90px;
  text-align: center;
  border: outset white;
  .description-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2px;
  }
  .accord-bar-text {
    font-size: 15px;

    margin: 6px;
    max-width: 40ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    /*height: 70px;*/
  }

  .AiFillEdit {
    cursor: pointer;
    margin-right: 25px;
  }
  .AiFillEdit:hover {
    background-color: white;
    color: var(--red);
  }
  .AiFillEdit:active {
    background-color: black;
    color: var(--red);
  }

  .FiMinus {
    cursor: pointer;
  }

  .FiMinus:hover {
    background-color: white;
    color: var(--red);
  }

  .FiPlus {
    cursor: pointer;
  }
  .FiPlus:hover {
    background-color: white;
    color: var(--red);
    border-radius: 10px;
  }

  span {
    margin-right: 1.5rem;
  }
`;
export const Dropdown = styled.div`
  border-right: outset white;

  .accord-bar-subtext {
    font-size: 15px;
    margin-left: 20px;
  }
  .accord-goal-text {
    font-size: 15px;
    padding: 5px;

    height: 50px;

    border: 1px solid;
    border-color: transparent;
    border-radius: 5px;
    background-color: var(--white);
    box-shadow: 0 1px 3px 0 rgb(26 24 29 / 62%), 0 1px 2px 0 rgb(26 24 29 / 24%);
    margin: 3px;
    margin-left: 25px;
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
  /*position: ${(props) => (props.isModal === true ? "fixed" : "auto")};*/
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /*margin-top: ${(props) => (props.isModal === true ? "0px" : "5px")};*/
  margin-top: 80px;
  background: transparent;
  .modal {
    transition: 0.3s;
    position: absolute;
    margin-left: -420px;
    margin-top: -40px;
    min-height: 50px;
    width: ${(props) => (props.isModal === false ? "300px" : "99%")};
    max-width: 448px;
    border: 1px solid;
    border-color: transparent;
    border-radius: 5px;
    background-color: var(--white);
    box-shadow: 0 1px 3px 0 rgb(26 24 29 / 12%), 0 1px 2px 0 rgb(26 24 29 / 24%);
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
