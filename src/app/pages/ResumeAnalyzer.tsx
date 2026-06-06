import { 
  FileUp, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  ChevronRight,
  RefreshCcw,
  BarChart3,
  Search
} from "lucide-react";
import { motion } from "motion/react";
import { MOCK_RESUME_ANALYSIS } from "../data/mockData";

export function ResumeAnalyzer() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Resume AI Analyzer</h1>
          <p className="text-slate-500">Tailor your resume for specific job descriptions with AI insights.</p>
        </div>
        <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg flex items-center gap-2 active:scale-95">
          <FileUp size={20} />
          Upload New Resume
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Analysis Results */}
        <div className="lg:col-span-2 space-y-8">
          {/* Score Card */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8">
              <button className="flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-700">
                <RefreshCcw size={14} />
                Re-analyze
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="relative w-48 h-48 shrink-0">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle 
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="#f1f5f9" 
                    strokeWidth="8" 
                  />
                  <motion.circle 
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="#4f46e5" 
                    strokeWidth="8" 
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    animate={{ strokeDashoffset: 283 - (283 * MOCK_RESUME_ANALYSIS.score) / 100 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-black text-slate-900 tracking-tighter">{MOCK_RESUME_ANALYSIS.score}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ATS Score</span>
                </div>
              </div>
              
              <div className="flex-1 grid grid-cols-2 gap-6">
                {MOCK_RESUME_ANALYSIS.sections.map((section, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">{section.label}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        section.status === 'Good' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                      }`}>
                        {section.status}
                      </span>
                    </div>
                    <div className="w-full bg-slate-50 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${section.score}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={`h-full ${section.status === 'Good' ? 'bg-emerald-500' : 'bg-rose-500'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Suggestions List */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-2">
              <Lightbulb size={20} className="text-amber-500" />
              Optimization Suggestions
            </h2>
            <div className="space-y-4">
              {MOCK_RESUME_ANALYSIS.suggestions.map((suggestion, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl border border-slate-50 hover:border-slate-100 hover:bg-slate-50 transition-all group cursor-pointer">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Sparkles size={16} fill="currentColor" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-700 leading-relaxed">
                      {suggestion}
                    </p>
                  </div>
                  <button className="text-slate-300 group-hover:text-indigo-600 transition-colors">
                    <ChevronRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Keyword Matcher */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
             <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Search size={20} className="text-indigo-600" />
                Keyword Matcher
              </h2>
              <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                <span className="text-[10px] font-bold text-slate-500">Target Role:</span>
                <span className="text-[10px] font-bold text-indigo-600 uppercase">Software Engineer</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {[
                { label: "React", match: true },
                { label: "TypeScript", match: true },
                { label: "Node.js", match: true },
                { label: "GraphQL", match: false },
                { label: "AWS", match: true },
                { label: "Docker", match: false },
                { label: "Tailwind CSS", match: true },
                { label: "System Design", match: false },
                { label: "PostgreSQL", match: true },
              ].map((keyword, i) => (
                <div 
                  key={i} 
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all ${
                    keyword.match 
                      ? "bg-emerald-50 text-emerald-700 border-emerald-100" 
                      : "bg-rose-50 text-rose-700 border-rose-100 grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
                  }`}
                >
                  {keyword.match ? <CheckCircle2 size={12} /> : <AlertTriangle size={12} />}
                  {keyword.label}
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-400 font-medium italic">
              Tip: Add the missing keywords naturally in your "Experience" or "Projects" section.
            </p>
          </div>
        </div>

        {/* Sidebar - Context & Actions */}
        <div className="space-y-8">
          {/* History */}
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2 italic">
              <BarChart3 size={20} className="text-indigo-400" />
              Analysis History
            </h2>
            <div className="space-y-4">
              {[
                { date: "May 28", score: 84, target: "Google" },
                { date: "May 20", score: 76, target: "Airbnb" },
                { date: "May 15", score: 62, target: "Stripe" },
              ].map((entry, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                  <div>
                    <p className="text-xs font-bold text-indigo-300">{entry.target}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{entry.date}, 2026</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black tracking-tight">{entry.score}</p>
                    <p className="text-[8px] text-slate-500 uppercase tracking-widest">Score</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 border border-white/10 rounded-2xl text-xs font-bold hover:bg-white/5 transition-colors">
              View Detailed Report
            </button>
          </div>

          {/* Tips Panel */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Lightbulb size={20} className="text-indigo-600" />
              Quick Tips
            </h2>
            <ul className="space-y-4 text-sm font-medium text-slate-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                Keep your resume to 1 page if you have less than 5 years of experience.
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                Use standard fonts like Arial or Helvetica for best ATS readability.
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                Avoid using complex tables or images in your resume file.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
