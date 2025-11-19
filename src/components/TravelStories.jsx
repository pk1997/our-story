import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, MapPin } from 'lucide-react';

const travelStories = [
  {
    title: "The Last Day Before Dublin",
    location: "Davanagere, India",
    date: "May 30, 2025",
    story: "One perfect day before 7,000 km would separate us. A bike ride, a first hug, tears, and a promise.",
    emoji: "🏍️",
    color: "bg-pink-100",
    photos: [
      {
        caption: "Railway Station Reunion",
        description: "She was waiting with her bike. My heart skipped when I saw her smile.",
        image: "/assets/placeholder_railway.png"
      },
      {
        caption: "The Long Ride",
        description: "Wind in our hair, her arms around me. The city blurred, but this moment was crystal clear.",
        image: "/assets/placeholder_bike.png"
      },
      {
        caption: "Coffee & Courage",
        description: "Our first hug over coffee. Nervous hands, racing hearts, and the world fading away.",
        image: "/assets/placeholder_coffee.png"
      },
      {
        caption: "Temple Prayers",
        description: "Side by side, we shared our dreams, our fears, our everything. This felt sacred.",
        image: "/assets/placeholder_temple.png"
      },
      {
        caption: "Meeting Her World",
        description: "Her brothers, her friends, lunch filled with laughter. I was becoming part of her story.",
        image: "/assets/placeholder_family.png"
      },
      {
        caption: "The Goodbye Kiss",
        description: "Tears streaming down both our faces. I kissed her forehead and whispered, 'I'll be back.' She believed me.",
        image: "/assets/placeholder_goodbye.png"
      }
    ]
  },
  {
    title: "The Secret Mysore Escape",
    location: "Mysore, India",
    date: "October 24-25, 2025",
    story: "A secret reunion in my college town. Red roses, new friends, late-night rides, and our first night together.",
    emoji: "🌹",
    color: "bg-red-100",
    photos: [
      {
        caption: "Red Roses & The Official Proposal",
        description: "I showed up at her hotel with red roses. She said yes, officially. Our secret was just beginning.",
        image: "/assets/mysore_roses.png"
      },
      {
        caption: "Meeting My Friends",
        description: "Restaurant dinner with my closest friends. She fit right in, laughing and sharing stories.",
        image: "/assets/mysore_friends.png"
      },
      {
        caption: "Riding Under the Stars",
        description: "After dinner, riding back on the Activa. The Mysore night air, her arms around me, everything felt perfect.",
        image: "/assets/mysore_night.png"
      },
      {
        caption: "Late Night College Tour",
        description: "Showed her my college under the stars. Every corner had a story, now she was part of them.",
        image: "/assets/mysore_college.png"
      },
      {
        caption: "Campus Memories",
        description: "'This is where I became me,' I told her. 'And now you're here.'",
        image: "/assets/mysore_campus.png"
      },
      {
        caption: "Our First Night Together",
        description: "Back at the hotel, all walls down. The night we truly became 'us.'",
        image: "/assets/mysore_hotel.png"
      }
    ]
  },
  {
    title: "Chikmagalur Escape",
    location: "Chikmagalur, India",
    date: "October 25-26, 2025",
    story: "A romantic getaway to the hills. Jacuzzi conversations, candlelit dinners, and morning cycling in the mist.",
    emoji: "🛁",
    color: "bg-blue-100",
    photos: [
      {
        caption: "Resort Arrival",
        description: "Arriving at our beautiful hill resort. Lush greenery and excitement for our getaway.",
        image: "/assets/chikmagalur_resort.png"
      },
      {
        caption: "",
        description: "",
        image: "/assets/chikmagalur_shower.png"
      },
      {
        caption: "",
        description: "",
        image: "/assets/chikmagalur_jacuzzi.png"
      },
      {
        caption: "Romantic Dinner",
        description: "Candlelit dinner with a view. Holding hands and celebrating us.",
        image: "/assets/chikmagalur_dinner.png"
      },
      {
        caption: "Moonlit Walk",
        description: "Walking hand in hand through the resort gardens under the stars.",
        image: "/assets/chikmagalur_walk.png"
      },
      {
        caption: "Morning Cycling",
        description: "Cycling through the coffee plantations in the fresh morning air.",
        image: "/assets/chikmagalur_cycling.png"
      }
    ]
  },
  {
    title: "Future Plans",
    location: "Dream Destination",
    date: "TBD",
    story: "Where we want to go next... Our dream travel destination together.",
    emoji: "🌍",
    color: "bg-green-100",
    photos: []
  }
];

