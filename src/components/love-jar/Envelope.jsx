import React, { useState } from 'react';

const Envelope = ({ topicEmoji, onOpen, onClose }) => {
    const [isOpening, setIsOpening] = useState(false);

    const handleClick = () => {
        if (!isOpening) {
            setIsOpening(true);
            // Wait for animation to complete before revealing message
            setTimeout(() => {
                onOpen();
            }, 600);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget && !isOpening) {
            onClose();
        }
    };

    return (
        <div className="envelope-overlay fixed inset-0 bg-black/60 flex items-center justify-center z-[100] animate-fade-in" onClick={handleOverlayClick}>
            <div className="envelope-container relative cursor-pointer" onClick={handleClick}>

                {/* Envelope Body */}
                <div className={`envelope w-80 h-56 bg-cream shadow-2xl relative transform transition-transform duration-700 ease-in-out ${isOpening ? 'opening' : 'hover:scale-105'}`}
                    style={{
                        background: 'linear-gradient(180deg, #fffbf7 0%, #ffffff 100%)',
                        borderRadius: '0.5rem',
                        transformStyle: 'preserve-3d'
                    }}>

                    {/* Flap */}
                    <div className="envelope-flap absolute top-0 left-0 w-full h-1/2 bg-gray-100 z-20 transition-transform duration-500 origin-top"
                        style={{
                            background: 'linear-gradient(180deg, #f3f4f6 0%, #e5e7eb 100%)',
                            clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                            backfaceVisibility: 'hidden'
                        }}>
                    </div>

                    {/* Seal */}
                    <span className="envelope-seal absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl z-30 drop-shadow-md animate-pulse">
                        {topicEmoji || '💌'}
                    </span>

                </div>

                {!isOpening && (
                    <span className="envelope-hint absolute -bottom-12 left-1/2 -translate-x-1/2 text-white font-sans text-sm tracking-wider animate-bounce whitespace-nowrap">
                        Tap to open your letter
                    </span>
                )}
            </div>

            {/* Styles for Opening Animation (inlined for simplicity or moved to CSS) */}
            <style jsx>{`
                .envelope.opening {
                    animation: envelopeOpen 0.8s forwards;
                }
                .envelope.opening .envelope-flap {
                    transform: rotateX(180deg);
                    z-index: 0;
                }
                @keyframes envelopeOpen {
                    0% { transform: rotateX(0); }
                    50% { transform: rotateX(-30deg) translateY(-20px); }
                    100% { transform: rotateX(0) translateY(0) scale(0.9); opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default Envelope;
