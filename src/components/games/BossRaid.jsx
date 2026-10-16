import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { SPRINT_QUESTIONS } from '../../data/arcadeSprintQuestions';
import { sound } from '../../utils/soundEngine';
import { 
  Skull, 
  Heart, 
  Shield, 
  Zap, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  Swords,
  Flame,
  Award
} from 'lucide-react';

const HERO_CLASSES = [
  {
    id: 'sorcerer',
    name: 'Frontend Sorcerer',
    icon: '🧙‍♂️',
    spell: 'Flexbox Supernova',
    bonusTech: 'HTML',
    bonusTech2: 'CSS',
    desc: '+50 bonus damage on HTML & CSS spells!',
    hearts: 3
  },
  {
    id: 'assassin',
    name: 'Script Assassin',
    icon: '⚡',
    spell: 'Async Critical Strike',
    bonusTech: 'JavaScript',
    bonusTech2: 'Python',
    desc: '+50 bonus damage on JavaScript & Python!',
    hearts: 3
  },
  {
    id: 'knight',
    name: 'Backend Knight',
    icon: '🛡️',
    spell: 'ACID Fortress',
    bonusTech: 'MySQL',
    bonusTech2: 'PHP',
    desc: 'Starts with 4 Hearts for ultimate endurance!',
    hearts: 4
  }
];

