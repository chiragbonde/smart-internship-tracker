export const MOCK_APPLICATIONS = [
  {
    id: "1",
    company: "Google",
    role: "Software Engineering Intern",
    status: "Interview",
    date: "2026-06-01",
    logo: "https://logo.clearbit.com/google.com",
    salary: "$50/hr",
    location: "Mountain View, CA",
    tags: ["High Priority", "FAANG"],
    timeline: [
      { status: "Applied", date: "2026-05-15", completed: true },
      { status: "Online Assessment", date: "2026-05-20", completed: true },
      { status: "Interview", date: "2026-06-05", completed: false },
    ]
  },
  {
    id: "2",
    company: "Stripe",
    role: "Product Design Intern",
    status: "Applied",
    date: "2026-05-28",
    logo: "https://logo.clearbit.com/stripe.com",
    salary: "$45/hr",
    location: "Remote",
    tags: ["Fintech", "Top Choice"],
    timeline: [
      { status: "Applied", date: "2026-05-28", completed: true },
    ]
  },
  {
    id: "3",
    company: "Airbnb",
    role: "Frontend Engineer Intern",
    status: "Assessment",
    date: "2026-05-22",
    logo: "https://logo.clearbit.com/airbnb.com",
    salary: "$48/hr",
    location: "San Francisco, CA",
    tags: ["Design Driven"],
    timeline: [
      { status: "Applied", date: "2026-05-20", completed: true },
      { status: "Assessment", date: "2026-05-25", completed: false },
    ]
  },
  {
    id: "4",
    company: "Figma",
    role: "Product Management Intern",
    status: "Interview",
    date: "2026-06-10",
    logo: "https://logo.clearbit.com/figma.com",
    salary: "$45/hr",
    location: "London, UK",
    tags: ["High Priority"],
    timeline: [
      { status: "Applied", date: "2026-05-10", completed: true },
      { status: "Interview", date: "2026-06-10", completed: false },
    ]
  },
  {
    id: "5",
    company: "Linear",
    role: "UI Engineer Intern",
    status: "Offer",
    date: "2026-06-15",
    logo: "https://logo.clearbit.com/linear.app",
    salary: "$55/hr",
    location: "Stockholm, SE",
    tags: ["Dream Job"],
    timeline: [
      { status: "Applied", date: "2026-04-20", completed: true },
      { status: "Interview", date: "2026-05-15", completed: true },
      { status: "Offer", date: "2026-06-05", completed: true },
    ]
  }
];

export const MOCK_STATS = {
  total: 42,
  interviews: 8,
  offers: 2,
  successRate: 15,
  activity: [
    { name: "Mon", apps: 2 },
    { name: "Tue", apps: 5 },
    { name: "Wed", apps: 3 },
    { name: "Thu", apps: 8 },
    { name: "Fri", apps: 4 },
    { name: "Sat", apps: 1 },
    { name: "Sun", apps: 2 },
  ],
  funnel: [
    { name: "Applied", value: 100 },
    { name: "Assessment", value: 65 },
    { name: "Interview", value: 30 },
    { name: "Offer", value: 10 },
  ]
};

export const MOCK_RESUME_ANALYSIS = {
  score: 84,
  sections: [
    { label: "Formatting", score: 95, status: "Good" },
    { label: "Keywords", score: 72, status: "Needs Work" },
    { label: "Impact", score: 88, status: "Good" },
    { label: "Brevity", score: 65, status: "Too Long" },
  ],
  suggestions: [
    "Use more quantitative metrics (e.g., 'Increased efficiency by 20%')",
    "Add more keywords related to 'React Native' for this specific role",
    "Shorten the summary section to 3 lines maximum",
  ]
};
