import React, { useState, useEffect, useRef } from 'react';
import { MCQ_EXAM_TRACKS } from '../../data/mcqExams';
import { useGame } from '../../context/GameContext';
import { sound } from '../../utils/soundEngine';
import { 
  Award, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Flag, 
  RotateCcw, 
  Printer, 
  Copy, 
  Check, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  ExternalLink,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  Code2
} from 'lucide-react';

export const ExamCenter = ({ defaultTrack = 'html', onSwitchToTutorials }) => {
  const { addXP } = useGame();
  
  // Exam Lifecycle: 'lobby' | 'in_progress' | 'results'
  const [examStatus, setExamStatus] = useState('lobby');
  const [selectedTrackId, setSelectedTrackId] = useState(defaultTrack);
  const [studentName, setStudentName] = useState(() => {
    try {
      return localStorage.getItem('byteverse_student_name') || 'Affan Developer';
    } catch {
      return 'Affan Developer';
    }
  });

  // Active Exam State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [qId]: optionIndex }
  const [flaggedQuestions, setFlaggedQuestions] = useState({}); // { [qId]: boolean }
  const [secondsRemaining, setSecondsRemaining] = useState(600); // 10 minutes default
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [showReviewMode, setShowReviewMode] = useState(false);
  const [certificateHash, setCertificateHash] = useState('');
  const [copiedHash, setCopiedHash] = useState(false);

  const timerRef = useRef(null);

  const currentTrack = MCQ_EXAM_TRACKS[selectedTrackId] || MCQ_EXAM_TRACKS.html;
  const questions = currentTrack.questions;
  const currentQ = questions[currentQuestionIndex];

  // Save student name to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('byteverse_student_name', studentName);
    } catch {
      // Ignore
    }
  }, [studentName]);

  // Exam Countdown Timer
  useEffect(() => {
    if (examStatus === 'in_progress') {
      timerRef.current = setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            finishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [examStatus]);

  // Start Exam
  const startExam = (trackId = selectedTrackId) => {
    sound.playClick();
    setSelectedTrackId(trackId);
    setUserAnswers({});
    setFlaggedQuestions({});
    setCurrentQuestionIndex(0);
    setSecondsRemaining((currentTrack.durationMinutes || 10) * 60);
    setShowConfirmSubmit(false);
    setShowReviewMode(false);
    setExamStatus('in_progress');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Answer selection
  const handleSelectAnswer = (optionIndex) => {
    sound.playClick();
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionIndex
    }));
  };

  // Flag toggle
  const handleToggleFlag = (qId) => {
    sound.playClick();
    setFlaggedQuestions(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  // Calculate Results
  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correct) {
        correctCount++;
      }
    });
    const percentage = Math.round((correctCount / questions.length) * 100);
    const passed = percentage >= currentTrack.passingScore;
    return { correctCount, total: questions.length, percentage, passed };
  };

  // Finish and grade exam
  const finishExam = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    sound.playLevelUp();
    
    // Generate unique verification credential
    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
    const hash = `BV-${selectedTrackId.toUpperCase()}-${new Date().getFullYear()}-${randomHex}`;
    setCertificateHash(hash);

    const results = calculateScore();
    if (results.passed) {
      addXP(currentTrack.xpReward);
    }

    setExamStatus('results');
    setShowConfirmSubmit(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Format time mm:ss
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  // Copy Certificate Hash
  const handleCopyHash = () => {
    sound.playClick();
    navigator.clipboard.writeText(certificateHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // Print Certificate
  const handlePrintCertificate = () => {
    sound.playClick();
    window.print();
  };

  // Count answered questions
  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = questions.length - answeredCount;

  // -------------------------------------------------------------------------
  // 1. EXAM LOBBY VIEW
  // -------------------------------------------------------------------------
  if (examStatus === 'lobby') {
    return (
      <div className="space-y-6 animate-fadeIn pb-12">
        {/* Header Hero Banner */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/30 shadow-2xl overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                <Sparkles size={14} />
                <span>OFFICIAL W3C-ALIGNED CERTIFICATION</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                ByteVerse MCQ Certification Center
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                Test your practical coding acumen through timed, industry-standard multiple choice exams. Score 75% or higher to earn an official Cyber Certificate of Mastery stamped and verified by founder Affan Sayed.
              </p>
            </div>

            {/* Student Name Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-2 min-w-[260px]">
              <label className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider block">
                Certificate Recipient Name:
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter Your Full Name"
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-emerald-500/40 text-emerald-300 font-bold text-sm focus:outline-none focus:border-emerald-400"
              />
              <span className="text-[10px] text-slate-500 block font-mono">
                Will appear on your verified digital certificate.
              </span>
            </div>
          </div>
        </div>

        {/* Track Selector Cards */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-mono text-slate-400 uppercase tracking-wider font-bold">
              Select Your Certification Track:
            </h2>
            <span className="text-xs font-mono text-emerald-400 font-semibold">
              7 Official Courses Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.values(MCQ_EXAM_TRACKS).map((track) => {
              const isSelected = selectedTrackId === track.id;
              return (
                <div
                  key={track.id}
                  onClick={() => {
                    sound.playClick();
                    setSelectedTrackId(track.id);
                  }}
                  className={`cursor-pointer p-5 sm:p-6 rounded-2xl transition-all relative overflow-hidden group touch-manipulation ${
                    isSelected
                      ? 'bg-slate-900 border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)] scale-[1.01]'
                      : 'bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-3xl">{track.badge}</span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                      +{track.xpReward} XP
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white group-hover:text-emerald-300 transition-colors">
                    {track.name}
                  </h3>
                  
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {track.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-emerald-400" />
                      {track.durationMinutes} Mins
                    </span>
                    <span className="flex items-center gap-1">
                      <Award size={12} className="text-cyan-400" />
                      {track.questions.length} Questions
                    </span>
                    <span className="text-amber-400 font-bold">
                      {track.passingScore}% to Pass
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Track Detailed Action Panel */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              Ready to Certify:
            </span>
            <h3 className="text-2xl font-black text-white flex items-center gap-2 justify-center sm:justify-start">
              <span>{currentTrack.badge}</span>
              <span>{currentTrack.name} Exam</span>
            </h3>
            <p className="text-xs text-slate-400">
              {currentTrack.questions.length} Questions &bull; {currentTrack.durationMinutes} Minutes &bull; Passing criteria: {currentTrack.passingScore}% (9/12 correct)
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {onSwitchToTutorials && (
              <button
                onClick={onSwitchToTutorials}
                className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center justify-center gap-2 transition-all min-h-[46px] touch-manipulation"
              >
                <BookOpen size={15} />
                <span>Study Tutorials First</span>
              </button>
            )}

            <button
              onClick={() => startExam()}
              className="flex-1 sm:flex-none px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-[0_0_25px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 transition-transform active:scale-95 min-h-[46px] touch-manipulation"
            >
              <span>Begin Official Exam &raquo;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // 2. ACTIVE EXAM IN PROGRESS VIEW
  // -------------------------------------------------------------------------
  if (examStatus === 'in_progress') {
    const isUrgent = secondsRemaining < 120; // Under 2 minutes
    const isFlagged = flaggedQuestions[currentQ.id];
    const selectedOption = userAnswers[currentQ.id];

    return (
      <div className="space-y-5 animate-fadeIn pb-16">
        
        {/* Sticky Top Status Bar */}
        <div className="sticky top-2 z-30 p-3 sm:p-4 rounded-2xl glass-panel bg-slate-950/95 border border-slate-800 shadow-xl flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{currentTrack.badge}</span>
            <div>
              <span className="text-xs font-mono font-bold text-white block">
                {currentTrack.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Question {currentQuestionIndex + 1} of {questions.length} ({answeredCount} answered)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Timer */}
            <div className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold border transition-colors ${
              isUrgent 
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse'
                : 'bg-slate-900 text-emerald-400 border-emerald-500/30'
            }`}>
              <Clock size={15} />
              <span>{formatTime(secondsRemaining)}</span>
            </div>

            {/* Submit Button */}
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-md transition-all active:scale-95 min-h-[38px] touch-manipulation"
            >
              Finish &amp; Submit
            </button>
          </div>
        </div>

        {/* Question Quick-Jump Grid */}
        <div className="p-3 sm:p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-1.5 overflow-x-auto touch-scroll">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-bold mr-2 shrink-0">
            Jump to:
          </span>
          {questions.map((q, idx) => {
            const isCurrent = idx === currentQuestionIndex;
            const isAns = userAnswers[q.id] !== undefined;
            const isFlg = flaggedQuestions[q.id];

            return (
              <button
                key={q.id}
                onClick={() => {
                  sound.playClick();
                  setCurrentQuestionIndex(idx);
                }}
                className={`relative w-8 h-8 rounded-lg font-mono text-xs font-bold transition-all shrink-0 flex items-center justify-center touch-manipulation ${
                  isCurrent
                    ? 'ring-2 ring-emerald-400 bg-emerald-500/30 text-white font-black'
                    : isAns
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                <span>{idx + 1}</span>
                {isFlg && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-purple-500 ring-2 ring-slate-950" />
                )}
              </button>
            );
          })}
        </div>

        {/* Question Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
              <span>Question {currentQuestionIndex + 1}</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-slate-400">1 Mark</span>
            </span>

            {/* Flag for Review */}
            <button
              onClick={() => handleToggleFlag(currentQ.id)}
              className={`px-3 py-1 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all min-h-[36px] touch-manipulation ${
                isFlagged
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-700/50'
              }`}
            >
              <Flag size={13} className={isFlagged ? 'fill-current' : ''} />
              <span>{isFlagged ? 'Flagged for Review' : 'Flag Question'}</span>
            </button>
          </div>

          {/* Question Text */}
          <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
            {currentQ.question}
          </h2>

          {/* Optional Code Snippet */}
          {currentQ.code && (
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-emerald-300 overflow-x-auto touch-scroll">
              <pre className="whitespace-pre-wrap">{currentQ.code}</pre>
            </div>
          )}

          {/* Options List */}
          <div className="space-y-3 pt-2">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = selectedOption === optIdx;

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectAnswer(optIdx)}
                  className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all flex items-center justify-between gap-3 min-h-[52px] touch-manipulation ${
                    isSelected
                      ? 'bg-emerald-500/15 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)] font-semibold'
                      : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-950'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-emerald-400 text-slate-950'
                        : 'bg-slate-900 border border-slate-800 text-slate-400'
                    }`}>
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="text-sm font-sans">{opt}</span>
                  </div>

                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                    isSelected ? 'border-emerald-400 bg-emerald-400' : 'border-slate-700'
                  }`}>
                    {isSelected && <Check size={12} className="text-slate-950 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Bottom Row */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                if (currentQuestionIndex > 0) {
                  sound.playClick();
                  setCurrentQuestionIndex(currentQuestionIndex - 1);
                }
              }}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all min-h-[44px] touch-manipulation ${
                currentQuestionIndex > 0
                  ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                  : 'bg-slate-900/40 text-slate-600 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>

            {currentQuestionIndex < questions.length - 1 ? (
              <button
                onClick={() => {
                  sound.playClick();
                  setCurrentQuestionIndex(currentQuestionIndex + 1);
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md min-h-[44px] touch-manipulation"
              >
                <span>Next Question</span>
                <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={() => setShowConfirmSubmit(true)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 active:scale-95 min-h-[44px] touch-manipulation"
              >
                <span>Submit Exam Now</span>
                <Sparkles size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Submit Confirmation Modal */}
        {showConfirmSubmit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-emerald-500/40 shadow-2xl max-w-md w-full space-y-4">
              <div className="flex items-center gap-3 text-emerald-400">
                <AlertCircle size={28} />
                <h3 className="text-xl font-bold text-white">Ready to Finalize?</h3>
              </div>

              <div className="text-sm text-slate-300 space-y-2">
                <p>
                  You have answered <strong className="text-emerald-400">{answeredCount}</strong> out of <strong className="text-white">{questions.length}</strong> questions.
                </p>
                {unansweredCount > 0 && (
                  <p className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
                    Warning: You still have {unansweredCount} unanswered questions! Unanswered questions receive 0 marks.
                  </p>
                )}
                <p className="text-xs text-slate-400">
                  Once submitted, your responses will be scored immediately and your certification certificate generated.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setShowConfirmSubmit(false)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs min-h-[44px] touch-manipulation"
                >
                  Return to Exam
                </button>
                <button
                  onClick={finishExam}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/30 min-h-[44px] touch-manipulation"
                >
                  Confirm &amp; Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // 3. EXAM RESULTS & CERTIFICATE OF MASTERY VIEW
  // -------------------------------------------------------------------------
  const { correctCount, total, percentage, passed } = calculateScore();

  return (
    <div className="space-y-8 animate-fadeIn pb-20">
      
      {/* Top Results Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl border shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 ${
        passed 
          ? 'bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border-emerald-500/40 shadow-emerald-500/10'
          : 'bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-950 border-rose-500/40 shadow-rose-500/10'
      }`}>
        <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center font-black text-3xl shrink-0 border shadow-xl ${
            passed 
              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
              : 'bg-rose-500/20 border-rose-400 text-rose-300'
          }`}>
            {passed ? '🏆' : '📚'}
          </div>

          <div className="space-y-1">
            <span className={`text-xs font-mono font-bold uppercase tracking-widest ${
              passed ? 'text-emerald-400' : 'text-rose-400'
            }`}>
              {passed ? 'Certification Examination Passed!' : 'Certification Attempt Incomplete'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              {passed ? 'Official Certification Earned' : 'Keep Studying! You Can Do It!'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              {passed 
                ? `Outstanding performance! You met the ${currentTrack.passingScore}% threshold with an accuracy of ${percentage}%. Your verified credential has been issued below.`
                : `You scored ${percentage}% (${correctCount}/${total} correct). You need ${currentTrack.passingScore}% to earn the official credential. Review the answers below and try again!`
              }
            </p>
          </div>
        </div>

        {/* Score & XP Metric Pills */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="p-3 sm:p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-center min-w-[90px]">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Score</span>
            <span className={`text-2xl font-black font-mono ${passed ? 'text-emerald-400' : 'text-rose-400'}`}>
              {percentage}%
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-center min-w-[90px]">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Accuracy</span>
            <span className="text-2xl font-black font-mono text-white">
              {correctCount}/{total}
            </span>
          </div>

          {passed && (
            <div className="p-3 sm:p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center min-w-[90px]">
              <span className="text-[10px] font-mono text-emerald-400 uppercase block">Reward</span>
              <span className="text-2xl font-black font-mono text-emerald-300">
                +{currentTrack.xpReward} XP
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 4. OFFICIAL CYBER CERTIFICATE OF COMPLETION (If Passed) */}
      {/* ----------------------------------------------------------------- */}
      {passed && (
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck size={16} />
              <span>Verifiable Credential Document</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyHash}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-all min-h-[40px] touch-manipulation"
                title="Copy Credential ID"
              >
                {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedHash ? 'Hash Copied!' : certificateHash}</span>
              </button>

              <button
                onClick={handlePrintCertificate}
                className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95 min-h-[40px] touch-manipulation"
              >
                <Printer size={14} />
                <span>Print / Save PDF</span>
              </button>
            </div>
          </div>

          {/* Certificate Canvas / Container */}
          <div 
            id="byteverse-certificate"
            className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-slate-950 via-[#0b101c] to-slate-950 border-2 border-emerald-500/40 shadow-[0_0_60px_rgba(16,185,129,0.15)] text-center space-y-8 overflow-hidden print:border-black print:text-black print:bg-white"
          >
            {/* Cyber Corner Decals */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-emerald-400 pointer-events-none" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-emerald-400 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-emerald-400 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-emerald-400 pointer-events-none" />

            {/* Certificate Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-extrabold tracking-widest uppercase">
                <span>BYTEVERSE CODE ACADEMY</span>
                <span>&bull;</span>
                <span>W3C-ALIGNED STANDARD</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 tracking-tight uppercase">
                Certificate of Code Mastery
              </h2>
              <p className="text-xs sm:text-sm font-mono text-slate-400 tracking-wider">
                DOCUMENT VERIFICATION HASH: <span className="text-emerald-400 font-bold">{certificateHash}</span>
              </p>
            </div>

            {/* Recipient Presentation */}
            <div className="space-y-3 max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-400">
                This is to officially certify that
              </p>
              
              <div className="text-3xl sm:text-5xl font-black text-white tracking-wide border-b-2 border-emerald-500/30 pb-3 inline-block px-8">
                {studentName}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-2">
                has successfully passed the comprehensive examination for <strong className="text-emerald-300 font-bold">{currentTrack.name}</strong> with a final score of <strong className="text-emerald-400 font-bold">{percentage}%</strong>, demonstrating proficiency in modern web architecture, algorithmic logic, and industry syntax standards.
              </p>
            </div>

            {/* Seals and Authorized Signatures */}
            <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-3xl mx-auto">
              
              {/* Gold Holographic Seal */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-emerald-400 p-0.5 shadow-xl shadow-amber-500/20">
                  <div className="w-full h-full bg-slate-950 rounded-full flex flex-col items-center justify-center text-[10px] font-mono font-bold text-amber-300 leading-tight">
                    <Award size={18} className="text-amber-400 mb-0.5" />
                    <span>VERIFIED</span>
                    <span className="text-[8px] text-slate-400">PASSED</span>
                  </div>
                </div>
                <div className="text-left font-mono text-[11px] text-slate-400">
                  <div className="text-emerald-400 font-bold">Issued on {new Date().toLocaleDateString()}</div>
                  <div>Certified by W3-Curriculum</div>
                </div>
              </div>

              {/* Creator Signature: Affan Sayed */}
              <div className="text-center sm:text-right space-y-1">
                <div className="font-serif italic text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 font-extrabold">
                  Affan Sayed
                </div>
                <div className="text-xs font-mono font-bold text-white">
                  Affan Sayed
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  Founder &amp; Lead Architect, ByteVerse
                </div>
                <a
                  href="https://affansayed.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-mono text-cyan-400 hover:text-cyan-300 underline"
                >
                  <span>affansayed.vercel.app</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Action Navigation: Retake / Review / Change Track */}
      <div className="flex items-center justify-center flex-wrap gap-4 pt-4">
        <button
          onClick={() => startExam()}
          className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-2 min-h-[46px] touch-manipulation transition-all"
        >
          <RotateCcw size={15} />
          <span>Retake Exam</span>
        </button>

        <button
          onClick={() => setShowReviewMode(!showReviewMode)}
          className={`px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 min-h-[46px] touch-manipulation transition-all ${
            showReviewMode
              ? 'bg-emerald-500 text-slate-950 font-black shadow-md'
              : 'bg-slate-900 border border-emerald-500/30 text-emerald-300 hover:bg-slate-800'
          }`}
        >
          <Code2 size={15} />
          <span>{showReviewMode ? 'Hide Detailed Answers' : 'Review Questions & Explanations'}</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setExamStatus('lobby');
          }}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs flex items-center gap-2 min-h-[46px] touch-manipulation transition-transform active:scale-95"
        >
          <span>Choose Another Course</span>
          <ArrowRight size={15} />
        </button>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 5. DETAILED QUESTION BY QUESTION EXPLANATION REVIEW */}
      {/* ----------------------------------------------------------------- */}
      {showReviewMode && (
        <div className="space-y-5 animate-fadeIn pt-4">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen size={18} className="text-emerald-400" />
              <span>Comprehensive Answer Key &amp; W3 Explanations</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              {correctCount} Correct &bull; {total - correctCount} Incorrect
            </span>
          </div>

          <div className="space-y-4">
            {questions.map((q, idx) => {
              const userOpt = userAnswers[q.id];
              const isCorrect = userOpt === q.correct;
              const answered = userOpt !== undefined;

              return (
                <div
                  key={q.id}
                  className={`p-6 rounded-2xl border transition-all ${
                    isCorrect
                      ? 'bg-slate-950/80 border-emerald-500/30'
                      : 'bg-slate-950/80 border-rose-500/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Question {idx + 1}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold flex items-center gap-1 ${
                      isCorrect 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                    }`}>
                      {isCorrect ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                      <span>{isCorrect ? 'Correct (+1)' : answered ? 'Incorrect (0)' : 'Unanswered (0)'}</span>
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-2">
                    {q.question}
                  </h4>

                  {q.code && (
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-300 mb-3 overflow-x-auto touch-scroll">
                      <pre className="whitespace-pre-wrap">{q.code}</pre>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3">
                    {q.options.map((opt, oIdx) => {
                      const isSelectedByUser = userOpt === oIdx;
                      const isThisCorrect = q.correct === oIdx;

                      return (
                        <div
                          key={oIdx}
                          className={`p-3 rounded-xl text-xs font-mono flex items-center justify-between border ${
                            isThisCorrect
                              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold'
                              : isSelectedByUser && !isCorrect
                              ? 'bg-rose-500/20 border-rose-400 text-rose-200 line-through'
                              : 'bg-slate-900/50 border-slate-800/80 text-slate-400'
                          }`}
                        >
                          <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                          {isThisCorrect && <Check size={14} className="text-emerald-400 shrink-0 ml-2" />}
                          {isSelectedByUser && !isCorrect && <XCircle size={14} className="text-rose-400 shrink-0 ml-2" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Pedagogical Explanation Box */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1">
                    <span className="font-mono text-emerald-400 font-bold block uppercase tracking-wider text-[11px]">
                      💡 W3 Concept Explanation:
                    </span>
                    <p className="leading-relaxed font-sans">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
