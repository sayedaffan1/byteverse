import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/soundEngine';

const GameContext = createContext();

const STORAGE_KEY = 'byteverse_player_data_v1';

export const GameProvider = ({ children }) => {
  // Load saved state or default
  const [playerData, setPlayerData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return {
      xp: 0,
      streak: 1,
      lastActiveDate: new Date().toDateString(),
      completedLevels: {
        html: [],
        css: [],
        js: [],
        mysql: [],
        python: [],
        php: [],
        django: []
      },
      achievements: ['first_step'],
      soundMuted: false,
    };
  });

  const [mode, setMode] = useState('arcade'); // 'arcade' | 'academy' | 'coop' | 'playground'
  const [selectedTrack, setSelectedTrack] = useState('html');
  const [activeGameLevel, setActiveGameLevel] = useState(1);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(playerData));
    } catch {
      // Ignore
    }
  }, [playerData]);

  // Sync sound mute setting with soundEngine
  useEffect(() => {
    sound.setMuted(playerData.soundMuted);
  }, [playerData.soundMuted]);

  // Player Rank Calculation
  const playerLevel = Math.floor(playerData.xp / 100) + 1;
  const currentLevelProgress = playerData.xp % 100;

  const getRankTitle = (lvl) => {
    if (lvl >= 20) return 'Cyber Archmage';
    if (lvl >= 15) return 'Full-Stack Titan';
    if (lvl >= 10) return 'System Architect';
    if (lvl >= 7) return 'Algorithm Master';
    if (lvl >= 5) return 'Code Sorcerer';
    if (lvl >= 3) return 'Syntax Knight';
    return 'Byte Novice';
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // canvas-confetti fallback
    }
  };

  const addXP = (amount) => {
    sound.playCorrect();
    triggerConfetti();

    setPlayerData(prev => {
      const oldLevel = Math.floor(prev.xp / 100) + 1;
      const newXP = prev.xp + amount;
      const newLevel = Math.floor(newXP / 100) + 1;

      if (newLevel > oldLevel) {
        setTimeout(() => sound.playLevelUp(), 300);
      }

      return {
        ...prev,
        xp: newXP
      };
    });
  };

  const markLevelComplete = (track, levelId, xpReward = 50) => {
    setPlayerData(prev => {
      const currentCompleted = prev.completedLevels[track] || [];
      const isFirstTime = !currentCompleted.includes(levelId);
      const updatedList = isFirstTime ? [...currentCompleted, levelId] : currentCompleted;

      // Check if all levels in track are complete to unlock badge
      const newAchievements = [...prev.achievements];
      if (updatedList.length >= 4) {
        const badgeMap = {
          html: 'html_master',
          css: 'css_wizard',
          js: 'js_ninja',
          mysql: 'sql_sleuth',
          python: 'python_charmer',
          php: 'server_chef',
          django: 'django_captain'
        };
        const badgeId = badgeMap[track];
        if (badgeId && !newAchievements.includes(badgeId)) {
          newAchievements.push(badgeId);
          setTimeout(() => sound.playStreak(), 600);
        }
      }

      return {
        ...prev,
        xp: isFirstTime ? prev.xp + xpReward : prev.xp,
        completedLevels: {
          ...prev.completedLevels,
          [track]: updatedList
        },
        achievements: newAchievements
      };
    });

    sound.playCorrect();
    triggerConfetti();
  };

  const unlockAchievement = (id) => {
    setPlayerData(prev => {
      if (prev.achievements.includes(id)) return prev;
      sound.playStreak();
      return {
        ...prev,
        achievements: [...prev.achievements, id]
      };
    });
  };

  const toggleSound = () => {
    sound.playClick();
    setPlayerData(prev => ({
      ...prev,
      soundMuted: !prev.soundMuted
    }));
  };

  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset all your progress, XP, and badges?')) {
      const initial = {
        xp: 0,
        streak: 1,
        lastActiveDate: new Date().toDateString(),
        completedLevels: {
          html: [],
          css: [],
          js: [],
          mysql: [],
          python: [],
          php: [],
          django: []
        },
        achievements: ['first_step'],
        soundMuted: false
      };
      setPlayerData(initial);
      localStorage.removeItem(STORAGE_KEY);
      sound.playClick();
    }
  };

  return (
    <GameContext.Provider
      value={{
        mode,
        setMode,
        selectedTrack,
        setSelectedTrack,
        activeGameLevel,
        setActiveGameLevel,
        xp: playerData.xp,
        playerLevel,
        currentLevelProgress,
        rankTitle: getRankTitle(playerLevel),
        streak: playerData.streak,
        completedLevels: playerData.completedLevels,
        achievements: playerData.achievements,
        soundMuted: playerData.soundMuted,
        isAchievementsOpen,
        setIsAchievementsOpen,
        addXP,
        markLevelComplete,
        unlockAchievement,
        toggleSound,
        resetProgress,
        triggerConfetti
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
