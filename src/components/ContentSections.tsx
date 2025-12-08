import { motion } from 'motion/react';
import { ContentCard } from './ContentCard';
import { homepageSections } from '../data/homepageSections';

interface ContentSectionsProps {
  onNavigate: (page: 'gaming' | 'streaming') => void;
}

export function ContentSections({ onNavigate }: ContentSectionsProps) {
  return (
    <section id="content-sections" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Explore Our Universe
          </h2>
          <p className="text-xl text-slate-400">
            Choose your adventure and discover amazing content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homepageSections.map((section, index) => (
            <ContentCard key={section.id} section={section} index={index} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
}