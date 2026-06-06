import { 
  MessageSquare, 
  Sparkles, 
  Play, 
  BookOpen, 
  History, 
  TrendingUp, 
  Target, 
  Mic, 
  Video,
  ChevronRight,
  BrainCircuit,
  Award
} from "lucide-react";
import { motion } from "motion/react";

export function InterviewHub() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Interview Preparation Hub</h1>
          <p className="text-slate-500">Practice with AI and master your upcoming interviews.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="bg-white text-slate-700 px-6 py-3 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition-all shadow-sm active:scale-95">
            Question Bank
          </button>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2 active:scale-95">
            <Sparkles size={20} fill="currentColor" />
            Start AI Mock Interview
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          {/* AI Interview Preview / Hero */}
          <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 text-white rounded-[2.5rem] p-12 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  NEW: Behavior-First Model
                </div>
                <h2 className="text-4xl font-bold tracking-tight italic">Ready for Google?</h2>
                <p className="text-slate-400 font-medium leading-relaxed">
                  Our AI is trained on 10,000+ real interview transcripts from top-tier tech companies. Get realistic questions and instant grading.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <Mic size={14} className="text-indigo-400" /> Voice
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <Video size={14} className="text-indigo-400" /> Video
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <BrainCircuit size={14} className="text-indigo-400" /> Technical
                  </div>
                </div>
                <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-50 transition-all active:scale-95 group shadow-xl shadow-black/20">
                  <Play size={20} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                  Launch Session
                </button>
              </div>
              
              <div className="relative hidden md:block">
                <div className="w-full aspect-square rounded-3xl bg-indigo-500/10 border border-white/10 flex items-center justify-center p-8 overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Abstract AI Avatar */}
                    <div className="w-40 h-40 bg-indigo-600 rounded-full blur-3xl opacity-50 absolute" />
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-32 h-32 rounded-full border-4 border-indigo-500/50 flex items-center justify-center relative z-10"
                    >
                      <Sparkles size={48} className="text-indigo-400" fill="currentColor" />
                    </motion.div>
                    
                    {/* Floating Question bubbles */}
                    <motion.div 
                      animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="absolute top-0 right-0 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-medium border border-white/10"
                    >
                      "Tell me about a complex bug..."
                    </motion.div>
                    <motion.div 
                      animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="absolute bottom-4 left-0 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-medium border border-white/10"
                    >
                      "Why do you want to work here?"
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]" />
          </div>

          {/* Question Bank Preview */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookOpen size={20} className="text-indigo-600" />
                Featured Question Bank
              </h2>
              <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700">View All 500+ Questions</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Behavioral", count: 124, icon: MessageSquare, color: "bg-blue-50 text-blue-600" },
                { title: "Technical (Frontend)", count: 86, icon: BrainCircuit, color: "bg-purple-50 text-purple-600" },
                { title: "System Design", count: 42, icon: Target, color: "bg-amber-50 text-amber-600" },
                { title: "Company Specific", count: 156, icon: Award, color: "bg-emerald-50 text-emerald-600" },
              ].map((category, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-all cursor-pointer group">
                  <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center shrink-0`}>
                    <category.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{category.title}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{category.count} Questions</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Performance Stats */}
        <div className="space-y-8">
          {/* Performance Dashboard */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-2">
              <TrendingUp size={20} className="text-indigo-600" />
              Preparation Score
            </h2>
            
            <div className="space-y-8">
              {[
                { label: "Confidence", score: 78, color: "bg-indigo-500" },
                { label: "Communication", score: 85, color: "bg-emerald-500" },
                { label: "Technical Readiness", score: 62, color: "bg-rose-500" },
                { label: "Body Language", score: 90, color: "bg-blue-500" },
              ].map((stat, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-500 uppercase tracking-widest">{stat.label}</span>
                    <span className="text-slate-900">{stat.score}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${stat.score}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`h-full ${stat.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
              <p className="text-xs font-bold text-indigo-700 mb-1 flex items-center gap-2">
                <Sparkles size={14} fill="currentColor" />
                AI Recommendation
              </p>
              <p className="text-[11px] text-indigo-900 leading-relaxed font-medium">
                Focus on your technical readiness. We recommend practicing "System Design" mock interviews twice this week.
              </p>
            </div>
          </div>

          {/* Recent History */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <History size={20} className="text-slate-400" />
              Practice History
            </h2>
            <div className="space-y-4">
              {[
                { date: "June 2", title: "Behavioral Mock", company: "Google", score: 84 },
                { date: "May 30", title: "Frontend Technical", company: "Meta", score: 72 },
                { date: "May 25", title: "General Intro", company: "N/A", score: 91 },
              ].map((entry, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{entry.title}</p>
                    <p className="text-[10px] text-slate-500 font-bold">{entry.company} • {entry.date}</p>
                  </div>
                  <div className={`text-xs font-bold px-2 py-1 rounded-lg ${
                    entry.score >= 80 ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {entry.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
