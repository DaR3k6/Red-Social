import React, { useState } from "react";
import MenuConfiguracion from "./Menu/menuConfiguracion";
import { ReactComponent as InstagramIcon } from "../icons/logo.svg";

const BarraNavegacion = () => {
  const [mostrarAjustes, setMostrarAjustes] = useState(false);

  const toggleAjustes = () => {
    setMostrarAjustes(!mostrarAjustes);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <a className="navbar-brand" href="!#">
            <InstagramIcon className="instagram-icon" />
          </a>
          <div className="navbar-links">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="!#">
                  <div className="nav-link-content">
                    <i className="bi bi-house-door-fill"></i>
                    <span>Inicio</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="!#">
                  <div className="nav-link-content">
                    <i className="bi bi-search"></i>
                    <span>Búsqueda</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="!#">
                  <div className="nav-link-content">
                    <i className="bi bi-compass"></i>
                    <span>Explorar</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="!#">
                  <div className="nav-link-content">
                    <i className="bi bi-camera-video-fill"></i>
                    <span>Reels</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="!#">
                  <div className="nav-link-content">
                    <i className="bi bi-heart"></i>
                    <span>Notificaciones</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="!#">
                  <div className="nav-link-content">
                    <i className="bi bi-plus-circle"></i>
                    <span>Crear</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="!#">
                  <div className="nav-link-content">
                    <i className="bi bi-messenger"></i>
                    <span>Mensajes</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="!#">
                  <div className="nav-link-content">
                    <i className="bi bi-person-circle"></i>
                    <span>Perfil</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="boton-ajuste">
              <button className="ajustes-button" onClick={toggleAjustes}>
                <div className="div"></div>
                <div className="div"></div>
                <div className="div"></div>
              </button>
              {mostrarAjustes && <MenuConfiguracion />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarraNavegacion;
