import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { GAME_LEVELS } from '../../data/gameLevels';
import { sound } from '../../utils/soundEngine';
import { 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw,
  Play,
  Bot,
  Gem
} from 'lucide-react';

export const PythonGame = () => {
  const { markLevelComplete, completedLevels, activeGameLevel, setActiveGameLevel } = useGame();
  const levels = GAME_LEVELS.python;
  const currentLevelIndex = Math.min(activeGameLevel - 1, levels.length - 1);
  const currentLevel = levels[currentLevelIndex];

  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [heroStep, setHeroStep] = useState(0);
  const [pyLogs, setPyLogs] = useState(['# Python 3.12 Virtual Interpreter ready.', '# Select the Python solution to run.']);

  const handleSelect = (idx) => {
    sound.playClick();
    setSelectedOption(idx);
    setFeedback(null);
    setHeroStep(0);
  };

  const handleRun = () => {
    if (selectedOption === null) return;

    if (selectedOption === currentLevel.correctOptionIndex) {
      setFeedback('correct');
      markLevelComplete('python', currentLevel.id, currentLevel.xp);
      setHeroStep(4);
      setPyLogs([
        '>>> python main.py',
        `ByteKnight power is 9000!`,
        `Gems collected: 4/4`,
        `Process finished with exit code 0. +${currentLevel.xp} XP`
      ]);
    } else {
      sound.playError();
      setFeedback('wrong');
      setHeroStep(1);
      setPyLogs([
        '>>> python main.py',
        'SyntaxError or NameError: unexpected token.',
        'Process failed with exit code 1'
      ]);
    }
  };

  const handleNext = () => {
    sound.playClick();
    setSelectedOption(null);
    setFeedback(null);
    setHeroStep(0);
    setPyLogs(['# Python interpreter reset for next challenge.']);
    if (activeGameLevel < levels.length) {
      setActiveGameLevel(activeGameLevel + 1);
    }
  };

  const handleReset = () => {
    sound.playClick();
    setSelectedOption(null);
    setFeedback(null);
    setHeroStep(0);
    setPyLogs(['# Interpreter cleared.']);
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Pills */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30">
            <Sparkles size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              Python Algorithm Maze
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono">
                {currentLevel.xp} XP
              </span>
            </h2>
            <p className="text-xs text-slate-400">Master Python syntax, indentation, loops, and functions.</p>
          </div>
        </div>

        {/* Level Steps */}
        <div className="flex items-center gap-1.5">
          {levels.map((lvl) => {
            const isDone = (completedLevels.python || []).includes(lvl.id);
            const isCurrent = activeGameLevel === lvl.id;
            return (
              <button
                key={lvl.id}
                onClick={() => {
                  sound.playClick();
                  setActiveGameLevel(lvl.id);
                  setSelectedOption(null);
                  setFeedback(null);
                  setHeroStep(0);
                }}
                className={`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${
                  isCurrent
                    ? 'bg-blue-500 text-white font-black shadow-[0_0_12px_rgba(59,130,246,0.6)]'
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
        
        {/* Left: Python Code Challenge */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5">
          <div>
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
              Python Algorithm Mission
            </span>
            <h3 className="text-lg font-bold text-white mt-1">{currentLevel.title}</h3>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">{currentLevel.prompt}</p>
          </div>

          {/* Options */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400">Select the Python code snippet:</span>
            {currentLevel.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-blue-500/20 border-blue-400 text-blue-200 shadow-[0_0_12px_rgba(59,130,246,0.25)]'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <pre className="break-all whitespace-pre-wrap">{opt}</pre>
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${
                    isSelected ? 'border-blue-400 bg-blue-500 text-white font-bold' : 'border-slate-700 text-slate-500'
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
                Clean Run! {currentLevel.explanation}
              </div>
            </div>
          )}

          {feedback === 'wrong' && (
            <div className="p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3">
              <XCircle size={22} className="shrink-0 text-rose-400" />
              <div className="text-sm font-semibold">
                Indentation or syntax error in Python! Check the terminal below.
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors"
              title="Reset"
            >
              <RotateCcw size={16} />
            </button>

            {feedback === 'correct' && activeGameLevel < levels.length ? (
              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <span>Next Mission</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleRun}
                disabled={selectedOption === null}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
                  selectedOption !== null
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-[1.02]'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                <Play size={16} className="fill-current" />
                <span>Run Python Code</span>
              </button>
            )}
          </div>
        </div>

        {/* Right: Visual Maze Canvas & Python Console */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Bot size={14} />
                Algorithm Grid Maze
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Step: {heroStep}/4</span>
            </div>

            {/* Maze Visual Grid */}
            <div className="rounded-xl border border-blue-500/30 bg-slate-950 p-4 shadow-2xl flex items-center justify-between gap-3 cyber-grid">
              {[0, 1, 2, 3, 4].map((step) => {
                const isHeroHere = heroStep === step;
                const isGemHere = step > 0 && heroStep < step;
                return (
                  <div
                    key={step}
                    className={`flex-1 h-20 rounded-xl border flex flex-col items-center justify-center transition-all duration-500 ${
                      isHeroHere
                        ? 'bg-blue-600/30 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)] scale-105'
                        : 'bg-slate-900/60 border-slate-800'
                    }`}
                  >
                    {isHeroHere && (
                      <div className="text-blue-400 flex flex-col items-center animate-bounce">
                        <Bot size={28} />
                        <span className="text-[9px] font-bold font-mono mt-0.5">Hero</span>
                      </div>
                    )}
                    {!isHeroHere && isGemHere && (
                      <div className="text-emerald-400 opacity-80 flex flex-col items-center">
                        <Gem size={20} />
                        <span className="text-[8px] text-slate-500 font-mono">+10 XP</span>
                      </div>
                    )}
                    {!isHeroHere && !isGemHere && (
                      <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Python Console Output */}
            <div className="mt-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs">
              <div className="bg-slate-900 px-3 py-1.5 border-b border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                <span>python3 --terminal</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <div className="p-3 text-slate-300 space-y-1 min-h-[90px]">
                {pyLogs.map((log, i) => (
                  <div key={i} className={log.includes('Error') ? 'text-rose-400' : log.includes('SUCCESS') || log.includes('9000') ? 'text-emerald-400' : 'text-slate-400'}>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span>
            <span>Python relies on indentation to group blocks of code, promoting extreme readability.</span>
          </div>
        </div>

      </div>

    </div>
  );
};
