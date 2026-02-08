import React, { useEffect } from 'react';

const MessageReveal = ({ message, topicEmoji, onClose }) => {
    // Create heart particles on mount
    useEffect(() => {
        const particles = [];
        const container = document.body;

        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'heart-particle';
            particle.innerHTML = ['💕', '💗', '💖', '✨', '💝'][Math.floor(Math.random() * 5)];
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${50 + Math.random() * 30}vh`;
            particle.style.animationDelay = `${Math.random() * 0.5}s`;
            // Ensure particles are appended to a container within the Love Jar scope if possible, 
            // but body is used strictly for fixed overlay effect.
            // Since we scoped CSS, 'heart-particle' is under .love-jar-wrapper.
            // !! IMPORTANT: Appending to body might miss the scope if .love-jar-wrapper class is required on parent.
            // However, the CSS for .heart-particle is: .love-jar-wrapper .heart-particle
            // So if we append to document.body, it WON'T pick up the styles unless body has that class (which it doesn't).
            // We should append to the wrapper, or just scoped styles globally?
            // Actually, let's append to the nearest .love-jar-wrapper found, or just accept that these might need global styles or we change the CSS.
            // Let's change the implementation to append to the component's parent or a specific ref if we can, or just append to body and add the class to the particle itself if we change CSS.
            // BETTER FIX: Let's find the wrapper.
            const wrapper = document.querySelector('.love-jar-wrapper');
            if (wrapper) {
                wrapper.appendChild(particle);
            } else {
                container.appendChild(particle); // Fallback
            }
            particles.push(particle);
        }

        // Cleanup particles after animation
        const timeout = setTimeout(() => {
            particles.forEach((p) => p.remove());
        }, 2500);

        return () => {
            clearTimeout(timeout);
            particles.forEach((p) => p.remove());
        };
    }, []);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="message-overlay" onClick={handleOverlayClick}>
            <div className="message-card">
                <div className="message-topic">{topicEmoji}</div>
                <p className="message-text">"{message.text}"</p>
                <p className="message-signature">— With all my love 💕</p>
                <button className="close-btn" onClick={onClose}>
                    Close with a kiss 💋
                </button>
            </div>
        </div>
    );
};

export default MessageReveal;
