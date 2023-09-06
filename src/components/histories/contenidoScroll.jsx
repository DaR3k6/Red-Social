import React, { useState } from "react";
import ConfiguracionPublicacion from "../configuracion/configuracion";

const ContenidoScroll = () => {
  // MODAL
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // ACTUALIZAR LOS ESTADOS DE DARLE LIKE
  const [meGusta, setMeGusta] = useState(0);
  const [like, setLike] = useState(false);

  const MegustaLike = () => {
    if (!like) {
      setMeGusta(meGusta + 1);
    } else {
      setMeGusta(meGusta - 1);
    }

    setLike(!like);
  };

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
                <button className="icono-grande" onClick={handleShow}>
                  <i className="bi bi-three-dots"></i>
                </button>
              </div>
            </div>
            <div className="publicacion">
              <img
                src="https://picsum.photos/id/237/200/300"
                alt="publicacion"
              />
            </div>
            <div className="publicacion-item">
              <button
                className={`icono-grande ${like ? "liked" : ""}`}
                onClick={MegustaLike}
                style={{
                  animation: like ? "heartbeat 0.6s infinite" : "",
                }}
              >
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
            <p className="text-start">
              {meGusta} <strong>Me gusta</strong>
            </p>

            <div className="comentarios mr-s">
              <ul className="lista-comentarios">
                <h1>Lista de comentarios</h1>
              </ul>
              <form id="formulario-comentario">
                <div className="textarea-container">
                  <textarea
                    id="nuevo-comentario"
                    placeholder="Añade un comentario..."
                  ></textarea>
                  <button type="submit" className="btn btn-primary">
                    Publicar
                  </button>
                </div>
              </form>
            </div>
          </div>
          {<ConfiguracionPublicacion show={show} handleClose={handleClose} />}
        </div>
      </div>
    </>
  );
};

export default ContenidoScroll;
