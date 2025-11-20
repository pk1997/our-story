import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';

const HiddenMessage = ({ id, title, message, className = "" }) => {
  const [isFound, setIsFound] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if this message was already found
    const progress = JSON.parse(localStorage.getItem('lovejourney_progress') || '{"foundMessages": []}');
    if (progress.foundMessages.includes(id)) {
      setIsFound(true);
    }
  }, [id]);

  const handleClick = () => {
    if (isFound) return;

    // Mark as found
    const progress = JSON.parse(localStorage.getItem('lovejourney_progress') || '{"foundMessages": [], "finalRewardUnlocked": false}');
    if (!progress.foundMessages.includes(id)) {
      progress.foundMessages.push(id);
      progress.lastVisited = new Date().toISOString();
      localStorage.setItem('lovejourney_progress', JSON.stringify(progress));
    }

    setIsFound(true);
    setShowModal(true);

    // Trigger custom event for progress tracker
    window.dispatchEvent(new CustomEvent('messageFound', { detail: { id, total: progress.foundMessages.length } }));
  };

  if (isFound && !showModal) {
    // Show checkmark for found messages
    return (
      <motion.div
        className={`cursor-default ${className}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        title="Message already found ✓"
      >
        <div className="w-8 h-8 bg-forest-green border-2 border-black rounded-full flex items-center justify-center shadow-sm">
          <span className="text-white text-xl">✓</span>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      {/* Hidden Heart Icon */}
      {!isFound && (
        <motion.div
          className={`cursor-pointer ${className}`}
          onClick={handleClick}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          title="Click me! 💕"
        >
          <div className="relative">
            <Heart 
              className="text-primary-red fill-primary-red drop-shadow-[0_0_8px_rgba(255,51,51,0.6)]" 
              size={32} 
              strokeWidth={2}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 blur-md bg-primary-red opacity-30 rounded-full"></div>
          </div>
        </motion.div>
      )}

      {/* Message Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 5 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bg-cream border-4 border-black shadow-[12px_12px_0_#000] max-w-lg w-full p-8 relative"
            >
              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-black text-white hover:bg-primary-red border-2 border-white hover:border-black p-2 transition-colors"
              >
                <X size={20} strokeWidth={3} />
              </button>

              {/* Confetti hearts */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-primary-red text-2xl"
                    initial={{ y: -20, x: `${Math.random() * 100}%`, opacity: 1 }}
                    animate={{ y: 400, opacity: 0 }}
                    transition={{ duration: 2 + Math.random(), delay: Math.random() * 0.5 }}
                  >
                    ❤️
                  </motion.div>
                ))}
              </div>

              {/* Message badge */}
              <div className="inline-block bg-primary-red text-white px-3 py-1 font-bold uppercase tracking-widest text-sm mb-4 rotate-1 border-2 border-black">
                Secret Message #{id}
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-display font-black uppercase mb-4 leading-none">
                {title}
              </h3>

              {/* Message */}
              <p className="text-lg font-sans leading-relaxed text-gray-800 mb-6">
                {message}
              </p>

              {/* Footer */}
              <div className="text-center text-sm font-mono text-gray-600">
                Keep exploring to find all 5 messages! 💕
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HiddenMessage;
