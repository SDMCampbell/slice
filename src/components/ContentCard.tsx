import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState, type MouseEvent } from 'react';
import { HomepageSection } from '../data/homepageSections';

interface ContentCardProps {
  section: HomepageSection;
  index: number;
  onNavigate: (page: 'gaming' | 'streaming') => void;
}

export function ContentCard({ section, index, onNavigate }: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = section.icon;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (section.id === 'gaming') {
      onNavigate('gaming');
    } else if (section.id === 'streaming') {
      onNavigate('streaming');
    }
  };

  return (
    <motion.a
      href={section.link}
      onClick={handleClick}
      className="group relative block overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image background */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={section.image}
          alt={section.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${section.color} opacity-60 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        
        {/* Icon */}
        <motion.div
          className="absolute top-6 right-6"
          animate={{ rotate: isHovered ? 12 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`p-3 bg-gradient-to-br ${section.color} rounded-xl shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-2xl mb-2 text-white">
          {section.title}
        </h3>
        <p className="text-slate-400 mb-4">
          {section.description}
        </p>
        
        <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
          <span>Explore</span>
          <motion.div
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
      </div>

      {/* Hover effect border */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none`}
      />
    </motion.a>
  );
}