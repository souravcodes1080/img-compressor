import React from "react";
import "./header.css";
function Header() {
  return (
    <>
      <header>
        <div className="header-logo">
          <h1>compressor.</h1>
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
