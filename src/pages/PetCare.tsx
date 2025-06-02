
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Utensils, Gamepad2, Shirt, Edit3, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import PetDisplay from "@/components/PetDisplay";
import { useToast } from "@/hooks/use-toast";

const PetCare = () => {
  const { toast } = useToast();
  const [currentPet, setCurrentPet] = useState({
    name: "Olijfje",
    type: "konijn",
    happiness: 85,
    hunger: 60,
    level: 3,
    color: "#95cec0",
    accessories: ""
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(currentPet.name);
  const [newAccessories, setNewAccessories] = useState("");

  const feedPet = () => {
    if (currentPet.hunger > 10) {
      setCurrentPet(prev => ({
        ...prev,
        hunger: Math.max(0, prev.hunger - 20),
        happiness: Math.min(100, prev.happiness + 5)
      }));
      toast({
        title: "Mjam mjam! 🥕",
        description: `${currentPet.name} geniet van het lekkere eten!`,
      });
    } else {
      toast({
        title: `${currentPet.name} is al vol! 😊`,
        description: "Je diertje hoeft nu even niet te eten.",
      });
    }
  };

  const playWithPet = () => {
    if (currentPet.happiness < 95) {
      setCurrentPet(prev => ({
        ...prev,
        happiness: Math.min(100, prev.happiness + 15),
        hunger: Math.min(100, prev.hunger + 5)
      }));
      toast({
        title: "Wat leuk! 🎮",
        description: `${currentPet.name} heeft genoten van het spelletje!`,
      });
    } else {
      toast({
        title: `${currentPet.name} is moe van spelen! 😴`,
        description: "Je diertje heeft even rust nodig.",
      });
    }
  };

  const changeName = () => {
    if (newName.trim() && newName !== currentPet.name) {
      setCurrentPet(prev => ({ ...prev, name: newName.trim() }));
      setIsEditing(false);
      toast({
        title: "Naam gewijzigd! ✨",
        description: `Je diertje heet nu ${newName.trim()}!`,
      });
    } else {
      setIsEditing(false);
    }
  };

  const addAccessories = () => {
    if (newAccessories.trim()) {
      setCurrentPet(prev => ({ 
        ...prev, 
        accessories: prev.accessories 
          ? `${prev.accessories}, ${newAccessories.trim()}`
          : newAccessories.trim()
      }));
      setNewAccessories("");
      toast({
        title: "Accessoires toegevoegd! ✨",
        description: `${currentPet.name} heeft nu ${newAccessories.trim()}!`,
      });
    }
  };

  const clearAccessories = () => {
    setCurrentPet(prev => ({ ...prev, accessories: "" }));
    toast({
      title: "Accessoires weggehaald! 🧹",
      description: `${currentPet.name} is weer helemaal natuurlijk!`,
    });
  };

  const changeColor = (color: string) => {
    setCurrentPet(prev => ({ ...prev, color }));
    toast({
      title: "Nieuwe kleur! 🎨",
      description: `${currentPet.name} ziet er prachtig uit!`,
    });
  };

  const colors = [
    { name: "Mintgroen", color: "#95cec0" },
    { name: "Lavendel", color: "#d2c1dd" },
    { name: "Zonnegeel", color: "#edb742" },
    { name: "Oranje", color: "#ef7538" },
    { name: "Roze", color: "#ffb3d9" },
    { name: "Blauw", color: "#87ceeb" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-purple/20 via-theme-white to-theme-green/20">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="font-heebo-black font-black text-4xl text-theme-dark mb-4">
            Diertje Verzorgen 💝
          </h1>
          <p className="text-lg text-theme-dark/70 max-w-2xl mx-auto">
            Zorg goed voor je diertje en bouw een sterke vriendschap op!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Pet Display */}
          <div className="lg:col-span-1">
            <PetDisplay pet={currentPet} showStats={true} size="large" />
            
            {/* Pet Name Editor */}
            <Card className="mt-4 bg-theme-white">
              <CardHeader className="pb-4">
                <CardTitle className="font-heebo-black text-theme-dark flex items-center">
                  <Edit3 className="w-5 h-5 mr-2" />
                  Naam aanpassen
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-3">
                    <Label htmlFor="petName">Nieuwe naam</Label>
                    <Input
                      id="petName"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="Voer een naam in..."
                      className="border-theme-green/50 focus:border-theme-green"
                    />
                    <div className="flex space-x-2">
                      <Button onClick={changeName} className="bg-theme-green hover:bg-theme-green/80 text-theme-white flex-1">
                        Opslaan
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)} className="flex-1">
                        Annuleren
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button 
                    onClick={() => setIsEditing(true)} 
                    variant="outline" 
                    className="w-full border-theme-green text-theme-green hover:bg-theme-green/10"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Naam wijzigen
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Care Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Care */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-theme-orange/10 border-theme-orange hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-heebo-black text-theme-dark flex items-center">
                    <Utensils className="w-5 h-5 mr-2" />
                    Voeding geven
                  </CardTitle>
                  <CardDescription>
                    Geef je diertje lekker eten om de honger weg te nemen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={feedPet}
                    className="w-full bg-theme-orange hover:bg-theme-orange/80 text-theme-white font-semibold"
                    disabled={currentPet.hunger <= 10}
                  >
                    <Utensils className="w-4 h-4 mr-2" />
                    Voer diertje (🥕 -20 honger)
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-theme-yellow/10 border-theme-yellow hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-heebo-black text-theme-dark flex items-center">
                    <Gamepad2 className="w-5 h-5 mr-2" />
                    Spelen
                  </CardTitle>
                  <CardDescription>
                    Speel leuke spelletjes om je diertje blij te maken
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={playWithPet}
                    className="w-full bg-theme-yellow hover:bg-theme-yellow/80 text-theme-white font-semibold"
                    disabled={currentPet.happiness >= 95}
                  >
                    <Gamepad2 className="w-4 h-4 mr-2" />
                    Speel samen (🎾 +15 geluk)
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Pet Accessories */}
            <Card className="bg-theme-purple/10 border-theme-purple">
              <CardHeader>
                <CardTitle className="font-heebo-black text-theme-dark flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Accessoires toevoegen
                </CardTitle>
                <CardDescription>
                  Voeg leuke accessoires toe aan je diertje (bijv. hoed, wortel, zonnebril)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentPet.accessories && (
                    <div className="p-3 bg-theme-white rounded-lg border border-theme-purple/20">
                      <p className="text-sm text-theme-dark/70 mb-2">Huidige accessoires:</p>
                      <p className="text-theme-dark font-medium">{currentPet.accessories}</p>
                    </div>
                  )}
                  <div className="space-y-3">
                    <Label htmlFor="accessories">Nieuwe accessoires</Label>
                    <Textarea
                      id="accessories"
                      value={newAccessories}
                      onChange={(e) => setNewAccessories(e.target.value)}
                      placeholder="Beschrijf wat je wilt toevoegen (bijv. 'een rode hoed en een wortel')"
                      className="border-theme-purple/50 focus:border-theme-purple"
                      rows={3}
                    />
                    <div className="flex space-x-2">
                      <Button 
                        onClick={addAccessories}
                        className="bg-theme-purple hover:bg-theme-purple/80 text-theme-white flex-1"
                        disabled={!newAccessories.trim()}
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Toevoegen
                      </Button>
                      {currentPet.accessories && (
                        <Button 
                          onClick={clearAccessories}
                          variant="outline"
                          className="border-theme-purple text-theme-purple hover:bg-theme-purple/10"
                        >
                          Wissen
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customization */}
            <Card className="bg-theme-green/10 border-theme-green">
              <CardHeader>
                <CardTitle className="font-heebo-black text-theme-dark flex items-center">
                  <Shirt className="w-5 h-5 mr-2" />
                  Kleuren aanpassen
                </CardTitle>
                <CardDescription>
                  Kies een mooie kleur voor je diertje
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {colors.map((colorOption) => (
                    <button
                      key={colorOption.color}
                      onClick={() => changeColor(colorOption.color)}
                      className={`w-12 h-12 rounded-full border-4 transition-all duration-300 hover:scale-110 ${
                        currentPet.color === colorOption.color 
                          ? 'border-theme-dark shadow-lg' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ backgroundColor: colorOption.color }}
                      title={colorOption.name}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-theme-yellow/10 border-theme-yellow">
              <CardHeader>
                <CardTitle className="font-heebo-black text-theme-dark flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Verzorgingstips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-theme-dark/80">
                  <li className="flex items-start">
                    <span className="text-theme-green mr-2">🌟</span>
                    Lees nieuwsartikelen om je diertje te laten groeien
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-orange mr-2">🥕</span>
                    Voer je diertje regelmatig om het gelukkig te houden
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-yellow mr-2">🎮</span>
                    Speel spelletjes voor extra bonding tijd
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-purple mr-2">✨</span>
                    Voeg accessoires toe om je diertje uniek te maken
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCare;
