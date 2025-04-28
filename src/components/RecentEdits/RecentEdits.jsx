import React from 'react';
import { motion } from 'framer-motion';
import { History } from 'lucide-react';
import ThumbnailCard from './ThumbnailCard';
import recentEdits from '../../data/recentEdits';

const RecentEdits = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center">
            <History className="h-6 w-6 text-emerald-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Recent Edits</h2>
          </div>
          <a href="#history" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
            View All
          </a>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recentEdits.map((thumbnail, index) => (
            <ThumbnailCard 
              key={thumbnail.id} 
              thumbnail={thumbnail} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEdits;