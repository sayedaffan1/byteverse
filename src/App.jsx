import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { Navbar } from './components/common/Navbar';
import { ArcadeHub } from './components/games/ArcadeHub';
import { StudyAcademy } from './components/academy/StudyAcademy';
import { CoopArena } from './components/coop/CoopArena';
import { Playground } from './components/playground/Playground';
import { AchievementsModal } from './components/modals/AchievementsModal';
import { Logo } from './components/common/Logo';
import { Heart, Sparkles, ShieldCheck, User } from 'lucide-react';

const AppContent = () => {
  const { mode, setMode } = useGame();

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0d14] text-slate-100 cyber-grid">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {mode === 'arcade' && <ArcadeHub />}
        {mode === 'academy' && <StudyAcademy />}
        {mode === 'coop' && <CoopArena />}
        {mode === 'playground' && <Playground />}
      </main>

      {/* Global Achievements Modal */}
      <AchievementsModal />

      {/* Modern Footer with Creator Name & Signature */}
      <footer className="border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-xl mt-20 pt-12 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Creator Showcase Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-purple-950/30 border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-cyan-500/20 shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-black font-mono text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                  AS
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Created &amp; Engineered By</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <Sparkles size={10} /> Verified Creator
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Affan Sayed
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl mt-0.5">
                  Designed to teach complete coding fundamentals from 0% to mastery with W3-style interactive lessons, ELI5 5-year-old storytelling, and live mini-games.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://affansayed.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/25 transition-transform active:scale-95 flex items-center gap-1.5"
              >
                <span>Visit Affan's Portfolio</span>
                <span className="text-slate-950">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Navigation Links and Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-800/60">
            <Logo size="sm" showTagline={false} onClick={() => setMode('arcade')} />
            
            <div className="flex items-center gap-6 text-xs text-slate-400 font-medium">
              <button onClick={() => setMode('arcade')} className="hover:text-cyan-400 transition-colors">Arcade Games</button>
              <button onClick={() => setMode('academy')} className="hover:text-emerald-400 transition-colors">Study Academy</button>
              <button onClick={() => setMode('coop')} className="hover:text-pink-400 transition-colors">Co-Op Arena</button>
              <button onClick={() => setMode('playground')} className="hover:text-amber-400 transition-colors">Sandbox</button>
            </div>

            {/* Glowing Signature Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/40 text-xs font-mono shadow-md">
              <span className="text-slate-400">Masterminded by</span>
              <Heart size={13} className="text-rose-500 fill-current animate-pulse" />
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Affan Sayed
              </span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-slate-400">&copy; 2026 ByteVerse</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}
