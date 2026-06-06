import { 
  Plus, 
  TrendingUp, 
  Calendar, 
  Briefcase, 
  Trophy, 
  ArrowUpRight, 
  Sparkles,
  ChevronRight,
  Clock,
  FileText,
  MessageSquare
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { motion } from "motion/react";
import { MOCK_APPLICATIONS, MOCK_STATS } from "../data/mockData";
import { Link } from "react-router";

export function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Good morning, John!</h1>
          <p className="text-slate-500">Here's what's happening with your internship search.</p>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2 self-start active:scale-95">
          <Plus size={20} />
          Add Application
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Applications", value: MOCK_STATS.total, icon: Briefcase, color: "bg-blue-50 text-blue-600", trend: "+12% this week" },
          { label: "Interviews", value: MOCK_STATS.interviews, icon: Calendar, color: "bg-purple-50 text-purple-600", trend: "+2 scheduled" },
          { label: "Offers", value: MOCK_STATS.offers, icon: Trophy, color: "bg-amber-50 text-amber-600", trend: "1 pending" },
          { label: "Success Rate", value: `${MOCK_STATS.successRate}%`, icon: TrendingUp, color: "bg-emerald-50 text-emerald-600", trend: "+3% avg" },
        ].map((stat, i) => (
          <motion.div 
            key={`stat-card-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center`}>
                <stat.icon size={24} />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.trend}</span>
            </div>
            <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-slate-900">Application Activity</h2>
            <select className="bg-slate-50 border-none rounded-lg text-xs font-bold px-3 py-1.5 outline-none focus:ring-2 focus:ring-indigo-500/20">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_STATS.activity}>
                <defs>
                  <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="apps" 
                  stroke="#4f46e5" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorApps)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insights Sidebar */}
        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between shadow-2xl">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Sparkles size={20} fill="currentColor" />
              </div>
              <h2 className="text-xl font-bold italic">AI Insights</h2>
            </div>

            <div className="space-y-6">
              {[
                { title: "Optimize Resume", text: "Your resume for Google could be improved with 3 more keywords.", action: "View analysis" },
                { title: "Peak Time", text: "You're most active on Thursdays. Schedule your mock interviews then.", action: "See schedule" },
                { title: "Market Trend", text: "Design roles in Fintech are up 25%. Check out Stripe or Wise.", action: "Browse jobs" }
              ].map((insight, i) => (
                <div key={`ai-insight-${i}`} className="group cursor-pointer">
                  <h3 className="text-sm font-bold text-indigo-300 mb-1 flex items-center gap-2">
                    {insight.title}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {insight.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Link to="/app/resume" className="mt-12 bg-white text-slate-900 p-4 rounded-2xl font-bold flex items-center justify-between hover:bg-indigo-50 transition-colors group">
            Analyze Resume
            <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Applications */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-slate-900">Recent Applications</h2>
            <Link to="/app/tracker" className="text-xs font-bold text-indigo-600 hover:text-indigo-700">View All</Link>
          </div>
          <div className="space-y-4">
            {MOCK_APPLICATIONS.slice(0, 3).map((app) => (
              <Link 
                key={app.id}
                to={`/app/tracker/${app.id}`}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center p-2">
                  <img src={app.logo} alt={app.company} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900">{app.role}</h3>
                  <p className="text-xs text-slate-500 font-medium">{app.company}</p>
                </div>
                <div className="text-right">
                  <div className={`text-[10px] font-bold px-2 py-1 rounded-full inline-block mb-1 ${
                    app.status === 'Interview' ? 'bg-indigo-50 text-indigo-600' :
                    app.status === 'Offer' ? 'bg-emerald-50 text-emerald-600' :
                    'bg-slate-50 text-slate-600'
                  }`}>
                    {app.status}
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium">{app.date}</p>
                </div>
                <ChevronRight size={16} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-slate-900">Next Actions</h2>
            <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700">Calendar</button>
          </div>
          <div className="space-y-4">
            {[
              { title: "Technical Interview", sub: "Google • 2:00 PM", icon: Clock, color: "text-indigo-600 bg-indigo-50", date: "Today" },
              { title: "Complete Assessment", sub: "Airbnb • HackerRank", icon: FileText, color: "text-rose-600 bg-rose-50", date: "Tomorrow" },
              { title: "Follow-up Email", sub: "Stripe • Post-Interview", icon: MessageSquare, color: "text-emerald-600 bg-emerald-50", date: "Jun 8" },
            ].map((action, i) => (
              <div key={`deadline-${i}`} className="flex items-center gap-4 p-4">
                <div className={`w-10 h-10 rounded-xl ${action.color} flex items-center justify-center`}>
                  <action.icon size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900">{action.title}</h3>
                  <p className="text-xs text-slate-500 font-medium">{action.sub}</p>
                </div>
                <div className="text-right font-bold text-xs text-slate-400">
                  {action.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
