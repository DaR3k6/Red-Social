import React, { useEffect, useState } from "react";

const ModoOscuro = () => {
  const [modOscuro, setModOscuro] = useState(false);
  const [cerrarVentana, setCerrarVentana] = useState(true);
  const [modoManual, setModoManual] = useState(false);

  // Al cargar el componente, intenta recuperar el estado del modo oscuro desde localStorage
  useEffect(() => {
    const modoOscuroStored = localStorage.getItem("modoOscuro");
    if (modoOscuroStored !== null) {
      setModOscuro(modoOscuroStored === "true");
    }
  }, []);

  useEffect(() => {
    const appContainer = document.body;
    if (modoManual) {
      // Aplicar el modo oscuro solo si el usuario lo ha activado manualmente
      if (modOscuro) {
        appContainer.classList.add("modo-oscuro");
      } else {
        appContainer.classList.remove("modo-oscuro");
      }
      //Actualiza automaticamente el Storege
      localStorage.setItem("modoOscuro", modOscuro.toString());
    }
  }, [modOscuro, modoManual]);

  const toggleOscuro = () => {
    if (!modoManual) {
      setModoManual(true);
    }
    setModOscuro(!modOscuro);
  };

  const toggleVentana = () => {
    setCerrarVentana(!cerrarVentana);
  };

  return (
    <>
      {" "}
      <div className="oscuro-configuracion">
        {cerrarVentana && (
          <div className="oscuro-menu">
            <div className="oscuro-titulo">
              <button
                className="btn bi bi-arrow-left-short"
                onClick={toggleVentana}
              ></button>
              <span className="oscuro-link-text">
                Cambiar aspecto <i className="bi bi-moon"></i>
              </span>
            </div>

            <div className="oscuro-contenido">
              <div className="form-check form-switch form-check-reverse">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckReverse"
                  checked={modOscuro}
                  onChange={toggleOscuro}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckReverse"
                >
                  Modo Oscuro
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ModoOscuro;
