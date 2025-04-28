import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Edit2 } from 'lucide-react';

const ThumbnailCard = ({ thumbnail, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail.imageUrl}
          alt={thumbnail.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.button
            className="bg-white text-emerald-600 rounded-lg px-4 py-2 font-medium flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Edit2 className="h-4 w-4" />
            Edit Again
          </motion.button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1 truncate">{thumbnail.title}</h3>
        <div className="flex items-center justify-between text-sm">
          <span className="text-emerald-600 font-medium">{thumbnail.category}</span>
          <div className="flex items-center text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            {thumbnail.date}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThumbnailCard;