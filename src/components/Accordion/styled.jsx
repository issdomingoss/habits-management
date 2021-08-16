import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

export const Container = styled.div`
  position: absolute;
  top: 30%;
  width: 60%;
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
  text-align: center;
  cursor: pointer;
  border: outset white;

  .accord-bar-text {
    padding: 1.2rem;
    font-size: 2rem;
    /*height: 70px;*/
  }

  span {
    margin-right: 1.5rem;
  }
`;
export const Dropdown = styled.div`
  border-right: outset white;

  .accord-bar-subtext {
    font-size: 22px;
    margin-left: 20px;
  }
  .accord-goal-text {
    font-size: 30px;
    padding: 5px;

    height: 60px;

    border: 1px solid;
    border-color: transparent;
    border-radius: 5px;
    background-color: var(--white);
    box-shadow: 0 1px 3px 0 rgb(26 24 29 / 12%), 0 1px 2px 0 rgb(26 24 29 / 24%);
    margin: 5px;
    margin-left: 25px;
  }
`;

export const Lista = styled.div`
  font-size: 22px;
  padding: 5px;

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
