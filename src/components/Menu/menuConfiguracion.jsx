import React from "react";

const MenuConfiguracion = () => {
  return (
    <div className="menu-configuracion">
      <div className="menu-item">
        <a className="menu-link active" href="!#">
          <div className="menu-link-content">
            <i className="bi bi-gear-wide"></i>
            <span className="menu-link-text">Configuración</span>
          </div>
        </a>
      </div>
      <div className="menu-item">
        <a className="menu-link active" href="!#">
          <div className="menu-link-content">
            <i className="bi bi-clock-history"></i>
            <span className="menu-link-text">Tu actividad</span>
          </div>
        </a>
      </div>
      <div className="menu-item">
        <a className="menu-link active" href="!#">
          <div className="menu-link-content">
            <i className="bi bi-bookmark"></i>
            <span className="menu-link-text">Guardar</span>
          </div>
        </a>
      </div>
      <div className="menu-item">
        <a className="menu-link active" href="!#">
          <div className="menu-link-content">
            <i className="bi bi-moon"></i>
            <span className="menu-link-text">Cambiar aspecto</span>
          </div>
        </a>
      </div>
      <div className="menu-item">
        <a className="menu-link active" href="!#">
          <div className="menu-link-content">
            <i className="bi bi-info-circle-fill"></i>
            <span className="menu-link-text">Informar de un problema</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MenuConfiguracion;
