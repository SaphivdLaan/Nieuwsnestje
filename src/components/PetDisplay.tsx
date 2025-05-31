
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Utensils } from "lucide-react";
import { RunwareService } from "@/services/RunwareService";
import ApiKeyInput from "./ApiKeyInput";

interface Pet {
  name: string;
  type: string;
  happiness: number;
  hunger: number;
  level: number;
  color: string;
}

interface PetDisplayProps {
  pet: Pet;
  showStats?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const PetDisplay = ({ pet, showStats = false, size = 'medium' }: PetDisplayProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [petImage, setPetImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [runwareService, setRunwareService] = useState<RunwareService | null>(null);

  const handlePetClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-32 h-32',
    large: 'w-48 h-48'
  };

  const getEmoji = (type: string) => {
    const emojis: { [key: string]: string } = {
      konijn: '🐰',
      kat: '🐱',
      hond: '🐶',
      hamster: '🐹',
      vogel: '🐦',
      vis: '🐠',
      schildpad: '🐢'
    };
    return emojis[type] || '🐾';
  };

  const generatePetPrompt = (type: string, color: string) => {
    const prompts: { [key: string]: string } = {
      konijn: "cute fluffy baby bunny rabbit, adorable kawaii style, soft fur, big round eyes, sitting pose, pastel colors, studio lighting, white background, high quality, detailed",
      kat: "adorable baby kitten, fluffy fur, big round eyes, kawaii style, cute sitting pose, soft lighting, white background, high quality, detailed",
      hond: "cute puppy dog, fluffy soft fur, big round eyes, adorable kawaii style, sitting pose, pastel colors, white background, high quality, detailed",
      hamster: "cute baby hamster, fluffy fur, tiny paws, big round eyes, kawaii style, sitting pose, white background, high quality, detailed",
      vogel: "cute baby bird, fluffy feathers, big round eyes, adorable kawaii style, perched pose, pastel colors, white background, high quality, detailed",
      vis: "cute cartoon fish, big round eyes, adorable kawaii style, colorful scales, swimming pose, white background, high quality, detailed",
      schildpad: "cute baby turtle, adorable shell, big round eyes, kawaii style, sitting pose, pastel colors, white background, high quality, detailed"
    };
    return prompts[type] || "cute adorable baby animal, kawaii style, big round eyes, soft fur, white background, high quality, detailed";
  };

  const generatePetImage = async () => {
    if (!runwareService) return;
    
    setIsGenerating(true);
    try {
      const prompt = generatePetPrompt(pet.type, pet.color);
      const result = await runwareService.generateImage({
        positivePrompt: prompt,
        model: "runware:100@1",
        numberResults: 1,
        outputFormat: "WEBP",
        CFGScale: 1,
        width: 512,
        height: 512
      });
      
      setPetImage(result.imageURL);
    } catch (error) {
      console.error("Error generating pet image:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleApiKeySubmit = (key: string) => {
    setApiKey(key);
    const service = new RunwareService(key);
    setRunwareService(service);
  };

  useEffect(() => {
    if (runwareService && !petImage && !isGenerating) {
      generatePetImage();
    }
  }, [runwareService, petImage, pet.type, pet.color]);

  if (!apiKey) {
    return <ApiKeyInput onApiKeySubmit={handleApiKeySubmit} />;
  }

  return (
    <Card className="bg-theme-white border-2 border-theme-green/50 hover:border-theme-green transition-all duration-300">
      <CardContent className="p-6 text-center">
        {/* Pet Avatar */}
        <div 
          className={`${sizeClasses[size]} mx-auto mb-4 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden ${
            isAnimating ? 'animate-grow' : 'hover:scale-110'
          }`}
          style={{ backgroundColor: pet.color }}
          onClick={handlePetClick}
        >
          {isGenerating ? (
            <div className="text-2xl animate-pulse">⏳</div>
          ) : petImage ? (
            <img 
              src={petImage} 
              alt={`${pet.name} de ${pet.type}`}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className="text-4xl" style={{ fontSize: size === 'large' ? '4rem' : size === 'medium' ? '2rem' : '1rem' }}>
              {getEmoji(pet.type)}
            </span>
          )}
        </div>

        {/* Pet Name and Level */}
        <h3 className="font-heebo-black font-bold text-xl text-theme-dark mb-2">
          {pet.name}
        </h3>
        <p className="text-theme-dark/70 mb-4">Level {pet.level}</p>

        {/* Stats */}
        {showStats && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-sm text-theme-dark">Geluk</span>
              </div>
              <div className="flex-1 mx-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-red-400 to-red-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${pet.happiness}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-sm font-semibold text-theme-dark">{pet.happiness}%</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Utensils className="w-4 h-4 text-theme-orange" />
                <span className="text-sm text-theme-dark">Honger</span>
              </div>
              <div className="flex-1 mx-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-theme-orange to-theme-yellow h-2 rounded-full transition-all duration-500"
                    style={{ width: `${100 - pet.hunger}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-sm font-semibold text-theme-dark">{100 - pet.hunger}%</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PetDisplay;
