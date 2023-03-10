// import styled from "styled-component";
import styled from "styled-components";
export const StyledNavBar = styled.div`
  height: 80px;
  text-decoration: none;
  .decoration_none {
    text-decoration: none;
  }
  .wrapper {
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      font-size: 30px;
      text-decoration: none;
    }
    .center {
      display: flex;
      align-items: center;
      gap: 25px;
    }
    .right {
      display: flex;
      align-items: center;
      gap: 25px;
      .icons {
        display: flex;
        gap: 15px;
        color: #777;
        cursor: pointer;
        position: relative;
        .cartIcon {
          span {
            font-size: 12px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #2879fe;
            color: white;
            position: absolute;
            right: -10px;
            top: -10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
`;
