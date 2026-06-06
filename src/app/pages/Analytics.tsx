import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from "recharts";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Target, 
  Briefcase, 
  Calendar,
  Filter,
  Download,
  ArrowUpRight,
  MousePointer2
} from "lucide-react";
import { motion } from "motion/react";
import { MOCK_STATS } from "../data/mockData";

const COLORS = ['#4f46e5', '#818cf8', '#c7d2fe', '#e0e7ff'];

export function Analytics() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Search Analytics</h1>
          <p className="text-slate-500">Comprehensive data on your application performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 shadow-sm">
            <Filter size={16} />
            Custom Range
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 shadow-lg active:scale-95">
            <Download size={16} />
            Export Report
          </button>
        </div>
      </div>

      {/* High-level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Application Conversion", value: "24%", sub: "+5% from last month", icon: Target, color: "text-indigo-600 bg-indigo-50" },
          { label: "Avg. Response Time", value: "4.2 Days", sub: "-1.5 days (faster)", icon: Calendar, color: "text-emerald-600 bg-emerald-50" },
          { label: "Offer Rate", value: "8.5%", sub: "Above industry avg", icon: Briefcase, color: "text-amber-600 bg-amber-50" },
        ].map((stat, i) => (
          <motion.div 
            key={`analytics-stat-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"
          >
            <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon size={20} />
            </div>
            <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
            <p className="text-sm font-medium text-slate-500 mb-2">{stat.label}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Application Funnel */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-8">Application Funnel</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_STATS.funnel} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 'bold' }} 
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#4f46e5" 
                  radius={[0, 12, 12, 0]} 
                  barSize={40}
                >
                  {MOCK_STATS.funnel.map((entry, index) => (
                    <Cell key={`funnel-cell-${entry.name}-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-6 text-xs text-slate-400 text-center font-medium">
            You lose the most candidates between <span className="text-indigo-600 font-bold">Assessment</span> and <span className="text-indigo-600 font-bold">Interview</span>.
          </p>
        </div>

        {/* Source Performance */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-8">Source Distribution</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="h-[250px] w-full md:w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'LinkedIn', value: 45 },
                      { name: 'Referrals', value: 25 },
                      { name: 'Company Site', value: 20 },
                      { name: 'Job Boards', value: 10 },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {COLORS.map((color, index) => (
                      <Cell key={`pie-cell-${index}`} fill={color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-4">
              {[
                { name: 'LinkedIn', value: 45, color: 'bg-indigo-600' },
                { name: 'Referrals', value: 25, color: 'bg-indigo-400' },
                { name: 'Company Site', value: 20, color: 'bg-indigo-200' },
                { name: 'Others', value: 10, color: 'bg-indigo-100' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-sm font-medium text-slate-600">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Activity Trend */}
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-bold text-slate-900">Application Volume Trend</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
              <div className="w-2 h-2 rounded-full bg-indigo-500" /> Current Year
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
              <div className="w-2 h-2 rounded-full bg-slate-200" /> Previous Year
            </div>
          </div>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={[
              { name: 'Jan', current: 12, prev: 8 },
              { name: 'Feb', current: 18, prev: 10 },
              { name: 'Mar', current: 25, prev: 15 },
              { name: 'Apr', current: 22, prev: 20 },
              { name: 'May', current: 35, prev: 18 },
              { name: 'Jun', current: 42, prev: 22 },
            ]}>
              <defs>
                <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Area type="monotone" dataKey="current" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorCurrent)" />
              <Area type="monotone" dataKey="prev" stroke="#e2e8f0" strokeWidth={2} fill="transparent" strokeDasharray="5 5" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Heatmap Section Mock */}
      <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        <h2 className="text-lg font-bold mb-8 flex items-center gap-2 italic">
          <MousePointer2 size={20} className="text-indigo-400" />
          Application Heatmap
        </h2>
        
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 42 }).map((_, i) => (
            <div 
              key={`heatmap-day-${i}`} 
              className={`aspect-square rounded-md transition-all hover:scale-110 cursor-help ${
                i % 7 === 0 ? 'bg-indigo-500' : 
                i % 5 === 0 ? 'bg-indigo-600' : 
                i % 3 === 0 ? 'bg-indigo-900' : 
                'bg-slate-800'
              }`}
              title={`Day ${i + 1}: ${Math.floor(Math.random() * 5)} applications`}
            />
          ))}
        </div>
        
        <div className="mt-8 flex items-center justify-between">
          <p className="text-xs text-slate-400 font-medium italic">
            Most active time: <span className="text-white font-bold underline decoration-indigo-500 decoration-2">Tuesday afternoons</span>
          </p>
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase mr-2">Less</span>
            <div className="w-3 h-3 rounded-sm bg-slate-800" />
            <div className="w-3 h-3 rounded-sm bg-indigo-900" />
            <div className="w-3 h-3 rounded-sm bg-indigo-600" />
            <div className="w-3 h-3 rounded-sm bg-indigo-500" />
            <span className="text-[10px] text-slate-500 font-bold uppercase ml-2">More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
