import React from "react";

import articleSecondImage from "../images/articleSecondImage.png";
import "../styles/article-second.scss";

const ArticleSecond = () => {
  return (
    <div className="article-second">
      <img
        src={articleSecondImage}
        alt="#"
        className="article-second-img"
      ></img>
      <div className="article-second-column">
        <h1>Secure lock</h1>
        <p className="article-second-p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br />
          Ad numquam non, assumenda minima illum mollitia. Ipsa doloribus
          repellendus maiores exercitationem. Harum dolor ducimus ex quas iure
          sapiente fuga.
        </p>
        <div className="btns-unite">
          <button className="article-second-btn">Learn more &rarr;</button>
          <button className="article-second-btn-alternative">Try</button>
        </div>
      </div>
    </div>
  );
};

export default ArticleSecond;
