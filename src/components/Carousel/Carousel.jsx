import React, { useState } from "react";
import "./Carousel.css";
import first from "../../img/pngwing.com (1).png";
import second from "../../img/pngwing.com (2).png";
import third from "../../img/pngwing.com (3).png";
import fourth from "../../img/pngwing.com.png";
// import fivth from "../../img/search.png";
// import six from "../../img/search.png";
const images = [
  <img src={first} alt="Логотип" className="logo-img" />,
  <img src={second} alt="Логотип" className="logo-img1" />,
  <img src={third} alt="Логотип" className="img" />,
  <img src={fourth} alt="Логотип" className="img" />,
  // <img src={fivth} alt="Логотип" className="img" />,
  // <img src={six} alt="Логотип" className="img" />,
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="slide">
        <img
          src={images[currentIndex].props.src}
          alt={`slide${currentIndex + 1}`}
          className={images[currentIndex].props.className}
        />
      </div>
    </div>
  );
};

export default Carousel;
