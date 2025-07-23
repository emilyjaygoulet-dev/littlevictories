import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Sparkles } from "lucide-react";
import { useState } from "react";

const prompts = [
  "Remember: You woke up today. That's already a victory! ✨",
  "Today's superpower: Being kind to yourself. How will you use it?",
  "What's one tiny thing that made you smile recently? 🌟",
  "You're doing better than you think. What small step will you take today?",
  "Gentle reminder: Progress isn't always visible, but it's always happening.",
  "Today's mission: Find joy in something ordinary. Ready?",
  "You're exactly where you need to be. What victory will you create today?",
  "Small wins count. Big wins count. All wins count. What's yours?",
  "Today's affirmation: I am worthy of celebrating every small step forward.",
  "What would you tell a friend who accomplished what you did yesterday?"
];

export const DailyPrompt = () => {
  const [currentPrompt, setCurrentPrompt] = useState(
    prompts[Math.floor(Math.random() * prompts.length)]
  );

  const getNewPrompt = () => {
    const newPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setCurrentPrompt(newPrompt);
  };

  return (
    <Card className="p-8 bg-gradient-warm border-none shadow-warm hover:shadow-gentle transition-all duration-500">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-victory-gold animate-sparkle" size={24} />
          <h2 className="text-2xl font-handwritten font-bold text-foreground">
            Today's Little Spark
          </h2>
          <Sparkles className="text-victory-pink animate-sparkle" size={24} />
        </div>
        
        <div className="bg-white/60 rounded-cozy p-6 backdrop-blur-sm">
          <p className="text-lg font-cozy text-foreground leading-relaxed">
            {currentPrompt}
          </p>
        </div>
        
        <Button 
          onClick={getNewPrompt}
          variant="outline"
          className="bg-white/50 border-victory-gold hover:bg-victory-cream transition-all duration-300 group"
        >
          <RefreshCw className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
          New Spark
        </Button>
      </div>
    </Card>
  );
};