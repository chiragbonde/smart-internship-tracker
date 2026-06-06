import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Layout, 
  Zap, 
  BarChart3, 
  Users, 
  ShieldCheck,
  Star
} from "lucide-react";
import { Link } from "react-router";

export function LandingPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <Zap size={24} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">Smart Internship</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#solutions" className="hover:text-indigo-600 transition-colors">Solutions</a>
          <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
          <Link to="/ux-case-study" className="hover:text-indigo-600 transition-colors">Case Study</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/app/dashboard" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Log in</Link>
          <Link to="/onboarding" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-md active:scale-95">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32 max-w-7xl mx-auto w-full overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-6 border border-indigo-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              AI-Powered Career Intelligence
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Land your dream internship with <span className="text-indigo-600">AI precision.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              The only platform that tracks your applications, optimizes your resume, and prepares you for interviews using advanced AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/onboarding" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-2 group active:scale-95">
                Start Tracking Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-4 px-4 py-2">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(idx => (
                    <div key={`user-avatar-${idx}`} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?img=${idx + 10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 text-yellow-400">
                    {[1,2,3,4,5].map(starIdx => <Star key={`star-${starIdx}`} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-xs font-medium text-slate-500">Trusted by 10k+ students</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-4 shadow-2xl overflow-hidden aspect-video lg:aspect-square flex items-center justify-center">
               <img 
                src="https://images.unsplash.com/photo-1622151834677-70f982c9adef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwc3R1ZGVudCUyMHdvcmtpbmclMjBvbiUyMGxhcHRvcHxlbnwxfHx8fDE3ODA2Njk4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="AI Career Assistant Dashboard" 
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute top-8 left-8 bg-white/90 p-4 rounded-2xl shadow-xl border border-white max-w-[200px] animate-bounce-slow">
                <div className="flex gap-3 items-center mb-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-bold">New Offer!</span>
                </div>
                <p className="text-xs text-slate-500">Google Software Engineering Intern</p>
              </div>
              
              <div className="absolute bottom-8 right-8 bg-white/90 p-4 rounded-2xl shadow-xl border border-white max-w-[220px]">
                <div className="flex gap-2 items-center mb-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">AI Suggestion</span>
                </div>
                <p className="text-xs font-medium text-slate-700 leading-relaxed">
                  "Your resume ATS score for Apple is 92%. Apply now for the best chance."
                </p>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Trusted Companies */}
      <section className="py-12 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">Students landing roles at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Google', 'Meta', 'Amazon', 'Apple', 'Netflix', 'Microsoft'].map(brand => (
              <span key={brand} className="text-2xl font-bold text-slate-600 tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-indigo-600 font-semibold mb-4 tracking-wide">POWERFUL FEATURES</h2>
          <p className="text-4xl font-bold text-slate-900 mb-6">Everything you need to master your job search.</p>
          <p className="text-slate-600">Ditch the spreadsheets and manual tracking. Our suite of AI tools streamlines every step of your journey from application to offer.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Layout className="text-indigo-600" />,
              title: "Visual Pipeline",
              description: "Manage applications in a beautiful Kanban board. Drag, drop, and never miss a follow-up."
            },
            {
              icon: <Search className="text-blue-600" />,
              title: "Resume Optimizer",
              description: "AI-driven ATS score analysis helps you tailor your resume for every specific job description."
            },
            {
              icon: <Users className="text-purple-600" />,
              title: "Mock Interviews",
              description: "Practice with our AI interviewer and get instant feedback on your confidence and technical accuracy."
            },
            {
              icon: <BarChart3 className="text-rose-600" />,
              title: "Insight Analytics",
              description: "Visualize your funnel and see where you're dropping off. Data-driven career growth."
            },
            {
              icon: <Zap className="text-amber-600" />,
              title: "Smart Reminders",
              description: "Automated alerts for deadlines, assessment tests, and interview follow-ups."
            },
            {
              icon: <ShieldCheck className="text-emerald-600" />,
              title: "Portfolio Hosting",
              description: "Showcase your best projects and certificates in a sleek, shareable profile for recruiters."
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-50 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 italic leading-tight">
                "Smart Internship Tracker turned my chaotic search into a structured success story."
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-700">
                   <img src="https://i.pravatar.cc/100?img=32" alt="Alex Chen" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">Alex Chen</p>
                  <p className="text-slate-400 text-sm">Product Design Intern @ Meta</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors">
                <ArrowRight className="rotate-180" size={20} />
              </button>
              <button className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-indigo-50 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full text-center">
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to secure your future?</h2>
            <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Join thousands of students who have streamlined their internship hunt and landed high-paying roles at top-tier companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/onboarding" className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl active:scale-95">
                Get Started for Free
              </Link>
              <Link to="/app/dashboard" className="bg-indigo-700/50 backdrop-blur-sm border border-indigo-400/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all active:scale-95">
                View Live Demo
              </Link>
            </div>
          </div>
          
          {/* Abstract blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 max-w-7xl mx-auto px-6 w-full text-slate-500 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
              <Zap size={16} fill="currentColor" />
            </div>
            <span className="font-bold text-slate-900">Smart Internship</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
            <a href="#" className="hover:text-slate-900">Help Center</a>
            <a href="#" className="hover:text-slate-900">Twitter</a>
          </div>
          
          <p>© 2026 Smart Internship Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
