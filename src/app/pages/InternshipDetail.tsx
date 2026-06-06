import { useParams, Link } from "react-router";
import { 
  ArrowLeft, 
  Building2, 
  MapPin, 
  Globe, 
  Calendar, 
  Paperclip, 
  FileText, 
  ExternalLink,
  Plus,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  MoreHorizontal
} from "lucide-react";
import { motion } from "motion/react";
import { MOCK_APPLICATIONS } from "../data/mockData";

export function InternshipDetail() {
  const { id } = useParams();
  const application = MOCK_APPLICATIONS.find(a => a.id === id) || MOCK_APPLICATIONS[0];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      {/* Header / Breadcrumbs */}
      <div className="flex items-center justify-between">
        <Link 
          to="/app/tracker" 
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors group"
        >
          <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-slate-300 shadow-sm">
            <ArrowLeft size={16} />
          </div>
          <span className="text-sm font-bold tracking-tight">Back to Tracker</span>
        </Link>
        <div className="flex items-center gap-2">
           <button className="p-2 text-slate-400 hover:text-slate-900 bg-white border border-slate-200 rounded-xl shadow-sm">
            <MoreHorizontal size={18} />
          </button>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 active:scale-95">
            Update Status
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Main Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Section */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl -z-10"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center p-4 border border-slate-100 shadow-inner">
                <img src={application.logo} alt={application.company} className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{application.role}</h1>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                      application.status === 'Offer' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                      application.status === 'Interview' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                      'bg-slate-50 text-slate-600 border-slate-200'
                    }`}>
                      {application.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
                    <div className="flex items-center gap-2">
                      <Building2 size={16} className="text-slate-400" />
                      {application.company}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-slate-400" />
                      {application.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe size={16} className="text-slate-400" />
                      Remote Friendly
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {application.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-bold bg-slate-50 text-slate-500 px-3 py-1.5 rounded-xl border border-slate-100">
                      {tag}
                    </span>
                  ))}
                  <button className="w-8 h-8 rounded-xl border border-dashed border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-colors">
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Application Timeline */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-2">
              <Calendar size={20} className="text-indigo-600" />
              Application Timeline
            </h2>
            <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
              {application.timeline.map((step, i) => (
                <div key={i} className="flex gap-6 relative group">
                  <div className={`w-8 h-8 rounded-full border-4 border-white flex items-center justify-center z-10 shadow-sm transition-all ${
                    step.completed ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400"
                  }`}>
                    {step.completed ? <CheckCircle2 size={16} /> : <div className="w-2 h-2 rounded-full bg-current" />}
                  </div>
                  <div className="flex-1 pb-4 border-b border-slate-50">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`font-bold text-sm ${step.completed ? "text-slate-900" : "text-slate-400"}`}>
                        {step.status}
                      </h3>
                      <span className="text-[10px] font-bold text-slate-400">{step.date}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      {step.completed ? "Successfully completed this stage." : "Awaiting response or scheduled for this date."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notes & Journal */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare size={20} className="text-indigo-600" />
                Notes & Interview Journal
              </h2>
              <button className="text-xs font-bold text-indigo-600">Add Note</button>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">June 2, 2026</p>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  Spoke with Sarah (Recruiter). She mentioned they are focusing on system design and React performance for the technical round. Need to review "Clean Code" principles.
                </p>
              </div>
              <textarea 
                placeholder="Type a new note..."
                className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all min-h-[100px]"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Sidebars */}
        <div className="space-y-8">
          {/* AI Recommendations Panel */}
          <div className="bg-indigo-600 text-white p-8 rounded-[2.5rem] shadow-2xl shadow-indigo-100 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <Sparkles size={20} fill="currentColor" />
                </div>
                <h2 className="text-xl font-bold italic tracking-tight">AI Strategy</h2>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-indigo-200 uppercase tracking-widest">Next Move</p>
                  <p className="text-sm font-medium leading-relaxed">
                    Based on recent hiring data at {application.company}, emphasize your "distributed systems" experience.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-indigo-200 uppercase tracking-widest">Resume Match</p>
                  <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-white h-full w-[92%]" />
                  </div>
                  <p className="text-xs font-bold">92% Match Score</p>
                </div>
                <button className="w-full bg-white text-indigo-600 py-3 rounded-2xl font-bold text-sm hover:bg-indigo-50 transition-colors shadow-lg">
                  Prepare for Interview
                </button>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          {/* Documents / Attachments */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Paperclip size={20} className="text-slate-400" />
              Documents
            </h2>
            <div className="space-y-3">
              {[
                { name: "Resume_Final_v2.pdf", type: "PDF", size: "1.2 MB", icon: FileText },
                { name: "Design_Portfolio.link", type: "Link", size: "External", icon: ExternalLink },
                { name: "Cover_Letter_Google.pdf", type: "PDF", size: "0.8 MB", icon: FileText },
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-2xl border border-slate-50 hover:bg-slate-50 hover:border-slate-100 transition-all cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all">
                    <doc.icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">{doc.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold">{doc.type} • {doc.size}</p>
                  </div>
                </div>
              ))}
              <button className="w-full py-3 border-2 border-dashed border-slate-100 rounded-2xl text-slate-400 hover:text-indigo-600 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all flex items-center justify-center gap-2 text-sm font-bold mt-4">
                <Plus size={16} />
                Upload New
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
