import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Calendar, Camera, Sparkles, Infinity as InfinityIcon } from 'lucide-react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import TravelStories from './components/TravelStories';
import Footer from './components/Footer';

const tiles = [
  { 
    id: 'hero', 
    title: 'Our Story', 
    color: 'bg-pink-400', 
    icon: Heart, 
    size: 'md:col-span-2 md:row-span-2',
    animation: {
      hover: { 
        scale: [1, 1.2, 1],
        transition: { repeat: Infinity, duration: 1.5 }
      }
    }
  },
  { 
    id: 'timeline', 
    title: 'Timeline', 
    color: 'bg-blue-400', 
    icon: Calendar, 
    size: 'md:col-span-1 md:row-span-1',
    animation: {
      hover: { 
        rotate: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.5 }
      }
    }
  },
  { 
    id: 'gallery', 
    title: 'Gallery', 
    color: 'bg-purple-400', 
    icon: Camera, 
    size: 'md:col-span-1 md:row-span-1',
    animation: {
      hover: { 
        scale: 1.2,
        rotate: -5,
        transition: { type: "spring", stiffness: 300 }
      }
    }
  },
  { 
    id: 'fun', 
    title: 'Travel Stories', 
    color: 'bg-yellow-400', 
    icon: Sparkles, 
    size: 'md:col-span-2 md:row-span-1',
    animation: {
      hover: { 
        rotate: 360,
        scale: 1.2,
        transition: { duration: 2, repeat: Infinity, ease: "linear" }
      }
    }
  },
  { 
    id: 'ending', 
    title: 'Forever', 
    color: 'bg-green-400', 
    icon: InfinityIcon, 
    size: 'md:col-span-1 md:row-span-1',
    animation: {
      hover: { 
        x: [-5, 5, -5],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
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
    <div className="min-h-screen bg-bg-cream">
      <AnimatePresence mode="wait">
        {!selectedTile ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen flex items-center justify-center p-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-[calc(100vh-2rem)] auto-rows-fr">
              {tiles.map((tile, index) => (
                <motion.button
                  key={tile.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedTile(tile.id)}
                  className={`${tile.size} ${tile.color} border border-black flex flex-col items-center justify-center gap-4 group overflow-hidden relative`}
                >
                  <motion.div
                    className="text-black"
                    variants={tile.animation}
                  >
                    <tile.icon size={80} strokeWidth={1.5} />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-display font-black uppercase text-black group-hover:scale-110 transition-transform">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen"
          >
            <button
              onClick={() => setSelectedTile(null)}
              className="fixed top-8 right-8 z-50 bg-[#FF10F0] text-black font-black py-3 px-6 border-2 border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all uppercase tracking-widest"
            >
              ← Back
            </button>
            {renderDetailView()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
