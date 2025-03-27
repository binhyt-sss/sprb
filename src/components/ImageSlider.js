import React, { useState, useEffect } from 'react';
import classes from './ImageSlider.module.css';

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    }, 3000); 

    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <section className={classes.slider}>
      <span className={classes.leftArrow} onClick={prevSlide}>&#10094;</span>
      <div className={classes.slideContainer} style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, index) => (
          <div className={classes.slide} key={index}>
            <img src={img} alt="product image" className={classes.image} />
          </div>
        ))}
      </div>
      <span className={classes.rightArrow} onClick={nextSlide}>&#10095;</span>
    </section>
  );
};

export default ImageSlider;
