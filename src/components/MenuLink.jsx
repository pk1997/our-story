import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils';

const MenuLink = ({ item, index, isActive, onHover, onLeave, onClick }) => {
  return (
    <motion.div
      className={`relative group cursor-pointer ${isActive ? 'z-50' : 'z-10'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      onMouseEnter={() => onHover(item)}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* Text Container */}
      <div className="relative overflow-hidden py-2 md:py-4">
        <motion.h2 
          className={`text-5xl md:text-8xl font-display font-black uppercase tracking-tighter transition-colors duration-300 relative z-30 ${isActive ? 'text-white' : 'text-black'}`}
          style={{ lineHeight: 0.9 }}
          whileHover={{ x: 20 }}
        >
          {item.title}
        </motion.h2>
        
        {/* Hover Reveal Image (Floating) */}
        <motion.div
          className="fixed pointer-events-none z-20 hidden md:block"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ 
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.8,
            rotate: isActive ? 0 : -5,
            x: isActive ? 400 : 0, // Offset to right
            y: isActive ? -100 : 0
          }}
          transition={{ duration: 0.4 }}
          style={{
            top: '60%',
            left: '20%',
            width: '400px',
            height: '500px',
            marginTop: '-250px'
          }}
        >
          <div className="relative w-full h-full border-4 border-black shadow-[16px_16px_0_#000] bg-white p-2 rotate-3">
            <img 
              src={getAssetUrl(item.image)} 
              alt={item.title} 
              className="w-full h-full object-cover grayscale contrast-125"
            />
            {/* Overlay Tint */}
            <div className={`absolute inset-0 mix-blend-multiply opacity-40 ${item.color.split(' ')[0]}`}></div>
          </div>
        </motion.div>

        {/* Mobile Arrow */}
        <motion.div 
          className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 text-black"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowRight size={24} />
        </motion.div>
      </div>
      
      {/* Divider Line */}
      <motion.div 
        className="h-1 bg-black w-full origin-left relative z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
      />
    </motion.div>
  );
};

export default MenuLink;
