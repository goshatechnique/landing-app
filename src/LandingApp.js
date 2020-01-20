import React from "react";

import Header from "./components/Header";
import ArticleFirst from "./components/ArticleFirst";
import ArticleSecond from "./components/ArticleSecond";
import ArticleThird from "./components/ArticleThird";
import ArticleFourth from "./components/ArticleFourth";
import ArticleLast from "./components/ArticleLast";
import Footer from "./components/Footer";

function LandingApp() {
  return (
    <>
      <Header />
      <ArticleFirst />
      <hr className="special-hr" />
      <ArticleSecond />
      <hr className="special-hr" />
      <ArticleThird />
      <ArticleFourth />
      <ArticleLast />
      <hr className="special-hr" />
      <Footer />
    </>
  );
}

export default LandingApp;
