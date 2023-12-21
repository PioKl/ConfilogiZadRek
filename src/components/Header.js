import React, { useState } from "react";
import "../styles/Header.scss";
import logo from "../images/logo-bookmark.svg";
import { ReactComponent as BurgerMenu } from "../images/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "../images/icon-close.svg";

export default function Header({ handleHover }) {
  const [burgerMenu, setBurgerMenu] = useState(true);
  const handleMenuBurger = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Desktop Navigation */}

        <a href="#">
          <img className="container__logo" src={logo} alt="bookmarkLogo" />
        </a>

        <nav className="nav">
          <ul className="nav__itemList">
            <li
              onMouseEnter={handleHover}
              className="nav__item nav__item--normal"
            >
              <a className="nav__link nav__link--normal" href="/">
                Features
              </a>
            </li>
            <li className="nav__item nav__item--normal">
              <a className="nav__link nav__link--normal" href="/">
                Pricing
              </a>
            </li>
            <li className="nav__item nav__item--normal">
              <a className="nav__link nav__link--normal" href="/">
                Contact
              </a>
            </li>
            <li className="nav__item nav__item--login">
              <a className="nav__link nav__link--login" href="/">
                Login
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {burgerMenu && (
          <BurgerMenu
            className="container__burgerMenu"
            onClick={handleMenuBurger}
          />
        )}

        <div
          className={`navigationMobileContainer navigationMobileContainer--${
            burgerMenu ? "hidden" : "visible"
          }`}
        >
          <div className="logoMobileContainer">
            <img
              className="logoMobileContainer__logo"
              src={logo}
              alt="bookmarkLogo"
            />
            <CloseIcon
              className="logoMobileContainer__closeIcon"
              onClick={handleMenuBurger}
            />
          </div>

          <nav className="navMobile">
            <ul className="navMobile__burgerMenuItemList">
              <li className="navMobile__item">
                <a href="/">Features</a>
              </li>
              <li className="navMobile__item">
                <a href="/">Pricing</a>
              </li>
              <li className="navMobile__item">
                <a href="/">Contact</a>
              </li>
              <li className="navMobile__item navMobile__item--login">
                <a href="/">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
