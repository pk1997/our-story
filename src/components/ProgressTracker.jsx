import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Trophy, Info } from 'lucide-react';

const ProgressTracker = () => {
  const [foundCount, setFoundCount] = useState(0);
  const [justFoundMessage, setJustFoundMessage] = useState(false);
  const totalMessages = 5;

  useEffect(() => {
    // Load initial progress
    const progress = JSON.parse(localStorage.getItem('lovejourney_progress') || '{"foundMessages": []}');
    setFoundCount(progress.foundMessages.length);

    // Listen for new messages found
    const handleMessageFound = (e) => {
      setFoundCount(e.detail.total);
      setJustFoundMessage(true);
      setTimeout(() => setJustFoundMessage(false), 2000);
    };

    window.addEventListener('messageFound', handleMessageFound);
    return () => window.removeEventListener('messageFound', handleMessageFound);
  }, []);

  const progress = (foundCount / totalMessages) * 100;
  const isComplete = foundCount === totalMessages;

  const getColorClass = () => {
    if (isComplete) return 'bg-forest-green';
    if (foundCount >= 5) return 'bg-vibrant-orange';
    return 'bg-primary-red';
  };

  const storedProgress = JSON.parse(localStorage.getItem('lovejourney_progress') || '{"foundMessages": []}');
  const foundIds = storedProgress.foundMessages;

  return (
    <>
      {/* Main Progress Tracker */}
      <motion.div
        className="fixed bottom-6 right-6 z-[9998]"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", delay: 1 }}
      >
        <motion.div
          className={`bg-white border-4 border-black shadow-[6px_6px_0_#000] p-4 ${justFoundMessage ? 'animate-bounce' : ''}`}
          whileHover={{ scale: 1.05, boxShadow: "8px 8px 0px #000" }}
          animate={justFoundMessage ? { scale: [1, 1.2, 1] } : {}}
        >
          {/* Icon */}
          <div className="flex items-center gap-3 mb-2">
            {isComplete ? (
              <Trophy className="text-forest-green" size={24} strokeWidth={3} />
            ) : (
              <Heart className="text-primary-red fill-primary-red" size={24} strokeWidth={2} />
            )}
            <span className="font-display font-black text-lg">
              {foundCount}/{totalMessages}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-40 h-3 bg-gray-200 border-2 border-black">
            <motion.div
              className={`h-full ${getColorClass()}`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Status Text */}
          <div className="text-xs font-bold uppercase mt-2 text-center">
            {isComplete ? 'All Found! 🎉' : 'Messages Found'}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProgressTracker;
