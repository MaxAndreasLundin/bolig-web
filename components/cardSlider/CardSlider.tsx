import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { slides } from '../helpers/SlidesImage';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="group relative m-auto h-[320px] w-full max-w-[400x] py-8 px-4 md:h-[580px]">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="h-full w-full rounded-2xl border-primary bg-contain bg-center bg-no-repeat duration-500 md:border"
      ></div>
      <div className="absolute top-[50%] left-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-primary/20 p-2 text-2xl group-hover:block">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="absolute top-[50%] right-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-primary/20 p-2 text-2xl group-hover:block">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="top-4 flex justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-2xl"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
