import React from "react";
import FlipText from "./FlipText";

const FlipLink = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FlipText>{children}</FlipText>
    </a>
  );
};

export default FlipLink;
