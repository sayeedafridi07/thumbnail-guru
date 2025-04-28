import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Star } from 'lucide-react';

const TemplateCard = ({ template, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ 
        y: -5,
        transition: { type: "spring", stiffness: 300 }
      }}
    >
      {template.popular && (
        <div className="absolute top-3 left-3 z-10">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
            <Star className="h-3 w-3 mr-1 fill-white" />
            Popular
          </div>
        </div>
      )}
      
      <div className="relative aspect-video overflow-hidden">
        <img
          src={template.imageUrl}
          alt={template.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-900">{template.title}</h3>
          <motion.button
            className="text-gray-400 hover:text-emerald-600"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Bookmark className="h-5 w-5" />
          </motion.button>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{template.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded">
            {template.category}
          </span>
          
          <motion.button
            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Use Template
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default TemplateCard;