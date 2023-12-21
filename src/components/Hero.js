import React from "react";
import hero from "../images/illustration-hero.svg";
import "../styles/Hero.scss";

export default function Hero() {
  return (
    <section className="heroContainer">
      <div className="heroContainer__info">
        <h1 className="heroContainer__infoHeading">
          A Simple Bookmark Manager
        </h1>
        <p className="heroContainer__infoDescription">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="heroContainer__buttonsContainer">
          <a href="#">
            <button
              className="heroContainer__button heroContainer__button--chrome"
              type="button"
            >
              Get it on Chrome
            </button>
          </a>
          <a href="#">
            <button
              className="heroContainer__button heroContainer__button--firefox"
              type="button"
            >
              Get it on Firefox
            </button>
          </a>
        </div>
      </div>
      <div className="heroContainer__imageContainer">
        <img className="heroContainer__image" src={hero} alt="hero" />
        <div className="heroContainer__imageBackground"></div>
      </div>
    </section>
  );
}
