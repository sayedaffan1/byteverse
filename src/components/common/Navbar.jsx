import React from 'react';
import { useGame } from '../../context/GameContext';
import { Logo } from './Logo';
import { 
  Gamepad2, 
  BookOpen, 
  Users, 
  Terminal, 
  Trophy, 
  Flame, 
  Volume2, 
  VolumeX, 
  Sparkles,
  RotateCcw
} from 'lucide-react';

export const Navbar = () => {
  const { 
    mode, 
    setMode, 
    xp, 
    playerLevel, 
    currentLevelProgress, 
    rankTitle, 
    streak, 
    soundMuted, 
    toggleSound, 
    setIsAchievementsOpen,
    resetProgress
  } = useGame();

  const navItems = [
    { id: 'arcade', label: 'Arcade', fullLabel: 'Arcade Games', icon: Gamepad2, color: 'text-cyan-400' },
    { id: 'academy', label: 'Academy', fullLabel: 'Study Academy', icon: BookOpen, color: 'text-teal-400' },
    { id: 'coop', label: 'Co-Op', fullLabel: 'Play Together', icon: Users, color: 'text-pink-400' },
    { id: 'playground', label: 'Sandbox', fullLabel: 'Code Sandbox', icon: Terminal, color: 'text-amber-400' },
  ];

  return (
    <>
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-[#0a0d14]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo with responsive sizing */}
          <Logo size="md" onClick={() => setMode('arcade')} />

          {/* Central Navigation Tabs for Tablets & Desktops (md+) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = mode === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setMode(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.25)]' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon size={16} className={isActive ? item.color : 'text-slate-400'} />
                  <span>{item.fullLabel}</span>
                </button>
              );
            })}
          </nav>

          {/* Gamification Stats: XP, Streak, Badges & Audio */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            
            {/* Streak Flame */}
            <div className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-rose-500/10 to-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold shadow-sm">
              <Flame size={15} className="text-orange-500 animate-bounce" />
              <span>{streak}d</span>
            </div>

            {/* Level & XP Capsule (hidden on tiny screens, compact on mid) */}
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl">
              <div className="flex flex-col text-right">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-cyan-400">
                  <Sparkles size={11} className="hidden sm:inline" />
                  <span>Lvl {playerLevel}</span>
                  <span className="hidden lg:inline text-slate-400">&bull; {rankTitle}</span>
                </div>
                <div className="w-16 sm:w-24 bg-slate-800 h-1.5 rounded-full overflow-hidden mt-0.5">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${currentLevelProgress}%` }}
                  />
                </div>
              </div>
              <span className="font-mono text-[11px] sm:text-xs font-bold text-slate-300">{xp} <span className="hidden sm:inline">XP</span></span>
            </div>

            {/* Achievements Trophy Button */}
            <button
              onClick={() => setIsAchievementsOpen(true)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 transition-colors shadow-sm relative active:scale-95"
              title="View Achievements & Badges"
              aria-label="Achievements"
            >
              <Trophy size={17} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
            </button>

            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              className={`p-2 rounded-xl border transition-colors active:scale-95 ${
                soundMuted 
                  ? 'bg-slate-900 border-slate-800 text-slate-500' 
                  : 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400'
              }`}
              title={soundMuted ? 'Unmute Sound' : 'Mute Sound'}
              aria-label="Toggle Sound"
            >
              {soundMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>

            {/* Reset button (Desktop) */}
            <button
              onClick={resetProgress}
              className="hidden lg:flex p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 hover:text-rose-400 hover:border-rose-500/40 transition-colors active:scale-95"
              title="Reset Game Data"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Floating Bottom App Navigation Bar for Mobile Phones (< md) */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-50 rounded-2xl glass-panel bg-slate-950/95 border border-slate-800/90 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl px-2 py-1.5 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = mode === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setMode(item.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-xl transition-all active:scale-95 ${
                isActive 
                  ? 'text-cyan-400 bg-cyan-500/15 font-bold shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon size={18} className={isActive ? item.color : 'text-slate-400'} />
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
