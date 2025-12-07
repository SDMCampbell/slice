import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for content lovers everywhere
          </p>
          <p className="mt-2 text-sm text-slate-500">
            &copy; 2025 Content Hub. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
