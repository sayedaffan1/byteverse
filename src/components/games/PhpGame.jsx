import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { GAME_LEVELS } from '../../data/gameLevels';
import { sound } from '../../utils/soundEngine';
import { 
  Server, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  Utensils,
  Receipt
} from 'lucide-react';

export const PhpGame = () => {
  const { markLevelComplete, completedLevels, activeGameLevel, setActiveGameLevel } = useGame();
  const levels = GAME_LEVELS.php;
  const currentLevelIndex = Math.min(activeGameLevel - 1, levels.length - 1);
  const currentLevel = levels[currentLevelIndex];

  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [serverStatus, setServerStatus] = useState('Listening on Port 8000...');

  const handleSelect = (idx) => {
    sound.playClick();
    setSelectedOption(idx);
    setFeedback(null);
  };

  const handleServe = () => {
    if (selectedOption === null) return;

    if (selectedOption === currentLevel.correctOptionIndex) {
      setFeedback('correct');
      markLevelComplete('php', currentLevel.id, currentLevel.xp);
      setServerStatus('HTTP/1.1 200 OK | Response served in 4ms');
    } else {
      sound.playError();
      setFeedback('wrong');
      setServerStatus('HTTP/1.1 500 Internal Server Error (PHP Parse Error)');
    }
  };

  const handleNext = () => {
    sound.playClick();
    setSelectedOption(null);
    setFeedback(null);
    setServerStatus('Listening on Port 8000...');
    if (activeGameLevel < levels.length) {
      setActiveGameLevel(activeGameLevel + 1);
    }
  };

  const handleReset = () => {
    sound.playClick();
    setSelectedOption(null);
    setFeedback(null);
    setServerStatus('Listening on Port 8000...');
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Pills */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
            <Server size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              PHP Server Kitchen & Form Master
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 font-mono">
                {currentLevel.xp} XP
              </span>
            </h2>
            <p className="text-xs text-slate-400">Process HTTP orders, $_GET, $_POST, and session cookies on the backend.</p>
          </div>
        </div>

        {/* Level Steps */}
        <div className="flex items-center gap-1.5">
          {levels.map((lvl) => {
            const isDone = (completedLevels.php || []).includes(lvl.id);
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
                    ? 'bg-purple-600 text-white font-black shadow-[0_0_12px_rgba(168,85,247,0.6)]'
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
        
        {/* Left: Chef Ticket Challenge */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5">
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold flex items-center gap-1">
              <Utensils size={14} />
              Server Kitchen Ticket #{currentLevel.id}
            </span>
            <h3 className="text-lg font-bold text-white mt-1">{currentLevel.title}</h3>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">{currentLevel.prompt}</p>
          </div>

          {/* Options */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400">Choose the PHP backend snippet:</span>
            {currentLevel.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-purple-500/20 border-purple-400 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.25)]'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <pre className="break-all whitespace-pre-wrap">{opt}</pre>
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${
                    isSelected ? 'border-purple-400 bg-purple-500 text-white font-bold' : 'border-slate-700 text-slate-500'
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
                Order Cooked & Served! {currentLevel.explanation}
              </div>
            </div>
          )}

          {feedback === 'wrong' && (
            <div className="p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3">
              <XCircle size={22} className="shrink-0 text-rose-400" />
              <div className="text-sm font-semibold">
                Kitchen Recipe Failed! Check PHP syntax, dollar signs, and try again.
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
                <span>Next Ticket</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleServe}
                disabled={selectedOption === null}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
                  selectedOption !== null
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-[1.02]'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                <Sparkles size={16} />
                <span>Serve Response</span>
              </button>
            )}
          </div>
        </div>

        {/* Right: HTTP Order Receipt & Apache/PHP Daemon Visualizer */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Receipt size={14} />
                HTTP Request / Response Log
              </span>
              <span className="text-[10px] text-slate-400 font-mono">PHP-FPM Worker 1</span>
            </div>

            {/* Server Receipt Card */}
            <div className="rounded-xl border border-purple-500/30 bg-slate-950 p-4 font-mono text-xs shadow-2xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-purple-300">
                <span>POST /checkout.php</span>
                <span>Content-Type: application/x-www-form-urlencoded</span>
              </div>

              <div className="text-slate-400 space-y-1">
                <div>$_SERVER['REQUEST_METHOD'] = 'POST';</div>
                <div>$_SERVER['HTTP_HOST'] = 'byteverse.dev';</div>
                <div>$_POST['item'] = 'Cyber Burger #42';</div>
              </div>

              <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Daemon Status:</span>
                <span className={`font-bold ${serverStatus.includes('200') ? 'text-emerald-400' : serverStatus.includes('500') ? 'text-rose-400' : 'text-amber-400'}`}>
                  {serverStatus}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0"></span>
            <span>PHP variables always begin with a $ symbol and execute entirely on the server before HTML is sent.</span>
          </div>
        </div>

      </div>

    </div>
  );
};
