import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { LANGUAGES } from '../../data/languages';
import { sound } from '../../utils/soundEngine';
import { HtmlGame } from './HtmlGame';
import { CssGame } from './CssGame';
import { JsGame } from './JsGame';
import { SqlGame } from './SqlGame';
import { PythonGame } from './PythonGame';
import { PhpGame } from './PhpGame';
import { DjangoGame } from './DjangoGame';
import { CodeSprint } from './CodeSprint';
import { BossRaid } from './BossRaid';
import { RetroPlayzone } from './RetroPlayzone';
import { 
  Gamepad2, 
  Code2, 
  Palette, 
  Terminal, 
  Database, 
  Sparkles, 
  Server, 
  Layers,
  CheckCircle2,
  Zap,
  Skull,
  Volume2,
  VolumeX,
  Flame,
  Award,
  Trophy,
  Swords
} from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Palette: Palette,
  Terminal: Terminal,
  Database: Database,
  Sparkles: Sparkles,
  Server: Server,
  Layers: Layers
};

export const ArcadeHub = () => {
  const { 
    selectedTrack, 
    setSelectedTrack, 
    completedLevels, 
    setActiveGameLevel,
    xp,
    playerLevel,
    rankTitle,
    streak,
    soundMuted,
    toggleSound,
    setIsAchievementsOpen
  } = useGame();

  const [arcadeMode, setArcadeMode] = useState('quests'); // 'quests' | 'sprint' | 'boss' | 'retro'

  const handleSelectTrack = (trackId) => {
    sound.playClick();
    setSelectedTrack(trackId);
    setActiveGameLevel(1);
  };

  const handleModeSwitch = (mode) => {
    sound.playClick();
    setArcadeMode(mode);
  };

  const renderActiveGame = () => {
    switch (selectedTrack) {
      case 'html': return <HtmlGame />;
      case 'css': return <CssGame />;
      case 'js': return <JsGame />;
      case 'mysql': return <SqlGame />;
      case 'python': return <PythonGame />;
      case 'php': return <PhpGame />;
      case 'django': return <DjangoGame />;
      default: return <HtmlGame />;
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-16 md:pb-6">
      
      {/* Hero Banner for Arcade */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-panel p-5 sm:p-8 border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900/90 to-purple-950/40 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] sm:text-xs font-mono font-semibold mb-2.5">
            <Gamepad2 size={13} />
            <span>BYTEVERSE CYBER ARCADE REALM</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Play Games. Slay Bosses. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Become a Full-Stack Legend.
            </span>
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Choose between 7 Tech Quests, the 60-Second Code Sprint, the Syntax Devourer Boss Raid, or instant Retro Mini-Games!
          </p>
        </div>
      </div>

      {/* Arcade HUD & Stats Bar */}
      <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex items-center justify-between flex-wrap gap-2.5">
        <div className="flex items-center gap-2.5 sm:gap-6 flex-wrap">
          {/* Level & Rank */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-500 p-0.5 shadow-md shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-xs text-cyan-300 font-mono">
                L{playerLevel}
              </div>
            </div>
            <div>
              <div className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-400">Rank</div>
              <div className="text-xs sm:text-sm font-black text-white">{rankTitle}</div>
            </div>
          </div>

          {/* Total XP */}
          <div className="border-l border-slate-800 pl-2.5 sm:pl-5">
            <div className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-400">Total XP</div>
            <div className="text-xs sm:text-sm font-black text-amber-400 font-mono">
              {xp.toLocaleString()} XP
            </div>
          </div>

          {/* Daily Streak */}
          <div className="border-l border-slate-800 pl-2.5 sm:pl-5">
            <div className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-400">Streak</div>
            <div className="text-xs sm:text-sm font-black text-rose-400 font-mono flex items-center gap-1">
              <Flame size={12} className="fill-current animate-pulse text-rose-400" />
              <span>{streak}d</span>
            </div>
          </div>
        </div>

        {/* Quick Actions (Sound & Achievements) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              sound.playClick();
              setIsAchievementsOpen(true);
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors active:scale-95 touch-manipulation"
          >
            <Trophy size={13} className="text-amber-400" />
            <span className="text-[11px] sm:text-xs">Badges</span>
          </button>

          <button
            onClick={toggleSound}
            className={`p-2 rounded-xl border transition-colors active:scale-95 touch-manipulation ${
              soundMuted 
                ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' 
                : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
            }`}
            title={soundMuted ? 'Unmute Sound' : 'Mute Sound'}
          >
            {soundMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>
      </div>

      {/* Main Arcade Mode Switcher Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto touch-scroll pb-1 border-b border-slate-800">
        {[
          { id: 'quests', label: 'Tech Quests', fullLabel: 'Tech Quests (7 Tracks)', icon: Gamepad2, color: 'from-cyan-500 to-blue-500' },
          { id: 'sprint', label: '60s Sprint', fullLabel: '60s Code Sprint', icon: Zap, color: 'from-amber-500 to-orange-500' },
          { id: 'boss', label: 'Boss Raid', fullLabel: 'Syntax Devourer (Boss)', icon: Skull, color: 'from-rose-500 to-red-600' },
          { id: 'retro', label: 'Retro Games', fullLabel: 'Retro Mini-Games', icon: Sparkles, color: 'from-purple-500 to-pink-500' }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = arcadeMode === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleModeSwitch(tab.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-95 touch-manipulation shrink-0 ${
                isActive
                  ? `bg-gradient-to-r ${tab.color} text-slate-950 font-black shadow-lg scale-[1.02]`
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
              }`}
            >
              <Icon size={14} className={isActive ? 'text-slate-950 fill-current' : ''} />
              <span className="sm:hidden">{tab.label}</span>
              <span className="hidden sm:inline">{tab.fullLabel}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: TECH QUESTS */}
      {arcadeMode === 'quests' && (
        <div className="space-y-6">
          {/* Language Selector */}
          <div>
            <div className="flex items-center justify-between mb-3 px-1">
              <h3 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
                <span>Select Learning Track</span>
                <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-normal">7 Technologies</span>
              </h3>
              <span className="text-[11px] text-slate-500 font-mono sm:hidden">Swipe &rarr;</span>
            </div>

            <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-7 gap-2.5 sm:gap-3 overflow-x-auto touch-scroll pb-2 sm:pb-0 -mx-3 px-3 sm:mx-0 sm:px-0">
              {LANGUAGES.map((lang) => {
                const Icon = iconMap[lang.icon] || Code2;
                const isSelected = selectedTrack === lang.id;
                const completed = (completedLevels[lang.id] || []).length;
                const isFullyDone = completed >= lang.levelsCount;

                return (
                  <button
                    key={lang.id}
                    onClick={() => handleSelectTrack(lang.id)}
                    className={`min-w-[140px] sm:min-w-0 p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between relative active:scale-95 shrink-0 sm:shrink ${
                      isSelected
                        ? `bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.25)] ring-1 ring-cyan-400/50 scale-[1.02]`
                        : `bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60`
                    }`}
                  >
                    {isFullyDone && (
                      <span className="absolute top-2 right-2 text-emerald-400">
                        <CheckCircle2 size={15} />
                      </span>
                    )}

                    <div>
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-2 bg-gradient-to-br ${lang.accentColor} text-slate-950 shadow-md`}>
                        <Icon size={18} />
                      </div>
                      <h4 className="font-bold text-xs sm:text-sm text-white">{lang.name}</h4>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono block leading-tight mt-0.5 truncate">
                        {lang.category}
                      </span>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-slate-800/80 w-full">
                      <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-400 mb-1">
                        <span>Progress</span>
                        <span>{completed}/{lang.levelsCount}</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${lang.accentColor} transition-all duration-300`}
                          style={{ width: `${(completed / lang.levelsCount) * 100}%` }}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Track Arena */}
          <div className="pt-1">
            {renderActiveGame()}
          </div>
        </div>
      )}

      {/* TAB 2: CODE SPRINT (60s TIME ATTACK) */}
      {arcadeMode === 'sprint' && (
        <CodeSprint />
      )}

      {/* TAB 3: BOSS RAID */}
      {arcadeMode === 'boss' && (
        <BossRaid />
      )}

      {/* TAB 4: RETRO MINI-GAMES PLAYZONE */}
      {arcadeMode === 'retro' && (
        <RetroPlayzone />
      )}

    </div>
  );
};
