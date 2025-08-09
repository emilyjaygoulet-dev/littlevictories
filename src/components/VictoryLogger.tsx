
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Heart, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getRandomMessage } from "@/components/SpiritGuide";

const getLavenderToastMoods = () => [
  { emoji: "🕊️", label: "At Peace", color: "bg-purple-200" },
  { emoji: "🌸", label: "Gentle", color: "bg-pink-200" },
  { emoji: "✨", label: "Grateful", color: "bg-yellow-200" },
  { emoji: "🤗", label: "Held", color: "bg-blue-200" },
  { emoji: "🦋", label: "Hopeful", color: "bg-green-200" },
  { emoji: "💙", label: "Loved", color: "bg-indigo-200" }
];

const getDefaultMoods = () => [
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
  theme: string; // Lock victory to theme it was created in
}

export const VictoryLogger = () => {
  const [victories, setVictories] = useState<Victory[]>([]);
  const [newVictory, setNewVictory] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [currentTheme, setCurrentTheme] = useState<string>("");
  const [dailyQuote, setDailyQuote] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const theme = localStorage.getItem("little-victories-theme") || "croissant-glow";
    setCurrentTheme(theme);
    
    // Get daily quote (one per day for Lavender Toast)
    const today = new Date().toDateString();
    const storedQuoteDate = localStorage.getItem("daily-quote-date");
    const storedQuote = localStorage.getItem("daily-quote");
    
    if (storedQuoteDate === today && storedQuote) {
      setDailyQuote(storedQuote);
    } else {
      const newQuote = getRandomMessage(theme);
      setDailyQuote(newQuote);
      localStorage.setItem("daily-quote-date", today);
      localStorage.setItem("daily-quote", newQuote);
    }
  }, []);

  const isLavenderToast = currentTheme === "lavender-toast";
  const moodOptions = isLavenderToast ? getLavenderToastMoods() : getDefaultMoods();

  const addVictory = () => {
    if (newVictory.trim()) {
      const victory: Victory = {
        id: Date.now().toString(),
        text: newVictory.trim(),
        mood: selectedMood || "🌟",
        timestamp: new Date(),
        theme: currentTheme // Lock to current theme
      };
      
      setVictories([victory, ...victories]);
      setNewVictory("");
      setSelectedMood("");
      
      if (isLavenderToast) {
        toast({
          title: "Light added to your jar ✨",
          description: "Another gentle moment preserved",
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
      return "Add this to the lavender jar";
    }
    return "Celebrate This Victory";
  };

  return (
    <div className="space-y-6">
      {/* Daily Quote Section */}
      <Card className={`p-6 border-victory-cream shadow-gentle ${isLavenderToast ? 'linen-texture bg-card/80' : 'bg-gradient-cozy'}`}>
        <div className="text-center">
          <div className="bg-white rounded-cozy p-4 mb-4">
            <p className={`text-lg leading-relaxed ${isLavenderToast ? 'font-patrick-hand' : 'font-cozy'} text-foreground`}>
              {dailyQuote}
            </p>
            <p className={`text-sm text-muted-foreground mt-2 italic ${isLavenderToast ? 'font-patrick-hand' : 'font-cozy'}`}>
              —spirit guide
            </p>
          </div>
        </div>
      </Card>

      {/* Victory Input */}
      <Card className={`p-6 border-victory-cream shadow-gentle ${isLavenderToast ? 'linen-texture bg-card/80' : 'bg-gradient-cozy'}`}>
        <div className="space-y-4">
          <Textarea
            placeholder={getPlaceholderText()}
            value={newVictory}
            onChange={(e) => setNewVictory(e.target.value)}
            className={`min-h-[100px] border-victory-cream rounded-cozy resize-none bg-white ${
              isLavenderToast 
                ? 'font-patrick-hand steam-effect' 
                : 'font-cozy'
            }`}
          />
          
          <div className="space-y-3">
            <p className={`text-sm text-muted-foreground ${isLavenderToast ? 'font-patrick-hand' : 'font-cozy'}`}>
              {isLavenderToast ? "What gentle mood holds this moment?" : "How does this victory feel?"}
            </p>
            <div className="flex flex-wrap gap-2">
              {moodOptions.map((mood) => (
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
          
          <div className="flex justify-end">
            <Button 
              onClick={addVictory}
              className={`transition-colors duration-300 font-medium ${
                isLavenderToast 
                  ? 'lavender-button font-patrick-hand kintsugi-element animate-page-turn' 
                  : 'bg-victory-gold hover:bg-primary font-cozy'
              }`}
              disabled={!newVictory.trim()}
            >
              <Plus className="mr-2 h-4 w-4" />
              {getButtonText()}
            </Button>
          </div>
        </div>
      </Card>

      {/* Victory History */}
      {victories.length > 0 && (
        <Card className={`p-6 border-victory-cream shadow-gentle ${isLavenderToast ? 'linen-texture bg-card/80' : 'bg-card'}`}>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="text-victory-pink" size={20} />
            <h3 className={`text-xl font-bold text-foreground ${isLavenderToast ? 'font-caveat' : 'font-handwritten'}`}>
              {isLavenderToast ? "Your Gentle Archive" : "Your Victory Garden"}
            </h3>
          </div>
          
          <div className="space-y-3">
            {victories.map((victory) => {
              const victoryIsLavender = victory.theme === "lavender-toast";
              return (
                <div 
                  key={victory.id}
                  className={`p-4 rounded-cozy border border-victory-cream hover:shadow-gentle transition-all duration-300 ${
                    victoryIsLavender ? 'bg-purple-50 kintsugi-element' : 'bg-gradient-warm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className={`text-foreground leading-relaxed ${victoryIsLavender ? 'font-patrick-hand' : 'font-cozy'}`}>
                        {victory.text}
                      </p>
                      <p className={`text-xs text-muted-foreground mt-2 ${victoryIsLavender ? 'font-patrick-hand' : 'font-cozy'}`}>
                        {victory.timestamp.toLocaleDateString()} at {victory.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        {victoryIsLavender && <span className="ml-2 text-purple-600">(Lavender Toast)</span>}
                      </p>
                    </div>
                    <Badge variant="outline" className={`border-victory-cream ${victoryIsLavender ? 'bg-purple-100' : 'bg-white/60'}`}>
                      {victory.mood}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
};
