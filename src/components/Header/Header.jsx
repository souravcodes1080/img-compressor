import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <div className="header-logo">
          <h1>
            <Link className="link" to={"/"}>compressor.</Link>
          </h1>
        </div>
        <div className="header-options">
          <ul>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
