import styled from "styled-components";

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  margin-top: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20%;
  margin-right: 20%;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
export const Lista = styled.div`
  font-size: 22px;
  padding: 5px;
  width: 250px;
  height: 350px;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  background-color: #050a20;
  border: 1px solid;
  border-color: transparent;
  border-radius: 5px;
  border: inset;
  border-color: var(--red);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

  margin: 15px;
  display: flex;
  align-items: center;

  .logo {
    width: 150px;
    margin-top: 20px;
  }

  .group-information {
    margin-top: 20px;
  }
  p {
    max-width: 25ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    font-weight: bold;
    margin: 10px;
    margin-top: 20px;
    color: var(--white);
  }

  .group_Name {
    font-size: 18px;
    text-align: center;
  }
  .followers,
  .following {
    text-align: center;
  }
  .following {
    color: var(--green);
    font-size: 15px;
    text-shadow: -1px -5px 13px var(--red);
    margin-top: 40px;
  }

  .check-icon {
    margin: 10px;
    border: solid 1.5px;
    border-radius: 5px;
    color: var(--red);
    height: 45px;
    width: 45px;
    cursor: pointer;
    box-shadow: 0 1.5px 0 #000000;
    background-color: white;
  }

  .check-icon:active {
    top: 1.5px;
    box-shadow: none;
    color: var(--white);
    background-color: var(--red);
  }
`;
