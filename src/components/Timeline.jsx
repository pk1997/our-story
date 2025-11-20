import React from 'react';
import { motion } from 'framer-motion';
import { Video, Plane, Utensils, Gem, Phone, Heart, BookOpen } from 'lucide-react';

const events = [
  {
    title: "The Digital Spark",
    date: "16th February, 2025",
    description: "Arranged marriage video call from Dublin to Davanagere. A casual introduction that would change everything.",
    color: "bg-white",
    headerColor: "bg-electric-blue",
    borderColor: "border-electric-blue",
    icon: Video,
  },
  {
    title: "First Meeting",
    date: "18th May, 2025",
    description: "He flew to India. Exhausted from a missed flight, but one smile with a dimple made it all worth it.",
    color: "bg-white",
    headerColor: "bg-vibrant-orange",
    borderColor: "border-vibrant-orange",
    icon: Plane,
  },
  {
    title: "Elements Restobar",
    date: "24th May, 2025",
    description: "Lunch, nerves, and laughter. A simple meal turned into a lifetime of memories. The moment we both knew.",
    color: "bg-white",
    headerColor: "bg-primary-red",
    borderColor: "border-primary-red",
    icon: Utensils,
  },
  {
    title: "It's Official",
    date: "29th May, 2025",
    description: "Five days after our first proper date, we made it official. When you know, you know.",
    color: "bg-white",
    headerColor: "bg-deep-purple",
    borderColor: "border-deep-purple",
    icon: Gem,
  },
  {
    title: "The Long Distance Begins",
    date: "31st May, 2025",
    description: "Back to Dublin. 7,000 km apart. Five months of endless video calls, late nights, and counting down days.",
    color: "bg-white",
    headerColor: "bg-forest-green",
    borderColor: "border-forest-green",
    icon: Phone,
  },
  {
    title: "The Reunion",
    date: "19th October, 2025",
    description: "After 5 months, he flew back to her. The wait was worth every second.",
    color: "bg-white",
    headerColor: "bg-primary-red",
    borderColor: "border-primary-red",
    icon: Heart,
  },
  {
    title: "To Be Continued...",
    date: "Present",
    description: "Our story is still being written. The best chapters are yet to come.",
    color: "bg-white",
    headerColor: "bg-black",
    borderColor: "border-black",
    icon: BookOpen,
  }
];

const Timeline = () => {
  return (
    <section className="py-20 bg-bg-cream relative overflow-hidden border-t-neo border-black">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block bg-vibrant-orange text-white px-4 py-1 font-bold uppercase tracking-widest mb-4 -rotate-2 border-2 border-black shadow-[4px_4px_0_#000]">
            Pavan & Sindhu
          </div>
          <h3 className="text-6xl md:text-8xl font-display font-black text-black uppercase tracking-tighter leading-none">
            Our Journey
          </h3>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-2 bg-black transform md:-translate-x-1/2 origin-top"
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
              
              {/* Connector Dot with Ripple Effect */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-black z-20 transform -translate-x-1/2 bg-white`}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-black"
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
              </motion.div>
              
              {/* Connector Line (Horizontal for Desktop) */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.2) }}
                className={`hidden md:block absolute top-1/2 h-2 bg-black z-0 origin-left ${index % 2 === 1 ? 'right-1/2 w-24' : 'left-1/2 w-24'}`}
              ></motion.div>

              {/* Spacer */}
              <div className="hidden md:block w-1/2"></div>

              {/* Card */}
              <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 1 ? 'md:pr-16' : 'md:pl-16'}`}>
                <motion.div 
                  whileHover={{ 
                    y: -12, 
                    rotate: index % 2 === 0 ? -2 : 2,
                    boxShadow: "16px 16px 0px #000"
                  }}
                  className={`relative bg-white border-4 border-black shadow-neo group`}
                >
                  
                  {/* Header Bar */}
                  <div className={`h-12 ${event.headerColor} border-b-4 border-black flex items-center px-4 justify-between ${index % 2 === 1 ? 'pl-20' : 'pr-20'}`}>
                    <span className="text-white font-black text-sm uppercase tracking-widest">{event.date}</span>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                    </div>
                  </div>

                  <div className="p-8 relative overflow-hidden">
                    <h4 className="font-display font-black text-2xl mb-4 uppercase leading-none">{event.title}</h4>
                    <p className="font-sans text-base font-medium text-gray-800 leading-relaxed">{event.description}</p>
                    
                    {/* Icon Watermark */}
                    <div className="absolute -bottom-4 -right-4 opacity-5 transform rotate-12">
                      <event.icon size={120} strokeWidth={1} />
                    </div>
                  </div>

                  {/* Floating Icon Badge */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    className={`absolute ${index % 2 === 1 ? '-left-8' : '-right-8'} -top-8 w-16 h-16 ${event.headerColor} border-4 border-black flex items-center justify-center shadow-[4px_4px_0_#000] z-30`}
                  >
                    <event.icon className="text-white" size={32} strokeWidth={2.5} />
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
