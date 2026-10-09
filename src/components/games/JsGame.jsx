import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { GAME_LEVELS } from '../../data/gameLevels';
import { sound } from '../../utils/soundEngine';
import { 
  Terminal, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  Play,
  Bug
} from 'lucide-react';

export const JsGame = () => {
  const { markLevelComplete, completedLevels, activeGameLevel, setActiveGameLevel } = useGame();
  const levels = GAME_LEVELS.js;
  const currentLevelIndex = Math.min(activeGameLevel - 1, levels.length - 1);
  const currentLevel = levels[currentLevelIndex];

  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [consoleLogs, setConsoleLogs] = useState(['// JavaScript Virtual Terminal initialized.', '// Select the fix to run in the sandbox.']);

  const handleSelect = (idx) => {
    sound.playClick();
    setSelectedOption(idx);
    setFeedback(null);
  };

  const handleRunCode = () => {
    if (selectedOption === null) return;

    if (selectedOption === currentLevel.correctOptionIndex) {
      setFeedback('correct');
      markLevelComplete('js', currentLevel.id, currentLevel.xp);
      setConsoleLogs([
        '// Executing script...',
        '> Syntax validation: PASS',
        '> Unit Test 1: PASS',
        `> Output: [SUCCESS] Bug smashed! +${currentLevel.xp} XP`
      ]);
    } else {
      sound.playError();
      setFeedback('wrong');
      setConsoleLogs([
        '// Executing script...',
        '> Uncaught TypeError / SyntaxError in evaluation',
        '> Test Result: FAIL. Expected proper modern JS convention.'
      ]);
    }
  };

  const handleNext = () => {
    sound.playClick();
    setSelectedOption(null);
    setFeedback(null);
    setConsoleLogs(['// Sandbox ready for next test.']);
    if (activeGameLevel < levels.length) {
      setActiveGameLevel(activeGameLevel + 1);
    }
  };

  const handleReset = () => {
    sound.playClick();
    setSelectedOption(null);
    setFeedback(null);
    setConsoleLogs(['// Sandbox reset.']);
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Pills */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
            <Terminal size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              JS Bug Smasher & Logic Lab
              <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 font-mono">
                {currentLevel.xp} XP
              </span>
            </h2>
            <p className="text-xs text-slate-400">Identify runtime bugs, fix variables, and execute live browser tests.</p>
          </div>
        </div>

        {/* Level Steps */}
        <div className="flex items-center gap-1.5">
          {levels.map((lvl) => {
            const isDone = (completedLevels.js || []).includes(lvl.id);
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
                    ? 'bg-yellow-400 text-slate-950 font-black shadow-[0_0_12px_rgba(234,179,8,0.6)]'
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

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left: Code Challenge & Fix Selection */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5">
          <div>
            <span className="text-xs font-mono text-yellow-400 uppercase tracking-wider font-semibold flex items-center gap-1">
              <Bug size={14} />
              Bug Bounty Challenge
            </span>
            <h3 className="text-lg font-bold text-white mt-1">{currentLevel.title}</h3>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">{currentLevel.prompt}</p>
          </div>

          {/* Snippet Display */}
          {(currentLevel.brokenSnippet || currentLevel.snippet) && (
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
              <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1.5 font-bold">Source Snippet:</div>
              <pre className="text-yellow-300/90 whitespace-pre-wrap">
                {currentLevel.brokenSnippet || currentLevel.snippet}
              </pre>
            </div>
          )}

          {/* Solution Fix Options */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400">Select the correct solution:</span>
            {currentLevel.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-yellow-500/20 border-yellow-400 text-yellow-100 shadow-[0_0_12px_rgba(234,179,8,0.25)]'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <span className="break-all">{opt}</span>
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${
                    isSelected ? 'border-yellow-400 bg-yellow-400 text-slate-950 font-bold' : 'border-slate-700 text-slate-500'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {feedback === 'correct' && (
            <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce">
              <CheckCircle2 size={22} className="shrink-0 text-emerald-400" />
              <div className="text-sm font-semibold">
                Bug Eliminated! {currentLevel.explanation}
              </div>
            </div>
          )}

          {feedback === 'wrong' && (
            <div className="p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3">
              <XCircle size={22} className="shrink-0 text-rose-400" />
              <div className="text-sm font-semibold">
                Test Failed! Inspect the console on the right for error details.
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors"
              title="Reset Lab"
            >
              <RotateCcw size={16} />
            </button>

            {feedback === 'correct' && activeGameLevel < levels.length ? (
              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <span>Next Bug</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleRunCode}
                disabled={selectedOption === null}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
                  selectedOption !== null
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 font-black shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:scale-[1.02]'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                <Play size={16} className="fill-current" />
                <span>Run Sandbox Tests</span>
              </button>
            )}
          </div>
        </div>

        {/* Right: Live Interactive JS Console Output */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-yellow-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Terminal size={14} />
                Sandbox Console Output
              </span>
              <span className="text-[10px] text-slate-400 font-mono">v8 In-Memory Runtime</span>
            </div>

            {/* Terminal Window */}
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl font-mono text-xs">
              <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <span className="text-[10px] text-slate-400 ml-2">js-repl:stdout</span>
              </div>

              <div className="p-4 min-h-[220px] space-y-2 text-slate-300">
                {consoleLogs.map((log, i) => (
                  <div 
                    key={i} 
                    className={`${
                      log.includes('FAIL') || log.includes('Error') 
                        ? 'text-rose-400' 
                        : log.includes('PASS') || log.includes('SUCCESS') 
                        ? 'text-emerald-400 font-bold' 
                        : 'text-slate-400'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0"></span>
            <span>Modern JavaScript uses block scoping (let/const) and strict comparison (===) to avoid silent bugs.</span>
          </div>
        </div>

      </div>

    </div>
  );
};
