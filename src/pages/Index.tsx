
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="min-h-screen bg-gradient-to-br from-theme-purple/20 via-theme-white to-theme-green/20">
      <Navigation />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-heebo-black font-black text-6xl text-theme-dark mb-4">
            DierNieuws
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
          <Card 
            className="bg-theme-yellow/20 border-theme-yellow hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => navigate('/news')}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-theme-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Newspaper className="w-8 h-8 text-theme-white" />
              </div>
              <CardTitle className="font-heebo-black text-theme-dark">Nieuws Lezen</CardTitle>
              <CardDescription>
                Ontdek interessante verhalen en help je diertje groeien
              </CardDescription>
            </CardHeader>
          </Card>

          <Card 
            className="bg-theme-green/20 border-theme-green hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => navigate('/pet-care')}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-theme-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-theme-white" />
              </div>
              <CardTitle className="font-heebo-black text-theme-dark">Diertje Verzorgen</CardTitle>
              <CardDescription>
                Voer je diertje, speel ermee en bouw een hechte band op
              </CardDescription>
            </CardHeader>
          </Card>

          <Card 
            className="bg-theme-orange/20 border-theme-orange hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => navigate('/collection')}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <PawPrint className="w-8 h-8 text-theme-white" />
              </div>
              <CardTitle className="font-heebo-black text-theme-dark">Mijn Collectie</CardTitle>
              <CardDescription>
                Bekijk alle diertjes die je hebt verzameld
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-theme-purple/20 border-theme-purple hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-theme-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-theme-white" />
              </div>
              <CardTitle className="font-heebo-black text-theme-dark">Nieuw Pakketje</CardTitle>
              <CardDescription>
                Open je wekelijkse verrassing en ontdek een nieuw diertje
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Weekly Progress */}
        <Card className="max-w-2xl mx-auto bg-theme-white/80 border-2 border-theme-yellow">
          <CardHeader>
            <CardTitle className="font-heebo-black text-center text-theme-dark">
              Deze Week: Dieren in de Winter ❄️
            </CardTitle>
            <CardDescription className="text-center">
              Leer hoe dieren zich voorbereiden op de koude maanden
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <span className="text-theme-dark font-semibold">Voortgang deze week</span>
              <span className="text-theme-dark font-bold">3/5 verhalen</span>
            </div>
            <div className="w-full bg-theme-purple/20 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-theme-yellow to-theme-orange h-4 rounded-full transition-all duration-500" 
                style={{ width: '60%' }}
              ></div>
            </div>
            <p className="text-sm text-theme-dark/70 mt-2 text-center">
              Nog 2 verhalen en Olijfje wordt groter! 🐰
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
