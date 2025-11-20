import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Terminal } from 'lucide-react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import TravelStories from './components/TravelStories';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import ProgressTracker from './components/ProgressTracker';
import FinalReward from './components/FinalReward';
import MenuLink from './components/MenuLink';
import LoveTerminal from './components/LoveTerminal';
import LoveBot from './components/LoveBot';

const menuItems = [
  { 
    id: 'hero', 
    title: 'Our Story', 
    color: 'bg-electric-blue', 
    image: '/assets/cover_story_v4.png'
  },
  { 
    id: 'timeline', 
    title: 'Timeline', 
    color: 'bg-vibrant-orange', 
    image: '/assets/cover_timeline_v4.png'
  },
  { 
    id: 'gallery', 
    title: 'Gallery', 
    color: 'bg-deep-purple', 
    image: '/assets/cover_gallery_v4.png'
  },
  { 
    id: 'fun', 
    title: 'Travels', 
    color: 'bg-primary-red', 
    image: '/assets/cover_travel_v4.png'
  },
  { 
    id: 'ending', 
    title: 'Forever', 
    color: 'bg-forest-green', 
    image: '/assets/cover_forever_v4.png'
  },
];

function App() {
  const [selectedTile, setSelectedTile] = useState(null);
  const [activeHover, setActiveHover] = useState(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [unlockedSections, setUnlockedSections] = useState(['hero', 'timeline', 'ending']);

  const unlockSection = (sectionId) => {
    if (!unlockedSections.includes(sectionId)) {
      setUnlockedSections(prev => [...prev, sectionId]);
      return true;
    }
    return false;
  };

  // Easter egg trigger: Press '`' (backtick) to toggle terminal
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`') {
        setIsTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

  // Get current background color based on hover state
  const getBackgroundColor = () => {
    if (activeHover) {
      // Extract the color name from the class (e.g., "bg-electric-blue" -> "electric-blue")
      // But we need the actual hex or Tailwind class for the background
      // Since we are using Tailwind classes, we can return the class name directly if we apply it to a div
      return activeHover.color;
    }
    return 'bg-bg-cream';
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ease-in-out ${getBackgroundColor()}`}>
      <Marquee />
      <LoveTerminal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
        onUnlock={unlockSection}
      />
      
      <AnimatePresence mode="wait">
        {!selectedTile ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex-1 flex flex-col justify-center relative overflow-hidden px-4 md:px-20 py-10"
          >
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            {/* Menu List */}
            <div className="max-w-7xl mx-auto w-full z-10 flex flex-col justify-center h-full">
              <div className="mb-8 md:mb-16">
                <h5 className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest mb-2 opacity-60">The Love Journey</h5>
                <div className="w-20 h-1 bg-black"></div>
              </div>

              <div className="flex flex-col gap-0">
                {menuItems.filter(item => unlockedSections.includes(item.id)).map((item, index) => (
                  <MenuLink 
                    key={item.id}
                    item={item}
                    index={index}
                    isActive={activeHover?.id === item.id}
                    onHover={setActiveHover}
                    onLeave={() => setActiveHover(null)}
                    onClick={() => setSelectedTile(item.id)}
                  />
                ))}
              </div>

              <div className="mt-12 md:mt-20 flex justify-between items-end">
                <div className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">
                  Est. 2025
                </div>
                <div className="font-mono text-xs font-bold uppercase tracking-widest opacity-60 text-right">
                  Dublin • Davanagere<br/>Mysore • Chikmagalur
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="min-h-screen bg-bg-cream"
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTile(null)}
              className="fixed top-24 right-8 z-50 bg-white text-black font-black py-3 px-6 border-4 border-black shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all uppercase tracking-widest flex items-center gap-2"
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
      
      {/* Terminal Trigger Button (Subtle) */}
      {/* Terminal Trigger Button */}
      <motion.button 
        onClick={() => setIsTerminalOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-black/80 backdrop-blur-sm text-green-500 p-3 rounded-full shadow-lg border border-green-500/30 md:opacity-50 md:hover:opacity-100 transition-all"
        title="Open Terminal"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <Terminal size={24} />
      </motion.button>
      
      <LoveBot />
    </div>
  );
}

export default App;
