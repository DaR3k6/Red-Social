import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const HistorialCarusel = () => {
  const [activarEstado, setEstado] = useState(0);

  const clickHistorial = index => {
    setEstado(index);
  };

  const caruselEstado = (selectIndex, e) => {
    if (e.type === "keydown" || e.type === "mousedown") {
      e.preventDefault();
    }
    setEstado(selectIndex);
  };
  return (
    <>
      <Carousel
        activeIndex={activarEstado}
        onSelect={caruselEstado}
        interval={null}
        controls={false}
        wrap={false}
      >
        <Carousel.Item>
          <div className="instagram-carousel">
            <button
              className={`story ${activarEstado === 0 ? "active" : ""}`}
              onClick={() => clickHistorial(0)}
            >
              <div
                className={`perfil ${activarEstado === 0 ? "active" : "empty"}`}
              >
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
              </div>
              <div className="titulo">Juan</div>
            </button>
            <button
              className={`story ${activarEstado === 0 ? "active" : ""}`}
              onClick={() => clickHistorial(0)}
            >
              <div
                className={`perfil ${activarEstado === 0 ? "active" : "empty"}`}
              >
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
              </div>
              <div className="titulo">Juan</div>
            </button>
          </div>
        </Carousel.Item>
        {/* Agrega más elementos Carousel.Item según tus necesidades */}
      </Carousel>
    </>
  );
};

export default HistorialCarusel;
