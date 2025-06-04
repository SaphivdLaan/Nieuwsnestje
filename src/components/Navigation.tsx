
import { Home, Heart, PawPrint, Newspaper } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Newspaper, label: "Nieuws", path: "/news" },
    { icon: Heart, label: "Zorg", path: "/pet-care" },
    { icon: PawPrint, label: "Collectie", path: "/collection" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-theme-white shadow-lg border-t-4 border-theme-yellow z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Button
                key={item.path}
                variant="ghost"
                size="sm"
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'bg-theme-yellow text-theme-white shadow-md' 
                    : 'text-theme-dark hover:bg-theme-yellow/20 hover:text-theme-dark'
                }`}
                onClick={() => navigate(item.path)}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-semibold">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
