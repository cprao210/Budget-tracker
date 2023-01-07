import React from "react";
import { Link } from "react-router-dom";
import { StyledNavBar } from "./NavBar.Styled";

const NavBar = () => {
  return (
    <StyledNavBar className="navbar">
      <div className="wrapper">
        <div className="left decoration_none">
          <Link to="/" className="decoration_none">
            Budget Tracker
          </Link>
        </div>
        <div className="right">
          <Link to="/" className="center decoration_none">
            Home
          </Link>
          <Link to="/current-balance" className="center decoration_none">
            Current Balance
          </Link>
        </div>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
