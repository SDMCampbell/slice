import { motion } from 'motion/react';
import { ContentItem, type ContentItemData } from './ContentItem';

interface ContentGridProps {
  items: ContentItemData[];
}

export function ContentGrid({ items }: ContentGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ gridAutoRows: '280px' }}>
      {items.map((item, index) => {
        // Define grid layouts based on type
        let gridClass = '';
        
        switch (item.type) {
          case 'featured':
            gridClass = 'md:col-span-2 lg:col-span-4 lg:row-span-1';
            break;
          case 'large':
            gridClass = 'md:col-span-2 lg:col-span-2 lg:row-span-1';
            break;
          case 'medium':
            gridClass = 'md:col-span-1 lg:col-span-2';
            break;
          case 'small':
            gridClass = 'md:col-span-1 lg:col-span-1';
            break;
          default:
            gridClass = 'md:col-span-1';
        }

        return (
          <motion.div
            key={item.id}
            className={gridClass}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ContentItem item={item} />
          </motion.div>
        );
      })}
    </div>
  );
}
