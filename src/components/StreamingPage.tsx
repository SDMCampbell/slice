import { motion } from 'motion/react';
import { ArrowLeft, MonitorPlay, Clock, Radio } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ContentGrid } from './ContentGrid';
import { ContentFilter } from './ContentFilter';
import { useState, useMemo } from 'react';
import { streamingContent } from '../data/streamingContent';

export function StreamingPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Get unique categories from content items
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(streamingContent.map(item => item.category)));
    return ['All', ...uniqueCategories];
  }, []);
  
  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return streamingContent;
    return streamingContent.filter(item => item.category === activeCategory);
  }, [activeCategory]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-rose-950/50 via-slate-900 to-red-950/50 border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <motion.button
            onClick={() => navigate('/')}
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
              <div className="p-3 bg-gradient-to-br from-rose-800 to-red-800 rounded-xl">
                <MonitorPlay className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl text-white">Live Streams</h1>
            </div>
            <p className="text-xl text-slate-400 max-w-2xl">
              Watch live content creators in action, real-time entertainment
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
              <Radio className="w-5 h-5 text-red-400" />
              <span className="text-slate-300">24/7 Streaming</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-400" />
              <span className="text-slate-300">Live Now</span>
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


