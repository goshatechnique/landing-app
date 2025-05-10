import React from "react";

import "../styles/article-third.scss";

import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import articleThirdImage from "../images/articleThirdImage.png";

const ArticleThird = () => {
  return (
    <div className="article-third">
      <div className="article-third-column">
        <h1>Access all over the World</h1>
        <p className="article-third-p">
          Iure, doloribus doloremque nihil soluta a, sint, assumenda animi
          expedita minus eos tempora optio quod qui pariatur quae quas nobis!
          Ipsum, dolores repellat! A, impedit quasi neque natus quia eaque vero
          porro adipisci, earum, quaerat excepturi? Modi dicta et repellendus
          adipisci deserunt. Cum aspernatur neque recusandae.
        </p>
        <h6>PARTNERS</h6>
        <div className="article-third-partners">
          <img src={logo1} alt="#"></img>
          <img src={logo2} alt="#"></img>
          <img src={logo3} alt="#"></img>
        </div>
      </div>
      <img src={articleThirdImage} className="article-third-img" alt="#" />
    </div>
  );
};

export default ArticleThird;
