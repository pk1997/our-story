import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { getAssetUrl } from '../utils';

const Gallery = () => {
  const [secretRevealed, setSecretRevealed] = useState(false);

  const memories = [
    // Story 1: The Beginning (Davanagere)
    { id: 1, src: getAssetUrl("/assets/placeholder_railway.png"), alt: "Railway Reunion", span: "col-span-1 md:col-span-2 row-span-2", caption: "Where it all began" },
    { id: 2, src: getAssetUrl("/assets/placeholder_bike.png"), alt: "Activa Ride", span: "col-span-1 row-span-1", caption: "Long rides" },
    { id: 3, src: getAssetUrl("/assets/placeholder_coffee.png"), alt: "First Hug", span: "col-span-1 row-span-1", caption: "That first hug" },
    { id: 4, src: getAssetUrl("/assets/placeholder_temple.png"), alt: "Temple Prayers", span: "col-span-1 row-span-1", caption: "Blessings" },
    { id: 5, src: getAssetUrl("/assets/placeholder_family.png"), alt: "Meeting Family", span: "col-span-1 row-span-1", caption: "Family & Food" },
    
    // Story 2: Mysore Magic
    { id: 6, src: getAssetUrl("/assets/mysore_roses.png"), alt: "Mysore Proposal", span: "col-span-1 md:col-span-2 row-span-2", caption: "The Proposal 🌹" },
    { id: 7, src: getAssetUrl("/assets/mysore_friends.png"), alt: "Friends Dinner", span: "col-span-1 row-span-1", caption: "Friends & Fun" },
    { id: 8, src: getAssetUrl("/assets/mysore_night.png"), alt: "Night Ride", span: "col-span-1 row-span-1", caption: "Night Skies" },
    { id: 9, src: getAssetUrl("/assets/mysore_college.png"), alt: "College Tour", span: "col-span-1 row-span-1", caption: "Walking Down Memory Lane" },
    { id: 10, src: getAssetUrl("/assets/mysore_campus.png"), alt: "Campus Memories", span: "col-span-1 row-span-1", caption: "Where I became Me" },
    { id: 11, src: getAssetUrl("/assets/mysore_hotel.png"), alt: "First Night", span: "col-span-1 md:col-span-2 row-span-1", caption: "Just Us" },

    // Story 3: Chikmagalur Escape
    { id: 12, src: getAssetUrl("/assets/chikmagalur_resort.png"), alt: "Resort Arrival", span: "col-span-1 row-span-1", caption: "Escape to the Hills" },
    { id: 13, src: getAssetUrl("/assets/chikmagalur_shower.png"), alt: "Shower", span: "col-span-1 row-span-1", caption: "Intimate Moments" },
    { id: 14, src: getAssetUrl("/assets/chikmagalur_jacuzzi.png"), alt: "Jacuzzi", span: "col-span-1 md:col-span-2 row-span-2", caption: "Jacuzzi Talks 🛁" },
    { id: 15, src: getAssetUrl("/assets/chikmagalur_dinner.png"), alt: "Romantic Dinner", span: "col-span-1 row-span-1", caption: "Dinner Date" },
    { id: 16, src: getAssetUrl("/assets/chikmagalur_walk.png"), alt: "Moonlit Walk", span: "col-span-1 row-span-1", caption: "Under the Stars" },
    { id: 17, src: getAssetUrl("/assets/chikmagalur_cycling.png"), alt: "Morning Cycling", span: "col-span-1 md:col-span-2 row-span-1", caption: "Morning Breeze" },
    
    // Story 1 Final (Goodbye)
    { id: 18, src: getAssetUrl("/assets/placeholder_goodbye.png"), alt: "Goodbye Kiss", span: "col-span-1 row-span-1", caption: "Until Next Time" },
  ];

  return (
    <section className="py-20 bg-white border-t-neo border-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-black text-center mb-16 text-black uppercase tracking-tighter"
        >
          Our Memory Wall
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto auto-rows-[200px]">
          {memories.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`${photo.span} relative group overflow-hidden border-2 border-black shadow-[4px_4px_0_#000] bg-gray-100 rounded-lg`}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                <span className="font-display font-bold text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 drop-shadow-md">
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
            whileHover={{ scale: 1.05 }}
            onClick={() => setSecretRevealed(!secretRevealed)}
            className="col-span-1 row-span-1 relative cursor-pointer border-2 border-black shadow-[4px_4px_0_#000] bg-pink-400 flex items-center justify-center overflow-hidden rounded-lg"
          >
            <AnimatePresence mode="wait">
              {!secretRevealed ? (
                <motion.div
                  key="hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-black"
                >
                  <Sparkles className="w-8 h-8 mb-2 animate-pulse" />
                  <span className="font-display font-bold text-sm uppercase">Tap Me</span>
                </motion.div>
              ) : (
                <motion.div
                  key="revealed"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="text-center p-2 bg-white/90 absolute inset-0 flex flex-col items-center justify-center"
                >
                  <Heart className="w-8 h-8 text-red-500 fill-current mb-2 animate-bounce" />
                  <p className="font-display font-bold text-xs md:text-sm leading-tight">
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
