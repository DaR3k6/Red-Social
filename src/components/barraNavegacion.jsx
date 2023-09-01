import React, { useState } from "react";
import { ReactComponent as InstagramIcons } from "../icons/logo.svg";
const BarraNavegacion = () => {
  const [mostarAjustes, setAgustes] = useState(false);

  const toogleAjuste = () => {
    setAgustes(!mostarAjustes);
  };

  return (
    <>
      <div className="navbar-left">
        <a className="navbar-brand" href="#">
          <InstagramIcons className="instagram-icon" />
        </a>
        <div className="navbar-links">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <i class="bi bi-house-door-fill">Inicio</i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="bi bi-search">Buqueda</i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="bi bi-compass">Explorar</i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="bi bi-camera-video-fill">Reels</i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="bi bi-heart">Notificaciones</i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="bi bi-plus-circle">Crear</i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="bi bi-messenger">Mensajes</i>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="bi bi-person-circle">Perfil</i>
              </a>
            </li>
          </ul>
          <div>
            <button className="ajustes-button">
              <div className="div"></div>
              <div className="div"></div>
              <div className="div"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarraNavegacion;
