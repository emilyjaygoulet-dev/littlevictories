
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { User, Search, HelpCircle, Settings, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const themes = [
  { id: "lavender-toast", name: "Lavender Toast" },
  { id: "cherry-soda-spark", name: "Cherry Soda Spark" },
  { id: "midnight-peony", name: "Midnight Peony" },
  { id: "croissant-glow", name: "Croissant Glow" },
  { id: "spicy-meteor", name: "Spicy Meteor" },
  { id: "moss-matcha", name: "Moss & Matcha" },
  { id: "prism-static", name: "Prism Static" },
  { id: "sundae-punks", name: "Sundae Punks" }
];

export const TopNavigation = () => {
  const [currentTheme, setCurrentTheme] = useState<string>("");
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const theme = localStorage.getItem("little-victories-theme") || "croissant-glow";
    setCurrentTheme(theme);
  }, []);

  const applyTheme = (themeId: string) => {
    const body = document.body;
    body.classList.remove(
      'theme-lavender-toast', 'theme-cherry-soda-spark', 'theme-midnight-peony', 
      'theme-croissant-glow', 'theme-spicy-meteor', 'theme-moss-matcha', 
      'theme-prism-static', 'theme-sundae-punks'
    );
    body.classList.add(`theme-${themeId}`);
  };

  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId);
    localStorage.setItem("little-victories-theme", themeId);
    applyTheme(themeId);
    setShowThemeMenu(false);
    
    toast({
      title: "Theme changed! ✨",
      description: `Switched to ${themes.find(t => t.id === themeId)?.name}`,
    });
    
    // Trigger page refresh to apply theme changes
    window.location.reload();
  };

  const isLavenderToast = currentTheme === "lavender-toast";

  return (
    <div className="w-full">
      {/* Top Navigation Bar */}
      <nav className="flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm border-b border-border">
        {/* Left - App Name */}
        <h1 className="text-2xl font-aref-ruqaa font-bold text-foreground">
          Little Victories
        </h1>

        {/* Right - Icons and User Menu */}
        <div className="flex items-center gap-3">
          {/* Search Icon */}
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Search size={20} />
          </Button>

          {/* Help Icon */}
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <HelpCircle size={20} />
          </Button>

          {/* Settings Menu */}
          <DropdownMenu open={showThemeMenu} onOpenChange={setShowThemeMenu}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Settings size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => setShowThemeMenu(true)}>
                Change Your Vibe
              </DropdownMenuItem>
              {showThemeMenu && (
                <div className="pl-4 space-y-1">
                  {themes.map((theme) => (
                    <DropdownMenuItem
                      key={theme.id}
                      onClick={() => handleThemeChange(theme.id)}
                      className={currentTheme === theme.id ? "bg-accent" : ""}
                    >
                      {theme.name}
                    </DropdownMenuItem>
                  ))}
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <User size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>Account Settings</DropdownMenuItem>
              <DropdownMenuItem>Help & Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Lavender Toast Theme Identifier */}
      {isLavenderToast && (
        <div className="px-4 py-2 bg-background">
          <p className="font-caveat text-lg text-purple-800">Lavender Toast</p>
        </div>
      )}
    </div>
  );
};
