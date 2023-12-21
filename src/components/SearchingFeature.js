import React from "react";
import FeaturesShared from "./shared/FeaturesShared";
import searching from "../images/illustration-features-tab-2.svg";

export default function SearchingFeature() {
  return (
    <FeaturesShared
      heading="Intelligent search"
      paragraphInfo="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
      buttonInfo="More Info"
      image={searching}
      modiferName="alt"
      typeName="normal"
    />
  );
}
