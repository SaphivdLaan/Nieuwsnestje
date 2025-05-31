
import { Home, Heart, PawPrint, Newspaper } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Newspaper, label: "Nieuws", path: "/news" },
    { icon: Heart, label: "Verzorgen", path: "/pet-care" },
    { icon: PawPrint, label: "Collectie", path: "/collection" },
  ];

  return (
    <nav className="bg-theme-white shadow-lg border-b-4 border-theme-yellow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div 
            className="font-heebo-black font-black text-2xl text-theme-dark cursor-pointer"
            onClick={() => navigate('/')}
          >
            DierNieuws 🐾
          </div>
          
          <div className="flex space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant="ghost"
                  size="sm"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-theme-yellow text-theme-white shadow-md' 
                      : 'text-theme-dark hover:bg-theme-yellow/20 hover:text-theme-dark'
                  }`}
                  onClick={() => navigate(item.path)}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline font-semibold">{item.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
