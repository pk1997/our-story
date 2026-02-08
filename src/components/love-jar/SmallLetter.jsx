import React, { useRef } from 'react';

const SmallLetter = ({ color, onClick, delayed = false, style = {} }) => {
    // Generate random variance
    const rotation = useRef(Math.random() * 30 - 15).current;

    return (
        <div
            className="small-letter cursor-pointer hover:scale-110 transition-transform duration-200"
            style={{
                transform: `rotate(${rotation}deg)`,
                backgroundColor: color || '#fff',
                // Add a delay if requested for staggered entrance
                animationDelay: delayed ? `${Math.random() * 0.5}s` : '0s',
                ...style // Allow overriding animations
            }}
            onClick={onClick}
        >
            <div className="letter-fold"></div>
        </div>
    );
};

export default SmallLetter;
