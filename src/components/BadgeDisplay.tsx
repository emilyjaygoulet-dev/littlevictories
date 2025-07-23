import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Sparkles, Sun, Coffee, Star } from "lucide-react";

const badges = [
  {
    icon: Sun,
    title: "Morning Glory",
    description: "Started your day with intention",
    color: "bg-victory-gold",
    earned: true
  },
  {
    icon: Coffee,
    title: "Small Sips",
    description: "Found joy in life's simple moments",
    color: "bg-victory-peach",
    earned: true
  },
  {
    icon: Heart,
    title: "Self-Love Champion",
    description: "Showed yourself kindness today",
    color: "bg-victory-pink",
    earned: false
  },
  {
    icon: Star,
    title: "Victory Keeper",
    description: "Celebrated your achievements",
    color: "bg-victory-warm",
    earned: true
  },
  {
    icon: Sparkles,
    title: "Joy Finder",
    description: "Discovered magic in the ordinary",
    color: "bg-secondary",
    earned: false
  }
];

export const BadgeDisplay = () => {
  const earnedBadges = badges.filter(badge => badge.earned);
  const availableBadges = badges.filter(badge => !badge.earned);

  return (
    <Card className="p-6 bg-gradient-sparkle border-none shadow-warm">
      <div className="space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award className="text-white animate-gentle-bounce" size={24} />
            <h3 className="text-2xl font-handwritten font-bold text-white">
              Your Little Victory Badges
            </h3>
          </div>
          <p className="text-white/90 font-cozy">
            Each step forward deserves recognition ✨
          </p>
        </div>

        {earnedBadges.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-handwritten font-bold text-white text-lg">
              🏆 Earned Badges
            </h4>
            <div className="grid gap-3">
              {earnedBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-cozy p-4 border border-white/30 hover:bg-white/30 transition-all duration-300 animate-cozy-float"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${badge.color} bg-opacity-80`}>
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-cozy font-semibold text-white">
                          {badge.title}
                        </h5>
                        <p className="text-white/80 text-sm font-cozy">
                          {badge.description}
                        </p>
                      </div>
                      <Badge variant="outline" className="bg-white/30 border-white/50 text-white">
                        ✨
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {availableBadges.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-handwritten font-bold text-white text-lg">
              🌟 Available Badges
            </h4>
            <div className="grid gap-2">
              {availableBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-cozy p-3 border border-white/20"
                  >
                    <div className="flex items-center gap-3 opacity-70">
                      <div className="p-2 rounded-full bg-white/20">
                        <IconComponent className="text-white" size={16} />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-cozy font-medium text-white text-sm">
                          {badge.title}
                        </h5>
                        <p className="text-white/70 text-xs font-cozy">
                          {badge.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};