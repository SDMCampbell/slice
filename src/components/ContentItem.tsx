import { motion } from 'motion/react';
import { Play, Clock, Eye } from 'lucide-react';
import { useState } from 'react';

export interface ContentItemData {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'featured' | 'large' | 'medium' | 'small';
  category: string;
  duration: string;
  views: string;
}

interface ContentItemProps {
  item: ContentItemData;
}

export function ContentItem({ item }: ContentItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isFeatured = item.type === 'featured';

  return (
    <motion.div
      className="group relative h-full overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-full">
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        
        {/* Play Button Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 bg-emerald-500/90 rounded-full flex items-center justify-center shadow-2xl">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </div>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-indigo-600/90 backdrop-blur-sm text-white rounded-full text-sm">
            {item.category}
          </span>
        </div>

        {/* Duration */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-slate-900/80 backdrop-blur-sm rounded text-white text-sm">
          <Clock className="w-3 h-3" />
          {item.duration}
        </div>

        {/* Content Info - Positioned over image */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className={`${isFeatured ? 'text-3xl' : 'text-xl'} mb-2 text-white`}>
            {item.title}
          </h3>
          
          {(isFeatured || item.type === 'large') && (
            <p className="text-slate-300 mb-4 line-clamp-2">
              {item.description}
            </p>
          )}

          {/* Stats */}
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{item.views} views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ mixBlendMode: 'overlay' }}
      />
    </motion.div>
  );
}
