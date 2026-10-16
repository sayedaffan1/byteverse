import React, { useState } from 'react';
import { PLAYGROUND_TEMPLATES } from '../../data/playgroundTemplates';
import { sound } from '../../utils/soundEngine';
import { 
  Gamepad2, 
  RotateCcw, 
  Sparkles, 
  Smartphone,
  Trophy
} from 'lucide-react';

export const RetroPlayzone = () => {
  const retroGames = PLAYGROUND_TEMPLATES.filter(t => t.category === 'Mini-Games');
  const [selectedGame, setSelectedGame] = useState(retroGames[0] || null);
  const [key, setKey] = useState(0);

  const handleSelectGame = (game) => {
    sound.playClick();
    setSelectedGame(game);
    setKey(prev => prev + 1);
  };

  const handleRestart = () => {
    sound.playClick();
    setKey(prev => prev + 1);
  };

  const fullDoc = selectedGame ? `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          * { box-sizing: border-box; }
          ${selectedGame.css}
        </style>
      </head>
      <body>
        ${selectedGame.html}
        <script>${selectedGame.js}<\/script>
      </body>
    </html>
  ` : '';

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Top Selector Ribbon */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-1">
        <div className="flex items-center gap-2 overflow-x-auto touch-scroll">
          {retroGames.map((g) => {
            const isSelected = selectedGame?.id === g.id;
            return (
              <button
                key={g.id}
                onClick={() => handleSelectGame(g)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:bg-slate-800'
                }`}
              >
                <span className="text-base">{g.icon}</span>
                <span>{g.title}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleRestart}
          className="px-3.5 py-2 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 active:scale-95 transition-all"
        >
          <RotateCcw size={13} />
          <span>Restart Game</span>
        </button>
      </div>

      {/* Arcade Cabinet Screen */}
      <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl space-y-4">
        
        {/* Cabinet Marquee */}
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">{selectedGame?.icon}</span>
            <div>
              <h3 className="font-extrabold text-white text-sm sm:text-base">
                {selectedGame?.title}
              </h3>
              <p className="text-[11px] text-slate-400">
                {selectedGame?.description}
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono">
            <Smartphone size={11} />
            <span>Mobile &amp; Keyboard Ready</span>
          </div>
        </div>

        {/* Game Canvas Viewport */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-slate-800 bg-black min-h-[440px] sm:min-h-[480px] flex items-center justify-center shadow-inner">
          {selectedGame && (
            <iframe
              key={key}
              title={selectedGame.title}
              srcDoc={fullDoc}
              className="w-full h-full min-h-[440px] sm:min-h-[480px] border-none"
              sandbox="allow-scripts allow-modals"
            />
          )}
        </div>

        {/* Controls Guide */}
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-2 pt-1">
          <span>🎮 Controls: Touch buttons on-screen or keyboard arrows / spacebar</span>
          <span className="text-cyan-400 font-bold">100% Free Play</span>
        </div>
      </div>

    </div>
  );
};
