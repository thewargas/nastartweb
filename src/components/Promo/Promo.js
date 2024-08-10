import "./Promo.css";
import React from "react";

import videoSrc from "../../images/bg.mp4";
import nastImage from "../../images/nast.svg";
import artImage from "../../images/art.svg";
import webImage from "../../images/web.svg";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__overlay"></div>
      <video className="promo__video" autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="promo__container">
        <img
          src={nastImage}
          className="promo__particle promo__particle_type_nast"
          alt="NAST"
        />
        <img
          src={artImage}
          className="promo__particle promo__particle_type_art"
          alt="ART"
        />
        <img
          src={webImage}
          className="promo__particle promo__particle_type_web"
          alt="WEB"
        />
      </div>
      <div className="promo__description">
        <h3 className="promo__tagline">powerful test Digital Agency</h3>
        <div className="promo__columns">
          <p className="promo__methodology">что и как делаем</p>
          <ul className="promo__list">
            <li className="promo__text">текст рыба</li>
            <li className="promo__text">рыба тест текст рыба</li>
            <li className="promo__text">текст рыба тест</li>
            <li className="promo__text">и крутые кейсы</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Promo;
