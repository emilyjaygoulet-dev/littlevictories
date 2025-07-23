import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Onboarding } from "@/components/Onboarding";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("croissant-glow");

  useEffect(() => {
    const completed = localStorage.getItem("little-victories-onboarded");
    const theme = localStorage.getItem("little-victories-theme");
    
    if (completed) {
      setHasCompletedOnboarding(true);
    }
    if (theme) {
      setSelectedTheme(theme);
    }
  }, []);

  const handleOnboardingComplete = (theme: string) => {
    setSelectedTheme(theme);
    setHasCompletedOnboarding(true);
    localStorage.setItem("little-victories-onboarded", "true");
    localStorage.setItem("little-victories-theme", theme);
  };

  if (!hasCompletedOnboarding) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Onboarding onComplete={handleOnboardingComplete} />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
