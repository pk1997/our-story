import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { topics, getRandomMessage } from './messages';
import MasterJar from './MasterJar';
import Envelope from './Envelope';
import MessageReveal from './MessageReveal';
import Hearts from './Hearts';
import SmallLetter from './SmallLetter'; // Import SmallLetter
import './romantic.css';

const STORAGE_KEY = 'love-jar-opened';

const LoveJar = () => {
    // Views: 'closed' | 'opened' (zoomed in) | 'envelope' | 'message'
    const [view, setView] = useState('closed');
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [currentMessage, setCurrentMessage] = useState(null);
    const [openedIds, setOpenedIds] = useState([]);
    const [extractionPoint, setExtractionPoint] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                setOpenedIds(JSON.parse(stored));
            } catch {
                setOpenedIds([]);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(openedIds));
    }, [openedIds]);

    const handleJarOpen = () => {
        setView('opened');
    };

    const handleLetterSelect = (topicId, clickPosition) => {
        setExtractionPoint(clickPosition);
        setSelectedTopic(topicId);

        // Transition to extraction animation
        setView('extracting');
    };

    const handleEnvelopeOpen = () => {
        if (!selectedTopic) return;

        const message = getRandomMessage(selectedTopic, openedIds);
        if (message) {
            setCurrentMessage(message);
            if (!openedIds.includes(message.id)) {
                setOpenedIds((prev) => [...prev, message.id]);
            }
        }
        setView('message');
    };

    const handleClose = () => {
        // Reset everything
        setView('closed');
        setSelectedTopic(null);
        setCurrentMessage(null);
    };

    const handleBackToJar = () => {
        // Just close the message/envelope but stay at jar? 
        // Or close jar? Let's close jar for now to re-pick or see the pile.
        setView('closed');
        setSelectedTopic(null);
        setCurrentMessage(null);
    };

    const getTopicData = () => {
        return topics.find((t) => t.id === selectedTopic);
    };

    return (
        <div className="love-jar-wrapper font-sans min-h-screen relative overflow-hidden bg-bg-cream flex flex-col items-center">
            {/* <Hearts /> */}

            <div className={`relative z-10 w-full h-full flex flex-col items-center justify-center transition-all duration-700 ${view === 'opened' ? 'pt-10' : 'pt-20'}`}>

                <header className={`jar-header text-center transition-all duration-500 z-30 ${view === 'opened' ? 'opacity-0 translate-y-[-50px] pointer-events-none absolute' : 'opacity-100 mb-8'}`}>
                    <h1 className="jar-title font-display text-4xl md:text-6xl font-black text-forest-green mb-4 drop-shadow-sm">
                        Our Love Jar
                    </h1>
                    <p className="jar-subtitle text-lg md:text-xl text-gray-600 font-sans italic">
                        One jar, a thousand feelings. What do you need today?
                    </p>
                </header>

                {/* Main Jar Interaction Area */}
                <div className="relative w-full flex-grow flex items-center justify-center">
                    <MasterJar
                        isOpened={view !== 'closed'}
                        onOpen={handleJarOpen}
                        onSelectLetter={handleLetterSelect}
                    />

                    {/* Legend - Updated to be persistent and mobile friendly */}
                    <div className={`absolute pointer-events-none md:pointer-events-auto top-20 right-4 md:top-1/2 md:-right-4 md:transform md:-translate-y-1/2 flex flex-col gap-2 md:gap-3 transition-opacity duration-500 ${view === 'envelope' || view === 'message' ? 'opacity-0' : 'opacity-100'}`}>
                        {topics.map((topic) => (
                            <div key={topic.id} className="flex items-center gap-2 bg-white/80 p-1 md:p-2 rounded-lg shadow-sm backdrop-blur-sm pointer-events-auto" title={topic.description}>
                                <div className="w-4 h-4 md:w-6 md:h-6 rounded-full shadow-inner flex-shrink-0" style={{ backgroundColor: topic.cssColor }}></div>
                                <span className="text-xs md:text-sm font-semibold text-gray-700">{topic.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Back Button for Inside View */}
                {view === 'opened' && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={handleClose}
                        className="absolute bottom-10 z-50 bg-white/80 px-6 py-2 rounded-full shadow-lg text-gray-800 hover:bg-white font-bold"
                    >
                        Close Jar
                    </motion.button>
                )}

                <AnimatePresence>
                    {view === 'extracting' && (
                        <motion.div
                            key="extracting-letter"
                            initial={{
                                position: 'fixed',
                                top: extractionPoint.y,
                                left: extractionPoint.x,
                                x: '-50%',
                                y: '-50%',
                                scale: 0.5,
                                rotate: Math.random() * 30 - 15,
                                opacity: 1,
                                zIndex: 100
                            }}
                            animate={{
                                top: '50%',
                                left: '50%',
                                scale: 8,
                                rotate: 0,
                                opacity: 1
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            onAnimationComplete={() => setView('envelope')}
                        >
                            <SmallLetter color={getTopicData()?.cssColor} />
                        </motion.div>
                    )}

                    {view === 'envelope' && (
                        <Envelope
                            key="envelope"
                            topicEmoji={getTopicData()?.emoji}
                            onOpen={handleEnvelopeOpen}
                            onClose={handleBackToJar}
                        />
                    )}

                    {view === 'message' && currentMessage && (
                        <MessageReveal
                            key="message"
                            message={currentMessage}
                            topicEmoji={getTopicData()?.emoji}
                            onClose={handleClose}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default LoveJar;
