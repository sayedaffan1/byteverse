import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { GAME_LEVELS } from '../../data/gameLevels';
import { sound } from '../../utils/soundEngine';
import { 
  Code2, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  Eye
} from 'lucide-react';

export const HtmlGame = () => {
  const { markLevelComplete, completedLevels, activeGameLevel, setActiveGameLevel } = useGame();
  const levels = GAME_LEVELS.html;
  const currentLevelIndex = Math.min(activeGameLevel - 1, levels.length - 1);
  const currentLevel = levels[currentLevelIndex];

  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong' | null
  const [showHint, setShowHint] = useState(false);

  const isLevelCompleted = (completedLevels.html || []).includes(currentLevel.id);

  const handleSelect = (idx) => {
    sound.playClick();
    setSelectedOption(idx);
    setFeedback(null);
  };

  const handleVerify = () => {
    if (selectedOption === null) return;

    if (selectedOption === currentLevel.correctOptionIndex) {
      setFeedback('correct');
      markLevelComplete('html', currentLevel.id, currentLevel.xp);
    } else {
      sound.playError();
      setFeedback('wrong');
    }
  };

  const handleNext = () => {
    sound.playClick();
    setSelectedOption(null);
    setFeedback(null);
    setShowHint(false);
    if (activeGameLevel < levels.length) {
      setActiveGameLevel(activeGameLevel + 1);
    }
  };

  const handleReset = () => {
    sound.playClick();
    setSelectedOption(null);
    setFeedback(null);
    setShowHint(false);
  };

  // Build live preview HTML string based on selection
  const livePreviewHtml = () => {
    if (currentLevel.id === 1) {
      const pContent = selectedOption === 0 ? '<p style="color:#00f2fe; margin-top:8px;">Learn code through interactive quests.</p>' : '<p style="color:#64748b;">(Awaiting valid paragraph tag...)</p>';
      return `
        <div style="font-family:sans-serif; text-align:center; padding:20px; background:#0f172a; border-radius:8px; border:1px solid #1e293b; color:#fff;">
          <h1 style="color:#f97316; margin:0; font-size:1.5rem;">Welcome to ByteVerse</h1>
          ${pContent}
        </div>
      `;
    }
    if (currentLevel.id === 2) {
      const linkContent = selectedOption === 1 ? '<a href="#" style="color:#00f2fe; text-decoration:underline; font-weight:bold;">Study Academy &rarr;</a>' : '<span style="color:#64748b;">(Choose link tag)</span>';
      return `
        <div style="font-family:sans-serif; padding:20px; background:#0f172a; border-radius:8px; border:1px solid #1e293b; color:#fff;">
          <nav style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155; padding-bottom:10px;">
            <span style="font-weight:bold; color:#f97316;">ByteNav</span>
            ${linkContent}
          </nav>
        </div>
      `;
    }
    if (currentLevel.id === 3) {
      const btn = selectedOption === 0 ? '<button style="background:#f97316; color:#fff; border:none; padding:10px 20px; border-radius:6px; font-weight:bold; cursor:pointer;">Start Quest</button>' : '<div style="color:#64748b;">(Select button element)</div>';
      return `
        <div style="font-family:sans-serif; text-align:center; padding:25px; background:#0f172a; border-radius:8px; border:1px solid #1e293b;">
          ${btn}
        </div>
      `;
    }
    return `
      <div style="font-family:sans-serif; padding:20px; background:#0f172a; border-radius:8px; border:1px solid #1e293b; color:#fff;">
        <h2 style="color:#f97316; margin:0;">Arcade Tower</h2>
        <p style="color:#94a3b8; margin-top:8px;">Defeat the bugs!</p>
      </div>
    `;
  };

  return (
    <div className="space-y-6">
      
      {/* Level Selector Pills */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/30">
            <Code2 size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              HTML Tower Builder
              <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 font-mono">
                {currentLevel.xp} XP
              </span>
            </h2>
            <p className="text-xs text-slate-400">Assemble structures, nest tags, and fix broken syntax.</p>
          </div>
        </div>

        {/* Level Steps */}
        <div className="flex items-center gap-1.5">
          {levels.map((lvl) => {
            const isDone = (completedLevels.html || []).includes(lvl.id);
            const isCurrent = activeGameLevel === lvl.id;
            return (
              <button
                key={lvl.id}
                onClick={() => {
                  sound.playClick();
                  setActiveGameLevel(lvl.id);
                  setSelectedOption(null);
                  setFeedback(null);
                }}
                className={`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${
                  isCurrent
                    ? 'bg-orange-500 text-white shadow-[0_0_12px_rgba(249,115,22,0.5)]'
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

      {/* Main Gameplay Grid: Challenge on Left, Live Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left: Code Challenge */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5">
          <div>
            <span className="text-xs font-mono text-orange-400 uppercase tracking-wider font-semibold">
              Mission Objective
            </span>
            <h3 className="text-lg font-bold text-white mt-1">{currentLevel.title}</h3>
            <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">{currentLevel.prompt}</p>
          </div>

          {/* Broken code or starter block */}
          {currentLevel.brokenCode && (
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
              <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1.5 font-bold">Broken Code Inspect:</div>
              <pre className="text-rose-400">{currentLevel.brokenCode}</pre>
            </div>
          )}

          {/* Options */}
          <div className="space-y-2.5">
            <span className="text-xs font-semibold text-slate-400">Choose the correct tag snippet:</span>
            {currentLevel.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-orange-500/20 border-orange-500 text-orange-200 shadow-[0_0_15px_rgba(249,115,22,0.2)]'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/60'
                  }`}
                >
                  <span className="break-all">{opt}</span>
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${
                    isSelected ? 'border-orange-400 bg-orange-500 text-white' : 'border-slate-700 text-slate-500'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Verification Feedback Banner */}
          {feedback === 'correct' && (
            <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce">
              <CheckCircle2 size={22} className="shrink-0 text-emerald-400" />
              <div className="text-sm font-semibold">
                Superb! Correct tags assembled! +{currentLevel.xp} XP awarded.
              </div>
            </div>
          )}

          {feedback === 'wrong' && (
            <div className="p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3">
              <XCircle size={22} className="shrink-0 text-rose-400" />
              <div className="text-sm font-semibold">
                Not quite! Check the tag syntax or try clicking the Hint button.
              </div>
            </div>
          )}

          {/* Action Buttons */}
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
                title="Reset Selection"
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
                  disabled={selectedOption === null}
                  className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
                    selectedOption !== null
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:scale-[1.02]'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <Sparkles size={16} />
                  <span>Verify Tags</span>
                </button>
              )}
            </div>
          </div>

          {/* Hint Drawer */}
          {showHint && (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed animate-fadeIn">
              💡 <strong>Hint:</strong> {currentLevel.hint}
            </div>
          )}
        </div>

        {/* Right: Live Interactive Sandbox Preview */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Eye size={14} />
                Live DOM Preview
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Real-time Browser Render</span>
            </div>

            {/* Mockup Browser Window */}
            <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl">
              <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="w-full max-w-[200px] mx-auto bg-slate-950/80 rounded text-[10px] text-slate-400 font-mono text-center py-0.5 border border-slate-800">
                  byteverse://tower-preview
                </div>
              </div>

              {/* Rendered Output Area */}
              <div 
                className="p-6 min-h-[220px] flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: livePreviewHtml() }}
              />
            </div>
          </div>

          {/* Educational Note */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0"></span>
            <span>HTML elements construct the DOM nodes displayed inside the browser window.</span>
          </div>
        </div>

      </div>

    </div>
  );
};
