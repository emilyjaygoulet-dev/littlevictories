import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
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
  const { toast } = useToast();

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
      
      toast({
        title: "Victory logged! ✨",
        description: "Every small step deserves celebration",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-cozy border-victory-cream shadow-gentle">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="text-victory-gold" size={20} />
            <h3 className="text-xl font-handwritten font-bold text-foreground">
              Log Your Victory
            </h3>
          </div>
          
          <Textarea
            placeholder="What victory are you celebrating today? Big or small, it all counts! 🌟"
            value={newVictory}
            onChange={(e) => setNewVictory(e.target.value)}
            className="min-h-[100px] bg-white/70 border-victory-cream rounded-cozy resize-none font-cozy"
          />
          
          <div className="space-y-3">
            <p className="text-sm font-cozy text-muted-foreground">How does this victory feel?</p>
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
                      : "bg-white/60 border-victory-cream hover:bg-victory-cream"
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
            className="w-full bg-victory-gold hover:bg-primary transition-colors duration-300 font-cozy font-medium"
            disabled={!newVictory.trim()}
          >
            <Plus className="mr-2 h-4 w-4" />
            Celebrate This Victory
          </Button>
        </div>
      </Card>

      {victories.length > 0 && (
        <Card className="p-6 bg-card border-victory-cream shadow-gentle">
          <div className="flex items-center gap-2 mb-4">
            <Star className="text-victory-pink" size={20} />
            <h3 className="text-xl font-handwritten font-bold text-foreground">
              Your Victory Garden
            </h3>
          </div>
          
          <div className="space-y-3">
            {victories.map((victory) => (
              <div 
                key={victory.id}
                className="bg-gradient-warm p-4 rounded-cozy border border-victory-cream hover:shadow-gentle transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-cozy text-foreground leading-relaxed">
                      {victory.text}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 font-cozy">
                      {victory.timestamp.toLocaleDateString()} at {victory.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  <Badge variant="outline" className="bg-white/60 border-victory-cream">
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