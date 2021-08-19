import styled from "styled-components";

export const Container = styled.div`
  #progress {
    p {
      text-align: center;
      margin-top: 10px;
      font-size: 20px;
      font-weight: 700;
    }
    .progress-container {
      min-width: 313px;
      width: 80%;
      max-width: 930px;
      margin: 18px auto 24px;
    }
  }
  .flex {
    section {
      max-width: 702px;
      margin: 0 auto;
      h2 {
        margin: 13px 0;
        text-indent: 23px;
        color: var(--black);
        font-size: 24px;
        font-weight: 700;
      }
    }
  }

  @media (min-width: 700px) {
    .flex {
      display: flex;
      flex-wrap: wrap;
      section {
        width: 100%;
      }
    }
  }

  @media (min-width: 1200px) {
    .flex {
      display: flex;
      flex-wrap: wrap;
      section {
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`;