export const BossRaid = () => {
  const { addXP, unlockAchievement, triggerConfetti } = useGame();

  const [gameState, setGameState] = useState('select_hero'); // 'select_hero' | 'battle' | 'victory' | 'defeat'
  const [selectedHero, setSelectedHero] = useState(HERO_CLASSES[0]);
  const [bossHp, setBossHp] = useState(1000);
  const [maxBossHp] = useState(1000);
  const [playerHearts, setPlayerHearts] = useState(3);
  const [maxHearts, setMaxHearts] = useState(3);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [damageNumber, setDamageNumber] = useState(null);
  const [combatLog, setCombatLog] = useState([
    '⚔️ The Syntax Devourer rises from corrupted heap memory! Prepare to cast your code spells!'
  ]);
  const [isAttacking, setIsAttacking] = useState(false);
  const [isBossHurt, setIsBossHurt] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const startBattle = (hero) => {
    sound.playLevelUp();
    setSelectedHero(hero);
    setBossHp(1000);
    setPlayerHearts(hero.hearts);
    setMaxHearts(hero.hearts);
    setCurrentQIndex(0);
    setCombatLog([
      `⚔️ ${hero.name} entered the arena! Cast spells by solving syntax challenges!`
    ]);
    setGameState('battle');
  };

  const handleCastSpell = (optionIdx) => {
    if (feedback !== null || gameState !== 'battle') return;

    const q = SPRINT_QUESTIONS[currentQIndex % SPRINT_QUESTIONS.length];
    const isCorrect = optionIdx === q.correct;

    if (isCorrect) {
      sound.playHit();
      let damage = 200 + Math.floor(Math.random() * 50);

      // Class synergy bonus
      if (q.tech === selectedHero.bonusTech || q.tech === selectedHero.bonusTech2) {
        damage += 60;
      }

      setDamageNumber(`-${damage} DMG`);
      setIsBossHurt(true);
      setFeedback({ type: 'correct', selected: optionIdx });

      const newBossHp = Math.max(0, bossHp - damage);
      setBossHp(newBossHp);

      setCombatLog(prev => [
        `✨ You cast ${selectedHero.spell} on [${q.tech}]! Dealt ${damage} damage to the Boss!`,
        ...prev.slice(0, 3)
      ]);

      setTimeout(() => {
        setIsBossHurt(false);
        setDamageNumber(null);
      }, 700);

      if (newBossHp <= 0) {
        setTimeout(() => {
          sound.playExplosion();
          triggerConfetti();
          unlockAchievement('boss_slayer');
          addXP(300);
          setGameState('victory');
        }, 800);
        return;
      }
    } else {
      sound.playError();
      const newHearts = playerHearts - 1;
      setPlayerHearts(newHearts);
      setFeedback({ type: 'wrong', selected: optionIdx });

      setCombatLog(prev => [
        `💥 Syntax Devourer countered with UnhandledRejection! You lost 1 Heart!`,
        ...prev.slice(0, 3)
      ]);

      if (newHearts <= 0) {
        setTimeout(() => {
          setGameState('defeat');
        }, 800);
        return;
      }
    }

    setTimeout(() => {
      setFeedback(null);
      setCurrentQIndex(prev => prev + 1);
    }, 600);
  };

  const currentQ = SPRINT_QUESTIONS[currentQIndex % SPRINT_QUESTIONS.length];
  const bossHpPercent = Math.round((bossHp / maxBossHp) * 100);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* HERO CLASS SELECTOR */}
      {gameState === 'select_hero' && (
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-rose-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-rose-950/30 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-rose-500 to-red-600 p-0.5 shadow-xl shadow-rose-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center text-rose-500">
              <Skull size={40} className="animate-pulse" />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold mb-3">
              <Swords size={13} />
              <span>EPIC CYBER RAID BOSS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              The Syntax Devourer
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
              A monstrous entity born from unclosed `&lt;div&gt;` tags, missing semicolons, and infinite loops! Choose your class to slay it!
            </p>
          </div>

          {/* Hero Selection Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left pt-2">
            {HERO_CLASSES.map((hero) => (
              <div
                key={hero.id}
                onClick={() => setSelectedHero(hero)}
                className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                  selectedHero.id === hero.id
                    ? 'bg-slate-900 border-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.3)] ring-1 ring-rose-400/50 scale-[1.02]'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div>
                  <div className="text-3xl mb-2">{hero.icon}</div>
                  <h4 className="font-bold text-white text-sm sm:text-base">{hero.name}</h4>
                  <div className="text-[11px] text-rose-400 font-mono mt-0.5 font-bold">
                    Special: {hero.spell}
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {hero.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Base Shields:</span>
                  <span className="text-rose-400 font-bold">
                    {Array.from({ length: hero.hearts }).map((_, i) => '❤️').join('')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => startBattle(selectedHero)}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-rose-500/25 active:scale-95 transition-all"
          >
            <Swords size={18} />
            <span>ENTER BOSS ARENA AS {selectedHero.name.toUpperCase()}</span>
          </button>
        </div>
      )}

      {/* ACTIVE BATTLE VIEW */}
      {gameState === 'battle' && (
        <div className="space-y-4">
          
          {/* Boss Stage Header */}
          <div className={`glass-panel p-5 sm:p-6 rounded-3xl border border-rose-500/40 bg-gradient-to-b from-slate-900/90 to-rose-950/30 shadow-2xl relative overflow-hidden transition-all duration-200 ${
            isBossHurt ? 'ring-4 ring-rose-500 scale-[0.99] bg-rose-950/50' : ''
          }`}>
            
            {/* Floating Damage Popup */}
            {damageNumber && (
              <div className="absolute top-8 right-12 text-3xl sm:text-4xl font-black text-amber-400 animate-bounce font-mono drop-shadow-[0_0_15px_rgba(251,191,36,0.8)] z-20">
                {damageNumber}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Boss Avatar & Name */}
              <div className="flex items-center gap-3.5 text-center sm:text-left">
                <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-3xl shadow-lg relative">
                  <span className={isBossHurt ? 'animate-spin text-amber-400' : 'animate-pulse'}>👾</span>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-mono font-bold mb-1">
                    <Skull size={10} />
                    <span>SYNTAX DEVOURER (LVL 99)</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    The Syntax Devourer
                  </h3>
                </div>
              </div>

              {/* Player Hearts */}
              <div className="bg-slate-950/80 px-4 py-2.5 rounded-2xl border border-slate-800 flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-1">Player Shield:</span>
                <div className="flex items-center gap-1 text-lg">
                  {Array.from({ length: maxHearts }).map((_, i) => (
                    <span key={i} className={i < playerHearts ? 'text-rose-500' : 'text-slate-700 opacity-40'}>
                      ❤️
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Boss HP Bar */}
            <div className="mt-4 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-rose-400 font-bold flex items-center gap-1">
                  <Flame size={12} className="fill-current" />
                  Boss Health
                </span>
                <span className="text-slate-300 font-bold font-mono">
                  {bossHp} / {maxBossHp} HP ({bossHpPercent}%)
                </span>
              </div>
              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-400 transition-all duration-300"
                  style={{ width: `${bossHpPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Spell Casting Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-slate-900/90 shadow-2xl space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                <Zap size={13} />
                <span>Spell Element: {currentQ.tech}</span>
              </span>
              <span className="text-xs font-mono text-slate-400">
                Turn #{currentQIndex + 1}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
              {currentQ.question}
            </h3>

            {/* Spell Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentQ.options.map((opt, idx) => {
                let btnStyle = 'bg-slate-950/80 hover:bg-slate-800 border-slate-800 text-slate-200 hover:border-cyan-400';

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
                    onClick={() => handleCastSpell(idx)}
                    className={`p-4 rounded-2xl border text-left font-mono text-xs sm:text-sm transition-all duration-150 flex items-center justify-between active:scale-95 ${btnStyle}`}
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

          {/* Combat Log */}
          <div className="glass-panel p-3.5 rounded-2xl border border-slate-800 bg-slate-950/80 text-xs font-mono space-y-1">
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Combat Log</div>
            {combatLog.map((log, i) => (
              <div key={i} className="text-slate-300 truncate">
                {log}
              </div>
            ))}
          </div>

        </div>
      )}

      {/* VICTORY SCREEN */}
      {gameState === 'victory' && (
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-emerald-500/40 bg-gradient-to-br from-slate-900 via-slate-900/95 to-emerald-950/30 text-center space-y-6 shadow-2xl animate-fadeIn">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-xl shadow-emerald-500/25 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center text-emerald-400">
              <Trophy size={40} className="fill-current" />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold mb-2">
              <Award size={13} />
              <span>FLAWLESS VICTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              The Syntax Devourer SWAIN!
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
              You banished the corrupted heap memory entity with flawless code execution!
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 max-w-md mx-auto space-y-1">
            <div className="text-emerald-400 font-bold font-mono text-sm">🏆 Rewards Unlocked:</div>
            <div className="text-xs text-slate-300 font-mono">+300 Profile XP awarded!</div>
            <div className="text-xs text-slate-300 font-mono">Achievement: "Syntax Slayer" Badge</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md mx-auto">
            <button
              onClick={() => startBattle(selectedHero)}
              className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
            >
              <RotateCcw size={15} />
              <span>RAID AGAIN</span>
            </button>
            <button
              onClick={() => setGameState('select_hero')}
              className="py-3.5 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              Change Hero
            </button>
          </div>
        </div>
      )}

      {/* DEFEAT SCREEN */}
      {gameState === 'defeat' && (
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-rose-500/30 bg-gradient-to-br from-slate-900 via-slate-900/95 to-rose-950/40 text-center space-y-6 shadow-2xl animate-fadeIn">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-slate-950 border border-rose-500/40 flex items-center justify-center text-rose-500 text-3xl">
            💀
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-mono font-bold mb-2">
              <Skull size={13} />
              <span>SHIELD DEPLETED</span>
            </div>
            <h2 className="text-3xl font-black text-white">
              The Syntax Devourer Overwhelmed You!
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
              Your shield was broken by unhandled syntax exceptions. Study the docs and try again!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md mx-auto">
            <button
              onClick={() => startBattle(selectedHero)}
              className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
            >
              <RotateCcw size={15} />
              <span>REVIVE &amp; RETRY</span>
            </button>
            <button
              onClick={() => setGameState('select_hero')}
              className="py-3.5 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              Switch Hero
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
