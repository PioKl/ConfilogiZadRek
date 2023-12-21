import React from "react";
import "../styles/Extensions.scss";
import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";
import dots from "../images/bg-dots.svg";

export default function Extensions() {
  const cards = [
    {
      id: 1,
      heading: "Add to Chrome",
      version: "Minimum version 62",
      buttonInfo: "Add & Install Extension",
      image: chrome,
      alt: "chrome",
    },
    {
      id: 2,
      heading: "Add to Firefox",
      version: "Minimum version 55",
      buttonInfo: "Add & Install Extension",
      image: firefox,
      alt: "firefox",
    },
    {
      id: 3,
      heading: "Add to Opera",
      version: "Minimum version 46",
      buttonInfo: "Add & Install Extension",
      image: opera,
      alt: "opera",
    },
  ];
  return (
    <section className="extensionsContainer">
      <div className="extensionsInfoContainer">
        <h2 className="extensionsInfoContainer__heading">
          Download the extension
        </h2>
        <p className="extensionsInfoContainer__info">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div className="extensionsCardsContainer">
        {cards.map((item) => (
          <div key={item.id} className="card">
            <img className="card__image" src={item.image} alt={item.alt} />
            <div className="card__infoContainer">
              <h3 className="card__heading">{item.heading}</h3>
              <span className="card__versionInfo">{item.version}</span>
            </div>
            <img className="card__dots" src={dots} alt="dots" />
            <div className="card__buttonContainer">
              <a href="/">
                <button className="card__button" type="button">
                  {item.buttonInfo}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
