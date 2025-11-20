import React from 'react';
import { motion } from 'framer-motion';
import { getAssetUrl } from '../utils';

const Hero = () => {
  return (
    <section className="min-h-screen bg-bg-cream relative overflow-hidden border-t-neo border-black">
      {/* Background Elements - Decorative Custom Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-15">
        <img src={getAssetUrl("/assets/icons/heart.png")} alt="" className="absolute top-10 left-10 w-20 h-20 animate-float-slow" />
        <img src={getAssetUrl("/assets/icons/plane.png")} alt="" className="absolute top-20 right-20 w-16 h-16 rotate-12 animate-float-medium" />
        <img src={getAssetUrl("/assets/icons/coffee.png")} alt="" className="absolute bottom-32 left-1/4 w-24 h-24 -rotate-12 animate-pulse-slow" />
        <img src={getAssetUrl("/assets/icons/camera.png")} alt="" className="absolute top-1/3 right-10 w-12 h-12 animate-bounce-slow" />
        <img src={getAssetUrl("/assets/icons/map.png")} alt="" className="absolute bottom-10 right-1/4 w-32 h-32 rotate-45 animate-float-fast" />
        <img src={getAssetUrl("/assets/icons/gem.png")} alt="" className="absolute top-1/2 left-20 w-16 h-16 -rotate-6 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-20"
        >
          <div className="inline-block bg-black text-white px-4 py-1 font-bold uppercase tracking-widest mb-6 rotate-2">
            The Love Story
          </div>
          <h1 className="text-fluid-5xl font-display font-black text-deep-purple mb-6 uppercase tracking-tighter leading-[0.9] drop-shadow-[2px_2px_0_rgba(0,0,0,0.1)]">
            From Dublin<br/>
            <span className="text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: '2px black' }}>To Davanagere</span>
          </h1>
          <p className="text-xl md:text-2xl font-sans font-bold text-black tracking-tight max-w-2xl mx-auto border-l-4 border-vibrant-orange pl-6 text-left">
            A cozy indie love story that started with a video call and a missed flight.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center relative">
          {/* Map Connector */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-black -translate-x-1/2 z-0"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-96 opacity-40 mix-blend-multiply"
          >
            <img src={getAssetUrl("/assets/dublin_davanagere_map.png")} alt="Map" className="w-full grayscale contrast-125" />
          </motion.div>

          {/* Left Column: The Story */}
          <div className="space-y-20 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, rotate: -1 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black shadow-neo p-6 relative group"
            >
              <div className="absolute -top-4 -right-4 bg-electric-blue text-white px-3 py-1 font-bold uppercase text-sm border-2 border-black shadow-[4px_4px_0_#000]">
                Chapter 01
              </div>
              <div className="aspect-video bg-gray-200 mb-4 overflow-hidden border-2 border-black grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={getAssetUrl("/assets/polaroid_video_call.png")} 
                  alt="First Video Call" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="font-display font-black text-2xl mb-2 uppercase">The Digital Spark</h3>
              <p className="font-sans text-sm font-medium text-gray-800 leading-relaxed">
                Coding in Dublin 🇮🇪 while she managed projects in Davanagere 🇮🇳. One video call changed everything.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, rotate: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border-4 border-black shadow-neo p-6 relative group"
            >
              <div className="absolute -top-4 -right-4 bg-vibrant-orange text-white px-3 py-1 font-bold uppercase text-sm border-2 border-black shadow-[4px_4px_0_#000]">
                Chapter 02
              </div>
              <div className="aspect-video bg-gray-200 mb-4 overflow-hidden border-2 border-black grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={getAssetUrl("/assets/polaroid_airport_arrival.png")} 
                  alt="Airport Arrival" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="font-display font-black text-2xl mb-2 uppercase">The Missed Flight</h3>
              <p className="font-sans text-sm font-medium text-gray-800 leading-relaxed">
                Exhausted and late, but that first smile made it all worth it. Caught off guard in the best way.
              </p>
            </motion.div>
          </div>

          {/* Right Column: The Confirmation */}
          <div className="space-y-20 md:mt-32 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, rotate: 1 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black shadow-neo p-6 relative group"
            >
              <div className="absolute -top-4 -left-4 bg-primary-red text-white px-3 py-1 font-bold uppercase text-sm border-2 border-black shadow-[4px_4px_0_#000]">
                Chapter 03
              </div>
              <div className="aspect-video bg-gray-200 mb-4 overflow-hidden border-2 border-black grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={getAssetUrl("/assets/polaroid_coffee_date.png")} 
                  alt="Hotel Elements Date" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="font-display font-black text-2xl mb-2 uppercase">Elements Restobar</h3>
              <p className="font-sans text-sm font-medium text-gray-800 leading-relaxed">
                Lunch, nerves, and a promise. Two different worlds on a plate, but one shared future. I knew this was it.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border-4 border-black shadow-neo p-6 relative group"
            >
              <div className="absolute -top-4 -left-4 bg-deep-purple text-white px-3 py-1 font-bold uppercase text-sm border-2 border-black shadow-[4px_4px_0_#000]">
                Chapter 04
              </div>
              <div className="aspect-video bg-gray-200 mb-4 overflow-hidden border-2 border-black grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={getAssetUrl("/assets/polaroid_official.png")} 
                  alt="Made it Official" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="font-display font-black text-2xl mb-2 uppercase">It's Official</h3>
              <p className="font-sans text-sm font-medium text-gray-800 leading-relaxed">
                A week later, we made it official. It was fast, but when you know, you know. ❤️
              </p>
            </motion.div>
          </div>
        </div>

        {/* Story Additions: Stats, Perspectives, Loves */}
        <div className="mt-32 space-y-32">
          
          {/* By The Numbers */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="h-1 bg-black flex-1"></div>
              <h2 className="text-4xl font-display font-black text-center uppercase bg-black text-white px-6 py-2 rotate-2">By The Numbers</h2>
              <div className="h-1 bg-black flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -10, boxShadow: "8px 8px 0px #000" }}
                className="bg-white border-4 border-black shadow-neo p-8 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-primary-red"></div>
                <div className="text-6xl font-black text-black mb-2">184</div>
                <div className="font-bold uppercase tracking-widest text-sm bg-black text-white inline-block px-2">Days Known</div>
                <div className="text-xs font-bold text-gray-500 mt-2">Since May 18, 2025</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -10, boxShadow: "8px 8px 0px #000" }}
                className="bg-white border-4 border-black shadow-neo p-8 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-electric-blue"></div>
                <div className="text-6xl font-black text-black mb-2">2</div>
                <div className="font-bold uppercase tracking-widest text-sm bg-black text-white inline-block px-2">Flights Taken</div>
                <div className="text-xs font-bold text-gray-500 mt-2">Dublin ✈️ Davanagere</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -10, boxShadow: "8px 8px 0px #000" }}
                className="bg-white border-4 border-black shadow-neo p-8 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-deep-purple"></div>
                <div className="text-6xl font-black text-black mb-2">∞</div>
                <div className="font-bold uppercase tracking-widest text-sm bg-black text-white inline-block px-2">Video Calls</div>
                <div className="text-xs font-bold text-gray-500 mt-2">Too many to count</div>
              </motion.div>
            </div>
          </div>

          {/* Perspectives: He Said / She Said */}
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="h-1 bg-black flex-1"></div>
              <h2 className="text-4xl font-display font-black text-center uppercase bg-black text-white px-6 py-2 -rotate-1">First Impressions</h2>
              <div className="h-1 bg-black flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <div className="absolute -top-4 -left-4 bg-electric-blue text-white border-2 border-black px-4 py-1 font-bold uppercase text-sm shadow-[4px_4px_0_#000] z-10">He Thought</div>
                <div className="bg-white border-4 border-black shadow-neo p-8 h-full flex items-center group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <p className="font-display text-2xl font-bold leading-tight">
                    "I was completely caught off guard by her smile and dimple. Instant spark."
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -top-4 -right-4 bg-vibrant-orange text-white border-2 border-black px-4 py-1 font-bold uppercase text-sm shadow-[4px_4px_0_#000] z-10">She Did</div>
                <div className="bg-white border-4 border-black shadow-neo p-8 h-full flex items-center text-right group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <p className="font-display text-2xl font-bold leading-tight ml-auto">
                    She was shy and silent... but her actions spoke louder. She took me to a temple before we even made it official.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Obsessions & Work */}
          <div className="max-w-4xl mx-auto pb-20">
             <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="h-1 bg-black flex-1"></div>
              <h2 className="text-4xl font-display font-black text-center uppercase bg-black text-white px-6 py-2 rotate-1">Our Worlds</h2>
              <div className="h-1 bg-black flex-1"></div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0_#666]">
                  <h3 className="text-3xl font-black uppercase mb-6 border-b-4 border-electric-blue pb-2 inline-block">His World</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-xl font-bold"><span className="text-2xl">👨‍💻</span> Software Engineer</li>
                    <li className="flex items-center gap-3 text-xl font-bold text-gray-400"><span className="text-2xl">🎮</span> Video Games</li>
                    <li className="flex items-center gap-3 text-xl font-bold text-gray-400"><span className="text-2xl">🎌</span> Anime</li>
                    <li className="flex items-center gap-3 text-xl font-bold text-gray-400"><span className="text-2xl">🍻</span> Friends</li>
                    <li className="flex items-center gap-3 text-xl font-bold text-electric-blue"><span className="text-2xl">💍</span> My Wife</li>
                  </ul>
                </div>
                <div className="bg-white text-black p-8 border-4 border-black shadow-neo">
                  <h3 className="text-3xl font-black uppercase mb-6 border-b-4 border-vibrant-orange pb-2 inline-block">Her World</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-xl font-bold"><span className="text-2xl">👩‍💼</span> PMO @ Suzlon</li>
                    <li className="flex items-center gap-3 text-xl font-bold text-gray-600"><span className="text-2xl">📸</span> Photos</li>
                    <li className="flex items-center gap-3 text-xl font-bold text-gray-600"><span className="text-2xl">🌶️</span> Spicy Food</li>
                    <li className="flex items-center gap-3 text-xl font-bold text-gray-600"><span className="text-2xl">🐱</span> Pets</li>
                    <li className="flex items-center gap-3 text-xl font-bold text-gray-600"><span className="text-2xl">🦜</span> Birds</li>
                    <li className="flex items-center gap-3 text-xl font-bold text-vibrant-orange"><span className="text-2xl">🎵</span> Songs</li>
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
