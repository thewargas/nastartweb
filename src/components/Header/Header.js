import "./Header.css";
import React, { useState } from "react";

import logo from "../../images/LOGO NASTARTWEB.svg";

const Header = () => {
  const [isButtonActive, setButtonActive] = useState(false);

  return (
    <header className="header">
      <a className="logo" href="/">
        <img className="logo__image" src={logo} alt="Логотип NASTARTWEB" />
      </a>
      <nav className="header__nav">
        <a className="header__link" href="/">
          СВЯЗАТЬСЯ
        </a>
        <ul
          className={`header__button ${
            isButtonActive ? "header__button_active" : ""
          }`}
          onClick={() => setButtonActive(!isButtonActive)}
        >
          <li className="header__circle"></li>
          <li className="header__circle header__circle_type_red"></li>
          <li className="header__circle"></li>
          <li className="header__circle"></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
