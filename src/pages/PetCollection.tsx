
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Gift } from "lucide-react";
import Navigation from "@/components/Navigation";
import PetDisplay from "@/components/PetDisplay";

const PetCollection = () => {
  const collectedPets = [
    {
      name: "Olijfje",
      type: "konijn",
      happiness: 85,
      hunger: 60,
      level: 3,
      color: "#95cec0",
      dateCollected: "Deze week",
      weekTheme: "Dieren in de Winter",
      isActive: true
    },
    {
      name: "Mees",
      type: "vogel",
      happiness: 100,
      hunger: 30,
      level: 5,
      color: "#edb742",
      dateCollected: "Vorige week",
      weekTheme: "Dieren in de Herfst",
      isActive: false
    },
    {
      name: "Simba",
      type: "kat",
      happiness: 90,
      hunger: 45,
      level: 4,
      color: "#ef7538",
      dateCollected: "2 weken geleden",
      weekTheme: "Huisdieren Verhalen",
      isActive: false
    }
  ];

  const upcomingPets = [
    {
      type: "schildpad",
      weekTheme: "Volgend week: Langzame Dieren",
      color: "#d2c1dd"
    },
    {
      type: "hamster",
      weekTheme: "Over 2 weken: Kleine Dieren",
      color: "#ffb3d9"
    }
  ];

  const totalXP = collectedPets.reduce((total, pet) => total + (pet.level * 50), 0);
  const averageLevel = Math.round(collectedPets.reduce((total, pet) => total + pet.level, 0) / collectedPets.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-purple/20 via-theme-white to-theme-green/20">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="font-heebo-black font-black text-4xl text-theme-dark mb-4">
            Mijn Diertjes Collectie 🏆
          </h1>
          <p className="text-lg text-theme-dark/70 max-w-2xl mx-auto">
            Bekijk alle diertjes die je hebt verzameld en hun bijzondere verhalen!
          </p>
        </div>

        {/* Collection Stats */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
          <Card className="bg-theme-yellow/20 border-theme-yellow text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-theme-dark">{collectedPets.length}</div>
              <div className="text-sm text-theme-dark/70">Diertjes verzameld</div>
            </CardContent>
          </Card>
          
          <Card className="bg-theme-green/20 border-theme-green text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-theme-dark">{totalXP}</div>
              <div className="text-sm text-theme-dark/70">Totaal XP</div>
            </CardContent>
          </Card>
          
          <Card className="bg-theme-orange/20 border-theme-orange text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-theme-dark">{averageLevel}</div>
              <div className="text-sm text-theme-dark/70">Gemiddeld level</div>
            </CardContent>
          </Card>
        </div>

        {/* Current Active Pet */}
        <div className="mb-8">
          <h2 className="font-heebo-black font-bold text-2xl text-theme-dark mb-4 text-center">
            🌟 Huidige Diertje
          </h2>
          <div className="max-w-md mx-auto">
            {collectedPets
              .filter(pet => pet.isActive)
              .map(pet => (
                <div key={pet.name} className="relative">
                  <PetDisplay pet={pet} showStats={true} size="medium" />
                  <Badge className="absolute -top-2 -right-2 bg-theme-yellow text-theme-white">
                    <Trophy className="w-3 h-3 mr-1" />
                    Actief
                  </Badge>
                </div>
              ))
            }
          </div>
        </div>

        {/* All Collected Pets */}
        <div className="mb-8">
          <h2 className="font-heebo-black font-bold text-2xl text-theme-dark mb-6 text-center">
            🎪 Alle Diertjes
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collectedPets.map((pet) => (
              <Card 
                key={pet.name}
                className={`hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                  pet.isActive 
                    ? 'bg-theme-yellow/10 border-theme-yellow border-2' 
                    : 'bg-theme-white border-gray-200'
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-heebo-black text-lg text-theme-dark">
                        {pet.name}
                      </CardTitle>
                      <CardDescription className="text-theme-dark/70">
                        {pet.weekTheme}
                      </CardDescription>
                    </div>
                    {pet.isActive && (
                      <Badge className="bg-theme-yellow text-theme-white">
                        <Trophy className="w-3 h-3 mr-1" />
                        Actief
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <PetDisplay pet={pet} showStats={false} size="small" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-theme-dark/70">Level:</span>
                      <span className="font-semibold text-theme-dark">{pet.level}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-theme-dark/70">Verzameld:</span>
                      <span className="font-semibold text-theme-dark">{pet.dateCollected}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-theme-dark/70">XP verdiend:</span>
                      <span className="font-semibold text-theme-dark">{pet.level * 50}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Pets */}
        <div>
          <h2 className="font-heebo-black font-bold text-2xl text-theme-dark mb-6 text-center">
            🎁 Binnenkort beschikbaar
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {upcomingPets.map((pet, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-theme-purple/10 to-theme-green/10 border-2 border-dashed border-theme-purple hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-200">
                    <Gift className="w-8 h-8 text-gray-400" />
                  </div>
                  <CardTitle className="font-heebo-black text-theme-dark">
                    Mysterie Diertje
                  </CardTitle>
                  <CardDescription className="text-theme-dark/70">
                    {pet.weekTheme}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center">
                  <Badge variant="outline" className="text-theme-purple border-theme-purple">
                    <Calendar className="w-3 h-3 mr-1" />
                    Binnenkort
                  </Badge>
                  <p className="text-sm text-theme-dark/60 mt-2">
                    Lees nieuwsartikelen om dit pakketje te ontgrendelen!
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Collection Milestone */}
        <Card className="max-w-2xl mx-auto mt-8 bg-gradient-to-r from-theme-yellow/20 to-theme-orange/20 border-2 border-theme-yellow">
          <CardHeader className="text-center">
            <CardTitle className="font-heebo-black text-2xl text-theme-dark">
              🏆 Volgende Mijlpaal
            </CardTitle>
            <CardDescription>
              Verzamel nog 2 diertjes om de "Dierenvriend" badge te verdienen!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-theme-purple/20 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-theme-yellow to-theme-orange h-4 rounded-full transition-all duration-500" 
                style={{ width: '60%' }}
              ></div>
            </div>
            <p className="text-center text-sm text-theme-dark/70 mt-2">
              3 van 5 diertjes verzameld
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PetCollection;
