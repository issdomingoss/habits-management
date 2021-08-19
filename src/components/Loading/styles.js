import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const rotating = keyframes`
to {
    transform: rotate(1turn);
}
`;

export const Load = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border: 6px solid #e2e1e1;
  border-top-color: var(--green);
  border-radius: 50%;

  animation: ${rotating} 1s infinite;
`;
