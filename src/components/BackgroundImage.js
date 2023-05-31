import React from "react";
import image from "../assets/image.webp";

export default function BackgroundImage() {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`,
    backgroundSize: "100% 100%",
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",
  };

  return (
    <div
      className="absolute top-0 left-0 h-screen w-full"
      style={backgroundImageStyle}
    />
  );
}
