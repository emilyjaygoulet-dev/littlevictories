import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Heart, Smile, Star, Trophy, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const moodEmojis = [
  { emoji: "😊", label: "Happy", color: "bg-victory-gold" },
  { emoji: "🥳", label: "Celebratory", color: "bg-victory-pink" },
  { emoji: "😌", label: "Peaceful", color: "bg-victory-peach" },
  { emoji: "💪", label: "Strong", color: "bg-primary" },
  { emoji: "🌟", label: "Proud", color: "bg-victory-warm" },
  { emoji: "🤗", label: "Grateful", color: "bg-secondary" }
];

interface Victory {
  id: string;
  text: string;
  mood: string;
  timestamp: Date;
}

export const VictoryLogger = () => {
  const [victories, setVictories] = useState<Victory[]>([]);
  const [newVictory, setNewVictory] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [currentTheme, setCurrentTheme] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    const theme = localStorage.getItem("little-victories-theme") || "croissant-glow";
    setCurrentTheme(theme);
  }, []);

  const isLavenderToast = currentTheme === "lavender-toast";

  const addVictory = () => {
    if (newVictory.trim()) {
      const victory: Victory = {
        id: Date.now().toString(),
        text: newVictory.trim(),
        mood: selectedMood || "🌟",
        timestamp: new Date()
      };
      
      setVictories([victory, ...victories]);
      setNewVictory("");
      setSelectedMood("");
      
      if (isLavenderToast) {
        toast({
          title: "Victory folded into your heart ✨",
          description: "Another teaspoon of healing, gently gathered",
        });
      } else {
        toast({
          title: "Victory logged! ✨",
          description: "Every small step deserves celebration",
        });
      }
    }
  };

  const getPlaceholderText = () => {
    if (isLavenderToast) {
      return "Name one small thing that felt like light today...";
    }
    return "What victory are you celebrating today? Big or small, it all counts! 🌟";
  };

  const getButtonText = () => {
    if (isLavenderToast) {
      return "Fold This Victory";
    }
    return "Celebrate This Victory";
  };

  return (
    <div className="space-y-6">
      <Card className={`p-6 border-victory-cream shadow-gentle ${isLavenderToast ? 'linen-texture bg-card/80' : 'bg-gradient-cozy'}`}>
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="text-victory-gold" size={20} />
            <h3 className={`text-xl font-bold text-foreground ${isLavenderToast ? 'font-lavender-header' : 'font-handwritten'}`}>
              {isLavenderToast ? "Light Collection" : "Log Your Victory"}
            </h3>
          </div>
          
          <Textarea
            placeholder={getPlaceholderText()}
            value={newVictory}
            onChange={(e) => setNewVictory(e.target.value)}
            className={`min-h-[100px] border-victory-cream rounded-cozy resize-none ${
              isLavenderToast 
                ? 'bg-background/60 font-lavender-text steam-effect' 
                : 'bg-white/70 font-cozy'
            }`}
          />
          
          <div className="space-y-3">
            <p className={`text-sm text-muted-foreground ${isLavenderToast ? 'font-lavender-text' : 'font-cozy'}`}>
              {isLavenderToast ? "What gentle mood holds this moment?" : "How does this victory feel?"}
            </p>
            <div className="flex flex-wrap gap-2">
              {moodEmojis.map((mood) => (
                <Button
                  key={mood.emoji}
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedMood(mood.emoji)}
                  className={`rounded-full border-2 transition-all duration-200 ${
                    selectedMood === mood.emoji 
                      ? `${mood.color} border-primary` 
                      : `${isLavenderToast ? 'bg-background/40 border-accent hover:bg-accent/50' : 'bg-white/60 border-victory-cream hover:bg-victory-cream'}`
                  }`}
                >
                  <span className="mr-1">{mood.emoji}</span>
                  {mood.label}
                </Button>
              ))}
            </div>
          </div>
          
          <Button 
            onClick={addVictory}
            className={`w-full transition-colors duration-300 font-medium ${
              isLavenderToast 
                ? 'lavender-button font-lavender-text kintsugi-element animate-page-turn' 
                : 'bg-victory-gold hover:bg-primary font-cozy'
            }`}
            disabled={!newVictory.trim()}
          >
            <Plus className="mr-2 h-4 w-4" />
            {getButtonText()}
          </Button>
        </div>
      </Card>

      {victories.length > 0 && (
        <Card className={`p-6 border-victory-cream shadow-gentle ${isLavenderToast ? 'linen-texture bg-card/80' : 'bg-card'}`}>
          <div className="flex items-center gap-2 mb-4">
            <Star className="text-victory-pink" size={20} />
            <h3 className={`text-xl font-bold text-foreground ${isLavenderToast ? 'font-lavender-header' : 'font-handwritten'}`}>
              {isLavenderToast ? "Your Gentle Archive" : "Your Victory Garden"}
            </h3>
          </div>
          
          <div className="space-y-3">
            {victories.map((victory) => (
              <div 
                key={victory.id}
                className={`p-4 rounded-cozy border border-victory-cream hover:shadow-gentle transition-all duration-300 ${
                  isLavenderToast ? 'bg-background/50 kintsugi-element' : 'bg-gradient-warm'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className={`text-foreground leading-relaxed ${isLavenderToast ? 'font-lavender-text' : 'font-cozy'}`}>
                      {victory.text}
                    </p>
                    <p className={`text-xs text-muted-foreground mt-2 ${isLavenderToast ? 'font-lavender-text' : 'font-cozy'}`}>
                      {victory.timestamp.toLocaleDateString()} at {victory.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  <Badge variant="outline" className={`border-victory-cream ${isLavenderToast ? 'bg-background/40' : 'bg-white/60'}`}>
                    {victory.mood}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};