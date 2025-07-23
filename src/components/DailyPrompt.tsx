import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Sparkles } from "lucide-react";
import { useState } from "react";

const prompts = [
  "You have survived every yesterday. Today is yours to bend gently.",
  "Some days bloom slowly. You're still blossoming.",
  "Today smells like cardamom ambition and chamomile calm. Stir and serve.",
  "The universe whispers through small moments. What will yours tell you?",
  "You carry starlight in your ordinary Tuesday. Let it shimmer.",
  "Today asks nothing of you but presence. Everything else is bonus magic.",
  "Your heart beats wisdom you haven't discovered yet. Listen closely.",
  "Some victories taste like morning coffee and quiet courage. Both count.",
  "The world needs your particular brand of gentle thunder. Rumble softly.",
  "Today's forecast: Partly cloudy with a chance of tiny miracles.",
  "You're writing a story one small choice at a time. What's your next word?",
  "The moon celebrates your sleeping. The sun celebrates your waking. Both matter."
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