const wrongMessages = [
  "Nope! Think cuter... like, REALLY cute 🥺",
  "Wrong! Hint: It's what I whisper when you're being adorable 💕",
  "Not quite! Try the nickname that's just ours 😊",
  "Close, but no! It's shorter than you think... and sweeter 🍯",
  "Nah! Think: What makes your dimple show when I say it? 😄",
  "Wrong again! Okay fine, it starts with 'dh...' 🤫",
  "Still wrong! You know this one... I say it all the time! 💝",
  "Nope! It's the word that makes you smile every time 😌"
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
    <section className="min-h-screen bg-bg-cream relative overflow-hidden py-20">
      {/* Background Emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-10 left-10 text-6xl opacity-15 animate-float-slow">✈️</div>
        <div className="absolute top-20 right-20 text-5xl opacity-20 animate-float-medium">🗺️</div>
        <div className="absolute bottom-32 left-1/4 text-6xl opacity-15 animate-pulse-slow">🌍</div>
        <div className="absolute top-1/3 right-10 text-5xl opacity-20 animate-bounce-slow">📸</div>
        <div className="absolute bottom-10 left-10 text-6xl opacity-15 animate-float-fast">🎒</div>
        <div className="absolute top-1/4 left-1/3 text-4xl opacity-10 animate-spin-slow">🧳</div>
        <div className="absolute bottom-1/4 right-1/3 text-5xl opacity-15 animate-float-medium">🏔️</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-md mx-auto"
            >
              <motion.div
                animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
                className="bg-white border-4 border-black shadow-[12px_12px_0_#000] p-8"
              >
                <div className="text-center mb-6">
                  <motion.div
                    animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="inline-block mb-4"
                  >
                    <Lock size={64} className="text-purple-500" />
                  </motion.div>
                  <h2 className="text-4xl font-display font-black uppercase mb-2">Travel Stories</h2>
                  <p className="text-sm text-gray-600">🔒 Password Required</p>
                  <p className="text-xs text-purple-500 mt-2 italic">Hint: Our special nickname... the one that makes you smile 💕</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter the secret word..."
                    className="w-full px-4 py-3 border-2 border-black font-sans text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    autoFocus
                  />
                  
                  <AnimatePresence>
                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-pink-100 border-2 border-pink-500 p-3 text-center"
                      >
                        <p className="text-sm font-bold text-pink-700">{errorMessage}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    className="w-full bg-purple-500 text-white font-black py-3 px-6 border-2 border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all uppercase tracking-widest"
                  >
                    Unlock Stories
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">Attempts: {attempts}</p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-block mb-4"
                >
                  <Unlock size={64} className="text-green-500" />
                </motion.div>
                <h2 className="text-5xl font-display font-black uppercase mb-2">Travel Stories</h2>
                <p className="text-lg text-gray-600">✨ Unlocked! Here are our adventures together ✨</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {travelStories.map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      y: -8, 
                      rotate: index % 2 === 0 ? -2 : 2,
                      boxShadow: "12px 12px 0px #000"
                    }}
                    onClick={() => openStoryModal(story)}
                    className={`${story.color} border-2 border-black shadow-[6px_6px_0_#000] p-6 ${story.photos && story.photos.length > 0 ? 'cursor-pointer' : 'cursor-default'} relative group`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-5xl">{story.emoji}</span>
                      <div className="flex-1">
                        <h3 className="font-display font-black text-xl uppercase mb-1">{story.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin size={14} />
                          <span>{story.location}</span>
                          <span>•</span>
                          <span>{story.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="font-sans text-sm leading-relaxed text-gray-800">{story.story}</p>
                    
                    {story.photos && story.photos.length > 0 && (
                      <div className="mt-4 text-xs font-bold text-purple-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        ✨ Click to view {story.photos.length} photos
                      </div>
                    )}
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
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-bg-cream border-4 border-black shadow-[16px_16px_0_#000] max-w-6xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
              >
                {/* Close Button */}
                <button
                  onClick={closeStoryModal}
                  className="absolute top-4 right-4 bg-red-500 text-white font-black px-4 py-2 border-2 border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all uppercase z-10"
                >
                  ✕ Close
                </button>

                {/* Story Header */}
                <div className="text-center mb-8">
                  <span className="text-6xl mb-4 block">{selectedStory.emoji}</span>
                  <h2 className="text-4xl font-display font-black uppercase mb-2">{selectedStory.title}</h2>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <MapPin size={16} />
                    <span>{selectedStory.location}</span>
                    <span>•</span>
                    <span>{selectedStory.date}</span>
                  </div>
                  <p className="text-lg mt-4 max-w-2xl mx-auto italic">{selectedStory.story}</p>
                </div>

                {/* Photo Grid - Polaroid Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {selectedStory.photos.map((photo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, rotate: 0 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        rotate: index % 3 === 0 ? -2 : index % 3 === 1 ? 2 : -1
                      }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05, 
                        rotate: 0,
                        zIndex: 10
                      }}
                      className="bg-white p-4 pb-16 shadow-[8px_8px_0_#000] border-2 border-black relative"
                    >
                      {/* Photo */}
                      <div className="aspect-square bg-gray-200 mb-4 overflow-hidden border border-gray-300">
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
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="font-display font-bold text-sm uppercase mb-1">{photo.caption}</h4>
                        <p className="font-sans text-xs text-gray-600 italic leading-tight">{photo.description}</p>
                      </div>
                    </motion.div>
                  ))}
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
