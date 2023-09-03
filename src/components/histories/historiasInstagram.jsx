import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const HistorialCarousel = () => {
  const [index, setIndex] = useState(0);
  const [firstHalf, setFirstHalf] = useState(true);

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

  const toggleItems = () => {
    setFirstHalf(!firstHalf);
  };
  const items = [
    {
      username: "Juan",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      username: "María",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
  ];
  // Divide los elementos en dos mitades
  const middleIndex = Math.floor(items.length / 2);
  const firstHalfItems = items.slice(0, middleIndex);
  const secondHalfItems = items.slice(middleIndex, middleIndex + 8);

  return (
    <div className="historial-container">
      <div className="carousel-container">
        <button className="carousel-control-prev" onClick={toggleItems}>
          <i className="bi bi-arrow-left-circle-fill"></i>
        </button>
        <Carousel
          activeIndex={index}
          interval={null}
          onSelect={handleSelect}
          controls={false}
        >
          <Carousel.Item>
            <div className="custom-carousel">
              {firstHalf
                ? firstHalfItems.map((item, i) => (
                    <div className="story" key={i}>
                      <div className="perfil">
                        <img src={item.image} alt={item.username} />
                      </div>
                      <div className="titulo">{item.username}</div>
                    </div>
                  ))
                : secondHalfItems.map((item, i) => (
                    <div className="story" key={i}>
                      <div className="perfil">
                        <img src={item.image} alt={item.username} />
                      </div>
                      <div className="titulo">{item.username}</div>
                    </div>
                  ))}
            </div>
          </Carousel.Item>
        </Carousel>
        <button className="carousel-control-next" onClick={toggleItems}>
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default HistorialCarousel;
