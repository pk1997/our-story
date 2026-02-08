import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { topics } from './messages';

const MasterJar = ({ isOpened, onOpen, onSelectLetter }) => {
    // Generate a static "stack" of letters
    // We want to simulate hundreds of letters.
    // We'll create a density map where letters are clumped by color.
    const [stacks] = useState(() => {
        // We want grouped colors. So let's iterate topics and add chunks.
        const generated = [];
        let idCounter = 0;

        // Group by topic to satisfy "Group them by color"
        topics.forEach((topic) => {
            // Create a "clump" of this topic
            const count = 15 + Math.floor(Math.random() * 10); // 15-25 letters per topic

            for (let i = 0; i < count; i++) {
                generated.push({
                    id: idCounter++,
                    topicId: topic.id,
                    color: topic.cssColor,
                    // PACKING ALGORITHM: "On Sides"
                    // We want them to stand side-by-side. 
                    // So X should vary significantly, Y should vary slightly (imperfect alignment).
                    // Rotation should be slight (+- 5 deg) to show they are standing.
                    // We distribute them across the container width (-45% to 45%).
                    x: (Math.random() * 90) - 45,
                    y: (Math.random() * 20) - 10, // Slight vertical jitter
                    rotation: (Math.random() * 10) - 5,
                    width: 4 + Math.random() * 4, // Varying thickness
                    height: 40 + Math.random() * 20, // Varying height (standing up)
                    zIndex: Math.floor(Math.random() * 100)
                });
            }
        });

        // Shuffle slightly? No, user wants grouped by color. 
        // But maybe we want the grops to preserve order but jitter x/y?
        // Actually, let's sort by X so they render correctly for z-index overlapping if we want 3d feel?
        // Or just let them be clumps.
        // We need to map X to a "clump" position if we want them grouped VISUALLY left-to-right or something.
        // Let's assign regions.

        const regions = generated.length; // actually we need to re-map X based on group
        // Retrying generation with explicit grouping regions
        const distinctTopics = topics.length;
        const segmentWidth = 90 / distinctTopics; // Divide width by topics

        return generated.map((item, index) => {
            // Find which topic index this is
            const topicIndex = topics.findIndex(t => t.id === item.topicId);
            // Base center for this topic
            const regionCenter = -40 + (topicIndex * segmentWidth) + (segmentWidth / 2);
            // Jitter within region
            // Add global random shuffle for Z-index or keep mapped?
            return {
                ...item,
                x: regionCenter + (Math.random() * segmentWidth * 0.8) - (segmentWidth * 0.4),
                zIndex: index // Keep simple z-order or randomize
            };
        });
    });

    return (
        <div className={`master-jar-wrapper ${isOpened ? 'is-open' : ''}`}>

            {/* The Jar Container */}
            <motion.div
                className="master-jar relative mx-auto"
                onClick={!isOpened ? onOpen : undefined}
                animate={isOpened ? { scale: 1.6, y: 120 } : { scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {/* Lid */}
                <motion.div
                    className="jar-lid-master absolute w-full z-50 left-0"
                    animate={isOpened ? { y: -200, rotate: 15, opacity: 0 } : { y: -20, rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="lid-handle"></div>
                    <div className="lid-body"></div>
                </motion.div>

                {/* Glass Body */}
                <div className="glass-body-master relative overflow-hidden">
                    {/* Reflections */}
                    <div className="glass-highlight-master"></div>

                    {/* The "Inside" Content */}
                    <div className="jar-contents-stack w-full h-full flex flex-col items-center justify-end pb-4">
                        {isOpened ? (
                            // INTERACTIVE MODE: Side-by-Side letters (Standing)
                            <motion.div
                                className="internal-stack-view w-full h-full relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {stacks.map((letter) => (
                                    <div
                                        key={letter.id}
                                        className="vertical-letter-edge absolute bottom-4 cursor-pointer transition-transform hover:scale-110 hover:z-50"
                                        style={{
                                            backgroundColor: letter.color,
                                            left: `${50 + letter.x}%`, // Correctly position relative to container width
                                            transform: `translateX(-50%) rotate(${letter.rotation}deg)`,
                                            width: `${letter.width}%`, // Relative width
                                            height: `${letter.height}%`, // Tall (standing)
                                            zIndex: letter.zIndex,
                                            boxShadow: '-1px 0 2px rgba(0,0,0,0.1), 1px 0 2px rgba(0,0,0,0.1)', // Depth on sides
                                            borderTop: '1px solid rgba(255,255,255,0.4)', // Top edge highlight
                                            opacity: 0.95
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation(); // Critical!
                                            console.log("Clicked letter:", letter.id); // Debug
                                            onSelectLetter(letter.topicId, { x: e.clientX, y: e.clientY });
                                        }}
                                    />
                                ))}
                            </motion.div>
                        ) : (
                            // CLOSED MODE: Messy pile from side view
                            <div className="side-view-pile w-full h-full relative px-4">
                                {stacks
                                    .filter((_, i) => i % 2 === 0) // Take every 2nd item to reduce count but keep distribution
                                    .slice(0, 60)
                                    .map((letter) => (
                                        <div
                                            key={`side-${letter.id}`}
                                            className="absolute bg-white/80"
                                            style={{
                                                backgroundColor: letter.color,
                                                width: '30px',
                                                height: '20px',
                                                left: `${50 + letter.x}%`,
                                                bottom: `${letter.zIndex * 1.5}px`,
                                                transform: `rotate(${letter.rotation * 5}deg)`,
                                                opacity: 0.8,
                                                borderRadius: '2px',
                                                boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                                            }}
                                        />
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Visual enhancement for the "table" or shelf if needed */}
            {!isOpened && (
                <div className="jar-shadow absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-black/20 blur-xl rounded-full -z-10"></div>
            )}
        </div>
    );
};

export default MasterJar;
