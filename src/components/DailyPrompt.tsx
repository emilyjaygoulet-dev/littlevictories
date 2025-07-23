import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Sparkles, Wand2 } from "lucide-react";
import { useState, useEffect } from "react";
import { getRandomMessage } from "@/components/SpiritGuide";

export const DailyPrompt = () => {
  const [currentPrompt, setCurrentPrompt] = useState("");
  
  // Get current theme from localStorage or default to croissant-glow
  const getCurrentTheme = () => {
    return localStorage.getItem("little-victories-theme") || "croissant-glow";
  };

  useEffect(() => {
    const theme = getCurrentTheme();
    setCurrentPrompt(getRandomMessage(theme));
  }, []);

  const getNewPrompt = () => {
    const theme = getCurrentTheme();
    const newPrompt = getRandomMessage(theme);
    setCurrentPrompt(newPrompt);
  };

  return (
    <Card className="p-8 border-none shadow-warm hover:shadow-gentle transition-all duration-500" style={{background: 'var(--gradient-primary)'}}>
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Wand2 className="text-victory-primary animate-gentle-bounce" size={24} />
          <h2 className="text-2xl font-handwritten font-bold text-foreground">
            Pep Talk from the Spirit Guide
          </h2>
          <Sparkles className="text-victory-accent animate-sparkle" size={24} />
        </div>
        
        <div className="bg-white/60 rounded-cozy p-6 backdrop-blur-sm">
          <p className="text-lg font-cozy text-foreground leading-relaxed">
            {currentPrompt}
          </p>
        </div>
        
        <Button 
          onClick={getNewPrompt}
          variant="outline"
          className="bg-white/50 border-victory-primary hover:bg-victory-secondary transition-all duration-300 group"
        >
          <RefreshCw className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
          New Wisdom
        </Button>
      </div>
    </Card>
  );
};