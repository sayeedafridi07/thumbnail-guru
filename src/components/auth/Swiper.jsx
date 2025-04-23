import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Swiper = ({ slides, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  // Auto slide change
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);
    
    return () => clearInterval(autoSlide);
  }, [slides.length, interval]);
  
  // Go to specific slide
  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };
  
  // Go to next slide
  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  // Go to previous slide
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-secondary p-6 flex flex-col justify-center items-center h-full relative overflow-hidden">
      {/* Slide content */}
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { 
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
                duration: 0.8
              },
              opacity: { 
                duration: 0.4 
              }
            }}
            className="absolute w-full flex flex-col items-center justify-center"
          >
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title} 
              className="w-3/4 h-auto mb-6 object-contain"
            />
            <div className="text-center w-2/3">
              <h2 className="text-xl font-bold font-jost mb-2">{slides[currentSlide].title}</h2>
              <p className="text-gray-700 font-light font-jost">{slides[currentSlide].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation arrows (uncomment if needed) */}
      {/* <button 
        onClick={prevSlide} 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button> */}
      
      {/* <button 
        onClick={nextSlide} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 flex space-x-2">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-primary w-4' : 'bg-neutral-300'}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Swiper;