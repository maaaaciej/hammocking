import React from "react";
import "./header.style.scss";
import Logo from "./logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} className="logo" alt="" />
    </div>
  );
};

export default Header;
