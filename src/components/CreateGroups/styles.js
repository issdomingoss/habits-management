import styled from "styled-components";

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

export const Container = styled.div`
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
    margin: 0 auto;
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
          p {
            font-size: 18px;
            font-weight: 700;
            color: var(--black);
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