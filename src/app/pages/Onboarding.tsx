import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  ArrowLeft, 
  Target, 
  FileUp, 
  Wrench, 
  Building2, 
  Sparkles,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { useNavigate } from "react-router";

const STEPS = [
  { id: "goal", title: "Career Goals", icon: Target },
  { id: "resume", title: "Resume Setup", icon: FileUp },
  { id: "skills", title: "Skills Profile", icon: Wrench },
  { id: "companies", title: "Preferences", icon: Building2 },
];

export function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    role: "",
    skills: [],
    companies: [],
  });
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/app/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Panel - Visuals */}
      <div className="hidden lg:flex w-1/3 bg-slate-900 p-12 flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white">
              <Sparkles size={18} fill="currentColor" />
            </div>
            <span className="font-bold text-white text-xl">SmartIntern</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Setting up your AI career engine.
          </h2>
          <p className="text-slate-400 text-lg">
            We'll customize your experience based on your background and goals to help you land the perfect role.
          </p>
        </div>

        <div className="relative z-10 space-y-6">
          {STEPS.map((step, idx) => (
            <div key={step.id} className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                idx <= currentStep ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-500"
              }`}>
                {idx < currentStep ? <CheckCircle2 size={20} /> : <step.icon size={20} />}
              </div>
              <span className={`font-medium ${idx <= currentStep ? "text-white" : "text-slate-500"}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-24 justify-center items-center">
        <div className="max-w-md w-full">
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 text-slate-400 hover:text-slate-600 mb-12 transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm font-medium">Back</span>
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {currentStep === 0 && (
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">What role are you targeting?</h1>
                    <p className="text-slate-500">Select your primary interest area.</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {["Software Engineering", "Product Management", "Data Science", "UI/UX Design", "Marketing"].map(role => (
                      <button
                        key={role}
                        onClick={() => setFormData({...formData, role})}
                        className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all group ${
                          formData.role === role 
                            ? "bg-indigo-50 border-indigo-200 text-indigo-700 shadow-sm shadow-indigo-100" 
                            : "border-slate-100 hover:border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <span className="font-semibold">{role}</span>
                        <ChevronRight size={18} className={formData.role === role ? "text-indigo-600" : "text-slate-300"} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Let's analyze your resume</h1>
                    <p className="text-slate-500">Upload your PDF resume to get instant feedback.</p>
                  </div>
                  <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                      <FileUp className="text-indigo-600" size={32} />
                    </div>
                    <p className="text-slate-900 font-bold mb-1">Click to upload or drag & drop</p>
                    <p className="text-slate-400 text-sm">PDF, DOCX (Max 5MB)</p>
                  </div>
                  <div className="bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100 flex gap-4">
                    <Sparkles className="text-indigo-600 shrink-0" size={20} />
                    <p className="text-xs text-indigo-800 leading-relaxed font-medium">
                      Our AI will automatically extract your skills, experience, and education to populate your profile.
                    </p>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Refine your skill set</h1>
                    <p className="text-slate-500">Select the technologies you're proficient in.</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "Python", "Figma", "TypeScript", "AWS", "Docker", "SQL", "Swift", "Kotlin", "Go", "GraphQL"].map(skill => (
                      <button
                        key={skill}
                        className="px-4 py-2 rounded-full border border-slate-100 bg-white hover:bg-slate-50 text-slate-700 font-medium transition-colors"
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search more skills..." 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Any dream companies?</h1>
                    <p className="text-slate-500">We'll alert you as soon as they post new openings.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {["Google", "Stripe", "Linear", "Airbnb", "Apple", "Notion", "Tesla", "Nvidia"].map(company => (
                      <button
                        key={company}
                        className="p-4 rounded-2xl border border-slate-100 bg-white hover:bg-indigo-50 hover:border-indigo-100 group flex items-center gap-3 transition-all"
                      >
                        <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-[10px] font-bold">
                          {company[0]}
                        </div>
                        <span className="font-semibold text-slate-700 group-hover:text-indigo-700">{company}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-between">
            <div className="flex gap-1.5">
              {STEPS.map((_, idx) => (
                <div key={idx} className={`h-1.5 rounded-full transition-all ${
                  idx === currentStep ? "w-8 bg-indigo-600" : "w-1.5 bg-slate-200"
                }`} />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl shadow-slate-100 active:scale-95"
            >
              {currentStep === STEPS.length - 1 ? "Finish Setup" : "Next Step"}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
