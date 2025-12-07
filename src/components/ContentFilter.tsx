import { motion } from 'motion/react';

interface ContentFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ContentFilter({ categories, activeCategory, onCategoryChange }: ContentFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          
          return (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
