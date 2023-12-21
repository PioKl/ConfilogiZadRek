import React from "react";
import "../../styles/shared/FeaturesShared.scss";

const FeaturesShared = ({
  heading,
  paragraphInfo,
  buttonInfo,
  image,
  modiferName,
  typeName,
}) => {
  return (
    <>
      <div className={`featureContainer featureContainer--${typeName}`}>
        <div
          className={`featureImageContainer featureImageContainer--${modiferName} featureImageContainer--${typeName}`}
        >
          <img
            className="featureImageContainer__image"
            src={image}
            alt="featureImage"
          />
        </div>
        <div className="featureInfoContainer">
          <h2 className="featureInfoContainer__heading">{heading}</h2>
          <p className="featureInfoContainer__description">{paragraphInfo}</p>
          <div className="featureInfoContainer__buttonsContainer">
            <a href="#">
              <button className="featureInfoContainer__button" type="button">
                {buttonInfo}
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesShared;
