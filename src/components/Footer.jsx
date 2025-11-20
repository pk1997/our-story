import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-20 border-t-neo border-black overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Card 1: The Couple */}
          <motion.div 
            whileHover={{ translate: "4px 4px", boxShadow: "0px 0px 0px #000" }}
            className="bg-white border-4 border-black shadow-neo p-8 relative group"
          >
            <div className="absolute -top-4 -left-4 bg-electric-blue text-white px-4 py-1 font-bold uppercase border-2 border-black shadow-[4px_4px_0_#000] rotate-[-2deg] group-hover:rotate-0 transition-transform">
              The Couple
            </div>
            <h4 className="font-display font-black text-4xl mb-4 uppercase tracking-tighter leading-none mt-4">Pavan & Sindhu</h4>
            <ul className="space-y-2 font-mono text-sm font-bold uppercase tracking-wide text-gray-600 border-t-2 border-black pt-4 border-dashed">
              <li className="flex items-center justify-between">
                <span>Davanagere</span>
                <span className="text-xs bg-black text-white px-2 py-0.5">IN</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Dublin</span>
                <span className="text-xs bg-black text-white px-2 py-0.5">IE</span>
              </li>
              <li className="flex items-center justify-between text-electric-blue">
                <span>Everywhere</span>
                <span>∞</span>
              </li>
            </ul>
          </motion.div>



          {/* Card 2: The Vibe */}
          <motion.div 
            whileHover={{ translate: "4px 4px", boxShadow: "0px 0px 0px #000" }}
            className="bg-vibrant-orange text-white border-4 border-black shadow-neo p-8 relative group"
          >
            <div className="absolute -top-4 -left-4 bg-white text-black px-4 py-1 font-bold uppercase border-2 border-black shadow-[4px_4px_0_#000] rotate-[1deg] group-hover:rotate-0 transition-transform">
              The Vibe
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Love', 'Laughter', 'Travel', 'Food', 'Tech', 'Dreams'].map((tag, i) => (
                <span key={i} className="bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase border border-white">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 text-6xl font-black opacity-20 absolute bottom-4 right-4 rotate-[-10deg]">
              2025
            </div>
          </motion.div>

          {/* Card 3: Promise */}
          <motion.div 
            whileHover={{ translate: "4px 4px", boxShadow: "0px 0px 0px #000" }}
            className="bg-black text-white border-4 border-black shadow-neo p-8 relative group"
          >
            <div className="absolute -top-4 -left-4 bg-primary-red text-white px-4 py-1 font-bold uppercase border-2 border-black shadow-[4px_4px_0_#000] rotate-[-1deg] group-hover:rotate-0 transition-transform">
              Promise
            </div>
            <p className="font-display font-black text-2xl uppercase leading-tight mt-4 mb-6">
              "To a lifetime of adventures, late-night rides, and endless laughter."
            </p>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-gray-400 border-t border-gray-800 pt-4">
              <span>Built with</span>
              <Heart className="w-3 h-3 text-primary-red fill-current animate-pulse" />
              <span>by Pavan</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="border-t-4 border-black pt-16 flex flex-col items-center relative"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-4 h-4 bg-black"></div>
          <div className="absolute top-0 right-1/4 w-4 h-4 bg-black"></div>

          <h2 className="text-fluid-5xl font-display font-black text-black uppercase tracking-tighter whitespace-nowrap text-center select-none" style={{ lineHeight: '0.8' }}>
            Forever <span className="text-transparent stroke-text-black">&</span> Always
          </h2>
          
          <div className="mt-8 flex gap-4">
            <a href="#" className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0_#000]">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0_#000]">
              <Mail size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0_#000]">
              <Send size={20} />
            </a>
          </div>

          <div className="mt-12 text-xs font-mono uppercase tracking-widest text-gray-500">
            © 2025 Pavan & Sindhu • All Rights Reserved
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
