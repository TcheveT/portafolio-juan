// ImageCarousel.jsx
import React, { useState, useEffect } from 'react';
import '../../css/carrusel.css';

import imgSalir from '../../images/salir.png'

const ImageCarousel = ({ images, isOpen, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="carousel-overlay">
      
      <div className="carousel-container">
      <img className='img-salir' src={imgSalir} alt="" onClick={ () => onClose()} />
        <img
          src={images[selectedIndex]}
          alt={`Slide ${selectedIndex}`}
          className="carousel-image"
        />
        <div className="carousel-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${index === selectedIndex ? 'selected' : ''}`}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
