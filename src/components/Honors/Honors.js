import "./Honors.css";
import React from "react";

import { honors } from "../../utils/constants";

import arrowImage from "../../images/arrow.svg";

const Honors = () => {
  return (
    <section className="honors">
      <h2 className="honors__title">наши награды</h2>
      <div className="honors__container">
        {honors.map((honor) => {
          return (
            <a className="honor" key={honor.id} href={honor.link}>
              <img
                className="honor__card"
                src={honor.image}
                alt={honor.title}
              />
              <p className="honor__text" style={{ width: "83.2rem" }}>
                {honor.title}
              </p>
              <p className="honor__text" style={{ width: "45.8rem" }}>
                {honor.about}
              </p>
              <div className="honor__container">
                <p
                  className="honor__text"
                  style={{ width: "21rem", textAlign: "end" }}
                >
                  {honor.date}
                </p>
                <p className="honor__project">проект</p>
                <img
                  className="honor__image"
                  alt="Иконка стрелки"
                  src={arrowImage}
                />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Honors;
