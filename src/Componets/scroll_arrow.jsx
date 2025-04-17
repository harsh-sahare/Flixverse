import React from "react";
import "../Css/scroll_arrow.css";

export default function ScrollArrow() {
  const scrollToContent = () => {
    const moviesSection = document.querySelector(".movies");
    if (moviesSection) {
      moviesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-arrow-container" onClick={scrollToContent}>
      <div className="scroll-arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
} 