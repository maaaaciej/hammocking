import React from "react";
import "./header.style.scss";
import Logo from "./logo.png";
import Login from "../login/login.component";

const Header = (props) => {
  console.log(props)
  return (
    <div className="header">
      <div className="header_logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header_login">
        <Login />
      </div>
    </div>
  );
};

export default Header;
