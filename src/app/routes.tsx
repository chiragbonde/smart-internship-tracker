import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./Root";
import { LandingPage } from "./pages/LandingPage";
import { Onboarding } from "./pages/Onboarding";
import { Dashboard } from "./pages/Dashboard";
import { Tracker } from "./pages/Tracker";
import { InternshipDetail } from "./pages/InternshipDetail";
import { ResumeAnalyzer } from "./pages/ResumeAnalyzer";
import { InterviewHub } from "./pages/InterviewHub";
import { Analytics } from "./pages/Analytics";
import { UXCaseStudy } from "./pages/UXCaseStudy";
import { AppLayout } from "./components/layout/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "onboarding", element: <Onboarding /> },
      { path: "ux-case-study", element: <UXCaseStudy /> },
      {
        path: "app",
        element: <AppLayout />,
        children: [
          { index: true, element: <Navigate to="dashboard" replace /> },
          { path: "dashboard", element: <Dashboard /> },
          { path: "tracker", element: <Tracker /> },
          { path: "tracker/:id", element: <InternshipDetail /> },
          { path: "resume", element: <ResumeAnalyzer /> },
          { path: "interview", element: <InterviewHub /> },
          { path: "analytics", element: <Analytics /> },
        ],
      },
    ],
  },
]);
