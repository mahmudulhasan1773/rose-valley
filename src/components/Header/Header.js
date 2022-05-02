import React from "react";
import "./Header.css";
import logo from "../../images/0.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="roses" />
      <nav className="nav">
        <a href="/home">Home</a>
        <a href="/order">order review</a>
        <a href="/cart">Add to cart </a>
      </nav>
    </div>
  );
};

export default Header;
