import { Outlet } from "react-router";
import { Toaster } from "sonner";

export function Root() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
      <Outlet />
      <Toaster position="top-center" />
    </div>
  );
}
