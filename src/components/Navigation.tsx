
import { Home, Heart, PawPrint, HelpCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: PawPrint, label: "Nieuws", path: "/news", color: "text-teal-400" },
    { icon: Heart, label: "Verzorgen", path: "/pet-care", color: "text-orange-400" },
    { icon: Home, label: "Home", path: "/", color: "text-yellow-400" },
    { icon: HelpCircle, label: "Help", path: "/help", color: "text-purple-400" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.path}
                className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'bg-gray-100' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => navigate(item.path)}
              >
                <div className={`p-3 rounded-full border-2 ${isActive ? 'border-gray-300' : 'border-gray-200'}`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
