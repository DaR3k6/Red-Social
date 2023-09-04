import React from "react";
import Modal from "react-bootstrap/Modal";

const ConfiguracionPublicacion = ({ show, handleClose }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Body>
          {/* Contenido de la pestaña de configuración */}
          <div className="informacion-perfil">
            <ul>
              <li>
                <button className="btn btn-link-red">
                  <strong className="negrilla">Denunciar</strong>
                </button>
              </li>
              <li>
                <button className="btn btn-link-red">
                  <strong className="negrilla">Dejar de seguir</strong>
                </button>
              </li>
              <li>
                <button className="btn btn-link">Eliminar de favoritos</button>
              </li>
              <li>
                <button className="btn btn-link">Ir a la publicacion</button>
              </li>
              <li>
                <button className="btn btn-link">Compartir en...</button>
              </li>
              <li>
                <button className="btn btn-link">Copia enlace</button>
              </li>

              <li>
                <button className="btn btn-link">Código de inserción</button>
              </li>
              <li>
                <button className="btn btn-link">
                  Información sobre esta cuenta
                </button>
              </li>

              <li>
                <button className="btn btn-link" onClick={handleClose}>
                  Cerrar
                </button>
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ConfiguracionPublicacion;
