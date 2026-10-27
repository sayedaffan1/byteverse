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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <style>
          * { box-sizing: border-box; }
          html, body { 
            margin: 0; 
            padding: 8px; 
            width: 100%; 
            min-height: 100%; 
            overflow-x: hidden; 
            touch-action: manipulation; 
            display: flex;
            justify-content: center;
            align-items: center;
          }
          canvas { 
            max-width: 100% !important; 
            height: auto !important; 
            display: block; 
            margin: 0 auto; 
          }
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
    <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
      
      {/* Top Selector Ribbon */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-1">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto touch-scroll pb-1">
          {retroGames.map((g) => {
            const isSelected = selectedGame?.id === g.id;
            return (
              <button
                key={g.id}
                onClick={() => handleSelectGame(g)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 touch-manipulation ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:bg-slate-800'
                }`}
              >
                <span className="text-sm sm:text-base">{g.icon}</span>
                <span>{g.title}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleRestart}
          className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 active:scale-95 touch-manipulation transition-all shrink-0"
        >
          <RotateCcw size={13} />
          <span>Restart</span>
        </button>
      </div>

      {/* Arcade Cabinet Screen */}
      <div className="glass-panel p-3 sm:p-6 rounded-2xl sm:rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl space-y-3 sm:space-y-4">
        
        {/* Cabinet Marquee */}
        <div className="flex items-center justify-between px-1 sm:px-2">
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl">{selectedGame?.icon}</span>
            <div>
              <h3 className="font-extrabold text-white text-xs sm:text-base">
                {selectedGame?.title}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-400 line-clamp-1">
                {selectedGame?.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] sm:text-[10px] font-mono shrink-0">
            <Smartphone size={10} />
            <span className="hidden xs:inline">Touch &amp; Keys</span>
            <span className="xs:hidden">Touch</span>
          </div>
        </div>

        {/* Game Canvas Viewport */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-slate-800 bg-black min-h-[380px] sm:min-h-[480px] flex items-center justify-center shadow-inner">
          {selectedGame && (
            <iframe
              key={key}
              title={selectedGame.title}
              srcDoc={fullDoc}
              className="w-full h-full min-h-[380px] sm:min-h-[480px] border-none"
              sandbox="allow-scripts allow-modals"
            />
          )}
        </div>

        {/* Controls Guide */}
        <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 px-1 sm:px-2">
          <span className="truncate mr-2">🎮 On-screen touch buttons or arrows/spacebar</span>
          <span className="text-cyan-400 font-bold shrink-0">Free Play</span>
        </div>
      </div>

    </div>
  );
};
