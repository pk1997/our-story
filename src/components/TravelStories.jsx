import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, MapPin, X, FolderOpen, FileText, Image as ImageIcon } from 'lucide-react';
import { getAssetUrl } from '../utils';

const travelStories = [
  {
    title: "The Last Day Before Dublin",
    location: "Davanagere, India",
    date: "May 30, 2025",
    story: "One perfect day before 7,000 km would separate us. A bike ride, a first hug, tears, and a promise.",
    emoji: "🏍️",
    color: "bg-white",
    headerColor: "bg-primary-red",
    photos: [
      {
        caption: "Railway Station Reunion",
        description: "She was waiting with her bike. My heart skipped when I saw her smile.",
        image: getAssetUrl("/assets/placeholder_railway.png")
      },
      {
        caption: "The Long Ride",
        description: "Wind in our hair, her arms around me. The city blurred, but this moment was crystal clear.",
        image: getAssetUrl("/assets/placeholder_bike.png")
      },
      {
        caption: "Coffee & Courage",
        description: "Our first hug over coffee. Nervous hands, racing hearts, and the world fading away.",
        image: getAssetUrl("/assets/placeholder_coffee.png")
      },
      {
        caption: "Temple Prayers",
        description: "Side by side, we shared our dreams, our fears, our everything. This felt sacred.",
        image: getAssetUrl("/assets/placeholder_temple.png")
      },
      {
        caption: "Meeting Her World",
        description: "Her brothers, her friends, lunch filled with laughter. I was becoming part of her story.",
        image: getAssetUrl("/assets/placeholder_family.png")
      },
      {
        caption: "The Goodbye Kiss",
        description: "Tears streaming down both our faces. I kissed her forehead and whispered, 'I'll be back.' She believed me.",
        image: getAssetUrl("/assets/placeholder_goodbye.png")
      }
    ]
  },
  {
    title: "The Secret Mysore Escape",
    location: "Mysore, India",
    date: "October 24-25, 2025",
    story: "A secret reunion in my college town. Red roses, new friends, late-night rides, and our first night together.",
    emoji: "🌹",
    color: "bg-white",
    headerColor: "bg-deep-purple",
    photos: [
      {
        caption: "Red Roses & The Official Proposal",
        description: "I showed up at her hotel with red roses. She said yes, officially. Our secret was just beginning.",
        image: getAssetUrl("/assets/mysore_roses.png")
      },
      {
        caption: "Meeting My Friends",
        description: "Restaurant dinner with my closest friends. She fit right in, laughing and sharing stories.",
        image: getAssetUrl("/assets/mysore_friends.png")
      },
      {
        caption: "Riding Under the Stars",
        description: "After dinner, riding back on the Activa. The Mysore night air, her arms around me, everything felt perfect.",
        image: getAssetUrl("/assets/mysore_night.png")
      },
      {
        caption: "Late Night College Tour",
        description: "Showed her my college under the stars. Every corner had a story, now she was part of them.",
        image: getAssetUrl("/assets/mysore_college.png")
      },
      {
        caption: "Campus Memories",
        description: "'This is where I became me,' I told her. 'And now you're here.'",
        image: getAssetUrl("/assets/mysore_campus.png")
      },
      {
        caption: "Our First Night Together",
        description: "Back at the hotel, all walls down. The night we truly became 'us.'",
        image: getAssetUrl("/assets/mysore_hotel.png")
      }
    ]
  },
  {
    title: "Chikmagalur Escape",
    location: "Chikmagalur, India",
    date: "October 25-26, 2025",
    story: "A romantic getaway to the hills. Jacuzzi conversations, candlelit dinners, and morning cycling in the mist.",
    emoji: "🛁",
    color: "bg-white",
    headerColor: "bg-electric-blue",
    photos: [
      {
        caption: "Resort Arrival",
        description: "Arriving at our beautiful hill resort. Lush greenery and excitement for our getaway.",
        image: getAssetUrl("/assets/chikmagalur_resort.png")
      },
      {
        caption: "",
        description: "",
        image: getAssetUrl("/assets/chikmagalur_shower.png")
      },
      {
        caption: "",
        description: "",
        image: getAssetUrl("/assets/chikmagalur_jacuzzi.png")
      },
      {
        caption: "Romantic Dinner",
        description: "Candlelit dinner with a view. Holding hands and celebrating us.",
        image: getAssetUrl("/assets/chikmagalur_dinner.png")
      },
      {
        caption: "Moonlit Walk",
        description: "Walking hand in hand through the resort gardens under the stars.",
        image: getAssetUrl("/assets/chikmagalur_walk.png")
      },
      {
        caption: "Morning Cycling",
        description: "Cycling through the coffee plantations in the fresh morning air.",
        image: getAssetUrl("/assets/chikmagalur_cycling.png")
      }
    ]
  },
  {
    title: "Future Plans",
    location: "Dream Destination",
    date: "TBD",
    story: "Where we want to go next... Our dream travel destination together.",
    emoji: "🌍",
    color: "bg-white",
    headerColor: "bg-forest-green",
    photos: []
  }
];

