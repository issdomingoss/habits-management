import styled from "styled-components";

export const BarContainer = styled.div`
  width: 100%;
  background-color: #c1bbbb;
  border: 1px solid #000000;
  border-radius: 14px;
`;
export const Bar = styled.div`
  width: ${(props) => `${props.value}%`};
  background-color: green;
  color: white;
  height: 20px;
  padding-right: 12px;
  text-align: right;
  border-radius: 14px;

  transition: width 1s;
`;
