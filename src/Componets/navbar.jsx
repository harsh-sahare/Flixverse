import React, { useEffect, useState } from "react";
import side_logo from "../Img/side_logo.png";

export default function Navbar() {
  const [chaneNav, set_changeNav] = useState(false);
  useEffect(() => {
    let element = document.getElementsByClassName("App")[0];
    element.addEventListener("scroll", () => {
      element.scrollTop >= 40 ? set_changeNav(true) : set_changeNav(false);
    });
  }, []);

  return (
    <div className={`nav ${chaneNav === true ? "nav-dark" : ""}`}>
      <div className="nav-content">
        <img src="/Flixverse.svg" alt="Flixverse logo" className="logo"></img>
      </div>
    </div>
  );
}
