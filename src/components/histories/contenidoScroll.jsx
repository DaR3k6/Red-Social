import React from "react";

const ContenidoScroll = () => {
  return (
    <>
      <div className="perfil-container">
        <div className="container-perfil">
          <div className="custom-perfil">
            <div className="story-perfil">
              <div className="perfil-story">
                <img
                  src="https://picsum.photos/seed/picsum/200/300"
                  alt="imagen"
                />
              </div>
              <div className="titulo">Manuela</div>
              <div className="ajuste">
                <i className="btn bi bi-three-dots mx-auto p-2 d-flex"></i>
              </div>
            </div>
            <div className="publicacion">
              <img
                src="https://picsum.photos/id/237/200/300"
                alt="publicacion"
              />
            </div>
            <div className="publicacion-item">
              <button className="icono-grande">
                <i className="bi bi-heart"></i>
              </button>
              <button className="icono-grande">
                <i className="bi bi-chat"></i>
              </button>
              <button className="icono-grande">
                <i className="bi bi-send-fill"></i>
              </button>
              <div className="publicacion-guardar">
                <button className="icono-grande">
                  <i className="bi bi-bookmark"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContenidoScroll;
