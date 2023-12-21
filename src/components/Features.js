import React, { useState } from "react";
import "../styles/Features.scss";
import Bookmarking from "./Bookmarking";
import SearchingFeature from "./SearchingFeature";
import SharingFeature from "./SharingFeature";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0); //Po kliknięciu na odpowiedni item, będzie zmieniał się dany feature w zależności od stanu activeFeature

  //Zmiana stanu, czyli wybranego feature i przez to wyświetlenie odpowiedniego feature
  const handleFeatureClick = (index) => {
    setActiveFeature(index);
  };

  const items = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

  const featuresComponents = [
    <Bookmarking />,
    <SearchingFeature />,
    <SharingFeature />,
  ];

  return (
    <section
      className={`featuresContainer ${
        activeFeature === null && "featuresContainer--noFeature"
      }`}
    >
      <h2 className="featuresContainer__heading">Features</h2>
      <p className="featuresContainer__description">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div className="tabsContainer">
        <ul className="tabsContainer__list">
          {items.map((itemName, index) => (
            <li
              key={index}
              className={`tabsContainer__item ${
                activeFeature === index ? "--active" : ""
              }`}
              onClick={() => handleFeatureClick(index)}
            >
              {itemName}
            </li>
          ))}
        </ul>
      </div>
      {featuresComponents[activeFeature]}
    </section>
  );
}
