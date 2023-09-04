import React from "react";
import HistorialCarusel from "./histories/historiasInstagram";
import ContenidoScroll from "./histories/contenidoScroll";

const ContenidoPrincipal = () => {
  return (
    <>
      <div className="historales-wallperper">
        <HistorialCarusel />
        <div className="contenido-wallperper">
          <ContenidoScroll />
        </div>
      </div>
    </>
  );
};

export default ContenidoPrincipal;
