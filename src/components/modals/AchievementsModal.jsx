import React from 'react';
import { useGame } from '../../context/GameContext';
import { ACHIEVEMENTS } from '../../data/achievements';
import { sound } from '../../utils/soundEngine';
import { 
  Trophy, 
  X, 
  Lock, 
  CheckCircle2, 
  Sparkles,
  Flame,
  Award,
  Users,
  Code2,
  Palette,
  Terminal,
  Database,
  Server,
  Layers,
  BookOpen
} from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Code2: Code2,
  Palette: Palette,
  Terminal: Terminal,
  Database: Database,
  Server: Server,
  Layers: Layers,
  Flame: Flame,
  Users: Users,
  BookOpen: BookOpen
};

export const AchievementsModal = () => {
  const { isAchievementsOpen, setIsAchievementsOpen, achievements, xp, playerLevel, rankTitle } = useGame();

  if (!isAchievementsOpen) return null;

  const handleClose = () => {
    sound.playClick();
    setIsAchievementsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-3xl glass-panel border border-slate-700 bg-slate-950 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
              <Trophy size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                Trophy & Badges Cabinet
              </h2>
              <p className="text-xs text-slate-400">
                Lvl {playerLevel} &bull; {rankTitle} &bull; {achievements.length} of {ACHIEVEMENTS.length} Unlocked
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Badges Grid */}
        <div className="overflow-y-auto py-4 space-y-3 pr-1 my-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ACHIEVEMENTS.map((ach) => {
              const isUnlocked = achievements.includes(ach.id);
              const Icon = iconMap[ach.icon] || Award;

              return (
                <div
                  key={ach.id}
                  className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3.5 ${
                    isUnlocked
                      ? `${ach.bg} shadow-sm`
                      : 'bg-slate-900/40 border-slate-800/80 opacity-50'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border shrink-0 ${
                    isUnlocked 
                      ? 'bg-slate-950/80 border-slate-700/60' 
                      : 'bg-slate-950 border-slate-800 text-slate-600'
                  }`}>
                    {isUnlocked ? (
                      <Icon size={20} className={ach.color} />
                    ) : (
                      <Lock size={20} />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="font-bold text-sm text-white truncate">{ach.title}</h4>
                      {isUnlocked && (
                        <span className="text-emerald-400 shrink-0">
                          <CheckCircle2 size={15} />
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-snug">{ach.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Earn XP across all tracks to unlock more prestige titles!</span>
          <button
            onClick={handleClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
