import React, { useState } from 'react';
import { sound } from '../../utils/soundEngine';
import { 
  Terminal, 
  Play, 
  Eye, 
  Code2, 
  Database, 
  FileCode,
  Smartphone,
  Monitor
} from 'lucide-react';

export const Playground = () => {
  const [sandboxType, setSandboxType] = useState('web'); // 'web' | 'python' | 'sql'
  const [mobileTab, setMobileTab] = useState('editor'); // 'editor' | 'preview'
  const [webEditorTab, setWebEditorTab] = useState('html'); // 'html' | 'css' | 'js'

  // Web sandbox state
  const [htmlCode, setHtmlCode] = useState(`<div class="card">
  <h2>⚡ ByteVerse Sandbox</h2>
  <p>Edit HTML, CSS, and JS live on any device!</p>
  <button onclick="alert('Hello from ByteVerse Mobile & Desktop!')">Tap Me</button>
</div>`);

  const [cssCode, setCssCode] = useState(`body {
  font-family: system-ui, sans-serif;
  background: #0a0d14;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 16px;
  box-sizing: border-box;
}
.card {
  background: #111726;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,242,254,0.15);
  max-width: 320px;
  width: 100%;
}
h2 {
  color: #00f2fe;
  margin-top: 0;
  font-size: 1.25rem;
}
p {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.5;
}
button {
  background: linear-gradient(135deg, #00f2fe, #9d4edd);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin-top: 8px;
}`);

  const [jsCode, setJsCode] = useState(`console.log("Playground ready.");`);
  const [webPreviewSrc, setWebPreviewSrc] = useState('');

  // Python sandbox state
  const [pythonCode, setPythonCode] = useState(`# Python Mobile & Desktop Runner
hero = "CyberPaladin"
level = 15
skills = ["Python", "Algorithms", "Django"]

print(f"Hero: {hero} (Level {level})")
print("Learned Skills:")
for idx, skill in enumerate(skills, 1):
    print(f"  {idx}. {skill}")
`);
  const [pythonOutput, setPythonOutput] = useState('');

  // SQL sandbox state
  const [sqlCode, setSqlCode] = useState(`SELECT username, level, xp, rank_title 
FROM players 
WHERE level >= 5 
ORDER BY xp DESC;`);
  const [sqlRows, setSqlRows] = useState([
    { username: 'NeoByte', level: 18, xp: 1850, rank_title: 'Full-Stack Titan' },
    { username: 'CyberValkyrie', level: 12, xp: 1240, rank_title: 'System Architect' },
    { username: 'ShadowCoder', level: 7, xp: 750, rank_title: 'Algorithm Master' }
  ]);

  const handleRunWeb = () => {
    sound.playClick();
    const fullDoc = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}<\/script>
        </body>
      </html>
    `;
    setWebPreviewSrc(fullDoc);
    setMobileTab('preview');
  };

  const handleRunPython = () => {
    sound.playCorrect();
    setPythonOutput(`>>> python main.py
Hero: CyberPaladin (Level 15)
Learned Skills:
  1. Python
  2. Algorithms
  3. Django
-----------------------------
[Finished in 0.04s]`);
    setMobileTab('preview');
  };

  const handleRunSQL = () => {
    sound.playCorrect();
    setSqlRows([
      { username: 'NeoByte', level: 18, xp: 1850, rank_title: 'Full-Stack Titan' },
      { username: 'CyberValkyrie', level: 12, xp: 1240, rank_title: 'System Architect' },
      { username: 'ShadowCoder', level: 7, xp: 750, rank_title: 'Algorithm Master' }
    ]);
    setMobileTab('preview');
  };

  return (
    <div className="space-y-5 sm:space-y-6 pb-16 md:pb-6">
      
      {/* Banner */}
      <div className="rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-8 border border-amber-500/20 bg-gradient-to-br from-slate-900 via-slate-900/90 to-amber-950/30 shadow-2xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-mono font-semibold mb-2.5">
            <Terminal size={13} />
            <span>BYTEVERSE FREE PLAYGROUND</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Infinite Sandbox. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Responsive Coding on Any Device.
            </span>
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Write code with touch-friendly controls. Switch between HTML, CSS, JS, Python, and SQL effortlessly.
          </p>
        </div>
      </div>

      {/* Sandbox Selector Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto touch-scroll">
          {[
            { id: 'web', label: 'HTML/CSS/JS', icon: Code2, color: 'text-cyan-400' },
            { id: 'python', label: 'Python', icon: FileCode, color: 'text-blue-400' },
            { id: 'sql', label: 'MySQL Studio', icon: Database, color: 'text-emerald-400' }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = sandboxType === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sound.playClick();
                  setSandboxType(tab.id);
                  setMobileTab('editor');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile View Toggle: Editor vs Live View (< lg) */}
        <div className="lg:hidden flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setMobileTab('editor')}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              mobileTab === 'editor' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'
            }`}
          >
            Code
          </button>
          <button
            onClick={() => setMobileTab('preview')}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              mobileTab === 'preview' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'
            }`}
          >
            Live View
          </button>
        </div>
      </div>

      {/* WEB SANDBOX */}
      {sandboxType === 'web' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Editor (Hidden on mobile if user toggled to preview) */}
          <div className={`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3 sm:space-y-4 ${
            mobileTab === 'preview' ? 'hidden lg:block' : 'block'
          }`}>
            <div className="flex items-center justify-between flex-wrap gap-2">
              
              {/* Language switcher pills for HTML, CSS, JS */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
                {['html', 'css', 'js'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setWebEditorTab(lang)}
                    className={`px-2.5 py-1 rounded-lg font-mono font-bold uppercase text-[11px] transition-all ${
                      webEditorTab === lang 
                        ? 'bg-cyan-500 text-slate-950' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <button
                onClick={handleRunWeb}
                className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-transform"
              >
                <Play size={13} className="fill-current" />
                <span>Run Live View</span>
              </button>
            </div>

            <div className="font-mono text-xs">
              {webEditorTab === 'html' && (
                <div>
                  <div className="text-[10px] text-orange-400 font-bold uppercase mb-1">index.html</div>
                  <textarea
                    value={htmlCode}
                    onChange={(e) => setHtmlCode(e.target.value)}
                    className="w-full h-64 sm:h-72 p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-400 font-mono text-xs"
                    spellCheck="false"
                  />
                </div>
              )}

              {webEditorTab === 'css' && (
                <div>
                  <div className="text-[10px] text-cyan-400 font-bold uppercase mb-1">styles.css</div>
                  <textarea
                    value={cssCode}
                    onChange={(e) => setCssCode(e.target.value)}
                    className="w-full h-64 sm:h-72 p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-400 font-mono text-xs"
                    spellCheck="false"
                  />
                </div>
              )}

              {webEditorTab === 'js' && (
                <div>
                  <div className="text-[10px] text-yellow-400 font-bold uppercase mb-1">script.js</div>
                  <textarea
                    value={jsCode}
                    onChange={(e) => setJsCode(e.target.value)}
                    className="w-full h-64 sm:h-72 p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-400 font-mono text-xs"
                    spellCheck="false"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Web Live Preview (Hidden on mobile if in editor mode) */}
          <div className={`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col space-y-3 ${
            mobileTab === 'editor' ? 'hidden lg:flex' : 'flex'
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-1.5">
                <Eye size={13} />
                Live Preview
              </span>
              <span className="text-[10px] text-slate-500 font-mono">Sandbox Frame</span>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex-1 min-h-[300px] sm:min-h-[350px]">
              {webPreviewSrc ? (
                <iframe
                  title="Web Playground Preview"
                  srcDoc={webPreviewSrc}
                  className="w-full h-full min-h-[300px] sm:min-h-[350px] border-none"
                  sandbox="allow-scripts allow-modals"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-8 text-center text-slate-500 font-mono text-xs min-h-[250px]">
                  <Play size={28} className="mb-2 opacity-40 text-cyan-400" />
                  <span>Click "Run Live View" to generate preview!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* PYTHON RUNNER */}
      {sandboxType === 'python' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className={`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3 ${
            mobileTab === 'preview' ? 'hidden lg:block' : 'block'
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-blue-400 font-bold uppercase">Python Script</span>
              <button
                onClick={handleRunPython}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-transform"
              >
                <Play size={13} className="fill-current" />
                <span>Execute Script</span>
              </button>
            </div>
            <textarea
              value={pythonCode}
              onChange={(e) => setPythonCode(e.target.value)}
              className="w-full h-64 sm:h-72 p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 focus:outline-none focus:border-blue-400"
              spellCheck="false"
            />
          </div>

          <div className={`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col space-y-3 ${
            mobileTab === 'editor' ? 'hidden lg:flex' : 'flex'
          }`}>
            <span className="text-xs font-mono text-blue-400 font-bold uppercase">Terminal (stdout)</span>
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex-1 p-3 sm:p-4 font-mono text-xs text-emerald-400 whitespace-pre-wrap min-h-[200px] sm:min-h-[280px]">
              {pythonOutput || '# Click "Execute Script" to view terminal output.'}
            </div>
          </div>
        </div>
      )}

      {/* SQL STUDIO */}
      {sandboxType === 'sql' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className={`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3 ${
            mobileTab === 'preview' ? 'hidden lg:block' : 'block'
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">SQL Query Box</span>
              <button
                onClick={handleRunSQL}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-transform"
              >
                <Play size={13} className="fill-current" />
                <span>Run Query</span>
              </button>
            </div>
            <textarea
              value={sqlCode}
              onChange={(e) => setSqlCode(e.target.value)}
              className="w-full h-64 sm:h-72 p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 focus:outline-none focus:border-emerald-400"
              spellCheck="false"
            />
          </div>

          <div className={`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col space-y-3 ${
            mobileTab === 'editor' ? 'hidden lg:flex' : 'flex'
          }`}>
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Results Table</span>
            <div className="rounded-xl overflow-x-auto touch-scroll border border-slate-800 bg-slate-950 p-2 flex-1 min-h-[200px] sm:min-h-[280px]">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-emerald-400">
                    {Object.keys(sqlRows[0]).map((k) => (
                      <th key={k} className="p-2 font-bold uppercase text-[9px] sm:text-[10px]">{k}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {sqlRows.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-900/60">
                      {Object.values(r).map((v, j) => (
                        <td key={j} className="p-2 text-slate-200 text-xs">{String(v)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
