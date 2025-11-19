import React from 'react';
import { motion } from 'framer-motion';

const facts = [
  { emoji: '☕', title: 'Coffee Addicts', description: 'We average 6 cups of coffee per day, combined.' },
  { emoji: '🎬', title: 'Movie Nights', description: 'Watched over 200 movies together since we met.' },
  { emoji: '🌍', title: 'Travel Goals', description: 'Visited 12 countries together and counting!' },
  { emoji: '🍕', title: 'Pizza Lovers', description: 'Our go-to comfort food. Pepperoni is life.' },
];

const FunFacts = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-yellow-100 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.1
      }}></div>

      <div className="container mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-black text-center mb-16 text-black uppercase"
        >
          Fun Facts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotate: 2 }}
              className="bg-white border-2 border-black shadow-[4px_4px_0_#000] p-8 hover:shadow-[8px_8px_0_#000] transition-all"
            >
              <div className="text-6xl mb-4">{fact.emoji}</div>
              <h3 className="text-2xl font-display font-bold mb-2 uppercase">{fact.title}</h3>
              <p className="font-sans text-gray-700">{fact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
