import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
    "images/imgsl4.jpeg",
    "images/imgsl10.jpg",
  "images/imgsl9.webp",
  "images/imgsl8.jpg",
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // const handlePrev = () => {
  //   setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  // };

  // const handleNext = () => {
  //   setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  // };

  return (
    <div id='fulimg'>
    <div className="image-slider">
      {/* <button onClick={handlePrev}>&lt;</button> */}
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
      {/* <button id="buttonimg"onClick={handleNext}>&gt;</button> */}
    </div>
    <h1 id="imgtext">WELCOME TO BOOK BLISS</h1>
    </div>
  );
};


export default ImageSlider;
