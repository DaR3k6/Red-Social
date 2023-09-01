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
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Notificaciones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Perfil
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
