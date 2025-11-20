import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Heart, Sparkles, X } from 'lucide-react';

const FinalReward = () => {
  const [showModal, setShowModal] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const checkProgress = () => {
      const progress = JSON.parse(localStorage.getItem('lovejourney_progress') || '{"foundMessages": [], "finalRewardUnlocked": false}');
      
      if (progress.foundMessages.length === 5 && !progress.finalRewardUnlocked) {
        setIsUnlocked(true);
        setShowModal(true);
        progress.finalRewardUnlocked = true;
        localStorage.setItem('lovejourney_progress', JSON.stringify(progress));
      } else if (progress.finalRewardUnlocked) {
        setIsUnlocked(true);
      }
    };

    checkProgress();

    // Listen for message found events
    window.addEventListener('messageFound', checkProgress);
    return () => window.removeEventListener('messageFound', checkProgress);
  }, []);

  if (!isUnlocked) return null;

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80"
          onClick={() => setShowModal(false)}
        >
          {/* Confetti Animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(50)].map((_, i) => {
              const colors = ['text-primary-red', 'text-vibrant-orange', 'text-electric-blue', 'text-deep-purple', 'text-forest-green'];
              const symbols = ['❤️', '💕', '✨', '🎉', '💖', '🌟'];
              return (
                <motion.div
                  key={i}
                  className={`absolute ${colors[i % colors.length]} text-3xl`}
                  initial={{ 
                    y: -50, 
                    x: `${Math.random() * 100}%`,
                    rotate: Math.random() * 360,
                    opacity: 1
                  }}
                  animate={{ 
                    y: window.innerHeight + 100,
                    rotate: Math.random() * 720,
                    opacity: 0
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 2,
                    ease: "easeOut"
                  }}
                >
                  {symbols[Math.floor(Math.random() * symbols.length)]}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.5, rotate: 10 }}
            transition={{ type: "spring", duration: 0.7 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-bg-cream border-8 border-black shadow-[20px_20px_0_#000] max-w-2xl w-full p-10 relative overflow-hidden"
          >
            {/* Top decorative bar */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-primary-red via-vibrant-orange to-electric-blue"></div>

            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 bg-black text-white hover:bg-primary-red border-2 border-white hover:border-black p-2 transition-colors z-10"
            >
              <X size={24} strokeWidth={3} />
            </button>

            {/* Content */}
            <div className="text-center">
              {/* Trophy Icon */}
              <motion.div
                className="inline-block mb-6"
                animate={{
                  rotate: [0, -10, 10, -10, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                <Trophy className="text-forest-green w-24 h-24" strokeWidth={2} />
              </motion.div>

              {/* Title */}
              <div className="inline-block bg-forest-green text-white px-4 py-2 font-black uppercase tracking-widest text-sm mb-4 border-2 border-black rotate-1">
                🎉 Achievement Unlocked! 🎉
              </div>

              <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-6 leading-none">
                You Found <br/>
                <span className="text-primary-red">All 5 Messages!</span>
              </h2>

              {/* Final Message */}
              <div className="bg-white border-4 border-black p-8 mb-6 shadow-neo">
                <div className="flex justify-center gap-2 mb-4">
                  <Heart className="text-primary-red fill-primary-red" size={24} />
                  <Sparkles className="text-vibrant-orange" size={24} />
                  <Heart className="text-primary-red fill-primary-red" size={24} />
                </div>

                <h3 className="text-2xl font-display font-black uppercase mb-4">My Dimples,</h3>
                
                <div className="text-left space-y-4 text-lg leading-relaxed text-gray-800">
                  <p>
                    If you've made it here, it means you've explored every corner of our story. 
                    Every memory, every moment, every promise.
                  </p>
                  <p>
                    From that first video call where I fell for your dimpled smile, to the bike rides 
                    through Davanagere, to counting down the days until I could see you again...
                  </p>
                  <p>
                    This website is just the beginning of our forever. Every page, every photo, 
                    every hidden message was my way of saying: <strong>I choose you, always.</strong>
                  </p>
                  <p className="text-primary-red font-bold text-xl">
                    Thank you for being my adventure, my home, and my everything.
                  </p>
                  <p className="text-right italic mt-6">
                    Forever yours,<br/>
                    <span className="font-black text-xl">Pavan</span> ❤️
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-electric-blue border-2 border-black p-3">
                  <div className="text-3xl font-black text-white">5/5</div>
                  <div className="text-xs font-bold uppercase text-white">Messages</div>
                </div>
                <div className="bg-vibrant-orange border-2 border-black p-3">
                  <div className="text-3xl font-black text-white">100%</div>
                  <div className="text-xs font-bold uppercase text-white">Complete</div>
                </div>
                <div className="bg-forest-green border-2 border-black p-3">
                  <div className="text-3xl font-black text-white">∞</div>
                  <div className="text-xs font-bold uppercase text-white">Love</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FinalReward;
