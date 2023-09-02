import React, { useState } from "react";
import ModoOscuro from "./modoOscuro";
const MenuConfiguracion = () => {
  const [oscuro, setOscuro] = useState(false);
  const [menuAbierto, setAbierto] = useState(true);
  const toggleOscuro = () => {
    setAbierto(false);
    setOscuro(true);
  };
  return (
    <>
      {menuAbierto && (
        <div className="menu-configuracion">
          <div className="menu-item">
            <a className="menu-link active" href="!#">
              <div className="menu-link-content">
                <button className="btn bi bi-gear-wide">
                  <span className="menu-link-text">Configuración</span>
                </button>
              </div>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link active" href="!#">
              <div className="menu-link-content">
                <button className=" btn bi bi-clock-history">
                  <span className="menu-link-text">Tu actividad</span>
                </button>
              </div>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link active" href="!#">
              <div className="menu-link-content">
                <button className="btn bi bi-bookmark">
                  <span className="menu-link-text">Guardar</span>
                </button>
              </div>
            </a>
          </div>

          <div className="menu-item">
            <a className="menu-link active" href="!#">
              <div className="menu-link-content">
                <button className="btn bi bi-moon" onClick={toggleOscuro}>
                  <span className="menu-link-text">Cambiar aspecto</span>
                </button>
              </div>
            </a>
          </div>

          <div className="menu-item">
            <a className="menu-link active" href="!#">
              <div className="menu-link-content">
                <button className=" btn bi bi-info-circle-fill d-flex  ">
                  <span className="menu-link-text">
                    Informar de un problema
                  </span>
                </button>
              </div>
            </a>
          </div>
          <hr />
          <div className="menu-item">
            <a className="menu-link active" href="!#">
              <div className="menu-link-content">
                <button className=" btn bi bi-people-fill">
                  <span className="menu-link-text">Cambiar Cuenta</span>
                </button>
              </div>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link active" href="!#">
              <div className="menu-link-content">
                <button className=" btn bi bi-box-arrow-left">
                  <span className="menu-link-text"> Salir</span>
                </button>
              </div>
            </a>
          </div>
        </div>
      )}
      {oscuro && <ModoOscuro />}
    </>
  );
};

export default MenuConfiguracion;
