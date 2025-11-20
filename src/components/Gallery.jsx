import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Camera, ZoomIn } from 'lucide-react';
import { getAssetUrl } from '../utils';
import HiddenMessage from './HiddenMessage';

const Gallery = () => {
  const [secretRevealed, setSecretRevealed] = useState(false);

  const memories = [
    // Story 1: The Beginning (Davanagere)
    { id: 1, src: getAssetUrl("/assets/placeholder_railway.png"), alt: "Railway Reunion", span: "col-span-1 md:col-span-2 row-span-2", caption: "Where it all began", color: "bg-electric-blue" },
    { id: 2, src: getAssetUrl("/assets/placeholder_bike.png"), alt: "Activa Ride", span: "col-span-1 row-span-1", caption: "Long rides", color: "bg-vibrant-orange" },
    { id: 3, src: getAssetUrl("/assets/placeholder_coffee.png"), alt: "First Hug", span: "col-span-1 row-span-1", caption: "That first hug", color: "bg-deep-purple" },
    { id: 4, src: getAssetUrl("/assets/placeholder_temple.png"), alt: "Temple Prayers", span: "col-span-1 row-span-1", caption: "Blessings", color: "bg-primary-red" },
    { id: 5, src: getAssetUrl("/assets/placeholder_family.png"), alt: "Meeting Family", span: "col-span-1 row-span-1", caption: "Family & Food", color: "bg-forest-green" },
    
    // Story 2: Mysore Magic
    { id: 6, src: getAssetUrl("/assets/mysore_roses.png"), alt: "Mysore Proposal", span: "col-span-1 md:col-span-2 row-span-2", caption: "The Proposal 🌹", color: "bg-primary-red" },
    { id: 7, src: getAssetUrl("/assets/mysore_friends.png"), alt: "Friends Dinner", span: "col-span-1 row-span-1", caption: "Friends & Fun", color: "bg-electric-blue" },
    { id: 8, src: getAssetUrl("/assets/mysore_night.png"), alt: "Night Ride", span: "col-span-1 row-span-1", caption: "Night Skies", color: "bg-deep-purple" },
    { id: 9, src: getAssetUrl("/assets/mysore_college.png"), alt: "College Tour", span: "col-span-1 row-span-1", caption: "Walking Down Memory Lane", color: "bg-vibrant-orange" },
    { id: 10, src: getAssetUrl("/assets/mysore_campus.png"), alt: "Campus Memories", span: "col-span-1 row-span-1", caption: "Where I became Me", color: "bg-forest-green" },
    { id: 11, src: getAssetUrl("/assets/mysore_hotel.png"), alt: "First Night", span: "col-span-1 md:col-span-2 row-span-1", caption: "Just Us", color: "bg-black" },

    // Story 3: Chikmagalur Escape
    { id: 12, src: getAssetUrl("/assets/chikmagalur_resort.png"), alt: "Resort Arrival", span: "col-span-1 row-span-1", caption: "Escape to the Hills", color: "bg-electric-blue" },
    { id: 13, src: getAssetUrl("/assets/chikmagalur_shower.png"), alt: "Shower", span: "col-span-1 row-span-1", caption: "Intimate Moments", color: "bg-deep-purple" },
    { id: 14, src: getAssetUrl("/assets/chikmagalur_jacuzzi.png"), alt: "Jacuzzi", span: "col-span-1 md:col-span-2 row-span-2", caption: "Jacuzzi Talks 🛁", color: "bg-vibrant-orange" },
    { id: 15, src: getAssetUrl("/assets/chikmagalur_dinner.png"), alt: "Romantic Dinner", span: "col-span-1 row-span-1", caption: "Dinner Date", color: "bg-primary-red" },
    { id: 16, src: getAssetUrl("/assets/chikmagalur_walk.png"), alt: "Moonlit Walk", span: "col-span-1 row-span-1", caption: "Under the Stars", color: "bg-black" },
    { id: 17, src: getAssetUrl("/assets/chikmagalur_cycling.png"), alt: "Morning Cycling", span: "col-span-1 md:col-span-2 row-span-1", caption: "Morning Breeze", color: "bg-forest-green" },
    
    // Story 1 Final (Goodbye)
    { id: 18, src: getAssetUrl("/assets/placeholder_goodbye.png"), alt: "Goodbye Kiss", span: "col-span-1 row-span-1", caption: "Until Next Time", color: "bg-primary-red" },
  ];

  return (
    <section className="py-20 bg-white border-t-neo border-black relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="inline-block bg-black text-white px-4 py-1 font-bold uppercase tracking-widest mb-4 rotate-1 border-2 border-electric-blue shadow-[4px_4px_0_#0000FF]">
            Captured Moments
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-black uppercase tracking-tighter leading-none">
            Memory Wall
          </h2>
          
          {/* Hidden Message #2 */}
          <HiddenMessage 
            id={2}
            title="Every Photo Tells Our Story 📸"
            message="From blurry selfies to perfect portraits, every picture captures a moment of our love growing stronger."
            className="absolute -bottom-4 right-[10%] z-20"
          />
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto auto-rows-[200px]">
          {memories.map((photo, index) => (
            <motion.div
              key={photo.id }
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -8, boxShadow: "12px 12px 0px #000", transition: { duration: 0.3, ease: "easeOut" } }}
              className={`${photo.span} relative group overflow-hidden border-4 border-black shadow-neo bg-gray-100`}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center p-4 ${photo.color}`}>
                <ZoomIn className="text-white w-8 h-8 mb-2" />
                <span className="font-display font-black text-white text-center uppercase text-lg tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {photo.caption}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Secret Tile Easter Egg */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            onClick={() => setSecretRevealed(!secretRevealed)}
            className="col-span-1 row-span-1 relative cursor-pointer border-4 border-black shadow-neo bg-vibrant-orange flex items-center justify-center overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!secretRevealed ? (
                <motion.div
                  key="hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-white"
                >
                  <Sparkles className="w-12 h-12 mb-2 animate-spin-slow" />
                  <span className="font-display font-black text-lg uppercase tracking-widest">Secret</span>
                </motion.div>
              ) : (
                <motion.div
                  key="revealed"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="text-center p-4 bg-white absolute inset-0 flex flex-col items-center justify-center border-4 border-black"
                >
                  <Heart className="w-10 h-10 text-primary-red fill-current mb-2 animate-bounce" />
                  <p className="font-display font-bold text-sm leading-tight uppercase">
                    To a lifetime of adventures! 🥂
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
