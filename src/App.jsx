import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Calendar, Camera, Sparkles, Infinity as InfinityIcon, ArrowLeft } from 'lucide-react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import TravelStories from './components/TravelStories';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import ProgressTracker from './components/ProgressTracker';
import FinalReward from './components/FinalReward';

const tiles = [
  { 
    id: 'hero', 
    title: 'Our Story', 
    color: 'bg-electric-blue text-white', 
    icon: Heart, 
    size: 'md:col-span-2 md:row-span-2',
    animation: {
      hover: { 
        scale: 1.02,
        boxShadow: "12px 12px 0px rgba(0, 0, 0, 0.4)",
        transition: { duration: 0.2 }
      }
    }
  },
  { 
    id: 'timeline', 
    title: 'Timeline', 
    color: 'bg-vibrant-orange text-black', 
    icon: Calendar, 
    size: 'md:col-span-1 md:row-span-1',
    animation: {
      hover: { 
        scale: 1.05,
        rotate: [0, -2, 2, -2, 0],
        transition: { duration: 0.4 }
      }
    }
  },
  { 
    id: 'gallery', 
    title: 'Gallery', 
    color: 'bg-deep-purple text-white', 
    icon: Camera, 
    size: 'md:col-span-1 md:row-span-1',
    animation: {
      hover: { 
        scale: 1.05,
        rotate: -2,
        boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.3)",
        transition: { type: "spring", stiffness: 300 }
      }
    }
  },
  { 
    id: 'fun', 
    title: 'Travel Stories', 
    color: 'bg-primary-red text-white', 
    icon: Sparkles, 
    size: 'md:col-span-2 md:row-span-1',
    animation: {
      hover: { 
        scale: 1.03,
        y: -4,
        boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.3)",
        transition: { duration: 0.3 }
      }
    }
  },
  { 
    id: 'ending', 
    title: 'Forever', 
    color: 'bg-forest-green text-white', 
    icon: InfinityIcon, 
    size: 'md:col-span-1 md:row-span-1',
    animation: {
      hover: { 
        scale: 1.05,
        rotate: 2,
        boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.3)",
        transition: { duration: 0.2 }
      }
    }
  },
];

function App() {
  const [selectedTile, setSelectedTile] = useState(null);

  const renderDetailView = () => {
    switch (selectedTile) {
      case 'hero':
        return <Hero />;
      case 'timeline':
        return <Timeline />;
      case 'gallery':
        return <Gallery />;
      case 'fun':
        return <TravelStories />;
      case 'ending':
        return <Footer />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-bg-cream flex flex-col">
      <Marquee />
      <AnimatePresence mode="wait">
        {!selectedTile ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="min-h-screen flex items-center justify-center p-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-[calc(100vh-2rem)] auto-rows-fr">
              {tiles.map((tile, index) => (
                <motion.button
                  key={tile.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover={tile.animation.hover}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedTile(tile.id)}
                  className={`${tile.size} ${tile.color} border-4 border-black shadow-[4px_4px_0_#000] flex flex-col items-center justify-center gap-4 group overflow-hidden relative transition-all duration-200`}
                >
                  <motion.div
                    className="text-current"
                  >
                    <tile.icon size={80} strokeWidth={1.5} />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-display font-black uppercase text-current group-hover:scale-110 transition-transform">
                    {tile.title}
                  </h2>
                  
                  <motion.div
                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="min-h-screen"
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTile(null)}
              className="fixed top-8 right-8 z-50 bg-white text-black font-black py-3 px-6 border-4 border-black shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all uppercase tracking-widest flex items-center gap-2"
            >
              <ArrowLeft size={20} strokeWidth={3} />
              Back
            </motion.button>
            {renderDetailView()}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hidden Messages Hunt Components */}
      <ProgressTracker />
      <FinalReward />
    </div>
  );
}

export default App;
