import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { GAME_LEVELS } from '../../data/gameLevels';
import { sound } from '../../utils/soundEngine';
import { 
  Database, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  Search,
  Table
} from 'lucide-react';

export const SqlGame = () => {
  const { markLevelComplete, completedLevels, activeGameLevel, setActiveGameLevel } = useGame();
  const levels = GAME_LEVELS.mysql;
  const currentLevelIndex = Math.min(activeGameLevel - 1, levels.length - 1);
  const currentLevel = levels[currentLevelIndex];

  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [executedResults, setExecutedResults] = useState(null);

  const handleSelect = (idx) => {
    sound.playClick();
    setSelectedOption(idx);
    setFeedback(null);
    setExecutedResults(null);
  };

  const handleRunQuery = () => {
    if (selectedOption === null) return;

    if (selectedOption === currentLevel.correctOptionIndex) {
      setFeedback('correct');
      setExecutedResults(currentLevel.queryOutput);
      markLevelComplete('mysql', currentLevel.id, currentLevel.xp);
    } else {
      sound.playError();
      setFeedback('wrong');
      setExecutedResults([]);
    }
  };

  const handleNext = () => {
    sound.playClick();
    setSelectedOption(null);
    setFeedback(null);
    setShowHint(false);
    setExecutedResults(null);
    if (activeGameLevel < levels.length) {
      setActiveGameLevel(activeGameLevel + 1);
    }
  };

  const handleReset = () => {
    sound.playClick();
    setSelectedOption(null);
    setFeedback(null);
    setShowHint(false);
    setExecutedResults(null);
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Level Pills */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <Database size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              SQL Mystery Detective
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                {currentLevel.xp} XP
              </span>
            </h2>
            <p className="text-xs text-slate-400">Execute relational queries to uncover suspects and solve cyber-crimes.</p>
          </div>
        </div>

        {/* Level Steps */}
        <div className="flex items-center gap-1.5">
          {levels.map((lvl) => {
            const isDone = (completedLevels.mysql || []).includes(lvl.id);
            const isCurrent = activeGameLevel === lvl.id;
            return (
              <button
                key={lvl.id}
                onClick={() => {
                  sound.playClick();
                  setActiveGameLevel(lvl.id);
                  setSelectedOption(null);
                  setFeedback(null);
                  setExecutedResults(null);
                }}
                className={`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${
                  isCurrent
                    ? 'bg-emerald-500 text-slate-950 font-black shadow-[0_0_12px_rgba(16,185,129,0.6)]'
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
        
        {/* Left: Crime File & SQL Query Picker */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1">
              <Search size={14} />
              Police Case Dossier
            </span>
            <h3 className="text-lg font-bold text-white mt-1">{currentLevel.title}</h3>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">{currentLevel.scenario}</p>
          </div>

          {/* Database Schema Card */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400/90 flex items-center gap-2">
            <Table size={16} className="text-emerald-400 shrink-0" />
            <span>{currentLevel.tablePreview}</span>
          </div>

          {/* SQL Query Options */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400">Choose the query to execute in MySQL:</span>
            {currentLevel.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 shadow-[0_0_12px_rgba(16,185,129,0.25)]'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <span className="break-all">{opt}</span>
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${
                    isSelected ? 'border-emerald-400 bg-emerald-400 text-slate-950 font-bold' : 'border-slate-700 text-slate-500'
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
                Case Cracked! Query matched relevant records. +{currentLevel.xp} XP
              </div>
            </div>
          )}

          {feedback === 'wrong' && (
            <div className="p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3">
              <XCircle size={22} className="shrink-0 text-rose-400" />
              <div className="text-sm font-semibold">
                SQL Execution Error or empty match! Verify syntax and try again.
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
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors"
                title="Reset Query"
              >
                <RotateCcw size={16} />
              </button>

              {feedback === 'correct' && activeGameLevel < levels.length ? (
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  <span>Next Case</span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleRunQuery}
                  disabled={selectedOption === null}
                  className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
                    selectedOption !== null
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:scale-[1.02]'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <Sparkles size={16} />
                  <span>Execute Query</span>
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

        {/* Right: Live SQL Table Results */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Database size={14} />
                Database Query Results
              </span>
              <span className="text-[10px] text-slate-400 font-mono">In-Memory MySQL Engine</span>
            </div>

            {/* Results Table Viewport */}
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl min-h-[220px] flex flex-col">
              <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Status: {executedResults ? '200 OK (Query Executed)' : 'Idle (Ready)'}</span>
                <span>Rows: {executedResults ? executedResults.length : 0}</span>
              </div>

              {executedResults && executedResults.length > 0 ? (
                <div className="overflow-x-auto p-2">
                  <table className="w-full text-left font-mono text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-emerald-400">
                        {Object.keys(executedResults[0]).map((key) => (
                          <th key={key} className="p-2.5 font-bold uppercase text-[10px] tracking-wider">
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {executedResults.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-900/60 transition-colors">
                          {Object.values(row).map((val, j) => (
                            <td key={j} className="p-2.5 text-slate-200">
                              {String(val)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-500 font-mono text-xs">
                  <Database size={32} className="mb-2 opacity-30 text-emerald-400" />
                  <span>Choose a SQL query and click "Execute Query" to inspect records.</span>
                </div>
              )}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
            <span>Relational queries extract, filter, and join related records efficiently across large datasets.</span>
          </div>
        </div>

      </div>

    </div>
  );
};
