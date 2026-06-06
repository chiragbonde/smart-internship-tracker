import { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router";
import { 
  LayoutDashboard, 
  Trello, 
  FileText, 
  MessageSquare, 
  BarChart2, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  BookOpen,
  Menu,
  X,
  Sparkles,
  Globe,
  Command
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/app/dashboard" },
  { name: "Tracker", icon: Trello, path: "/app/tracker" },
  { name: "Resume AI", icon: FileText, path: "/app/resume" },
  { name: "Interview Hub", icon: MessageSquare, path: "/app/interview" },
  { name: "Analytics", icon: BarChart2, path: "/app/analytics" },
  { name: "Case Study", icon: BookOpen, path: "/ux-case-study" },
];

export function AppLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  // Close sidebar on mobile when navigating
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [location]);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } transition-all duration-500 bg-white border-r border-slate-200 flex flex-col z-50 fixed md:relative h-full ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } shadow-[4px_0_24px_rgba(0,0,0,0.02)]`}
      >
        <div className="p-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-100 group-hover:scale-110 transition-transform">
              <Sparkles size={18} fill="currentColor" />
            </div>
            {isSidebarOpen && <span className="font-bold text-slate-900 tracking-tight text-lg">SmartIntern</span>}
          </Link>
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="md:hidden text-slate-400 hover:text-slate-600 p-1"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group relative ${
                  isActive 
                    ? "bg-indigo-50 text-indigo-700 shadow-sm" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <item.icon size={20} className={`${isActive ? "text-indigo-600" : "group-hover:text-slate-900"} transition-colors`} />
                {isSidebarOpen && <span className="font-semibold text-sm">{item.name}</span>}
                {isActive && isSidebarOpen && (
                  <motion.div 
                    layoutId="active-pill" 
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600"
                  />
                )}
                {!isSidebarOpen && isActive && (
                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-600 rounded-r-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100 space-y-1">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer group">
            <Globe size={20} className="group-hover:text-indigo-600" />
            {isSidebarOpen && (
              <div className="flex-1 flex items-center justify-between">
                <span className="font-semibold text-sm">Language</span>
                <span className="text-[10px] font-bold bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 uppercase">EN</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer group mb-4">
            <Settings size={20} className="group-hover:rotate-45 transition-transform" />
            {isSidebarOpen && <span className="font-semibold text-sm">Settings</span>}
          </div>
          
          <div className="flex items-center gap-3 px-3 py-3 bg-slate-900 rounded-2xl text-white shadow-xl shadow-slate-200 group cursor-pointer hover:bg-slate-800 transition-all">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] font-bold border-2 border-slate-800 group-hover:border-slate-700 transition-all">JD</div>
            {isSidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate">John Doe</p>
                <p className="text-[10px] text-slate-400 truncate font-medium">Pro Plan • Global</p>
              </div>
            )}
            {isSidebarOpen && <LogOut size={14} className="text-slate-500 hover:text-white transition-colors" />}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 mb-20 md:mb-0">
        {/* Topbar */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg hidden md:block transition-all"
            >
              <Menu size={20} />
            </button>
            <div 
              onClick={() => setShowSearch(true)}
              className="relative max-w-md w-full hidden sm:block cursor-pointer group"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-indigo-600 transition-colors" size={16} />
              <div className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 pl-10 pr-4 text-sm text-slate-400 font-medium group-hover:border-slate-200 transition-all flex items-center justify-between">
                Search globally...
                <div className="flex items-center gap-1">
                  <span className="bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px] font-bold shadow-sm">⌘</span>
                  <span className="bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px] font-bold shadow-sm">K</span>
                </div>
              </div>
            </div>
            <Link to="/" className="md:hidden flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shrink-0">
                <Sparkles size={16} fill="currentColor" />
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden lg:flex bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-bold items-center gap-2 border border-indigo-100 animate-pulse">
              <Sparkles size={12} fill="currentColor" />
              Global Assistant
            </div>
            <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg relative transition-all">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="md:hidden w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-bold border border-slate-100 shadow-sm">JD</div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {navItems.slice(0, 4).map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`flex flex-col items-center gap-1 ${isActive ? "text-indigo-600" : "text-slate-400"}`}
            >
              <item.icon size={22} className={isActive ? "scale-110 transition-transform" : ""} />
              <span className="text-[10px] font-bold uppercase tracking-widest">{item.name.split(" ")[0]}</span>
            </Link>
          );
        })}
        <button 
          onClick={() => setSidebarOpen(true)}
          className="flex flex-col items-center gap-1 text-slate-400"
        >
          <Menu size={22} />
          <span className="text-[10px] font-bold uppercase tracking-widest">More</span>
        </button>
      </nav>

      {/* Global Command Palette Mock */}
      <AnimatePresence>
        {showSearch && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
            onClick={() => setShowSearch(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                <Search className="text-slate-400" size={20} />
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Type a command or search..." 
                  className="flex-1 bg-transparent border-none outline-none text-slate-900 font-medium placeholder:text-slate-400"
                />
                <button 
                  onClick={() => setShowSearch(false)}
                  className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded shadow-inner"
                >ESC</button>
              </div>
              <div className="p-2 max-h-[60vh] overflow-auto">
                <div className="px-3 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Quick Actions</div>
                {[
                  { icon: LayoutDashboard, label: "Go to Dashboard", shortcut: "G D" },
                  { icon: Plus, label: "Add New Internship", shortcut: "A N" },
                  { icon: FileText, label: "Upload Resume", shortcut: "U R" },
                  { icon: Command, label: "Toggle AI Assistant", shortcut: "T A" },
                ].map((action, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 cursor-pointer group transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors">
                      <action.icon size={18} />
                    </div>
                    <span className="flex-1 text-sm font-semibold text-slate-700">{action.label}</span>
                    <div className="flex gap-1">
                      {action.shortcut.split(" ").map(s => (
                        <span key={s} className="bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px] font-bold shadow-sm">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-50 p-3 flex items-center justify-between border-t border-slate-100">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                    <span className="bg-white border border-slate-200 px-1 py-0.5 rounded shadow-sm">↑↓</span> Navigate
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                    <span className="bg-white border border-slate-200 px-1 py-0.5 rounded shadow-sm">↵</span> Select
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-indigo-600">
                  <Sparkles size={10} fill="currentColor" /> Powered by AI
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

