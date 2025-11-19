import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg-cream text-black py-20 border-t-neo border-black overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: The Couple */}
          <motion.div 
            whileHover={{ translate: "4px 4px", boxShadow: "0px 0px 0px #000" }}
            className="bg-pink-100 border-2 border-black shadow-neo p-8 rounded-lg transition-all duration-200"
          >
            <h4 className="font-display font-black text-2xl mb-4 uppercase tracking-tighter">The Couple</h4>
            <ul className="space-y-2 font-sans text-lg font-medium">
              <li>Pavan & Sindhu</li>
              <li className="text-black/60 text-sm font-bold">Est. 2025</li>
            </ul>
          </motion.div>
          
          {/* Card 2: Locations */}
          <motion.div 
            whileHover={{ translate: "4px 4px", boxShadow: "0px 0px 0px #000" }}
            className="bg-blue-100 border-2 border-black shadow-neo p-8 rounded-lg transition-all duration-200"
          >
            <h4 className="font-display font-black text-2xl mb-4 uppercase tracking-tighter">Locations</h4>
            <ul className="space-y-2 font-sans text-lg font-medium">
              <li>Davanagere, India</li>
              <li>Dublin, Ireland</li>
              <li className="text-black/60 text-sm font-bold">And everywhere in between</li>
            </ul>
          </motion.div>

          {/* Card 3: Promise */}
          <motion.div 
            whileHover={{ translate: "4px 4px", boxShadow: "0px 0px 0px #000" }}
            className="bg-yellow-100 border-2 border-black shadow-neo p-8 rounded-lg transition-all duration-200"
          >
            <h4 className="font-display font-black text-2xl mb-4 uppercase tracking-tighter">Promise</h4>
            <p className="font-sans text-black/80 font-medium italic leading-relaxed">
              "To a lifetime of adventures, late-night rides, and endless laughter. I love you."
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-black/60 font-mono font-bold">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>by Pavan for Sindhu</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="border-t-2 border-black/10 pt-12 flex flex-col items-center"
        >
          <h2 className="text-[12vw] leading-none font-display font-black text-black/90 uppercase tracking-tighter whitespace-nowrap text-center drop-shadow-sm">
            Forever <span className="text-pink-500">&</span> Always
          </h2>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