const wrongMessages = [
  "ACCESS DENIED. TRY 'CUTE' MODE.",
  "INCORRECT. HINT: IT'S A NICKNAME.",
  "ERROR 404: CUTENESS NOT FOUND.",
  "TRY AGAIN. THINK 'DIMPLES'.",
  "NOPE. IT STARTS WITH 'D'...",
  "SYSTEM LOCKED. SAY THE MAGIC WORD.",
];

const TravelStories = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [shake, setShake] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password.toLowerCase().trim() === 'dhuva') {
      setIsUnlocked(true);
      setErrorMessage('');
    } else {
      setShake(true);
      setErrorMessage(wrongMessages[attempts % wrongMessages.length]);
      setAttempts(attempts + 1);
      setTimeout(() => setShake(false), 500);
      setPassword('');
    }
  };

  const openStoryModal = (story) => {
    if (story.photos && story.photos.length > 0) {
      setSelectedStory(story);
    }
  };

  const closeStoryModal = () => {
    setSelectedStory(null);
  };

  return (
    <section className="min-h-screen bg-bg-cream relative overflow-hidden py-20 border-t-neo border-black">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-lg mx-auto"
            >
              <motion.div
                animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
                className="bg-white border-4 border-black shadow-neo p-8 relative"
              >
                {/* Top Secret Stamp */}
                <div className="absolute -top-6 -right-6 bg-primary-red text-white font-black uppercase px-4 py-2 rotate-12 border-2 border-black shadow-[4px_4px_0_#000]">
                  Top Secret
                </div>

                <div className="text-center mb-8">
                  <motion.div
                    animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="inline-block mb-6 bg-black text-white p-4 rounded-full border-4 border-electric-blue"
                  >
                    <Lock size={48} />
                  </motion.div>
                  <h2 className="text-4xl font-display font-black uppercase mb-2 tracking-tighter">Restricted Access</h2>
                  <p className="font-mono text-sm text-gray-600 bg-gray-100 p-2 border border-black inline-block">
                    SECURITY LEVEL: MAXIMUM CUTENESS
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <label className="block font-bold uppercase text-xs mb-1 ml-1">Enter Passcode</label>
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="TYPE HERE..."
                      className="w-full px-4 py-4 border-4 border-black font-mono text-xl focus:outline-none focus:ring-4 focus:ring-electric-blue bg-gray-50 placeholder-gray-400 uppercase"
                      autoFocus
                    />
                  </div>
                  
                  <AnimatePresence>
                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-primary-red text-white border-2 border-black p-2 text-center font-mono text-xs font-bold"
                      >
                        {errorMessage}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    className="w-full bg-black text-white font-black py-4 px-6 border-2 border-transparent hover:bg-electric-blue hover:border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all uppercase tracking-widest text-lg"
                  >
                    Authenticate
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t-2 border-black border-dashed text-center">
                   <p className="text-xs font-mono text-gray-500">ATTEMPTS: {attempts}</p>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-block mb-4 bg-forest-green text-white p-4 rounded-full border-4 border-black"
                >
                  <Unlock size={48} />
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-4 tracking-tighter">Access Granted</h2>
                <div className="inline-block bg-black text-white px-4 py-1 font-mono text-sm uppercase">
                  File Status: Unclassified
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {travelStories.map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      y: -8, 
                      rotate: index % 2 === 0 ? -1 : 1,
                      boxShadow: "12px 12px 0px #000"
                    }}
                    onClick={() => openStoryModal(story)}
                    className={`${story.color} border-4 border-black shadow-neo p-0 ${story.photos && story.photos.length > 0 ? 'cursor-pointer' : 'cursor-default'} relative group overflow-hidden`}
                  >
                    {/* Folder Tab */}
                    <div className={`h-12 ${story.headerColor} border-b-4 border-black flex items-center px-6 justify-between`}>
                      <div className="flex items-center gap-2 text-white">
                        <FolderOpen size={20} />
                        <span className="font-bold text-xs uppercase tracking-wider">CASE FILE #{index + 1}</span>
                      </div>
                      <div className="w-3 h-3 bg-white rounded-full border-2 border-black"></div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="text-6xl filter drop-shadow-md">{story.emoji}</div>
                        <div className="flex-1">
                          <h3 className="font-display font-black text-2xl uppercase mb-2 leading-none">{story.title}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-mono text-gray-600 border-t-2 border-black border-dashed pt-2 mt-2">
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{story.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FileText size={14} />
                              <span>{story.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="font-sans text-base font-medium leading-relaxed text-gray-800 border-l-4 border-black pl-4">
                        {story.story}
                      </p>
                      
                      {story.photos && story.photos.length > 0 && (
                        <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white bg-black inline-block px-3 py-1 group-hover:bg-electric-blue transition-colors">
                          <ImageIcon size={14} />
                          <span>View {story.photos.length} Evidence Photos</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Photo Story Modal */}
        <AnimatePresence>
          {selectedStory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeStoryModal}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-bg-cream border-4 border-black shadow-[16px_16px_0_#fff] max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                {/* Header Bar */}
                <div className={`h-16 ${selectedStory.headerColor} border-b-4 border-black flex items-center justify-between px-6 sticky top-0 z-20`}>
                  <div className="flex items-center gap-3 text-white">
                    <FolderOpen size={24} />
                    <span className="font-black text-lg uppercase tracking-widest hidden md:inline">{selectedStory.title}</span>
                  </div>
                  <button
                    onClick={closeStoryModal}
                    className="bg-black text-white hover:bg-white hover:text-black border-2 border-white hover:border-black p-2 transition-colors"
                  >
                    <X size={24} strokeWidth={3} />
                  </button>
                </div>

                <div className="p-8 md:p-12">
                  {/* Story Intro */}
                  <div className="text-center mb-16 border-b-4 border-black pb-12 border-dashed">
                    <span className="text-8xl mb-6 block filter drop-shadow-lg">{selectedStory.emoji}</span>
                    <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-6 leading-none">{selectedStory.title}</h2>
                    <p className="text-xl md:text-2xl font-serif italic max-w-3xl mx-auto text-gray-800 leading-relaxed">
                      "{selectedStory.story}"
                    </p>
                  </div>

                  {/* Photo Grid - Polaroid Style */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {selectedStory.photos.map((photo, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, rotate: 0 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          rotate: index % 2 === 0 ? -2 : 2
                        }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.05, 
                          rotate: 0,
                          zIndex: 10,
                          boxShadow: "16px 16px 0px rgba(0,0,0,0.2)"
                        }}
                        className="bg-white p-4 pb-20 shadow-[8px_8px_0_#000] border-4 border-black relative group"
                      >
                        {/* Tape Effect */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 rotate-1 shadow-sm z-10"></div>

                        {/* Photo */}
                        <div className="aspect-square bg-gray-100 mb-6 overflow-hidden border-2 border-black grayscale group-hover:grayscale-0 transition-all duration-500">
                          <img 
                            src={photo.image} 
                            alt={photo.caption}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f0f0f0" width="400" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EPhoto Placeholder%3C/text%3E%3C/svg%3E';
                            }}
                          />
                        </div>
                        
                        {/* Caption */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <h4 className="font-display font-black text-lg uppercase mb-2 leading-none">{photo.caption}</h4>
                          <p className="font-mono text-xs text-gray-600 leading-tight border-t-2 border-black pt-2">{photo.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TravelStories;
