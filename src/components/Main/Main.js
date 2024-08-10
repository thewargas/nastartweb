import "./Main.css";
import React from "react";

import Promo from "../Promo/Promo";

import compImage from "../../images/main.svg";
import videoSrc from "../../images/case.mp4";
import Track from "../Track/Track";
import Honors from "../Honors/Honors";

const Main = () => {
  return (
    <main className="main">
      <Promo />
      <div className="demonstration">
        <img className="demonstration__monitor" src={compImage} alt="Монитор" />
        <video className="demonstration__video" autoPlay muted loop playsInline>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Track />
      <Honors />
    </main>
  );
};

export default Main;
