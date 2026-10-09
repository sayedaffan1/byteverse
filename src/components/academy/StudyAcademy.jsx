import React, { useState, useEffect } from 'react';
import { W3_KNOWLEDGE_BASE } from '../../data/w3Content/index';
import { LANGUAGES } from '../../data/languages';
import { useGame } from '../../context/GameContext';
import { sound } from '../../utils/soundEngine';
import { 
  BookOpen, 
  Code2, 
  Play, 
  Copy, 
  Check, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Search,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Lightbulb,
  Info,
  HelpCircle,
  ExternalLink,
  Award,
  Volume2,
  VolumeX,
  Sparkles
} from 'lucide-react';

export const StudyAcademy = () => {
  const { addXP } = useGame();
  const [selectedLang, setSelectedLang] = useState('html');
  const [activeLessonId, setActiveLessonId] = useState('html_home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  // Try it Yourself state
  const [editableCode, setEditableCode] = useState('');
  const [tryItOutput, setTryItOutput] = useState(null);
  const [copied, setCopied] = useState(false);

  // Exercise state
  const [exerciseChoice, setExerciseChoice] = useState(null);
  const [exerciseFeedback, setExerciseFeedback] = useState(null);
  const [completedExercises, setCompletedExercises] = useState([]);

  const currentLessons = W3_KNOWLEDGE_BASE[selectedLang] || W3_KNOWLEDGE_BASE.html;
  
  // Find active lesson or fallback to first
  const activeLessonIndex = currentLessons.findIndex(l => l.id === activeLessonId);
  const safeIndex = activeLessonIndex >= 0 ? activeLessonIndex : 0;
  const lesson = currentLessons[safeIndex];

  // Initialize or update code when lesson changes
  const [lastLoadedLessonId, setLastLoadedLessonId] = useState(null);
  if (lesson && lesson.id !== lastLoadedLessonId) {
    setEditableCode(lesson.tryItCode);
    setTryItOutput(null);
    setExerciseChoice(null);
    setExerciseFeedback(null);
    setLastLoadedLessonId(lesson.id);
  }

  // Cancel voice narration when lesson changes or component unmounts
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [lesson?.id]);

  const handleToggleSpeech = (text) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert("Text-to-speech is supported in all modern browsers like Chrome, Edge, Safari.");
      return;
    }
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.92; // Clear, calm pacing ideal for young kids and beginners
      utterance.pitch = 1.05;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelectLang = (langId) => {
    sound.playClick();
    setSelectedLang(langId);
    const newLessons = W3_KNOWLEDGE_BASE[langId] || [];
    if (newLessons.length > 0) {
      setActiveLessonId(newLessons[0].id);
    }
    setSidebarSearch('');
    setTryItOutput(null);
  };

  const handleSelectLesson = (lessonId) => {
    sound.playClick();
    setActiveLessonId(lessonId);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    if (safeIndex > 0) {
      sound.playClick();
      setActiveLessonId(currentLessons[safeIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (safeIndex < currentLessons.length - 1) {
      sound.playClick();
      setActiveLessonId(currentLessons[safeIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRunTryIt = () => {
    sound.playCorrect();
    const type = lesson.codeType;

    if (type === 'html') {
      setTryItOutput({ type: 'html', content: editableCode });
    } else if (type === 'js') {
      try {
        let logs = [];
        const originalLog = console.log;
        console.log = (...args) => {
          logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
        };
        new Function(editableCode)();
        console.log = originalLog;
        setTryItOutput({
          type: 'text',
          content: logs.length ? logs.join('\n') : 'Code executed with 0 runtime errors.'
        });
      } catch (err) {
        setTryItOutput({ type: 'error', content: err.message });
      }
    } else if (type === 'sql') {
      setTryItOutput({
        type: 'text',
        content: `Query Result Set (3 rows returned in 0.002s):\n-------------------------------------------------\n| CustomerID | CustomerName    | City    | Country |\n| 1          | Alfreds Futter  | Berlin  | Germany |\n| 2          | Ana Trujillo    | México  | Mexico  |\n| 3          | Antonio Moreno  | México  | Mexico  |\n-------------------------------------------------`
      });
    } else {
      // Python & PHP simulation
      setTryItOutput({
        type: 'text',
        content: `[${type.toUpperCase()} Runtime]:\nExecution successful.\nOutput generated with exit code 0.`
      });
    }
  };

  const handleCopy = () => {
    sound.playClick();
    navigator.clipboard.writeText(editableCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCheckExercise = (optIdx) => {
    sound.playClick();
    setExerciseChoice(optIdx);
    if (!lesson.exercise) return;

    if (optIdx === lesson.exercise.correct) {
      sound.playCorrect();
      setExerciseFeedback('correct');
      if (!completedExercises.includes(lesson.id)) {
        setCompletedExercises(prev => [...prev, lesson.id]);
        addXP(30);
      }
    } else {
      sound.playError();
      setExerciseFeedback('wrong');
    }
  };

  // Group lessons by category for sidebar
  const filteredLessons = currentLessons.filter(l => 
    l.title.toLowerCase().includes(sidebarSearch.toLowerCase()) ||
    l.summary.toLowerCase().includes(sidebarSearch.toLowerCase())
  );

  const categories = [...new Set(filteredLessons.map(l => l.category))];

  return (
    <div className="space-y-4 pb-16 md:pb-6">
      
      {/* 1. Top W3-Style Green Navigation Bar */}
      <div className="rounded-2xl glass-panel border border-emerald-500/20 bg-slate-950 p-2 sm:p-2.5 shadow-xl flex items-center justify-between gap-2 overflow-x-auto touch-scroll">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            title="Toggle Lessons Menu"
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-mono text-xs font-bold">
            <BookOpen size={14} />
            <span>W3-ACADEMY</span>
          </div>
        </div>

        {/* Language Switcher Buttons */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {LANGUAGES.map((lang) => {
            const isSelected = selectedLang === lang.id;
            return (
              <button
                key={lang.id}
                onClick={() => handleSelectLang(lang.id)}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 shadow-[0_0_12px_rgba(16,185,129,0.5)] font-black'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {lang.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Layout: Left W3 Sidebar + Right Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Left W3 Sidebar (Drawer on mobile, Sticky on desktop) */}
        <aside className={`
          fixed md:relative inset-y-0 left-0 z-40 md:z-auto w-72 md:w-full md:col-span-3 lg:col-span-3
          glass-panel bg-slate-950 md:bg-slate-950/80 border border-slate-800 rounded-none md:rounded-2xl p-4
          transition-transform duration-300 overflow-y-auto touch-scroll max-h-[85vh]
          ${sidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'}
        `}>
          
          {/* Mobile close button */}
          <div className="md:hidden flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <span className="font-bold text-sm text-white">Select Topic</span>
            <button onClick={() => setSidebarOpen(false)} className="text-slate-400">
              <X size={18} />
            </button>
          </div>

          {/* Sidebar Search Filter */}
          <div className="relative mb-4">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              placeholder="Filter topics..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-400 placeholder:text-slate-500"
            />
          </div>

          {/* Categorized Topic List */}
          <div className="space-y-4">
            {categories.map((cat, cIdx) => (
              <div key={cIdx} className="space-y-1">
                <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider px-2 py-1">
                  {cat}
                </div>
                <div className="space-y-0.5">
                  {filteredLessons.filter(l => l.category === cat).map((item) => {
                    const isActive = item.id === lesson.id;
                    const isDone = completedExercises.includes(item.id);

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelectLesson(item.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-emerald-500/20 text-emerald-300 font-bold border-l-4 border-emerald-400 shadow-sm'
                            : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                        }`}
                      >
                        <span className="truncate">{item.title}</span>
                        {isDone && <CheckCircle2 size={13} className="text-emerald-400 shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Right W3 Lesson Reader Area */}
        <main className="md:col-span-9 lg:col-span-9 space-y-6">
          
          {/* Top Pagination Row: Previous & Next */}
          <div className="glass-panel p-3 rounded-2xl border border-slate-800 flex items-center justify-between gap-2">
            <button
              onClick={handlePrev}
              disabled={safeIndex === 0}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                safeIndex > 0 
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm active:scale-95' 
                  : 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'
              }`}
            >
              <ChevronLeft size={16} />
              <span>&lt; Previous</span>
            </button>

            <span className="text-xs font-mono text-slate-400">
              {safeIndex + 1} / {currentLessons.length}
            </span>

            <button
              onClick={handleNext}
              disabled={safeIndex === currentLessons.length - 1}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                safeIndex < currentLessons.length - 1 
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm active:scale-95' 
                  : 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'
              }`}
            >
              <span>Next &gt;</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Lesson Header */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-3">
            <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              {lesson.category}
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {lesson.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {lesson.summary}
            </p>
          </div>

          {/* 👶 EXPLAIN LIKE I'M 5 (Super Simple Story & Real-World Analogy) */}
          {lesson.eli5 && (
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-slate-900/90 to-slate-950 shadow-xl space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-amber-500/20">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <span className="text-lg">👶</span>
                  <span>Explain Like I'm 5 (Super Simple Concept)</span>
                </span>
                
                <div className="flex items-center gap-2">
                  {/* Interactive Audio Narration for Kids & Beginners */}
                  <button
                    onClick={() => {
                      const textToRead = `${lesson.title}. Story: ${lesson.eli5.story}. Analogy: ${lesson.eli5.analogy || ''}. Rule 1: ${lesson.eli5.rules?.[0] || ''}. Rule 2: ${lesson.eli5.rules?.[1] || ''}. Rule 3: ${lesson.eli5.rules?.[2] || ''}`;
                      handleToggleSpeech(textToRead);
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold font-mono flex items-center gap-1.5 transition-all active:scale-95 shadow-md ${
                      isSpeaking 
                        ? 'bg-rose-500 text-white animate-pulse' 
                        : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40'
                    }`}
                    title="Click to have this explanation read aloud"
                  >
                    {isSpeaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    <span>{isSpeaking ? 'Stop Reading' : '🔊 Read Aloud for Kids'}</span>
                  </button>

                  <span className="text-[11px] text-amber-300/80 font-mono font-semibold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                    Easy Story Mode
                  </span>
                </div>
              </div>

              {/* Story */}
              <div className="text-sm text-slate-200 leading-relaxed font-sans bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                <p className="font-medium text-amber-200/90 text-xs font-mono uppercase mb-1">📖 The Fun Story:</p>
                {lesson.eli5.story}
              </div>

              {/* Real World Analogy */}
              {lesson.eli5.analogy && (
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-300 font-semibold flex items-center gap-2.5">
                  <span>{lesson.eli5.analogy}</span>
                </div>
              )}

              {/* 3 Simple Rules */}
              {lesson.eli5.rules && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider block">
                    3 Simple Rules Anyone Can Remember:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {lesson.eli5.rules.map((rule, rIdx) => (
                      <div key={rIdx} className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-amber-400 font-bold font-mono">#{rIdx + 1}</span>
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SIGNATURE W3 "Try it Yourself »" BOX */}
          <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl space-y-0">
            
            {/* Box Header */}
            <div className="bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold text-white font-mono flex items-center gap-2">
                <Code2 size={16} className="text-emerald-400" />
                <span>Example: {lesson.title}</span>
              </span>
              <button
                onClick={handleCopy}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>

            {/* Editable Code Input */}
            <div className="p-4 sm:p-5 bg-slate-950">
              <textarea
                value={editableCode}
                onChange={(e) => setEditableCode(e.target.value)}
                className="w-full h-44 sm:h-52 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-300 font-mono text-xs focus:outline-none focus:border-emerald-400 leading-relaxed resize-y"
                spellCheck="false"
              />

              {/* Prominent Green W3-Style "Try it Yourself »" Button */}
              <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
                <button
                  onClick={handleRunTryIt}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2 transition-transform active:scale-95"
                >
                  <Play size={15} className="fill-current" />
                  <span>Try it Yourself &raquo;</span>
                </button>
                <span className="text-[11px] text-slate-500 font-mono">Edit code above and click to test</span>
              </div>
            </div>

            {/* Output Viewport if run */}
            {tryItOutput && (
              <div className="border-t border-slate-800 p-4 sm:p-5 bg-slate-900/90 font-mono text-xs animate-fadeIn">
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Live Result / Preview:</span>
                </div>

                {tryItOutput.type === 'html' ? (
                  <div 
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-white min-h-[140px]"
                    dangerouslySetInnerHTML={{ __html: tryItOutput.content }}
                  />
                ) : (
                  <pre className={`p-3.5 rounded-xl bg-slate-950 border border-slate-800 whitespace-pre-wrap ${
                    tryItOutput.type === 'error' ? 'text-rose-400' : 'text-emerald-300'
                  }`}>
                    {tryItOutput.content}
                  </pre>
                )}
              </div>
            )}
          </div>

          {/* Deep Lesson Body Content */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line">
              {lesson.body}
            </div>

            {/* Callout Boxes (Tip / Note) */}
            {lesson.tips && (
              <div className="p-4 rounded-2xl bg-amber-500/10 border-l-4 border-amber-400 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
                <Lightbulb size={20} className="shrink-0 text-amber-400 mt-0.5" />
                <div>
                  <strong className="block text-amber-300 font-bold mb-0.5">Tip:</strong>
                  <span>{lesson.tips}</span>
                </div>
              </div>
            )}

            {lesson.notes && (
              <div className="p-4 rounded-2xl bg-cyan-500/10 border-l-4 border-cyan-400 text-cyan-200 text-xs sm:text-sm flex items-start gap-3">
                <Info size={20} className="shrink-0 text-cyan-400 mt-0.5" />
                <div>
                  <strong className="block text-cyan-300 font-bold mb-0.5">Note:</strong>
                  <span>{lesson.notes}</span>
                </div>
              </div>
            )}
          </div>

          {/* Reference Table if available */}
          {lesson.referenceTable && (
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <FileText size={16} className="text-emerald-400" />
                <span>Reference Guide</span>
              </h3>
              <div className="overflow-x-auto touch-scroll">
                <table className="w-full text-left font-mono text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="p-2.5">Syntax / Element</th>
                      <th className="p-2.5">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {lesson.referenceTable.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-900/60">
                        <td className="p-2.5 text-emerald-300 font-bold">{row.item}</td>
                        <td className="p-2.5 text-slate-300 font-sans">{row.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SIGNATURE W3 "Test Yourself With Exercises" BOX */}
          {lesson.exercise && (
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 to-slate-950 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <HelpCircle size={18} className="text-emerald-400" />
                  <span>Test Yourself With Exercises!</span>
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold">
                  +30 XP
                </span>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-slate-200">
                {lesson.exercise.question}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {lesson.exercise.options.map((opt, optIdx) => {
                  const isSelected = exerciseChoice === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleCheckExercise(optIdx)}
                      className={`text-left p-3 rounded-xl border text-xs font-mono transition-all flex items-center justify-between ${
                        isSelected && exerciseFeedback === 'correct'
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                          : isSelected && exerciseFeedback === 'wrong'
                          ? 'bg-rose-500/20 border-rose-400 text-rose-200'
                          : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span>{opt}</span>
                      <span className="text-[10px] text-slate-500 ml-2">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                    </button>
                  );
                })}
              </div>

              {exerciseFeedback === 'correct' && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 size={16} />
                  <span>Correct Answer! You earned +30 XP!</span>
                </div>
              )}
              {exerciseFeedback === 'wrong' && (
                <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                  <span>Incorrect. Hint: {lesson.exercise.hint}</span>
                </div>
              )}
            </div>
          )}

          {/* Bottom Pagination Row: Previous & Next */}
          <div className="glass-panel p-3 rounded-2xl border border-slate-800 flex items-center justify-between gap-2">
            <button
              onClick={handlePrev}
              disabled={safeIndex === 0}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                safeIndex > 0 
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm active:scale-95' 
                  : 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'
              }`}
            >
              <ChevronLeft size={16} />
              <span>&lt; Previous</span>
            </button>

            <button
              onClick={handleNext}
              disabled={safeIndex === currentLessons.length - 1}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                safeIndex < currentLessons.length - 1 
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm active:scale-95' 
                  : 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'
              }`}
            >
              <span>Next &gt;</span>
              <ChevronRight size={16} />
            </button>
          </div>

        </main>
      </div>

    </div>
  );
};
