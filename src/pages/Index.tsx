import { DailyPrompt } from "@/components/DailyPrompt";
import { VictoryLogger } from "@/components/VictoryLogger";
import { BadgeDisplay } from "@/components/BadgeDisplay";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-cozy">
      {/* Header */}
      <header className="text-center py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="text-victory-pink animate-gentle-bounce" size={32} />
            <h1 className="text-4xl md:text-5xl font-handwritten font-bold text-foreground">
              Little Victories
            </h1>
            <Sparkles className="text-victory-gold animate-sparkle" size={32} />
          </div>
          <p className="text-lg font-cozy text-muted-foreground max-w-2xl mx-auto">
            Your daily dose of joy, motivation, and gentle reminders that every small step forward is worth celebrating ✨
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
        <div className="text-center mt-12 p-6 bg-white/30 backdrop-blur-sm rounded-cozy border border-victory-cream">
          <p className="font-handwritten text-lg text-foreground mb-4">
            Remember: You're doing amazing, even when it doesn't feel like it 💕
          </p>
          <p className="font-cozy text-sm text-muted-foreground">
            Every victory, no matter how small, is a step toward becoming who you're meant to be.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;