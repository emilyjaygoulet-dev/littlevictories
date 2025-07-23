import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sparkles, Heart, Coffee, Moon, Cherry, Flower } from "lucide-react";

interface OnboardingProps {
  onComplete: (selectedTheme: string) => void;
}

const themes = [
  {
    id: "lavender-toast",
    name: "Lavender Toast",
    icon: Coffee,
    description: "Gentle comfort, quiet bravery",
    colors: "from-purple-200 to-yellow-100",
    vibe: "Soft mornings"
  },
  {
    id: "cherry-soda-spark",
    name: "Cherry Soda Spark", 
    icon: Cherry,
    description: "Pop fizz, vibrant energy",
    colors: "from-red-200 to-pink-100",
    vibe: "Bright sparks"
  },
  {
    id: "midnight-peony",
    name: "Midnight Peony",
    icon: Moon,
    description: "Deep magic, poetic grit",
    colors: "from-indigo-300 to-purple-200",
    vibe: "Mystical depths"
  },
  {
    id: "croissant-glow",
    name: "Croissant Glow",
    icon: Flower,
    description: "Cozy warmth, breakfast comfort",
    colors: "from-amber-200 to-orange-100",
    vibe: "Golden comfort"
  },
  {
    id: "spicy-meteor",
    name: "Spicy Meteor",
    icon: Sparkles,
    description: "Fiery sass, chaotic brilliance",
    colors: "from-orange-300 to-yellow-200",
    vibe: "Cosmic fire"
  },
  {
    id: "moss-matcha",
    name: "Moss & Matcha",
    icon: Flower,
    description: "Earthy calm, sacred slowness",
    colors: "from-green-200 to-teal-100",
    vibe: "Natural zen"
  },
  {
    id: "prism-static",
    name: "Prism Static",
    icon: Sparkles,
    description: "Digital glitch, rainbow shimmer",
    colors: "from-cyan-200 to-purple-200",
    vibe: "Glitch magic"
  },
  {
    id: "sundae-punks",
    name: "Sundae Punks",
    icon: Heart,
    description: "Retro rebellious joy",
    colors: "from-yellow-200 to-pink-200",
    vibe: "Rebel sweetness"
  }
];

const onboardingSteps = [
  {
    title: "Hey, you showed up.",
    subtitle: "That already counts as a win.",
    content: "Welcome to Little Victories, where tiny triumphs become gentle thunder."
  },
  {
    title: "Big mood. Tiny trophies.",
    subtitle: "Real growth.",
    content: "Here, we celebrate everything—from making your bed to moving mountains. Both matter."
  },
  {
    title: "Pick your flavor",
    subtitle: "Choose the vibe that speaks to your soul",
    content: "Each theme carries its own magic. Which one feels like home?"
  },
  {
    title: "Log today's glory",
    subtitle: "However small.",
    content: "Your victories deserve witnesses. We're here to cheer for every single one."
  },
  {
    title: "You're in.",
    subtitle: "Let's make noticing a habit.",
    content: "Ready to transform ordinary moments into extraordinary recognition? Your journey begins now."
  }
];

export const Onboarding = ({ onComplete }: OnboardingProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState("");

  const isThemeStep = currentStep === 2;
  const isLastStep = currentStep === onboardingSteps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onComplete(selectedTheme || "croissant-glow");
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const canProceed = !isThemeStep || selectedTheme;

  return (
    <div className="min-h-screen bg-gradient-cozy flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card className="p-8 bg-gradient-warm border-none shadow-warm">
          <div className="text-center space-y-6">
            {/* Progress dots */}
            <div className="flex justify-center gap-2 mb-8">
              {onboardingSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index <= currentStep 
                      ? "bg-victory-gold shadow-gentle" 
                      : "bg-victory-cream"
                  }`}
                />
              ))}
            </div>

            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="text-victory-pink animate-gentle-bounce" size={28} />
              <Sparkles className="text-victory-gold animate-sparkle" size={28} />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-handwritten font-bold text-foreground">
                {onboardingSteps[currentStep].title}
              </h1>
              <h2 className="text-xl font-handwritten text-muted-foreground">
                {onboardingSteps[currentStep].subtitle}
              </h2>
              <p className="text-lg font-cozy text-foreground leading-relaxed max-w-lg mx-auto">
                {onboardingSteps[currentStep].content}
              </p>
            </div>

            {/* Theme Selection */}
            {isThemeStep && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 max-w-5xl mx-auto">
                {themes.map((theme) => {
                  const Icon = theme.icon;
                  return (
                    <Card
                      key={theme.id}
                      className={`p-4 cursor-pointer transition-all duration-300 border-2 ${
                        selectedTheme === theme.id
                          ? "border-victory-gold shadow-gentle bg-white/80 scale-105"
                          : "border-victory-cream hover:border-victory-gold/50 bg-white/60 hover:scale-102"
                      }`}
                      onClick={() => setSelectedTheme(theme.id)}
                    >
                      <div className="text-center space-y-2">
                        <div className={`w-12 h-12 rounded-cozy bg-gradient-to-br ${theme.colors} flex items-center justify-center mx-auto`}>
                          <Icon className="text-foreground" size={20} />
                        </div>
                        <h3 className="font-handwritten font-bold text-sm text-foreground">
                          {theme.name}
                        </h3>
                        <p className="font-cozy text-xs text-muted-foreground">
                          {theme.vibe}
                        </p>
                        {selectedTheme === theme.id && (
                          <div className="text-victory-gold">
                            <Sparkles size={16} className="mx-auto animate-sparkle" />
                          </div>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="bg-white/50 border-victory-cream hover:bg-victory-cream/50"
              >
                Back
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!canProceed}
                className="bg-victory-gold hover:bg-victory-gold/90 text-white font-handwritten px-8"
              >
                {isLastStep ? "Begin Your Journey" : "Continue"}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};