import "./Track.css";
import React from "react";

const Track = () => {
  return (
    <section className="track">
      <div className="track__circle"></div>
      {/* prettier-ignore */}
      <pre className="track__headline">
          The world moves       fast, we keep pace.          Cut through the       noise with our
          process.
      </pre>
      <div className="track__description">
        <pre className="track__text">
          Комплексные возможности проектирования
        </pre>
        {/* prettier-ignore */}
        <pre className="track__text">Мощный              дуэт, движимый дизайном</pre>
      </div>
    </section>
  );
};

export default Track;
