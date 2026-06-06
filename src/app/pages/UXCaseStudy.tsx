import { 
  FileText, 
  Users, 
  Target, 
  Lightbulb, 
  Layout, 
  ShieldCheck, 
  ArrowRight,
  Search,
  BookOpen,
  Figma,
  Code2,
  Database,
  Sparkles
} from "lucide-react";
import { motion } from "motion/react";

export function UXCaseStudy() {
  return (
    <div className="max-w-5xl mx-auto space-y-20 py-12 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold border border-indigo-100 mb-4">
          UX CASE STUDY
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
          Smart Internship <br/><span className="text-indigo-600">Tracker AI</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Designing an AI-powered ecosystem to solve the chaos of internship applications for the next generation of talent.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <div className="px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Role</p>
            <p className="text-sm font-bold text-slate-900">Lead Product Designer</p>
          </div>
          <div className="px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
            <p className="text-sm font-bold text-slate-900">12 Weeks</p>
          </div>
          <div className="px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Tools</p>
            <p className="text-sm font-bold text-slate-900">Figma, React, Motion</p>
          </div>
        </div>
      </section>

      {/* Problem & Goal */}
      <section className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Target className="text-indigo-600" />
            The Problem
          </h2>
          <p className="text-slate-600 leading-relaxed font-medium">
            University students apply to an average of 50-100 internships per season. Managing these through disparate spreadsheets leads to missed deadlines, poor follow-ups, and extreme mental fatigue. Existing tools are either too generic (Trello) or too enterprise-heavy (JobScan).
          </p>
          <div className="bg-rose-50 p-6 rounded-[2rem] border border-rose-100">
            <p className="text-sm font-bold text-rose-700 mb-2 italic">"I have 5 tabs open, 3 spreadsheets, and I still missed my Google OA deadline yesterday."</p>
            <p className="text-xs font-bold text-rose-400">— Interviewed Student</p>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Lightbulb className="text-amber-500" />
            The Solution
          </h2>
          <p className="text-slate-600 leading-relaxed font-medium">
            A centralized, AI-first platform that not only tracks applications but actively assists the user. By automating resume optimization and interview prep, we reduce the cognitive load and increase the "Application-to-Offer" conversion rate.
          </p>
          <div className="bg-emerald-50 p-6 rounded-[2rem] border border-emerald-100">
             <ul className="space-y-2">
               {["Unified Kanban Pipeline", "AI Resume ATS Scoring", "Mock Interview Simulation"].map((item, i) => (
                 <li key={i} className="flex items-center gap-2 text-sm font-bold text-emerald-700">
                   <ShieldCheck size={16} />
                   {item}
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>

      {/* Research Workflow */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 text-center">UX Research & Strategy</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Affinity Mapping", 
              desc: "Categorized 50+ pain points from user interviews into three pillars: Tracking, Prep, and Analytics.", 
              icon: Layout 
            },
            { 
              title: "User Personas", 
              desc: "Created 'The Desperate Junior' and 'The Switcher' to guide feature prioritization.", 
              icon: Users 
            },
            { 
              title: "Competitive Audit", 
              desc: "Analyzed LinkedIn, Handshake, and Simplify to find gaps in technical interview prep.", 
              icon: Search 
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Information Architecture */}
      <section className="bg-slate-900 text-white p-12 md:p-20 rounded-[3rem] space-y-12 relative overflow-hidden">
        <div className="text-center space-y-4 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight">Information Architecture</h2>
          <p className="text-slate-400 max-w-xl mx-auto font-medium">Streamlining complex workflows into a 3-click navigation system.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {[
            { label: "Onboarding", icon: Users, sub: "Profile Setup" },
            { label: "Dashboard", icon: Layout, sub: "Daily Tasks" },
            { label: "Tracker", icon: BookOpen, sub: "Kanban Board" },
            { label: "AI Tools", icon: Target, sub: "Resume/Prep" },
          ].map((node, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center space-y-2">
              <node.icon size={24} className="mx-auto text-indigo-400" />
              <p className="font-bold text-sm">{node.label}</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{node.sub}</p>
            </div>
          ))}
        </div>
        
        {/* Abstract flow lines bg */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <path d="M100 200 Q 400 50 700 200" stroke="white" strokeWidth="2" fill="none" />
            <path d="M100 200 Q 400 350 700 200" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </section>

      {/* Design System */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">Atomic Design System</h2>
          <p className="text-slate-500 font-medium">A premium, scalable visual language designed for trust and efficiency.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-8">
            <div className="space-y-4">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                Color Palette
              </h4>
              <div className="flex gap-2">
                {["bg-indigo-600", "bg-indigo-400", "bg-slate-900", "bg-slate-100"].map((c, i) => (
                  <div key={i} className={`w-12 h-12 rounded-xl ${c} border border-white shadow-sm`} />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                Typography
              </h4>
              <div className="space-y-1">
                <p className="text-2xl font-black text-slate-900">Inter Tight</p>
                <p className="text-xs text-slate-500 font-medium">System Font • Bold • 700</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm space-y-8">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              Components
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-indigo-100">Primary Button</button>
              <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-black text-slate-400 flex items-center justify-center">Input Field</div>
              <div className="px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 text-[10px] font-black flex items-center justify-center">Status Badge</div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400"><Figma size={18} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="bg-indigo-600 rounded-[3rem] p-12 md:p-24 text-white text-center space-y-12">
        <h2 className="text-4xl font-bold">The Outcome</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { val: "40%", label: "Increase in Response Rate" },
            { val: "3.5h", label: "Saved per Week / Student" },
            { val: "92%", label: "User Satisfaction Score" },
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <p className="text-5xl font-black">{item.val}</p>
              <p className="text-sm font-bold text-indigo-200 uppercase tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>
        <button className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl active:scale-95 flex items-center gap-3 mx-auto">
          View Prototype
          <ArrowRight size={20} />
        </button>
      </section>

      {/* Technical Implementation */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Technical Foundation</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Frontend", icon: Code2, value: "React 18" },
            { label: "Animation", icon: Sparkles, value: "Motion" },
            { label: "Database", icon: Database, value: "Supabase" },
            { label: "Styling", icon: Figma, value: "Tailwind v4" },
          ].map((tech, i) => (
            <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600">
                <tech.icon size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{tech.label}</p>
                <p className="text-sm font-bold text-slate-900">{tech.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pt-20 border-t border-slate-100">
        <p className="text-slate-400 font-bold text-sm tracking-tight mb-8 uppercase">Thank you for scrolling!</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-slate-900 font-bold hover:text-indigo-600 transition-colors">Twitter</a>
          <a href="#" className="text-slate-900 font-bold hover:text-indigo-600 transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-900 font-bold hover:text-indigo-600 transition-colors">Dribbble</a>
        </div>
      </footer>
    </div>
  );
}
