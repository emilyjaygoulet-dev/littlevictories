import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sparkles, Heart } from "lucide-react";

// Import theme icons
import lavenderToastIcon from "@/assets/lavender-toast-icon.png";
import cherrySodaSparkIcon from "@/assets/cherry-soda-spark-icon.png";
import midnightPeonyIcon from "@/assets/midnight-peony-icon.png";
import croissantGlowIcon from "@/assets/croissant-glow-icon.png";
import spicyMeteorIcon from "@/assets/spicy-meteor-icon.png";
import mossMatchaIcon from "@/assets/moss-matcha-icon.png";
import prismStaticIcon from "@/assets/prism-static-icon.png";
import sundaePunksIcon from "@/assets/sundae-punks-icon.png";

interface OnboardingProps {
  onComplete: (selectedTheme: string) => void;
}

const themes = [
  {
    id: "lavender-toast",
    name: "Lavender Toast",
    iconImage: "/lovable-uploads/b3934340-e648-4577-aff7-b2dbf657a62d.png",
    description: "Gentle comfort, quiet bravery",
    colors: "from-purple-200 to-yellow-100",
    vibe: "Soft mornings"
  },
  {
    id: "cherry-soda-spark",
    name: "Cherry Soda Spark", 
    iconImage: "/lovable-uploads/d26e68c3-531c-4cc8-b8e5-1bfe3f963ecc.png",
    description: "Pop fizz, vibrant energy",
    colors: "from-red-200 to-pink-100",
    vibe: "Bright sparks"
  },
  {
    id: "midnight-peony",
    name: "Midnight Peony",
    iconImage: "/lovable-uploads/0236faee-c855-436a-8a6a-308f4dea2299.png",
    description: "Deep magic, poetic grit",
    colors: "from-indigo-300 to-purple-200",
    vibe: "Mystical depths"
  },
  {
    id: "croissant-glow",
    name: "Croissant Glow",
    iconImage: "/lovable-uploads/602125de-53f4-45b5-908e-098849e4f320.png",
    description: "Cozy warmth, breakfast comfort",
    colors: "from-amber-200 to-orange-100",
    vibe: "Golden comfort"
  },
  {
    id: "spicy-meteor",
    name: "Spicy Meteor",
    iconImage: "/lovable-uploads/c973e0e9-08c2-4252-8954-a9ca106e1a10.png",
    description: "Fiery sass, chaotic brilliance",
    colors: "from-orange-300 to-yellow-200",
    vibe: "Cosmic fire"
  },
  {
    id: "moss-matcha",
    name: "Moss & Matcha",
    iconImage: "/lovable-uploads/d637f269-ace2-497d-acf4-de769a617e43.png",
    description: "Earthy calm, sacred slowness",
    colors: "from-green-200 to-teal-100",
    vibe: "Natural zen"
  },
  {
    id: "prism-static",
    name: "Prism Static",
    iconImage: "/lovable-uploads/5836e4c6-5cdc-4d60-bbca-2418cba1cd32.png",
    description: "Digital glitch, rainbow shimmer",
    colors: "from-cyan-200 to-purple-200",
    vibe: "Glitch magic"
  },
  {
    id: "sundae-punks",
    name: "Sundae Punks",
    iconImage: "/lovable-uploads/64001668-46c8-4d8e-8a72-b07d3ad52c53.png",
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
    title: "Pick your vibe",
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
    <div className="min-h-screen flex items-center justify-center p-4" style={{background: '#00CCCC'}}>
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
              <h1 className="text-3xl md:text-4xl font-onboarding-title font-bold text-foreground">
                {onboardingSteps[currentStep].title}
              </h1>
              <h2 className="text-xl font-onboarding-title text-muted-foreground">
                {onboardingSteps[currentStep].subtitle}
              </h2>
              <p className="text-lg font-onboarding-body text-foreground leading-relaxed max-w-lg mx-auto">
                {onboardingSteps[currentStep].content}
              </p>
            </div>

            {/* Theme Selection */}
            {isThemeStep && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 max-w-5xl mx-auto">
                {themes.map((theme) => {
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
                        <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto overflow-hidden">
                          <img 
                            src={theme.iconImage} 
                            alt={theme.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h3 className="font-onboarding-title font-bold text-sm text-foreground">
                          {theme.name}
                        </h3>
                        <p className="font-onboarding-body text-xs text-muted-foreground">
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
                className="bg-victory-gold hover:bg-victory-gold/90 text-white font-onboarding-title px-8"
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