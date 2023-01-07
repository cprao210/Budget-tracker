import styled from "styled-components";

export const StyledHome = styled.div`
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto 10px;
    font-size: 18px;
    font-weight: 700;

    .btn {
      background-color: black;
      color: white;
    }
  }
  @media (max-width: 600px) {
    .heading {
      font-size: 14px;
    }
    .btn {
      font-size: 8px;
    }
  }
`;
