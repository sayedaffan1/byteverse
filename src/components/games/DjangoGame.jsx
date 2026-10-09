import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { GAME_LEVELS } from '../../data/gameLevels';
import { sound } from '../../utils/soundEngine';
import { 
  Layers, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  GitFork,
  ArrowRightLeft
} from 'lucide-react';

export const DjangoGame = () => {
  const { markLevelComplete, completedLevels, activeGameLevel, setActiveGameLevel } = useGame();
  const levels = GAME_LEVELS.django;
  const currentLevelIndex = Math.min(activeGameLevel - 1, levels.length - 1);
  const currentLevel = levels[currentLevelIndex];

  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [flowStep, setFlowStep] = useState(1);

  const handleSelect = (idx) => {
    sound.playClick();
    setSelectedOption(idx);
    setFeedback(null);
    setFlowStep(1);
  };

  const handleDispatch = () => {
    if (selectedOption === null) return;

    if (selectedOption === currentLevel.correctOptionIndex) {
      setFeedback('correct');
      setFlowStep(4);
      markLevelComplete('django', currentLevel.id, currentLevel.xp);
    } else {
      sound.playError();
      setFeedback('wrong');
      setFlowStep(2);
    }
  };

  const handleNext = () => {
    sound.playClick();
    setSelectedOption(null);
    setFeedback(null);
    setFlowStep(1);
    if (activeGameLevel < levels.length) {
      setActiveGameLevel(activeGameLevel + 1);
    }
  };

  const handleReset = () => {
    sound.playClick();
    setSelectedOption(null);
    setFeedback(null);
    setFlowStep(1);
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Pills */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-emerald-600/10 text-emerald-400 border border-emerald-600/30">
            <Layers size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              Django MTV Route Dispatcher
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-600/30 font-mono">
                {currentLevel.xp} XP
              </span>
            </h2>
            <p className="text-xs text-slate-400">Direct web traffic through URLs, Views, Models (ORM), and Templates.</p>
          </div>
        </div>

        {/* Level Steps */}
        <div className="flex items-center gap-1.5">
          {levels.map((lvl) => {
            const isDone = (completedLevels.django || []).includes(lvl.id);
            const isCurrent = activeGameLevel === lvl.id;
            return (
              <button
                key={lvl.id}
                onClick={() => {
                  sound.playClick();
                  setActiveGameLevel(lvl.id);
                  setSelectedOption(null);
                  setFeedback(null);
                  setFlowStep(1);
                }}
                className={`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${
                  isCurrent
                    ? 'bg-emerald-600 text-white font-black shadow-[0_0_12px_rgba(5,150,105,0.6)]'
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
        
        {/* Left: Dispatch Challenge */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1">
              <GitFork size={14} />
              Django Architecture Mission
            </span>
            <h3 className="text-lg font-bold text-white mt-1">{currentLevel.title}</h3>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">{currentLevel.prompt}</p>
          </div>

          {/* Options */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400">Choose the Django MTV snippet:</span>
            {currentLevel.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-emerald-600/20 border-emerald-500 text-emerald-200 shadow-[0_0_12px_rgba(5,150,105,0.25)]'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <pre className="break-all whitespace-pre-wrap">{opt}</pre>
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${
                    isSelected ? 'border-emerald-500 bg-emerald-600 text-white font-bold' : 'border-slate-700 text-slate-500'
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
                Traffic Dispatched! {currentLevel.explanation}
              </div>
            </div>
          )}

          {feedback === 'wrong' && (
            <div className="p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3">
              <XCircle size={22} className="shrink-0 text-rose-400" />
              <div className="text-sm font-semibold">
                Route Failed (Page not found 404 or View Error). Inspect the Django pipeline on the right.
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
                <span>Next Route</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleDispatch}
                disabled={selectedOption === null}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
                  selectedOption !== null
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_15px_rgba(5,150,105,0.4)] hover:scale-[1.02]'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                <Sparkles size={16} />
                <span>Dispatch Request</span>
              </button>
            )}
          </div>
        </div>

        {/* Right: MTV Pipeline Visualizer */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <ArrowRightLeft size={14} />
                Django MTV Data Pipeline
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Flow Active</span>
            </div>

            {/* Pipeline Stage Cards */}
            <div className="space-y-2.5">
              {[
                { stage: '1. urls.py', title: 'URL Conf & Regex Pattern', active: flowStep >= 1 },
                { stage: '2. views.py', title: 'View Controller & Logic', active: flowStep >= 2 },
                { stage: '3. models.py', title: 'ORM Query & Database Table', active: flowStep >= 3 },
                { stage: '4. templates/', title: 'HTML Context Render (Dバージ)', active: flowStep >= 4 }
              ].map((p, i) => (
                <div 
                  key={i} 
                  className={`p-3 rounded-xl border flex items-center justify-between font-mono text-xs transition-all ${
                    p.active 
                      ? 'bg-emerald-600/20 border-emerald-500/60 text-emerald-300 shadow-sm' 
                      : 'bg-slate-950/60 border-slate-800 text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{p.stage}</span>
                    <span className="text-[11px] text-slate-400 font-sans">{p.title}</span>
                  </div>
                  <span className={`w-2.5 h-2.5 rounded-full ${p.active ? 'bg-emerald-400 animate-pulse' : 'bg-slate-700'}`}></span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            <span>Django handles routing, database abstractions, authentication, and security in one unified framework.</span>
          </div>
        </div>

      </div>

    </div>
  );
};
