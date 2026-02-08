import React, { useState } from 'react';
import SmallLetter from './SmallLetter';

const GlassJar = ({ topic, openedIds, onClick, isOpening }) => {
    const unreadCount = topic.messages.length - topic.messages.filter(m => openedIds.includes(m.id)).length;
    const totalCount = topic.messages.length;

    // Base color from topic
    const baseColor = topic.cssColor; // e.g., '#FF3333'

    const letters = Array.from({ length: totalCount }, (_, i) => ({
        id: `vis-${i}`,
    }));

    return (
        <div className="glass-jar-container group perspective-1000" onClick={() => onClick(topic.id)}>
            <div className={`glass-jar relative flex flex-wrap content-end justify-center gap-1 p-2 overflow-hidden transition-all duration-300
                ${unreadCount === 0 ? 'opacity-70 grayscale-[0.5]' : ''}
                ${isOpening ? 'is-opening' : ''}`}> {/* Added is-opening class trigger */}

                {/* Jar Lid - Styled via CSS */}
                <div className="jar-lid absolute -top-4 left-1/2 transform -translate-x-1/2 w-3/4 h-5 rounded-t-sm z-30 border border-gray-300">
                    {/* Lid detail */}
                    <div className="w-full h-1 bg-gray-400/30 mt-1"></div>
                </div>

                {/* Glass Reflection/Shine */}
                <div className="glass-shine absolute top-0 left-0 w-full h-full pointer-events-none z-10 bg-gradient-to-tr from-white/20 to-transparent rounded-[inherit]"></div>

                {/* Letters inside */}
                <div className="letters-pool w-full h-full flex flex-wrap-reverse justify-center items-end align-bottom gap-1 pb-1 px-1">
                    {letters.map((l, i) => (
                        <SmallLetter
                            key={l.id}
                            color={baseColor}
                            onClick={() => { }} // Pass through to container
                            style={{
                                transform: `rotate(${Math.random() * 60 - 30}deg) translateY(${Math.random() * 5}px)`,
                                zIndex: Math.floor(Math.random() * 10)
                            }}
                        />
                    ))}
                </div>

                <div className="jar-label absolute bottom-[-40px] w-full text-center transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-display font-bold text-lg text-gray-800 bg-white/90 px-3 py-1 rounded-full shadow-lg backdrop-blur-sm" style={{ color: topic.cssColor }}>
                        {topic.name}
                    </span>
                    <div className="text-xs text-gray-500 font-sans mt-1 bg-white/60 inline-block px-2 rounded-full">
                        {unreadCount}/{totalCount}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlassJar;
