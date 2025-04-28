import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import TemplateCard from './TemplateCard';
import featuredTemplates from '../../data/featuredTemplates';

const FeaturedTemplates = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-emerald-50 to-orange-50 rounded-t-3xl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center bg-white border border-orange-100 rounded-full px-4 py-2 mb-4 text-sm text-orange-600 font-medium">
            <Sparkles className="h-4 w-4 mr-2" />
            Get a head start
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Templates
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start with professionally designed templates and customize them to match your brand. 
            Save time and create beautiful thumbnails in minutes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTemplates.map((template, index) => (
            <TemplateCard 
              key={template.id} 
              template={template} 
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#all-templates"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 font-medium px-6 py-3 rounded-lg shadow-md transition-all duration-200 border border-gray-200"
          >
            View All Templates
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTemplates;