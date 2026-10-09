import React from 'react';
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
import { 
  Gamepad2, 
  Code2, 
  Palette, 
  Terminal, 
  Database, 
  Sparkles, 
  Server, 
  Layers,
  CheckCircle2
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
  const { selectedTrack, setSelectedTrack, completedLevels, setActiveGameLevel } = useGame();

  const handleSelectTrack = (trackId) => {
    sound.playClick();
    setSelectedTrack(trackId);
    setActiveGameLevel(1);
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
            <span>BYTEVERSE ARCADE REALM</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Play Games. Solve Puzzles. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Become a Full-Stack Legend.
            </span>
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Choose a technology below. Each quest teaches you real programming fundamentals through interactive mechanics, live preview runners, and boss battles.
          </p>
        </div>
      </div>

      {/* Language Selector: Touch-scrollable horizontally on phones & neat grid on tablets/desktop */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
            <span>Select Learning Track</span>
            <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-normal">7 Technologies</span>
          </h3>
          <span className="text-[11px] text-slate-500 font-mono sm:hidden">Swipe &rarr;</span>
        </div>

        {/* Responsive Grid / Horizontal Swipe List */}
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
  );
};
