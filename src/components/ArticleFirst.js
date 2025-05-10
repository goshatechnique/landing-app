import React from "react";

import "../styles/article-first.scss";

const ArticleFirst = () => {
  return (
    <div className="article-first">
      <div className="article-first-column">
        <div className="article-first-icon">&reg;</div>
        <h3>Rights</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad numquam
          non, assumenda minima illum mollitia. Ipsa doloribus repellendus
          maiores exercitationem.
        </p>
      </div>
      <div className="article-first-column">
        <div className="article-first-icon">&#9850;</div>
        <h3>Ergonomic</h3>
        <p>
          Harum dolor ducimus ex quas iure sapiente fuga. Corrupti consectetur
          nulla at sunt aperiam fugiat dolore dolor optio velit consequatur.
        </p>
      </div>
      <div className="article-first-column">
        <div className="article-first-icon">&euro;</div>
        <h3>Euro</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad numquam
          non, assumenda minima illum mollitia. Ipsa doloribus repellendus
          maiores exercitationem. Harum dolor ducimus ex quas iure sapiente
          fuga.
        </p>
      </div>
    </div>
  );
};

export default ArticleFirst;
