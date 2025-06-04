
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Newspaper, Gift, PawPrint } from "lucide-react";
import Navigation from "@/components/Navigation";
import PetDisplay from "@/components/PetDisplay";

const Index = () => {
  const navigate = useNavigate();
  const [currentPet] = useState({
    name: "Olijfje",
    type: "konijn",
    happiness: 85,
    hunger: 60,
    level: 3,
    color: "#95cec0"
  });

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-heebo-black font-black text-6xl text-theme-dark mb-4">
            Nieuws nestje
          </h1>
          <p className="text-xl text-theme-dark/70 max-w-2xl mx-auto">
            Leer over de wereld door voor je eigen virtuele diertje te zorgen! 
            Beantwoord vragen over het nieuws en zie je diertje groeien.
          </p>
        </div>

        {/* Current Pet Display */}
        <div className="max-w-md mx-auto mb-12">
          <PetDisplay pet={currentPet} showStats={true} />
        </div>

        {/* Main Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <div 
            className="bg-theme-yellow p-8 rounded-3xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer text-center"
            onClick={() => navigate('/news')}
          >
            <div className="w-16 h-16 bg-theme-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Newspaper className="w-8 h-8 text-theme-yellow" />
            </div>
            <h3 className="font-heebo-black text-theme-white text-xl mb-2">Nieuws Lezen</h3>
            <p className="text-theme-white/90 text-sm">
              Ontdek interessante verhalen en help je diertje groeien
            </p>
          </div>

          <div 
            className="bg-theme-green p-8 rounded-3xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer text-center"
            onClick={() => navigate('/pet-care')}
          >
            <div className="w-16 h-16 bg-theme-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-theme-green" />
            </div>
            <h3 className="font-heebo-black text-theme-white text-xl mb-2">Diertje Verzorgen</h3>
            <p className="text-theme-white/90 text-sm">
              Voer je diertje, speel ermee en bouw een hechte band op
            </p>
          </div>

          <div 
            className="bg-theme-orange p-8 rounded-3xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer text-center"
            onClick={() => navigate('/collection')}
          >
            <div className="w-16 h-16 bg-theme-white rounded-full flex items-center justify-center mx-auto mb-4">
              <PawPrint className="w-8 h-8 text-theme-orange" />
            </div>
            <h3 className="font-heebo-black text-theme-white text-xl mb-2">Mijn Collectie</h3>
            <p className="text-theme-white/90 text-sm">
              Bekijk alle diertjes die je hebt verzameld
            </p>
          </div>

          <div className="bg-theme-purple p-8 rounded-3xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer text-center">
            <div className="w-16 h-16 bg-theme-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-theme-purple" />
            </div>
            <h3 className="font-heebo-black text-theme-white text-xl mb-2">Nieuw Pakketje</h3>
            <p className="text-theme-white/90 text-sm">
              Open je wekelijkse verrassing en ontdek een nieuw diertje
            </p>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Index;
