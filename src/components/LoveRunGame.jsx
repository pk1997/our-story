import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Trophy } from 'lucide-react';

const LoveRunGame = () => {
  const [gameState, setGameState] = useState('start'); // start, playing, gameover, won
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pavanY, setPavanY] = useState(0);
  const [obstacles, setObstacles] = useState([]);
  
  const gameLoopRef = useRef();
  const pavanRef = useRef({ y: 0, velocity: 0, isJumping: false });
  const obstaclesRef = useRef([]);
  const scoreRef = useRef(0);
  const speedRef = useRef(5);

  const GRAVITY = 0.6;
  const JUMP_FORCE = -12;
  const GROUND_Y = 0;
  const SPAWN_RATE = 1500; // ms
  const WIN_SCORE = 1000;

  useEffect(() => {
    const savedHighScore = localStorage.getItem('loveRunHighScore');
    if (savedHighScore) setHighScore(parseInt(savedHighScore));
  }, []);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setObstacles([]);
    setPavanY(0);
    
    pavanRef.current = { y: 0, velocity: 0, isJumping: false };
    obstaclesRef.current = [];
    scoreRef.current = 0;
    speedRef.current = 5;

    lastSpawnTime.current = Date.now();
    gameLoopRef.current = requestAnimationFrame(gameLoop);
  };

  const jump = () => {
    if (!pavanRef.current.isJumping && gameState === 'playing') {
      pavanRef.current.velocity = JUMP_FORCE;
      pavanRef.current.isJumping = true;
    }
  };

  const lastSpawnTime = useRef(0);

  const gameLoop = () => {
    if (gameState !== 'playing') return;

    // Update Pavan
    pavanRef.current.velocity += GRAVITY;
    pavanRef.current.y += pavanRef.current.velocity;

    if (pavanRef.current.y > GROUND_Y) {
      pavanRef.current.y = GROUND_Y;
      pavanRef.current.velocity = 0;
      pavanRef.current.isJumping = false;
    }

    setPavanY(pavanRef.current.y);

    // Update Obstacles
    const now = Date.now();
    if (now - lastSpawnTime.current > SPAWN_RATE) {
      const types = ['✈️', '⏰', '🐛', '🌵'];
      const type = types[Math.floor(Math.random() * types.length)];
      obstaclesRef.current.push({ x: 800, type, id: now });
      lastSpawnTime.current = now;
      
      // Increase speed slightly
      if (speedRef.current < 12) speedRef.current += 0.1;
    }

    obstaclesRef.current.forEach(obs => {
      obs.x -= speedRef.current;
    });

    // Remove off-screen obstacles
    obstaclesRef.current = obstaclesRef.current.filter(obs => obs.x > -50);
    setObstacles([...obstaclesRef.current]);

    // Collision Detection
    // Pavan hitbox: x: 50-90, y: pavanY + 100 (approx)
    // Obstacle hitbox: x: obs.x, y: ground
    const pavanHitbox = { x: 50, width: 40, y: pavanRef.current.y + 100, height: 40 }; // Simplified
    
    // Check collision
    const collision = obstaclesRef.current.some(obs => {
      const obsX = obs.x;
      // Simple box collision
      return (
        obsX < 90 &&
        obsX + 30 > 50 &&
        pavanRef.current.y > -30 // If Pavan is low enough to hit
      );
    });

    if (collision) {
      gameOver();
      return;
    }

    // Update Score
    scoreRef.current += 1;
    setScore(Math.floor(scoreRef.current / 10));

    // Win Condition
    if (scoreRef.current / 10 >= WIN_SCORE) {
      gameWon();
      return;
    }

    gameLoopRef.current = requestAnimationFrame(gameLoop);
  };

  const gameOver = () => {
    setGameState('gameover');
    cancelAnimationFrame(gameLoopRef.current);
    if (scoreRef.current / 10 > highScore) {
      setHighScore(Math.floor(scoreRef.current / 10));
      localStorage.setItem('loveRunHighScore', Math.floor(scoreRef.current / 10));
    }
  };

  const gameWon = () => {
    setGameState('won');
    cancelAnimationFrame(gameLoopRef.current);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (gameState === 'playing') jump();
        else if (gameState !== 'playing') startGame();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);

  return (
    <div className="w-full h-screen bg-sky-300 flex flex-col items-center justify-center overflow-hidden relative font-mono">
      {/* Clouds */}
      <div className="absolute top-10 left-10 text-6xl opacity-80 animate-pulse">☁️</div>
      <div className="absolute top-20 right-20 text-6xl opacity-60 animate-pulse delay-700">☁️</div>
      
      {/* Ground */}
      <div className="absolute bottom-0 w-full h-32 bg-green-600 border-t-8 border-green-800"></div>

      {/* Game Area */}
      <div className="relative w-full max-w-4xl h-96 border-4 border-black bg-sky-100 overflow-hidden shadow-[8px_8px_0_#000]">
        
        {/* HUD */}
        <div className="absolute top-4 left-4 right-4 flex justify-between text-xl font-black uppercase tracking-widest z-10">
          <div>Score: {score}</div>
          <div>HI: {highScore}</div>
        </div>

        {/* Pavan */}
        <div 
          className="absolute left-[50px] text-6xl transition-transform"
          style={{ 
            bottom: '32px', // On top of ground (h-32 of container? No, container is h-96)
            // Let's fix positioning relative to container bottom
            transform: `translateY(${pavanY}px)`
          }}
        >
          🏃‍♂️
        </div>

        {/* Obstacles */}
        {obstacles.map(obs => (
          <div 
            key={obs.id}
            className="absolute bottom-8 text-5xl"
            style={{ left: `${obs.x}px` }}
          >
            {obs.type}
          </div>
        ))}

        {/* Sindhu (Goal) */}
        {gameState === 'won' && (
          <div className="absolute right-20 bottom-8 text-6xl animate-bounce">
            👰‍♀️
          </div>
        )}

        {/* Overlays */}
        {gameState === 'start' && (
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
            <h1 className="text-6xl font-black mb-4 text-yellow-400 drop-shadow-[4px_4px_0_#000]">LOVE RUN</h1>
            <p className="mb-8 text-xl">Help Pavan reach Sindhu!</p>
            <button 
              onClick={startGame}
              className="bg-red-500 text-white px-8 py-4 text-2xl font-bold border-4 border-white shadow-[4px_4px_0_#000] hover:scale-105 transition-transform flex items-center gap-2"
            >
              <Play fill="currentColor" /> START GAME
            </button>
            <p className="mt-4 text-sm opacity-80">Press Space to Jump</p>
          </div>
        )}

        {gameState === 'gameover' && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white">
            <h2 className="text-5xl font-black mb-4 text-red-500">GAME OVER</h2>
            <p className="mb-8 text-2xl">Score: {score}</p>
            <button 
              onClick={startGame}
              className="bg-white text-black px-8 py-4 text-2xl font-bold border-4 border-black shadow-[4px_4px_0_#fff] hover:scale-105 transition-transform flex items-center gap-2"
            >
              <RotateCcw /> TRY AGAIN
            </button>
          </div>
        )}

        {gameState === 'won' && (
          <div className="absolute inset-0 bg-yellow-400/90 flex flex-col items-center justify-center text-black">
            <Trophy size={64} className="mb-4 text-white drop-shadow-lg" />
            <h2 className="text-5xl font-black mb-4 text-white drop-shadow-[4px_4px_0_#000]">YOU MADE IT!</h2>
            <p className="mb-8 text-2xl font-bold">Pavan & Sindhu Reunited ❤️</p>
            <button 
              onClick={startGame}
              className="bg-black text-white px-8 py-4 text-2xl font-bold border-4 border-white shadow-[4px_4px_0_#000] hover:scale-105 transition-transform"
            >
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>
      
      <div className="mt-8 text-center opacity-60 font-bold uppercase tracking-widest">
        Avoid the missed flights & alarms!
      </div>
    </div>
  );
};

export default LoveRunGame;
