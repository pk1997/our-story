import React from 'react';
import { motion } from 'framer-motion';
import HiddenMessage from './HiddenMessage';

const Marquee = () => {
  return (
    <div className="relative py-3 border-y-neo border-black overflow-hidden z-50">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue via-vibrant-orange to-electric-blue bg-[length:200%_100%] animate-pulse-slow"></div>
      
      {/* Content */}
      <motion.div 
        className="flex whitespace-nowrap relative z-10"
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 20 
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center mx-4">
            <span className="text-xl md:text-2xl font-display font-black uppercase tracking-widest text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
              Pavan & Sindhu
            </span>
            <span className="mx-4 text-white text-2xl animate-pulse">★</span>
            <span className="text-xl md:text-2xl font-display font-bold uppercase tracking-widest text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px white' }}>
              The Love Journey
            </span>
            <span className="mx-4 text-white text-2xl animate-pulse">★</span>
            <span className="text-xl md:text-2xl font-display font-black uppercase tracking-widest text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
              Est. 2025
            </span>
            <span className="mx-4 text-white text-2xl animate-pulse">★</span>
          </div>
        ))}
      </motion.div>
      
      {/* Hidden Message #5 */}
      <HiddenMessage 
        id={5}
        title="Forever & Always ∞"
        message="Like this scrolling text, my love for you goes on and on and on... endless, consistent, and always there."
        className="absolute top-1/2 right-8 -translate-y-1/2 z-[60] text-white"
      />
    </div>
  );
};
export default Marquee;
