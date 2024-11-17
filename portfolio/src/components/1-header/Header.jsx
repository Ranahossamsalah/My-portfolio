/** @format */

import React, { useState } from "react";
import "./header.css";

function Header() {
  const [model, setmodel] = useState(false);
  const modelVisibility = () => {
    model === false ? setmodel(true) : setmodel(false);
  };
  return (
    <header className="header">
      <button className="menuBtn icon-menu" onClick={modelVisibility}>

      </button>
      <div></div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">Main</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      {model && (
        <div className="model">
          <ul className="modelNavbar">
            <li>
              <button className="closeBtn icon-clear" onClick={modelVisibility}> </button>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">Main</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
      <button className="lightBtn icon-moon-o"></button>
    </header>
  );
}

export default Header;
