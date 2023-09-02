import React from "react";
import Slider from "react-slick";
const ContenidoPrincipal = () => {
  const settings = {
    dots: true, // Muestra los indicadores de diapositivas
    infinite: true, // Permite desplazarse de forma infinita
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Número de diapositivas para mostrar a la vez
    slidesToScroll: 1, // Número de diapositivas para avanzar/retroceder
    autoplay: true, // Reproducción automática
    autoplaySpeed: 3000, // Velocidad de reproducción automática
  };

  return (
    <>
      <div className="instagram-carousel">
        <Slider {...settings}>
          <div>
            <img src="imagen1.jpg" alt="Imagen 1" />
          </div>
          <div>
            <img src="imagen2.jpg" alt="Imagen 2" />
          </div>
          <div>
            <img src="imagen3.jpg" alt="Imagen 3" />
          </div>
          {/* Agrega más diapositivas según sea necesario */}
        </Slider>
      </div>
    </>
  );
};

export default ContenidoPrincipal;
