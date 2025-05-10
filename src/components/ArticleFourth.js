import React from "react";
import "../styles/article-fourth.scss";
import ArticleFourthImage from "../images/articleFourthImage.png";

const ArticleFourth = () => {
  return (
    <div className="article-fourth">
      <div className="article-fourth-head">Beautiful interface</div>
      <div className="article-fourth-head-p">LANDING PAGE</div>
      <img className="article-fourth-image" src={ArticleFourthImage} alt="#" />
      <div className="article-fourth-head-p">
        <strong>SOME</strong>APPLICATION
      </div>
      <div className="article-fourth-head">Get it to your smartphone</div>
      <div className="article-fourth-email-block">
        <input
          className="article-fourth-input"
          type="email"
          placeholder="example@mail.ad"
        />
        <button className="article-fourth-button">Send</button>
      </div>
    </div>
  );
};

export default ArticleFourth;
