import { motion } from 'motion/react';
import { ArrowLeft, Play, Clock, Flame } from 'lucide-react';
import { ContentGrid } from './ContentGrid';
import { ContentFilter } from './ContentFilter';
import { useState, useMemo } from 'react';

const contentItems = [
  {
    id: '1',
    title: 'The Ultimate Esports Championship Breakdown',
    description: 'Deep dive into the most intense tournament moments and strategies that defined the season',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwdG91cm5hbWVudHxlbnwxfHx8fDE3NjUwMjE0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'featured',
    category: 'Tournament',
    duration: '15:42',
    views: '1.2M'
  },
  {
    id: '2',
    title: 'Controller vs Keyboard: The Final Verdict',
    description: 'We settle the age-old debate with hard data and pro player insights',
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBjb250cm9sbGVyfGVufDF8fHx8MTc2NTAxMjcxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'large',
    category: 'Review',
    duration: '12:18',
    views: '856K'
  },
  {
    id: '3',
    title: 'Top 5 Gaming Keyboards Under $100',
    description: 'Budget-friendly mechanical keyboards that don\'t compromise on performance',
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBrZXlib2FyZHxlbnwxfHx8fDE3NjUxMDU2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'medium',
    category: 'Guide',
    duration: '8:34',
    views: '524K'
  },
  {
    id: '4',
    title: 'Character Build Guide: Max Your Stats',
    description: 'Complete optimization guide for endgame content',
    image: 'https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwY2hhcmFjdGVyfGVufDF8fHx8MTc2NTAyNjU1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'medium',
    category: 'Tutorial',
    duration: '10:22',
    views: '432K'
  },
  {
    id: '5',
    title: 'Retro Gaming: Why Classic Games Still Matter',
    description: 'Exploring the timeless appeal of vintage gaming',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZ3xlbnwxfHx8fDE3NjUwMzUwODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'small',
    category: 'Feature',
    duration: '6:45',
    views: '298K'
  },
  {
    id: '6',
    title: 'Best Wireless Gaming Headsets 2025',
    description: 'Crystal clear audio without the cable clutter',
    image: 'https://images.unsplash.com/photo-1677086813101-496781a0f327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBoZWFkc2V0fGVufDF8fHx8MTc2NTA0MTAyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'small',
    category: 'Review',
    duration: '9:15',
    views: '367K'
  },
  {
    id: '7',
    title: 'Speedrun World Record Broken!',
    description: 'Watch history in the making',
    image: 'https://images.unsplash.com/photo-1614179524385-9650dbcdfa02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3NjUwODkzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'large',
    category: 'Live',
    duration: '45:30',
    views: '2.1M'
  },
  {
    id: '8',
    title: 'Hidden Easter Eggs You Missed',
    description: 'Secret details developers sneaked into popular games',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwdG91cm5hbWVudHxlbnwxfHx8fDE3NjUwMjE0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'medium',
    category: 'Feature',
    duration: '11:28',
    views: '645K'
  }
];

interface GamingPageProps {
  onNavigateHome: () => void;
}

export function GamingPage({ onNavigateHome }: GamingPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Get unique categories from content items
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(contentItems.map(item => item.category)));
    return ['All', ...uniqueCategories];
  }, []);
  
  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return contentItems;
    return contentItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950/50 via-slate-900 to-violet-950/50 border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <motion.button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-indigo-700 to-violet-700 rounded-xl">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl text-white">Gaming</h1>
            </div>
            <p className="text-xl text-slate-400 max-w-2xl">
              Epic gameplay, reviews, and the latest in gaming culture
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="flex flex-wrap gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-400" />
              <span className="text-slate-300">342 Videos</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-400" />
              <span className="text-slate-300">Updated Daily</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ContentFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <ContentGrid items={filteredItems} />
      </div>
    </div>
  );
}