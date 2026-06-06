import { useState } from "react";
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  Clock, 
  AlertCircle,
  ChevronDown,
  LayoutGrid,
  List
} from "lucide-react";
import { motion } from "motion/react";
import { MOCK_APPLICATIONS } from "../data/mockData";
import { Link } from "react-router";

const COLUMNS = [
  { id: "Wishlist", title: "Wishlist", color: "bg-slate-100" },
  { id: "Applied", title: "Applied", color: "bg-blue-100" },
  { id: "Assessment", title: "Assessment", color: "bg-amber-100" },
  { id: "Interview", title: "Interview", color: "bg-indigo-100" },
  { id: "Offer", title: "Offer", color: "bg-emerald-100" },
  { id: "Rejected", title: "Rejected", color: "bg-rose-100" },
];

export function Tracker() {
  const [view, setView] = useState<"board" | "list">("board");

  return (
    <div className="h-full flex flex-col space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Internship Tracker</h1>
          <p className="text-slate-500">Drag and drop applications to update their status.</p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
            <button 
              onClick={() => setView("board")}
              className={`p-2 rounded-lg transition-all ${view === "board" ? "bg-slate-100 text-indigo-600 shadow-inner" : "text-slate-400 hover:text-slate-600"}`}
            >
              <LayoutGrid size={18} />
            </button>
            <button 
              onClick={() => setView("list")}
              className={`p-2 rounded-lg transition-all ${view === "list" ? "bg-slate-100 text-indigo-600 shadow-inner" : "text-slate-400 hover:text-slate-600"}`}
            >
              <List size={18} />
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 shadow-sm">
            <Filter size={16} />
            Filters
          </button>
          <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2 active:scale-95">
            <Plus size={20} />
            Add New
          </button>
        </div>
      </div>

      {/* Search & Stats */}
      <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search company, role, or keywords..." 
            className="w-full bg-transparent border-none py-2 pl-10 pr-4 text-sm outline-none font-medium"
          />
        </div>
        <div className="hidden md:flex items-center gap-6 px-4 border-l border-slate-100">
          <div className="text-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total</p>
            <p className="text-sm font-bold text-slate-900">{MOCK_APPLICATIONS.length}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">In Progress</p>
            <p className="text-sm font-bold text-indigo-600">3</p>
          </div>
        </div>
      </div>

      {/* Board View */}
      {view === "board" ? (
        <div className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
          {COLUMNS.map((column) => (
            <div key={column.id} className="flex-shrink-0 w-80 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${column.id === 'Applied' ? 'bg-blue-500' : column.id === 'Interview' ? 'bg-indigo-500' : column.id === 'Offer' ? 'bg-emerald-500' : 'bg-slate-400'}`}></div>
                  <h3 className="font-bold text-slate-700">{column.title}</h3>
                  <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {MOCK_APPLICATIONS.filter(a => a.status === column.id).length}
                  </span>
                </div>
                <button className="text-slate-400 hover:text-slate-600">
                  <Plus size={16} />
                </button>
              </div>

              <div className="flex-1 space-y-4 min-h-[500px]">
                {MOCK_APPLICATIONS.filter(a => a.status === column.id).map((app, i) => (
                  <motion.div
                    key={app.id}
                    layoutId={app.id}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-grab active:cursor-grabbing group"
                  >
                    <Link to={`/app/tracker/${app.id}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center p-1.5 border border-slate-100">
                          <img src={app.logo} alt={app.company} className="w-full h-full object-contain" />
                        </div>
                        <button className="text-slate-300 hover:text-slate-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                      
                      <h4 className="font-bold text-slate-900 mb-1 line-clamp-1">{app.role}</h4>
                      <p className="text-xs text-slate-500 font-medium mb-4">{app.company}</p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {app.tags.map((tag, idx) => (
                          <span key={idx} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <Clock size={12} />
                          <span className="text-[10px] font-medium">{app.date}</span>
                        </div>
                        {app.id === "1" && (
                          <div className="flex items-center gap-1 text-rose-500 animate-pulse">
                            <AlertCircle size={12} />
                            <span className="text-[10px] font-bold">Interview Soon</span>
                          </div>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
                
                <button className="w-full py-3 border-2 border-dashed border-slate-100 rounded-2xl text-slate-400 hover:text-indigo-600 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all flex items-center justify-center gap-2 text-sm font-bold">
                  <Plus size={16} />
                  Add Card
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-4">Company & Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Last Activity</th>
                <th className="px-6 py-4">Tags</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {MOCK_APPLICATIONS.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center p-1.5 border border-slate-100 shrink-0">
                        <img src={app.logo} alt={app.company} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{app.role}</p>
                        <p className="text-xs text-slate-500 font-medium">{app.company}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${
                      app.status === 'Offer' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                      app.status === 'Interview' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' :
                      app.status === 'Applied' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                      'bg-slate-50 text-slate-500 border border-slate-200'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        app.status === 'Offer' ? 'bg-emerald-500' :
                        app.status === 'Interview' ? 'bg-indigo-500' :
                        app.status === 'Applied' ? 'bg-blue-500' :
                        'bg-slate-400'
                      }`}></div>
                      {app.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-600">
                    {app.location}
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-500">
                    {app.date}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      {app.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-300 hover:text-slate-600 hover:bg-white rounded-lg transition-all opacity-0 group-hover:opacity-100">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
