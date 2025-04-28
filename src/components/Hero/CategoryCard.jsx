import React from 'react';
import { motion } from 'framer-motion';

const CategoryCard = ({ category }) => {
  return (
    <motion.div
      className="min-w-[260px] h-[140px] rounded-xl overflow-hidden relative cursor-pointer group"
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img
        src={category.imageUrl}
        alt={category.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
        <h3 className="text-white font-medium text-lg">{category.title}</h3>
      </div>
    </motion.div>
  );
};

export default CategoryCard;