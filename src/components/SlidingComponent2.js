import React, { useState } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, 
  autoplay: true,
  autoplaySpeed: 3000, 
};

const SlidingComponent2 = ({ images }) => {
  const [slider, setSlider] = useState(null);

  const nextSlide = () => {
    if (slider) slider.slickNext();
  };

  const prevSlide = () => {
    if (slider) slider.slickPrev();
  };

  return (
    <div className="slider-container3">
      <Slider ref={(c) => setSlider(c)} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide3">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
      <button className="prev-btn3" onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="next-btn3" onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default SlidingComponent2;
