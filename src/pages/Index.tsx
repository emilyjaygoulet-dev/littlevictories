
import { TopNavigation } from "@/components/TopNavigation";
import { VictoryLogger } from "@/components/VictoryLogger";
import { BadgeSection } from "@/components/BadgeSection";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentTheme, setCurrentTheme] = useState<string>("");

  useEffect(() => {
    const theme = localStorage.getItem("little-victories-theme") || "croissant-glow";
    setCurrentTheme(theme);
  }, []);

  const isLavenderToast = currentTheme === "lavender-toast";

  return (
    <div className={`min-h-screen ${isLavenderToast ? 'lavender-toast-container' : ''}`} 
         style={{background: 'var(--gradient-primary)'}}>
      
      {/* Top Navigation */}
      <TopNavigation />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Victory Logger - Top Position */}
          <VictoryLogger />
          
          {/* Badge Section - Below Journal */}
          <BadgeSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
