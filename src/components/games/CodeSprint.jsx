import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../../context/GameContext';
import { SPRINT_QUESTIONS } from '../../data/arcadeSprintQuestions';
import { sound } from '../../utils/soundEngine';
import { 
  Zap, 
  Clock, 
  Flame, 
  Trophy, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Play,
  Award,
  Sparkles
} from 'lucide-react';

export const CodeSprint = () => {
  const { addXP, unlockAchievement, triggerConfetti } = useGame();

  const [gameState, setGameState] = useState('idle'); // 'idle' | 'playing' | 'gameover'
  const [timeLeft, setTimeLeft] = useState(60);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [feedback, setFeedback] = useState(null); // { type: 'correct' | 'wrong', selected: number }
  const [highScore, setHighScore] = useState(() => {
    try {
      return parseInt(localStorage.getItem('byteverse_sprint_highscore') || '0', 10);
    } catch {
      return 0;
    }
  });

  const timerRef = useRef(null);

  // Shuffle questions array
  const shuffle = (array) => {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const startSprint = () => {
    sound.playLevelUp();
    const shuffled = shuffle(SPRINT_QUESTIONS);
    setShuffledQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCorrectCount(0);
    setTotalAnswered(0);
    setTimeLeft(60);
    setFeedback(null);
    setGameState('playing');
  };

  // Timer loop
  useEffect(() => {
    if (gameState === 'playing') {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            finishSprint();
            return 0;
          }
          if (prev <= 6) {
            sound.playCountdown();
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [gameState]);

  const finishSprint = () => {
    setGameState('gameover');
    sound.playExplosion();
  };

  // Save high score and trigger rewards on gameover
  useEffect(() => {
    if (gameState === 'gameover') {
      if (score > highScore) {
        setHighScore(score);
        try {
          localStorage.setItem('byteverse_sprint_highscore', score.toString());
        } catch {
          // ignore
        }
      }

      if (score >= 400) {
        unlockAchievement('code_sprinter');
        triggerConfetti();
      }
    }
  }, [gameState, score]);

  // Handle answering
  const handleAnswer = (optionIndex) => {
    if (feedback !== null || gameState !== 'playing') return;

    const currentQ = shuffledQuestions[currentIndex];
    const isCorrect = optionIndex === currentQ.correct;

    setTotalAnswered((prev) => prev + 1);

    if (isCorrect) {
      sound.playHit();
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);

      // Multiplier formula
      let multiplier = 1;
      if (newStreak >= 7) multiplier = 4;
      else if (newStreak >= 5) multiplier = 3;
      else if (newStreak >= 3) multiplier = 2;

      const gainedPoints = 50 * multiplier;
      setScore((prev) => prev + gainedPoints);
      setCorrectCount((prev) => prev + 1);

      if (newStreak === 3 || newStreak === 5 || newStreak === 7) {
        sound.playStreak();
      }

      setFeedback({ type: 'correct', selected: optionIndex });
    } else {
      sound.playError();
      setStreak(0);
      setFeedback({ type: 'wrong', selected: optionIndex });
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentIndex + 1 < shuffledQuestions.length) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        // Reshuffle if reached end of question pool
        setShuffledQuestions(shuffle(SPRINT_QUESTIONS));
        setCurrentIndex(0);
      }
    }, 450);
  };

  const getMultiplier = () => {
    if (streak >= 7) return { text: '4x TITAN', fullText: '4x ULTRA TITAN', color: 'text-amber-400 bg-amber-500/20 border-amber-400' };
    if (streak >= 5) return { text: '3x MEGA', fullText: '3x MEGA STREAK', color: 'text-purple-400 bg-purple-500/20 border-purple-400' };
    if (streak >= 3) return { text: '2x COMBO', fullText: '2x COMBO', color: 'text-cyan-400 bg-cyan-500/20 border-cyan-400' };
    return { text: '1x', fullText: '1x STANDARD', color: 'text-slate-400 bg-slate-800 border-slate-700' };
  };

  const currentQ = shuffledQuestions[currentIndex] || SPRINT_QUESTIONS[0];
  const mult = getMultiplier();
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  return (
    <div className="space-y-4 sm:space-y-6">
      
      {/* IDLE LOBBY */}
      {gameState === 'idle' && (
        <div className="rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-10 border border-amber-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-amber-950/30 text-center space-y-4 sm:space-y-6 max-w-2xl mx-auto shadow-2xl">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-amber-500 to-orange-500 p-0.5 shadow-xl shadow-amber-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[18px] sm:rounded-[22px] flex items-center justify-center text-amber-400">
              <Zap size={32} className="fill-current animate-pulse sm:hidden" />
              <Zap size={38} className="fill-current animate-pulse hidden sm:block" />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] sm:text-xs font-mono font-bold mb-2 sm:mb-3">
              <Clock size={12} />
              <span>TIME-ATTACK SPEED RUN</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white">
              60-Second Code Sprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 sm:mt-2 max-w-md mx-auto leading-relaxed">
              Answer fast-paced coding questions covering HTML, CSS, JS, Python, SQL, and Django. Build combos to rack up massive multipliers!
            </p>
          </div>

          {/* Quick Rules */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 text-left">
            <div className="bg-slate-950/70 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-800 text-center">
              <div className="text-base sm:text-lg font-black text-amber-400">60s</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono mt-0.5">Ticking Clock</div>
            </div>
            <div className="bg-slate-950/70 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-800 text-center">
              <div className="text-base sm:text-lg font-black text-purple-400">Up to 4x</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono mt-0.5">Combo Streak</div>
            </div>
            <div className="bg-slate-950/70 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-800 text-center">
              <div className="text-base sm:text-lg font-black text-cyan-400">{highScore}</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono mt-0.5">High Score</div>
            </div>
          </div>

          <button
            onClick={startSprint}
            className="w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 active:scale-95 touch-manipulation transition-all"
          >
            <Play size={16} className="fill-current" />
            <span>START 60s CODE SPRINT</span>
          </button>
        </div>
      )}

      {/* ACTIVE PLAYING VIEW */}
      {gameState === 'playing' && (
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          
          {/* Top Arcade HUD */}
          <div className="glass-panel p-3 sm:p-4 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl flex items-center justify-between gap-2">
            
            {/* Score & Multiplier */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div>
                <div className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-400">Score</div>
                <div className="text-lg sm:text-2xl font-black text-amber-400 font-mono tracking-tight">
                  {score.toLocaleString()}
                </div>
              </div>
              <div className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-mono font-bold border ${mult.color} flex items-center gap-1`}>
                <Flame size={11} className="fill-current animate-pulse" />
                <span className="sm:hidden">{mult.text}</span>
                <span className="hidden sm:inline">{mult.fullText}</span>
              </div>
            </div>

            {/* Streak Counter */}
            <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-slate-950 border border-slate-800 text-[11px] sm:text-xs font-mono">
              <span className="text-slate-400 hidden xs:inline">Streak:</span>
              <span className="font-black text-purple-400">{streak} 🔥</span>
            </div>

            {/* Timer Gauge */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Clock size={15} className={timeLeft <= 10 ? 'text-rose-500 animate-spin' : 'text-cyan-400'} />
              <div className="text-right">
                <div className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-400">Time</div>
                <div className={`text-lg sm:text-2xl font-black font-mono ${
                  timeLeft <= 10 ? 'text-rose-500 animate-pulse' : 'text-white'
                }`}>
                  {timeLeft}s
                </div>
              </div>
            </div>
          </div>

          {/* Time Progress Bar */}
          <div className="w-full bg-slate-950 h-1.5 sm:h-2 rounded-full overflow-hidden border border-slate-800">
            <div 
              className={`h-full transition-all duration-1000 ${
                timeLeft <= 10 
                  ? 'bg-rose-500' 
                  : timeLeft <= 25 
                    ? 'bg-amber-400' 
                    : 'bg-gradient-to-r from-cyan-400 to-purple-500'
              }`}
              style={{ width: `${(timeLeft / 60) * 100}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="glass-panel p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-cyan-500/30 bg-slate-900/90 shadow-2xl space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {currentQ.tech}
              </span>
              <span className="text-[11px] sm:text-xs font-mono text-slate-400">
                Q#{totalAnswered + 1}
              </span>
            </div>

            <h3 className="text-sm sm:text-xl font-bold text-white leading-snug sm:leading-relaxed">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              {currentQ.options.map((opt, idx) => {
                let btnStyle = 'bg-slate-950/80 hover:bg-slate-800/90 border-slate-800 text-slate-200 hover:border-cyan-400';

                if (feedback !== null) {
                  if (idx === currentQ.correct) {
                    btnStyle = 'bg-emerald-950/90 border-emerald-400 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] font-black';
                  } else if (idx === feedback.selected && feedback.type === 'wrong') {
                    btnStyle = 'bg-rose-950/90 border-rose-500 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.3)] line-through';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={feedback !== null}
                    onClick={() => handleAnswer(idx)}
                    className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left font-mono text-xs sm:text-sm transition-all duration-150 flex items-center justify-between active:scale-[0.98] touch-manipulation min-h-[46px] ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {feedback !== null && idx === currentQ.correct && (
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 ml-2" />
                    )}
                    {feedback !== null && idx === feedback.selected && feedback.type === 'wrong' && (
                      <XCircle size={16} className="text-rose-500 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* GAME OVER SCREEN */}
      {gameState === 'gameover' && (
        <div className="rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-10 border border-purple-500/30 bg-gradient-to-br from-slate-900 via-slate-900/95 to-purple-950/40 text-center space-y-4 sm:space-y-6 max-w-2xl mx-auto shadow-2xl animate-fadeIn">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-purple-500 to-pink-500 p-0.5 shadow-xl shadow-purple-500/25 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[18px] sm:rounded-[22px] flex items-center justify-center text-purple-400">
              <Trophy size={32} className="fill-current sm:hidden" />
              <Trophy size={38} className="fill-current hidden sm:block" />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-mono font-bold mb-1.5 sm:mb-2">
              <Award size={12} />
              <span>SPRINT FINISHED!</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              {score.toLocaleString()} PTS
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {score > highScore 
                ? '🔥 NEW ALL-TIME HIGH SCORE!' 
                : `Personal Best: ${highScore.toLocaleString()} pts`}
            </p>
          </div>

          {/* Stats Breakdown */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="bg-slate-950/80 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-800">
              <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Accuracy</div>
              <div className="text-base sm:text-lg font-black text-cyan-400 mt-0.5">{accuracy}%</div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 font-mono mt-0.5">{correctCount}/{totalAnswered} Correct</div>
            </div>
            <div className="bg-slate-950/80 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-800">
              <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Max Streak</div>
              <div className="text-base sm:text-lg font-black text-purple-400 mt-0.5">{maxStreak} 🔥</div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 font-mono mt-0.5">Consecutive</div>
            </div>
            <div className="bg-slate-950/80 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-800">
              <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Bonus XP</div>
              <div className="text-base sm:text-lg font-black text-emerald-400 mt-0.5">+{Math.round(score / 5)}</div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 font-mono mt-0.5">Profile XP</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
            <button
              onClick={() => {
                const earnedXP = Math.round(score / 5);
                if (earnedXP > 0) addXP(earnedXP);
                startSprint();
              }}
              className="flex-1 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 touch-manipulation transition-all min-h-[46px]"
            >
              <RotateCcw size={14} />
              <span>CLAIM XP &amp; SPRINT AGAIN</span>
            </button>
            <button
              onClick={() => {
                const earnedXP = Math.round(score / 5);
                if (earnedXP > 0) addXP(earnedXP);
                setGameState('idle');
              }}
              className="py-3 sm:py-3.5 px-6 rounded-xl sm:rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm transition-colors touch-manipulation min-h-[46px]"
            >
              Back to Lobby
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
