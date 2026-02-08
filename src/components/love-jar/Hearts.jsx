import React from 'react';

const Hearts = () => {
    // Create array of hearts with random properties
    const hearts = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 15}s`,
        duration: `${15 + Math.random() * 10}s`,
        size: `${1 + Math.random() * 1.5}rem`,
    }));

    return (
        <div className="hearts-bg">
            {hearts.map((heart) => (
                <span
                    key={heart.id}
                    className="floating-heart"
                    style={{
                        left: heart.left,
                        animationDelay: heart.delay,
                        animationDuration: heart.duration,
                        fontSize: heart.size,
                    }}
                >
                    {['💕', '💗', '💖', '💝', '🩷'][heart.id % 5]}
                </span>
            ))}
        </div>
    );
};

export default Hearts;
