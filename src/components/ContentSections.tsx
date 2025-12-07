import { motion } from 'motion/react';
import { ContentCard } from './ContentCard';
import { Gamepad2, Laugh, Music, MonitorPlay, Sparkles, Laptop } from 'lucide-react';

const sections = [
  {
    id: 'gaming',
    title: 'Gaming',
    description: 'Epic gameplay, reviews, and the latest in gaming culture',
    icon: Gamepad2,
    image: 'https://images.unsplash.com/photo-1614179524385-9650dbcdfa02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3NjUwODkzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-indigo-700 to-violet-700',
    link: 'gaming'
  },
  {
    id: 'comedy',
    title: 'Comedy',
    description: 'Hilarious sketches, stand-up, and laugh-out-loud moments',
    icon: Laugh,
    image: 'https://images.unsplash.com/photo-1648237409808-aa4649c07ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBzdGFnZSUyMG1pY3JvcGhvbmV8ZW58MXx8fHwxNzY1MTE4NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-amber-700 to-orange-700',
    link: 'comedy'
  },
  {
    id: 'music',
    title: 'Music',
    description: 'Beats, playlists, and everything that makes you move',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzY1MTExMDM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-sky-700 to-blue-700',
    link: 'music'
  },
  {
    id: 'streaming',
    title: 'Live Streams',
    description: 'Watch live content creators in action, real-time entertainment',
    icon: MonitorPlay,
    image: 'https://images.unsplash.com/photo-1673196649654-d3ed2f58483c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3NjUxMTY0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-rose-800 to-red-800',
    link: 'streaming'
  },
  {
    id: 'tech',
    title: 'Tech & Reviews',
    description: 'Latest gadgets, tech news, and in-depth product reviews',
    icon: Laptop,
    image: 'https://images.unsplash.com/photo-1623715537851-8bc15aa8c145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NTExNTA4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-teal-700 to-emerald-700',
    link: 'tech'
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle',
    description: 'Creative inspiration, wellness, and daily life content',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1603106358772-d86f54b51cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjUxMTg1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-fuchsia-800 to-pink-800',
    link: 'lifestyle'
  }
];

interface ContentSectionsProps {
  onNavigate: (page: 'gaming') => void;
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
          {sections.map((section, index) => (
            <ContentCard key={section.id} section={section} index={index} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
}