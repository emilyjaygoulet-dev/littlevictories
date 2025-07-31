import { DailyPrompt } from "@/components/DailyPrompt";
import { VictoryLogger } from "@/components/VictoryLogger";
import { BadgeDisplay } from "@/components/BadgeDisplay";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentTheme, setCurrentTheme] = useState<string>("");

  useEffect(() => {
    const theme = localStorage.getItem("little-victories-theme") || "croissant-glow";
    setCurrentTheme(theme);
  }, []);

  // Lavender Toast specific styling and content
  const isLavenderToast = currentTheme === "lavender-toast";
  
  const getThemeHeader = () => {
    if (isLavenderToast) {
      return {
        title: "Little Victories",
        subtitle: "Healing happens in teaspoons.",
        description: "Your quiet is sacred. Here, we celebrate the gentle strength that moves mountains, one small victory at a time."
      };
    }
    return {
      title: "Little Victories", 
      subtitle: "Your daily dose of joy, motivation, and gentle reminders that every small step forward is worth celebrating ✨",
      description: ""
    };
  };

  const themeContent = getThemeHeader();

  return (
    <div className={`min-h-screen ${isLavenderToast ? 'lavender-toast-container' : ''}`} 
         style={{background: 'var(--gradient-primary)'}}>
      {/* Header */}
      <header className="text-center py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className={`text-victory-primary ${isLavenderToast ? 'animate-gentle-pulse' : 'animate-gentle-bounce'}`} size={32} />
            <h1 className={`text-4xl md:text-5xl font-bold text-foreground ${isLavenderToast ? 'font-lavender-header' : 'font-handwritten'}`}>
              {themeContent.title}
            </h1>
            <Sparkles className={`text-victory-accent ${isLavenderToast ? 'animate-kintsugi-glow' : 'animate-sparkle'}`} size={32} />
          </div>
          
          {isLavenderToast && (
            <h2 className="text-2xl md:text-3xl font-lavender-header text-foreground mb-4 opacity-80">
              {themeContent.subtitle}
            </h2>
          )}
          
          <p className={`text-lg max-w-2xl mx-auto ${isLavenderToast ? 'font-lavender-text text-muted-foreground' : 'font-cozy text-muted-foreground'}`}>
            {isLavenderToast ? themeContent.description : themeContent.subtitle}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-12">
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {/* Daily Prompt - Full Width on Mobile, Spans 2 Columns on Desktop */}
          <div className="lg:col-span-2">
            <DailyPrompt />
          </div>
          
          {/* Badge Display - Right Column on Desktop */}
          <div className="lg:col-span-1">
            <BadgeDisplay />
          </div>
          
          {/* Victory Logger - Full Width */}
          <div className="lg:col-span-3">
            <VictoryLogger />
          </div>
        </div>
        
        {/* Footer Message */}
        <div className={`text-center mt-12 p-6 backdrop-blur-sm rounded-cozy border border-victory-secondary ${isLavenderToast ? 'linen-texture bg-card/40 kintsugi-element' : 'bg-white/30'}`}>
          {isLavenderToast ? (
            <>
              <p className="font-lavender-header text-xl text-foreground mb-4">
                "You've survived every 'worst day' so far. This one too."
              </p>
              <p className="font-lavender-text text-sm text-muted-foreground">
                Your heart is a room with open windows. Let the air move through.
              </p>
            </>
          ) : (
            <>
              <p className="font-handwritten text-lg text-foreground mb-4">
                Remember: You're doing amazing, even when it doesn't feel like it 💕
              </p>
              <p className="font-cozy text-sm text-muted-foreground">
                Every victory, no matter how small, is a step toward becoming who you're meant to be.
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;