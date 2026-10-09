import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { COOP_QUESTIONS } from '../../data/coopQuestions';
import { sound } from '../../utils/soundEngine';
import { 
  Users, 
  Trophy, 
  Flame, 
  RotateCcw, 
  Play, 
  Swords, 
  CheckCircle2, 
  Timer,
  Zap,
  Sparkles
} from 'lucide-react';

export const CoopArena = () => {
  const { addXP, unlockAchievement, triggerConfetti } = useGame();
  
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [roundWinner, setRoundWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(12);

  const currentQ = COOP_QUESTIONS[currentQIndex];

  useEffect(() => {
    let timer;
    if (gameStarted && !roundWinner && !gameOver && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !roundWinner) {
      sound.playError();
      setRoundWinner('timeup');
    }
    return () => clearInterval(timer);
  }, [gameStarted, roundWinner, gameOver, timeLeft]);

  const handleStartDuel = () => {
    sound.playStreak();
    setGameStarted(true);
    setCurrentQIndex(0);
    setP1Score(0);
    setP2Score(0);
    setRoundWinner(null);
    setGameOver(false);
    setTimeLeft(12);
    unlockAchievement('duelist');
  };

  const handleP1Answer = (optionIdx) => {
    if (roundWinner || gameOver) return;
    if (optionIdx === currentQ.correctIndex) {
      sound.playCorrect();
      setP1Score(prev => prev + 100);
      setRoundWinner('p1');
    } else {
      sound.playError();
      setP1Score(prev => Math.max(0, prev - 25));
    }
  };

  const handleP2Answer = (optionIdx) => {
    if (roundWinner || gameOver) return;
    if (optionIdx === currentQ.correctIndex) {
      sound.playCorrect();
      setP2Score(prev => prev + 100);
      setRoundWinner('p2');
    } else {
      sound.playError();
      setP2Score(prev => Math.max(0, prev - 25));
    }
  };

  const handleNextRound = () => {
    sound.playClick();
    if (currentQIndex + 1 < COOP_QUESTIONS.length) {
      setCurrentQIndex(prev => prev + 1);
      setRoundWinner(null);
      setTimeLeft(12);
    } else {
      sound.playLevelUp();
      triggerConfetti();
      setGameOver(true);
      addXP(150);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-16 md:pb-6">
      
      {/* Header Banner */}
      <div className="rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-8 border border-pink-500/20 bg-gradient-to-br from-slate-900 via-slate-900/90 to-pink-950/30 shadow-2xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-[11px] sm:text-xs font-mono font-semibold mb-2.5">
            <Users size={13} />
            <span>BYTEVERSE CO-OP & DUEL ARENA</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Learn & Play Together. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              2-Player Code Duel on Any Device.
            </span>
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Challenge a friend on the same tablet, iPad, phone, or laptop! Race to answer code trivia and bug fixes across all 7 languages.
          </p>
        </div>
      </div>

      {!gameStarted && !gameOver && (
        <div className="glass-panel p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-800 text-center max-w-xl mx-auto space-y-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-pink-500 to-cyan-500 p-0.5 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
            <div className="w-full h-full bg-slate-950 rounded-[14px] sm:rounded-[22px] flex items-center justify-center text-pink-400">
              <Swords size={32} />
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white">Ready for the Code Duel?</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
              Place your phone or iPad on a desk! Player 1 takes the <strong>Cyan side</strong> and Player 2 takes the <strong>Pink side</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
              <div className="font-bold text-xs sm:text-sm mb-0.5">Player 1</div>
              <span className="text-[11px] text-slate-400">Left / Top Deck</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-300">
              <div className="font-bold text-xs sm:text-sm mb-0.5">Player 2</div>
              <span className="text-[11px] text-slate-400">Right / Bottom Deck</span>
            </div>
          </div>

          <button
            onClick={handleStartDuel}
            className="w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-[0_0_25px_rgba(236,72,153,0.4)] active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
            <Play size={18} className="fill-current" />
            <span>Start 2-Player Match</span>
          </button>
        </div>
      )}

      {/* Active Duel Screen */}
      {gameStarted && !gameOver && (
        <div className="space-y-4 sm:space-y-6">
          
          {/* Top Duel Match Bar */}
          <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Player 1 Score */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-xs sm:text-sm font-bold flex items-center justify-center">
                P1
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Player 1</div>
                <div className="text-base sm:text-xl font-black text-cyan-400">{p1Score} <span className="text-[10px] text-slate-400 font-normal">PTS</span></div>
              </div>
            </div>

            {/* Timer & Question Progress */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-400 font-mono text-xs sm:text-sm font-bold">
                <Timer size={14} />
                <span>{timeLeft}s</span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono mt-0.5">
                R{currentQIndex + 1}/{COOP_QUESTIONS.length}
              </span>
            </div>

            {/* Player 2 Score */}
            <div className="flex items-center gap-2 sm:gap-3 text-right">
              <div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Player 2</div>
                <div className="text-base sm:text-xl font-black text-pink-400">{p2Score} <span className="text-[10px] text-slate-400 font-normal">PTS</span></div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-pink-500/20 border border-pink-400 text-pink-300 text-xs sm:text-sm font-bold flex items-center justify-center">
                P2
              </div>
            </div>

          </div>

          {/* Central Question Display */}
          <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-slate-800 text-center">
            <span className="text-[11px] sm:text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
              Category: {currentQ.category}
            </span>
            <h2 className="text-base sm:text-xl font-bold text-white mt-1 leading-snug">
              {currentQ.question}
            </h2>
          </div>

          {/* Round Result Announcement */}
          {roundWinner && (
            <div className="p-3.5 sm:p-4 rounded-2xl text-center font-bold text-xs sm:text-sm border flex flex-col sm:flex-row items-center justify-between gap-3 animate-fadeIn bg-slate-900/90 border-slate-700">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-amber-400 shrink-0" />
                <span>
                  {roundWinner === 'p1' && '🎉 Player 1 won the round! (+100 PTS)'}
                  {roundWinner === 'p2' && '🎉 Player 2 won the round! (+100 PTS)'}
                  {roundWinner === 'timeup' && '⏰ Time expired! No points.'}
                </span>
              </div>
              <button
                onClick={handleNextRound}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xs shadow-md active:scale-95 transition-transform"
              >
                Next Round &rarr;
              </button>
            </div>
          )}

          {/* Split-Screen 2-Player Options Arena */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Player 1 Deck */}
            <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-cyan-500/30 space-y-3 sm:space-y-4 bg-gradient-to-b from-cyan-950/20 to-slate-950/40">
              <div className="flex items-center justify-between pb-1.5 border-b border-cyan-500/20">
                <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                  <Zap size={13} />
                  Player 1 Deck
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-500">Tap fast to claim</span>
              </div>

              <div className="space-y-2">
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleP1Answer(idx)}
                    disabled={roundWinner !== null}
                    className="w-full min-h-[44px] text-left p-2.5 sm:p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 active:bg-cyan-500/20 active:border-cyan-400 text-xs font-mono text-slate-200 transition-all flex items-center justify-between group"
                  >
                    <span className="break-words pr-2">{opt}</span>
                    <span className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] shrink-0">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Player 2 Deck */}
            <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-pink-500/30 space-y-3 sm:space-y-4 bg-gradient-to-b from-pink-950/20 to-slate-950/40">
              <div className="flex items-center justify-between pb-1.5 border-b border-pink-500/20">
                <span className="text-xs font-mono text-pink-400 font-bold flex items-center gap-1.5">
                  <Zap size={13} />
                  Player 2 Deck
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-500">Tap fast to claim</span>
              </div>

              <div className="space-y-2">
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleP2Answer(idx)}
                    disabled={roundWinner !== null}
                    className="w-full min-h-[44px] text-left p-2.5 sm:p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 active:bg-pink-500/20 active:border-pink-400 text-xs font-mono text-slate-200 transition-all flex items-center justify-between group"
                  >
                    <span className="break-words pr-2">{opt}</span>
                    <span className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* Game Over Victory Podium */}
      {gameOver && (
        <div className="glass-panel p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-800 text-center max-w-lg mx-auto space-y-5 animate-fadeIn">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 p-0.5 shadow-[0_0_30px_rgba(245,158,11,0.4)]">
            <div className="w-full h-full bg-slate-950 rounded-[14px] sm:rounded-[22px] flex items-center justify-center text-yellow-400">
              <Trophy size={36} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Duel Complete!</h2>
            <p className="text-base sm:text-lg font-bold text-amber-400 mt-1.5">
              {p1Score > p2Score && '🏆 Player 1 Takes the Crown!'}
              {p2Score > p1Score && '🏆 Player 2 Takes the Crown!'}
              {p1Score === p2Score && '🤝 Legendary Tie Match!'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
              <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Player 1 Final</div>
              <div className="text-xl sm:text-2xl font-black text-cyan-400">{p1Score} PTS</div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-pink-500/10 border border-pink-500/30">
              <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Player 2 Final</div>
              <div className="text-xl sm:text-2xl font-black text-pink-400">{p2Score} PTS</div>
            </div>
          </div>

          <div className="text-xs text-emerald-400 font-semibold">
            +150 Bonus XP awarded for team play!
          </div>

          <button
            onClick={handleStartDuel}
            className="w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
            <RotateCcw size={15} />
            <span>Rematch</span>
          </button>
        </div>
      )}

    </div>
  );
};
