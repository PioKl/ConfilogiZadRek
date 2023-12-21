import React from "react";
import FeaturesShared from "./shared/FeaturesShared";
import bookmark from "../images/illustration-features-tab-1.svg";

export default function Bookmarking() {
  return (
    <FeaturesShared
      heading="Bookmark in one click"
      paragraphInfo="Organize your bookmarks however you like. Our simple drag-and-drop
    interface gives you complete control over how you manage your
    favourite sites."
      buttonInfo="More Info"
      image={bookmark}
      modiferName="normal"
      typeName="normal"
    />
  );
}
