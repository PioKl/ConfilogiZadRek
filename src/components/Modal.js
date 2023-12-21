import React from "react";
import { createPortal } from "react-dom";
import "../styles/Modal.scss";
import FeaturesShared from "./shared/FeaturesShared";
import searching from "../images/illustration-features-tab-2.svg";
import iconClose from "../images/icon-close.svg";

export default function Modal({ closeModal }) {
  const modalHook = document.getElementById("modal-hook");

  return createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <img
          src={iconClose}
          className="modal__closeIcon"
          alt=""
          onClick={closeModal}
        />
        <FeaturesShared
          heading="Intelligent search"
          paragraphInfo="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
          buttonInfo="More Info"
          image={searching}
          modiferName="alt"
          typeName="modal"
        />
      </div>
    </div>,
    modalHook
  );
}
