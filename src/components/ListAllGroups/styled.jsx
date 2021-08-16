import styled from "styled-components";

export const Lista = styled.div`
  font-size: 22px;
  padding: 5px;
  width: 300px;
  height: 60px;

  border: 1px solid;
  border-color: transparent;
  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0 1px 3px 0 rgb(26 24 29 / 12%), 0 1px 2px 0 rgb(26 24 29 / 24%);
  margin: 5px;
  display: flex;
  align-items: center;

  .check-icon {
    margin: 10px;
    color: var(--green);
  }
`;
