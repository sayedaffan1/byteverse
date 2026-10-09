import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { GAME_LEVELS } from '../../data/gameLevels';
import { sound } from '../../utils/soundEngine';
import { 
  Palette, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  Rocket
} from 'lucide-react';

export const CssGame = () => {
  const { markLevelComplete, completedLevels, activeGameLevel, setActiveGameLevel } = useGame();
  const levels = GAME_LEVELS.css;
  const currentLevelIndex = Math.min(activeGameLevel - 1, levels.length - 1);
  const currentLevel = levels[currentLevelIndex];

  const [chosenValue, setChosenValue] = useState(currentLevel.starterValue);
  const [feedback, setFeedback] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const handleSelectValue = (val) => {
    sound.playClick();
    setChosenValue(val);
    setFeedback(null);
  };

  const handleVerify = () => {
    if (chosenValue === currentLevel.correctValue) {
      setFeedback('correct');
      markLevelComplete('css', currentLevel.id, currentLevel.xp);
    } else {
      sound.playError();
      setFeedback('wrong');
    }
  };

  const handleNext = () => {
    sound.playClick();
    setFeedback(null);
    setShowHint(false);
    if (activeGameLevel < levels.length) {
      const nextLvl = levels[activeGameLevel];
      setActiveGameLevel(activeGameLevel + 1);
      setChosenValue(nextLvl.starterValue);
    }
  };

  const handleReset = () => {
    sound.playClick();
    setChosenValue(currentLevel.starterValue);
    setFeedback(null);
    setShowHint(false);
  };

  // Compute live CSS styles for the hangar container
  const getContainerStyle = () => {
    const baseStyle = {
      display: currentLevel.previewType === 'grid' ? 'grid' : 'flex',
      minHeight: '220px',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    };

    if (currentLevel.cssTargetProperty === 'justify-content') {
      baseStyle.justifyContent = chosenValue;
      baseStyle.alignItems = 'center';
    } else if (currentLevel.cssTargetProperty === 'align-items') {
      baseStyle.justifyContent = 'center';
      baseStyle.alignItems = chosenValue;
    } else if (currentLevel.cssTargetProperty === 'flex-direction') {
      baseStyle.flexDirection = chosenValue;
      baseStyle.justifyContent = 'center';
      baseStyle.alignItems = 'center';
      baseStyle.gap = '16px';
    } else if (currentLevel.cssTargetProperty === 'grid-template-columns') {
      baseStyle.gridTemplateColumns = chosenValue;
      baseStyle.gap = '12px';
      baseStyle.alignItems = 'center';
    }

    return baseStyle;
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Level Pills */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Palette size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              CSS Flexbox & Grid Arena
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-mono">
                {currentLevel.xp} XP
              </span>
            </h2>
            <p className="text-xs text-slate-400">Position spaceships and design layouts using real CSS properties.</p>
          </div>
        </div>

        {/* Level Steps */}
        <div className="flex items-center gap-1.5">
          {levels.map((lvl) => {
            const isDone = (completedLevels.css || []).includes(lvl.id);
            const isCurrent = activeGameLevel === lvl.id;
            return (
              <button
                key={lvl.id}
                onClick={() => {
                  sound.playClick();
                  setActiveGameLevel(lvl.id);
                  setChosenValue(lvl.starterValue);
                  setFeedback(null);
                }}
                className={`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${
                  isCurrent
                    ? 'bg-cyan-500 text-slate-950 font-black shadow-[0_0_12px_rgba(6,182,212,0.6)]'
                    : isDone
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {isDone ? '✓' : lvl.id}
              </button>
            );
          })}
        </div>
      </div>

      {/* Gameplay Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left: CSS Editor Controls */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              CSS Flight Control
            </span>
            <h3 className="text-lg font-bold text-white mt-1">{currentLevel.title}</h3>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">{currentLevel.prompt}</p>
          </div>

          {/* CSS Code Editor Mockup */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs">
            <div className="text-slate-500 mb-1">// SpaceHangar.css</div>
            <div className="text-purple-400">.hangar-bay &#123;</div>
            <div className="pl-4 text-slate-300">
              <span className="text-cyan-400">display</span>: {currentLevel.previewType === 'grid' ? 'grid' : 'flex'};
            </div>
            <div className="pl-4 py-1.5 flex items-center gap-2 flex-wrap">
              <span className="text-cyan-400 font-bold">{currentLevel.cssTargetProperty}</span>:
              <span className="text-amber-300 font-bold bg-slate-900 px-2 py-0.5 rounded border border-amber-500/40">
                {chosenValue}
              </span>;
            </div>
            <div className="text-purple-400">&#125;</div>
          </div>

          {/* Property Options */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400">Select property value:</span>
            <div className="grid grid-cols-2 gap-2">
              {currentLevel.options.map((opt, idx) => {
                const isSelected = chosenValue === opt;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectValue(opt)}
                    className={`p-3 rounded-xl border font-mono text-xs font-bold transition-all text-center ${
                      isSelected
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback */}
          {feedback === 'correct' && (
            <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce">
              <CheckCircle2 size={22} className="shrink-0 text-emerald-400" />
              <div className="text-sm font-semibold">
                Perfect Alignment! Ship docked successfully. +{currentLevel.xp} XP
              </div>
            </div>
          )}

          {feedback === 'wrong' && (
            <div className="p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3">
              <XCircle size={22} className="shrink-0 text-rose-400" />
              <div className="text-sm font-semibold">
                Not aligned with the target beacon! Try another CSS value or check the hint.
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 flex items-center gap-1.5 transition-colors"
            >
              <Lightbulb size={14} />
              <span>{showHint ? 'Hide Hint' : 'Need Hint?'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors"
                title="Reset Value"
              >
                <RotateCcw size={16} />
              </button>

              {feedback === 'correct' && activeGameLevel < levels.length ? (
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  <span>Next Level</span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleVerify}
                  className="px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  <Sparkles size={16} />
                  <span>Lock Alignment</span>
                </button>
              )}
            </div>
          </div>

          {/* Hint */}
          {showHint && (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed animate-fadeIn">
              💡 <strong>Hint:</strong> {currentLevel.hint}
            </div>
          )}
        </div>

        {/* Right: Live Hangar Arena Viewport */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Rocket size={14} />
                Live Hangar Bay Viewport
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Dynamic CSS Canvas</span>
            </div>

            {/* Hangar Viewport */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 p-4 shadow-2xl min-h-[260px] flex flex-col justify-center cyber-grid">
              
              {/* Target Landing Pad Guide Marker */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
                <div className="w-24 h-24 rounded-2xl border-2 border-dashed border-cyan-400 animate-pulse flex items-center justify-center">
                  <span className="text-[10px] text-cyan-400 font-mono uppercase font-bold">Target Pad</span>
                </div>
              </div>

              {/* Dynamic Styled Container */}
              <div style={getContainerStyle()} className="relative z-10 w-full p-2">
                {currentLevel.previewType === 'spaceship' && (
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.6)] flex items-center gap-2 font-black text-xs transition-transform transform hover:scale-105">
                    <Rocket size={20} className="rotate-45" />
                    <span>CyberShuttle-01</span>
                  </div>
                )}

                {currentLevel.previewType === 'squadron' && (
                  <>
                    <div className="p-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md">
                      Alpha
                    </div>
                    <div className="p-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-md">
                      Beta
                    </div>
                    <div className="p-2.5 rounded-xl bg-pink-500 text-white font-bold text-xs shadow-md">
                      Flagship ★
                    </div>
                  </>
                )}

                {currentLevel.previewType === 'grid' && (
                  <>
                    <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-center text-cyan-300 font-bold text-xs">
                      Pillar A
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-center text-purple-300 font-bold text-xs">
                      Pillar B
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-center text-emerald-300 font-bold text-xs">
                      Pillar C
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>
            <span>Flexbox and Grid are modern CSS standards that eliminate the need for float hacks or table layouts.</span>
          </div>
        </div>

      </div>

    </div>
  );
};
