import styled from "styled-components";

export const Lista = styled.div`
  font-size: 22px;
  padding: 5px;
  width: 400px;
  height: 60px;

  border: 1px solid;
  border-color: transparent;
  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0 1px 3px 0 rgb(26 24 29 / 62%), 0 1px 2px 0 rgb(26 24 29 / 24%);
  margin: 5px;
  display: flex;
  align-items: center;
  p {
    max-width: 30ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .check-icon {
    margin: 10px;
    border: solid 1.5px;
    border-radius: 5px;
    color: var(--green);
    height: 30px;
    width: 30px;
    cursor: pointer;
    box-shadow: 0 1.5px 0 #002000;
    background-color: white;
  }

  .check-icon:active {
    position: relative;
    top: 1.5px;
    box-shadow: none;
    color: var(--red);
    background-color: var(--green);
  }
`;
