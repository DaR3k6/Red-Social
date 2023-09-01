import React from "react";

const MenuConfiguracion = () => {
  return (
    <>
      <div className="menu-configuracion">
        <h2>Configuración</h2>
        <div className="setting-item">
          <span>Idioma:</span>
          <select>
            <option value="es">Español</option>
            <option value="en">Inglés</option>
          </select>
        </div>
        <div className="setting-item">
          <span>Notificaciones:</span>
          <input type="checkbox" />
        </div>
        <div className="setting-item">
          <span>Tema oscuro:</span>
          <input type="checkbox" />
        </div>
      </div>
    </>
  );
};

export default MenuConfiguracion;
