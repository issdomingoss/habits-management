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
  width: 65%;

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
    height: 70px;
  }

  span {
    margin-right: 1.5rem;
  }
`;
export const Dropdown = styled.div``;
