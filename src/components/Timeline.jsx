import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    title: "The Digital Spark",
    date: "16th February, 2025",
    description: "Arranged marriage video call from Dublin to Davanagere. A casual introduction that would change everything.",
    color: "bg-blue-100",
    headerColor: "bg-blue-500",
    borderColor: "border-blue-500",
    icon: "💻",
  },
  {
    title: "First Meeting",
    date: "18th May, 2025",
    description: "He flew to India. Exhausted from a missed flight, but one smile with a dimple made it all worth it.",
    color: "bg-pink-100",
    headerColor: "bg-pink-500",
    borderColor: "border-pink-500",
    icon: "✈️",
  },
  {
    title: "Elements Restobar",
    date: "24th May, 2025",
    description: "Lunch, nerves, and laughter. A simple meal turned into a lifetime of memories. The moment we both knew.",
    color: "bg-yellow-100",
    headerColor: "bg-yellow-400",
    borderColor: "border-yellow-400",
    icon: "🍽️",
  },
  {
    title: "It's Official",
    date: "29th May, 2025",
    description: "Five days after our first proper date, we made it official. When you know, you know.",
    color: "bg-green-100",
    headerColor: "bg-green-500",
    borderColor: "border-green-500",
    icon: "💍",
  },
  {
    title: "The Long Distance Begins",
    date: "31st May, 2025",
    description: "Back to Dublin. 7,000 km apart. Five months of endless video calls, late nights, and counting down days.",
    color: "bg-purple-100",
    headerColor: "bg-purple-500",
    borderColor: "border-purple-500",
    icon: "📞",
  },
  {
    title: "The Reunion",
    date: "19th October, 2025",
    description: "After 5 months, he flew back to her. The wait was worth every second.",
    color: "bg-red-100",
    headerColor: "bg-red-500",
    borderColor: "border-red-500",
    icon: "❤️",
  },
  {
    title: "To Be Continued...",
    date: "Present",
    description: "Our story is still being written. The best chapters are yet to come.",
    color: "bg-gray-100",
    headerColor: "bg-gray-700",
    borderColor: "border-gray-700",
    icon: "📖",
  }
];

const Timeline = () => {
  return (
    <section className="py-20 bg-bg-cream relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(#E5E5E5 1px, transparent 1px), linear-gradient(90deg, #E5E5E5 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Scattered Emoji Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-10 left-10 text-5xl opacity-15 animate-float-slow">💻</div>
        <div className="absolute top-20 right-20 text-6xl opacity-20 animate-float-medium">❤️</div>
        <div className="absolute bottom-32 left-1/4 text-5xl opacity-15 animate-pulse-slow">✈️</div>
        <div className="absolute top-1/3 right-10 text-4xl opacity-10 animate-bounce-slow">🍽️</div>
        <div className="absolute bottom-10 left-10 text-6xl opacity-20 animate-float-fast">💍</div>
        <div className="absolute top-1/4 left-1/3 text-5xl opacity-15 animate-spin-slow">📞</div>
        <div className="absolute bottom-1/4 right-1/3 text-4xl opacity-10 animate-float-medium">🎉</div>
        <div className="absolute top-10 left-1/2 text-5xl opacity-15 animate-pulse">💕</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-float-slow">📖</div>
        <div className="absolute top-1/2 right-1/4 text-4xl opacity-10 animate-bounce">🌟</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl font-display font-black text-purple-500 uppercase tracking-widest mb-2">Pavan & Sindhu</h2>
          <h3 className="text-5xl font-display font-black text-blue-600 uppercase">Our Journey</h3>
          <p className="text-sm text-gray-600 mt-2">From Dublin to Davanagere</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line with Gradient */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2 origin-top"
            style={{
              background: 'linear-gradient(to bottom, #a855f7, #ec4899, #3b82f6)'
            }}
          ></motion.div>

          {events.map((event, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center mb-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* Connector Dot */}
              <div className={`absolute left-4 md:left-1/2 w-6 h-6 rounded-full border-2 border-black z-20 transform -translate-x-1/2`} style={{ backgroundColor: event.headerColor.replace('bg-', 'var(--tw-colors-') }}></div>
              
              {/* Connector Line (Horizontal for Desktop) */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.2) }}
                className={`hidden md:block absolute top-1/2 h-1 bg-purple-800 z-0 origin-left ${index % 2 === 1 ? 'right-1/2 w-12' : 'left-1/2 w-12'}`}
              ></motion.div>

              {/* Spacer */}
              <div className="hidden md:block w-1/2"></div>

              {/* Card */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 1 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div 
                  whileHover={{ 
                    y: -8, 
                    rotate: index % 2 === 0 ? -2 : 2,
                    boxShadow: "12px 12px 0px #000, 0 0 30px rgba(168, 85, 247, 0.4)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative bg-white border-2 border-black shadow-[4px_4px_0_#000] group`}
                >
                  
                  {/* Folder Tab */}
                  <div className={`absolute -top-8 left-0 h-8 ${event.headerColor} border-t-2 border-x-2 border-black rounded-t-lg flex items-center px-4`}>
                    <span className="text-white font-bold text-xs uppercase tracking-wider">{event.date}</span>
                  </div>

                  <div className={`p-6 pt-6 ${event.color}`}>
                    <h4 className="font-display font-black text-lg mb-2 uppercase">{event.title}</h4>
                    <p className="font-sans text-sm text-gray-800 leading-relaxed">{event.description}</p>
                  </div>

                  {/* Icon Sticker */}
                  <motion.div 
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatDelay: 3 
                    }}
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    className={`absolute ${index % 2 === 1 ? '-left-6' : '-right-6'} top-1/2 transform -translate-y-1/2 text-4xl filter drop-shadow-md cursor-pointer`}
                  >
                    {event.icon}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
