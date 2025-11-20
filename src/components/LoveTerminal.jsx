import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal } from 'lucide-react';

const LoveTerminal = ({ isOpen, onClose, onUnlock }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { type: 'system', content: 'Initializing LoveOS v1.0...' },
    { type: 'system', content: 'Loading memories...' },
    { type: 'success', content: 'System ready.' },
    { type: 'info', content: 'Type "help" for available commands.' },
  ]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const commands = {
    help: () => [
      { type: 'info', content: 'Available commands:' },
      { type: 'list', content: '  help             - Show this help message' },
      { type: 'list', content: '  git log          - Show relationship timeline' },
      { type: 'list', content: '  whoami           - Identify current user' },
      { type: 'list', content: '  gallery          - Access photo archives' },
      { type: 'list', content: '  travel           - Access travel logs' },
      { type: 'list', content: '  sudo make-sandwich - Try it and see...' },
      { type: 'list', content: '  cat secrets.txt  - Reveal hidden message' },
      { type: 'list', content: '  ping love        - Check connection status' },
      { type: 'list', content: '  clear            - Clear terminal' },
      { type: 'list', content: '  exit             - Close terminal' },
    ],
    'git log': () => [
      { type: 'info', content: '* e16cb5c (HEAD -> main) Added logo' },
      { type: 'info', content: '* 19oct25 (tag: reunion) The Reunion: Worth every mile' },
      { type: 'info', content: '* 31may25 (tag: ldr) Long Distance Begins' },
      { type: 'info', content: '* 29may25 (tag: official) It\'s Official ❤️' },
      { type: 'info', content: '* 24may25 First Date @ Elements Restobar' },
      { type: 'info', content: '* 18may25 First Meeting: The Missed Flight' },
      { type: 'info', content: '* 16feb25 Initial commit: The Digital Spark' },
    ],
    whoami: () => [
      { type: 'success', content: 'Guest User (Access Level: Friend/Family)' },
    ],
    gallery: () => {
      if (onUnlock && onUnlock('gallery')) {
        return [{ type: 'success', content: 'Access Granted: Gallery module loaded successfully.' }];
      }
      return [{ type: 'info', content: 'Gallery module is already loaded.' }];
    },
    travel: () => {
      if (onUnlock && onUnlock('fun')) {
        return [{ type: 'success', content: 'Access Granted: Travel logs loaded successfully.' }];
      }
      return [{ type: 'info', content: 'Travel logs are already loaded.' }];
    },
    'sudo make-sandwich': () => [
      { type: 'error', content: 'Permission denied: Only Sindhu has root access.' },
    ],
    'cat secrets.txt': () => [
      { type: 'warning', content: 'TOP SECRET FILE FOUND:' },
      { type: 'text', content: '"Pavan knew he was in trouble the moment he saw her dimple."' },
    ],
    'ping love': () => [
      { type: 'success', content: 'Reply from Pavan: time=0ms TTL=∞ (Instant connection)' },
      { type: 'success', content: 'Reply from Sindhu: time=0ms TTL=∞ (Heartbeat synced)' },
    ],
    clear: () => [],
    exit: () => {
      onClose();
      return [];
    },
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setOutput([]);
      return;
    }

    const newOutput = [...output, { type: 'command', content: `> ${cmd}` }];

    if (commands[trimmedCmd]) {
      const result = commands[trimmedCmd]();
      if (result) newOutput.push(...result);
    } else if (trimmedCmd !== '') {
      newOutput.push({ type: 'error', content: `Command not found: ${trimmedCmd}. Type "help" for list.` });
    }

    setOutput(newOutput);
    setHistory([...history, cmd]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < history.length) {
          setHistoryIndex(newIndex);
          setInput(history[history.length - 1 - newIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div className="w-full max-w-3xl bg-black border-4 border-green-500 shadow-[0_0_20px_rgba(0,255,0,0.3)] rounded-lg overflow-hidden font-mono text-green-500 h-[80vh] flex flex-col relative">
            {/* CRT Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]"></div>
            
            {/* Header */}
            <div className="bg-green-900/20 border-b border-green-500 p-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={16} />
                <span className="font-bold text-sm">LoveOS Terminal</span>
              </div>
              <button onClick={onClose} className="hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 overflow-y-auto scrollbar-hide" onClick={() => inputRef.current?.focus()}>
              {output.map((line, i) => (
                <div key={i} className={`mb-1 ${
                  line.type === 'command' ? 'text-white font-bold mt-4' :
                  line.type === 'error' ? 'text-red-500' :
                  line.type === 'success' ? 'text-green-400' :
                  line.type === 'warning' ? 'text-yellow-400' :
                  line.type === 'info' ? 'text-blue-400' :
                  'text-green-500'
                }`}>
                  {line.content}
                </div>
              ))}
              
              {/* Input Line */}
              <div className="flex items-center gap-2 mt-2 text-white font-bold">
                <span>$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-green-500 font-mono"
                  autoComplete="off"
                  autoFocus
                />
              </div>
              <div ref={bottomRef} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoveTerminal;
