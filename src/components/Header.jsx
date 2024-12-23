import styled from "styled-components";

import Vector from "../assets/images/Vector.png";
import Arrow from "../assets/images/Arrow.png";

export default function Header() {
  return (
    <div>
      <StyledHeader>
        <img src={Vector} alt="icon" className="vector" />
        <a href="text">
          Features <img src={Arrow} alt="arrow" />
        </a>
        <a href="text">Pricing</a>
        <a href="text">
          Resources <img src={Arrow} alt="arrow" />
        </a>
        <button className="btn-header1">Log in</button>
        <button className="btn-header2">Sign up</button>
      </StyledHeader>
    </div>
  );
}
const StyledHeader = styled.header`
  background-color: #4a42f4;
  display: flex;
  align-items: center;
  width: 100%;
  height: 84px;

  & .vector {
    padding-left: 48px;
  }

  & a {
    margin-left: 300px;
    color: #fbfbfb;
    text-decoration: none;
  }
  & .btn-header1 {
    font-size: 16px;
    color: #000000;
    border: 2px solid #000000;
    border-radius: 4cqmin;
    margin-left: 100px;
    width: 84px;
    height: 34px;
  }
  & .btn-header1:hover {
    background-color: #d16969;
  }
  & .btn-header2 {
    background-color: #34e0a1;
    color: #000000;
    border-radius: 4cqmin;
    border: none;
    width: 84px;
    height: 34px;
    margin-left: 10px;
  }
  & .btn-header2:hover {
    background-color: #d56969;
  }
`;
