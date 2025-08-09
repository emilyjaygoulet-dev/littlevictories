
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star } from "lucide-react";
import { useState, useEffect } from "react";

export const BadgeSection = () => {
  const [currentTheme, setCurrentTheme] = useState<string>("");

  useEffect(() => {
    const theme = localStorage.getItem("little-victories-theme") || "croissant-glow";
    setCurrentTheme(theme);
  }, []);

  const isLavenderToast = currentTheme === "lavender-toast";

  return (
    <Card className={`p-6 border-victory-cream shadow-gentle ${isLavenderToast ? 'linen-texture bg-card/80' : 'bg-card'}`}>
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="text-victory-gold" size={20} />
          <h3 className={`text-xl font-bold text-foreground ${isLavenderToast ? 'font-caveat' : 'font-handwritten'}`}>
            {isLavenderToast ? "Your Gentle Badges" : "Victory Badges"}
          </h3>
        </div>
        
        <div className="flex items-center gap-3 p-4 bg-gradient-warm rounded-cozy border border-victory-cream">
          <div className="bg-victory-gold/20 p-3 rounded-full">
            <Star className="text-victory-gold" size={24} />
          </div>
          <div className="flex-1">
            <h4 className={`font-bold text-foreground ${isLavenderToast ? 'font-caveat' : 'font-handwritten'}`}>
              {isLavenderToast ? "First Light" : "First Victory"}
            </h4>
            <p className={`text-sm text-muted-foreground ${isLavenderToast ? 'font-patrick-hand' : 'font-cozy'}`}>
              {isLavenderToast ? "You showed up and shared your first teaspoon of light" : "You logged your first victory!"}
            </p>
          </div>
          <Badge variant="outline" className="bg-victory-gold/20 border-victory-gold text-victory-gold">
            Starter
          </Badge>
        </div>
      </div>
    </Card>
  );
};
