import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CategoryCard from './CategoryCard';
import categories from '../../data/categories';

const CategoryCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      <motion.div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto py-4 no-scrollbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </motion.div>
      
      <div className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2">
        <button
          onClick={() => scroll('left')}
          className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
      </div>
      
      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2">
        <button
          onClick={() => scroll('right')}
          className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default CategoryCarousel;