import React from "react";
import FeaturesShared from "./shared/FeaturesShared";
import sharingImage from "../images/illustration-features-tab-3.svg";

export default function SharingFeature() {
  return (
    <FeaturesShared
      heading="Share your bookmarks"
      paragraphInfo="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
      buttonInfo="More Info"
      image={sharingImage}
      modiferName="alt"
      typeName="normal"
    />
  );
}
