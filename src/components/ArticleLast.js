import React from "react";
import "../styles/article-last.scss";
import twitterIcon from "../images/twitterIcon.png";
import facebookIcon from "../images/facebookIcon.png";
import googleIcon from "../images/googleIcon.png";
import vkIcon from "../images/vkIcon.png";

const ArticleLast = () => {
  return (
    <div className="article-last">
      <div className="article-last-information">
        <div className="information-left">
          <div>
            <strong>SOME</strong>APPLICATION
            <p className="inf-left-p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus necessitatibus reiciendis, culpa eaque sed magnam
              temporibus similique. Aliquam dolorum officiis iste aliquid
              impedit reprehenderit! Vitae, sapiente sequi. Nemo, corporis
              dicta.
            </p>
            <div className="inf-left-social">
              <img className="social-img" src={twitterIcon} alt="#"></img>
              <img className="social-img" src={googleIcon} alt="#"></img>
              <img className="social-img" src={vkIcon} alt="#"></img>
              <img className="social-img" src={facebookIcon} alt="#"></img>
            </div>
          </div>
        </div>
        <div className="information-right">
          <div className="inf-right-column">
            <h6 style={{ margin: "0px" }}>LEARN MORE</h6>
            <a href="/" className="inf-right-a">
              How it works?
            </a>
            <br />
            <a href="/" className="inf-right-a">
              Meeting tools
            </a>
            <br />
            <a href="/" className="inf-right-a">
              Live striming
            </a>
            <br />
            <a href="/" className="inf-right-a">
              Contact method
            </a>
          </div>
          <div className="inf-right-column">
            <h6 style={{ margin: "0px" }}>ABOUT US</h6>
            <a href="/" className="inf-right-a">
              About us
            </a>
            <br />
            <a href="/" className="inf-right-a">
              Features
            </a>
            <br />
            <a href="/" className="inf-right-a">
              Privacy police
            </a>
            <br />
            <a href="/" className="inf-right-a">
              Terms & Conditions
            </a>
          </div>
          <div className="inf-right-column">
            <h6 style={{ margin: "0px" }}>SUPPORT</h6>
            <a href="/" className="inf-right-a">
              F.A.Q.
            </a>
            <br />
            <a href="/" className="inf-right-a">
              Contact us
            </a>
            <br />
            <a href="/" className="inf-right-a">
              Live chat
            </a>
            <br />
            <a href="/" className="inf-right-a">
              Phone call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleLast;
