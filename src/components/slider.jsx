import { useState } from 'react';
import '../assets/style/slider.css';

// Import images from the local folder
import Slider_1 from '../assets/imgs/pic1.jpg';
import Slider_2 from '../assets/imgs/slider-2.jpg';
import Slider_3 from '../assets/imgs/slider-3.jpg';
import Slider_4 from '../assets/imgs/slider-4.jpg';
import Slider_5 from '../assets/imgs/slider-5.jpg';
import Slider_6 from '../assets/imgs/slider-6.jpg';

const images = [Slider_1, Slider_2, Slider_3, Slider_4, Slider_5, Slider_6];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
