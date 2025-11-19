import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Video, Plane, Coffee, Code, Wind } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-bg-cream relative overflow-hidden border-t-neo border-black">
      {/* Background Elements */}
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float-slow">❤️</div>
        <div className="absolute top-20 right-20 text-5xl opacity-20 animate-float-medium">🌬️</div>
        <div className="absolute bottom-32 left-1/4 text-6xl opacity-20 animate-pulse-slow">💻</div>
        <div className="absolute top-1/3 right-10 text-5xl opacity-20 animate-bounce-slow">🎵</div>
        <div className="absolute bottom-10 left-10 text-6xl opacity-20 animate-float-fast">🐱</div>
        <div className="absolute top-1/4 left-1/3 text-4xl opacity-10 animate-spin-slow">✈️</div>
        <div className="absolute bottom-1/4 right-1/3 text-5xl opacity-15 animate-float-medium">📸</div>
        <div className="absolute top-10 left-1/2 text-4xl opacity-10 animate-pulse">💍</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-float-slow">🌶️</div>
        <div className="absolute top-1/2 right-1/4 text-5xl opacity-15 animate-bounce">🎮</div>
        <div className="absolute bottom-1/2 left-10 text-4xl opacity-10 animate-spin-reverse">🎌</div>
        <div className="absolute top-32 right-1/2 text-5xl opacity-10 animate-float-fast">🍻</div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-black text-forest-green mb-6 uppercase tracking-tight leading-none">
            From Dublin to<br/>Davanagere
          </h1>
          <p className="text-xl md:text-2xl font-sans font-medium text-gray-800 tracking-wide max-w-2xl mx-auto">
            A cozy indie love story that started with a video call and a missed flight.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center relative">
          {/* Map Connector */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10 -translate-x-1/2 z-0"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-96 opacity-40"
          >
            <img src="/assets/dublin_davanagere_map.png" alt="Map" className="w-full" />
          </motion.div>

          {/* Left Column: The Story */}
          <div className="space-y-20 relative z-10">
            <motion.div 
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: -2 }}
              whileHover={{ scale: 1.05, rotate: 0, y: -10 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-4 pb-12 shadow-[8px_8px_0_#000] max-w-md mx-auto cursor-pointer"
            >
              <div className="aspect-video bg-gray-200 mb-4 overflow-hidden border border-gray-100">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="/assets/polaroid_video_call.png" 
                  alt="First Video Call" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-center uppercase">The Digital Spark</h3>
              <p className="font-sans text-sm text-gray-600 text-center leading-relaxed px-4">
                Coding in Dublin 🇮🇪 while she managed projects in Davanagere 🇮🇳. One video call changed everything.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, rotate: 5 }}
              whileInView={{ opacity: 1, rotate: 3 }}
              whileHover={{ scale: 1.05, rotate: 0, y: -10 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-4 pb-12 shadow-[8px_8px_0_#000] max-w-md mx-auto cursor-pointer"
            >
              <div className="aspect-video bg-gray-200 mb-4 overflow-hidden border border-gray-100">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="/assets/polaroid_airport_arrival.png" 
                  alt="Airport Arrival" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-center uppercase">The Missed Flight</h3>
              <p className="font-sans text-sm text-gray-600 text-center leading-relaxed px-4">
                Exhausted and late, but that first smile made it all worth it. Caught off guard in the best way.
              </p>
            </motion.div>
          </div>

          {/* Right Column: The Confirmation */}
          <div className="space-y-20 md:mt-32 relative z-10">
            <motion.div 
              initial={{ opacity: 0, rotate: -3 }}
              whileInView={{ opacity: 1, rotate: -1 }}
              whileHover={{ scale: 1.05, rotate: 0, y: -10 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-4 pb-12 shadow-[8px_8px_0_#000] max-w-md mx-auto cursor-pointer"
            >
              <div className="aspect-video bg-gray-200 mb-4 overflow-hidden border border-gray-100">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="/assets/polaroid_coffee_date.png" 
                  alt="Hotel Elements Date" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-center uppercase">Elements Restobar</h3>
              <p className="font-sans text-sm text-gray-600 text-center leading-relaxed px-4">
                Lunch, nerves, and a promise. Two different worlds on a plate, but one shared future. I knew this was it.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, rotate: 4 }}
              whileInView={{ opacity: 1, rotate: 2 }}
              whileHover={{ scale: 1.05, rotate: 0, y: -10 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-4 pb-12 shadow-[8px_8px_0_#000] max-w-md mx-auto cursor-pointer"
            >
              <div className="aspect-video bg-gray-200 mb-4 overflow-hidden border border-gray-100">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="/assets/polaroid_official.png" 
                  alt="Made it Official" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-center uppercase">It's Official</h3>
              <p className="font-sans text-sm text-gray-600 text-center leading-relaxed px-4">
                A week later, we made it official. It was fast, but when you know, you know. ❤️
              </p>
            </motion.div>
          </div>
        </div>

        {/* Story Additions: Stats, Perspectives, Loves */}
        <div className="mt-32 space-y-32">
          
          {/* By The Numbers */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-center mb-12 uppercase">By The Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white border-2 border-black shadow-[6px_6px_0_#000] p-6 text-center"
              >
                <div className="text-5xl font-black text-primary-red mb-2">184</div>
                <div className="font-bold uppercase tracking-widest text-sm">Days Known</div>
                <div className="text-xs text-gray-500 mt-1">Since May 18, 2025</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white border-2 border-black shadow-[6px_6px_0_#000] p-6 text-center"
              >
                <div className="text-5xl font-black text-blue-400 mb-2">2</div>
                <div className="font-bold uppercase tracking-widest text-sm">Flights Taken</div>
                <div className="text-xs text-gray-500 mt-1">Dublin ✈️ Davanagere</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white border-2 border-black shadow-[6px_6px_0_#000] p-6 text-center"
              >
                <div className="text-5xl font-black text-purple-400 mb-2">∞</div>
                <div className="font-bold uppercase tracking-widest text-sm">Video Calls</div>
                <div className="text-xs text-gray-500 mt-1">Too many to count</div>
              </motion.div>
            </div>
          </div>

          {/* Perspectives: He Said / She Said */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-display font-black text-center mb-12 uppercase">First Impressions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-blue-200 border-2 border-black px-4 py-1 font-bold uppercase text-sm shadow-[4px_4px_0_#000]">He Thought</div>
                <div className="bg-white border-2 border-black shadow-[8px_8px_0_#000] p-8 h-full flex items-center">
                  <p className="font-display text-2xl font-bold leading-tight">
                    "I was completely caught off guard by her smile and dimple. Instant spark."
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-pink-200 border-2 border-black px-4 py-1 font-bold uppercase text-sm shadow-[4px_4px_0_#000]">She Did</div>
                <div className="bg-white border-2 border-black shadow-[8px_8px_0_#000] p-8 h-full flex items-center text-right">
                  <p className="font-display text-2xl font-bold leading-tight ml-auto">
                    She was shy and silent... but her actions spoke louder. She took me to a temple before we even made it official.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Obsessions & Work */}
          <div className="max-w-4xl mx-auto pb-20">
             <h2 className="text-4xl font-display font-black text-center mb-12 uppercase">Our Worlds</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black text-white p-8 border-2 border-black shadow-[8px_8px_0_#gray-500]">
                  <h3 className="text-2xl font-bold uppercase mb-6 border-b-2 border-white/20 pb-2">His World</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-lg font-bold text-blue-300"><span className="text-2xl">👨‍💻</span> Software Engineer</li>
                    <li className="flex items-center gap-3 text-lg"><span className="text-2xl">🎮</span> Video Games</li>
                    <li className="flex items-center gap-3 text-lg"><span className="text-2xl">🎌</span> Anime</li>
                    <li className="flex items-center gap-3 text-lg"><span className="text-2xl">🍻</span> Friends</li>
                    <li className="flex items-center gap-3 text-lg font-bold text-pink-300"><span className="text-2xl">💍</span> My Wife</li>
                  </ul>
                </div>
                <div className="bg-white text-black p-8 border-2 border-black shadow-[8px_8px_0_#000]">
                  <h3 className="text-2xl font-bold uppercase mb-6 border-b-2 border-black/10 pb-2">Her World</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-lg font-bold text-pink-500"><span className="text-2xl">👩‍💼</span> PMO @ Suzlon</li>
                    <li className="flex items-center gap-3 text-lg"><span className="text-2xl">📸</span> Photos</li>
                    <li className="flex items-center gap-3 text-lg"><span className="text-2xl">🌶️</span> Spicy Food</li>
                    <li className="flex items-center gap-3 text-lg"><span className="text-2xl">🐱</span> Pets</li>
                    <li className="flex items-center gap-3 text-lg"><span className="text-2xl">🦜</span> Birds</li>
                    <li className="flex items-center gap-3 text-lg"><span className="text-2xl">🎵</span> Songs</li>
                  </ul>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
