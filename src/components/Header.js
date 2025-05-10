import React, { useState, useEffect } from "react";
import "../styles/header.scss";

const Header = () => {
  useEffect(() => {
    document.body.offsetWidth < 530 ? setNavCut(true) : setNavCut(false);
  }, []);

  document.body.onresize = () => {
    document.body.offsetWidth < 530 ? setNavCut(true) : setNavCut(false);
  };

  const [isNavCut, setNavCut] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header-navigator">
          <div className="nav-btn nav-btn-menu">&#9776;</div>
          <div className="nav-btn">{isNavCut ? "F" : "Features"}</div>
          <div className="nav-btn"> {isNavCut ? "P" : "Pricing"}</div>
          <div className="nav-btn"> {isNavCut ? "C" : "Contacs"} </div>
        </div>
        <div className="header-navigator">
          <div className="nav-logo">
            <strong>SOME</strong>APPLICATION
          </div>
        </div>
        <div className="header-navigator">
          <div className="nav-btn">{isNavCut ? "H" : "Help"}</div>
          <div className="nav-btn">{isNavCut ? "G" : "Get app"} </div>
        </div>
      </div>

      <div className="header-article">
        <h1 className="art-head">Lorem ipsum dolor</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad numquam
          non, assumenda minima illum mollitia. Ipsa doloribus repellendus
          maiores exercitationem.
        </p>
      </div>
      <div className="art-image"></div>
    </>
  );
};

export default Header;
