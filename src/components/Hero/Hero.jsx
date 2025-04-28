import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';
import CategoryCarousel from './CategoryCarousel';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const popularSuggestions = ['YouTube', 'Facebook', 'Instagram', 'Twitter'];
  
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-white pt-24 pb-16 px-4 md:px-8 rounded-b-3xl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center bg-white border border-orange-100 rounded-full px-4 py-2 mb-4 text-sm text-orange-600 font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Professional thumbnails in minutes
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Create stunning thumbnails<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-orange-600">
              that get noticed
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your ideas into eye-catching thumbnails for any platform with our
            easy-to-use editor. No design skills required.
          </p>
          
          {/* Search bar instead of buttons */}
          <div className="mb-6 max-w-2xl mx-auto">
            <div className="relative">
              <motion.div
                className="flex items-center bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="pl-4 text-gray-400">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for template types..."
                  className="w-full px-4 py-3 text-gray-700 focus:outline-none"
                />
                <button 
                  className="bg-emerald-400 hover:bg-emerald-500 text-white font-medium px-6 py-3 transition-all duration-200"
                >
                  Search
                </button>
              </motion.div>
            </div>
            
            {/* Popular suggestions */}
            <motion.div 
              className="mt-3 flex flex-wrap justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="text-gray-500 font-medium">Popular:</span>
              {popularSuggestions.map((suggestion, index) => (
                <button 
                  key={index}
                  onClick={() => setSearchQuery(suggestion)}
                  className="text-emerald-600 hover:text-emerald-700 hover:underline font-medium transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Browse by category</h2>
          <CategoryCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;