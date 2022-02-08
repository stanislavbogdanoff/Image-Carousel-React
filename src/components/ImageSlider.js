import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : 0)
  }

  console.log(slides)
  return (
    <section className="slider">
      <FaArrowAltCircleRight className="arrow-right" onClick={nextSlide} />
      <FaArrowAltCircleLeft className='arrow-left' onClick={prevSlide}/>
      {slides.map((slide, index) => {
        return (
          <div key={index} className={index === current ? 'slide active' : 'slide'}>
            {index === current && <img src={slide.image} alt="pretty" className='image' />}
          </div>
        )
      })}
    </section>
  )
};

export default ImageSlider;
