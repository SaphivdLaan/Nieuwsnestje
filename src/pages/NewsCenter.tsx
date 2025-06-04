
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import PetDisplay from "@/components/PetDisplay";
import { useToast } from "@/hooks/use-toast";

const NewsCenter = () => {
  const { toast } = useToast();
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const currentPet = {
    name: "Olijfje",
    type: "konijn",
    happiness: 85,
    hunger: 60,
    level: 3,
    color: "#95cec0"
  };

  const newsStory = `Hallo! Ik ben Olijfje en ik heb een spannend verhaal voor je! 🐰

  Vandaag ontdekte ik iets heel interessants over ijsberen. Wist je dat ijsberen eigenlijk niet wit zijn? Hun vacht is doorzichtig! Elke haar is hol van binnen, net als een klein buisje. Dit helpt hen om warm te blijven in de ijskoude Arctis.

  Maar er is meer! Ijsberen hebben ook een zwarte huid onder hun vacht. Dit helpt hen om de warmte van de zon beter op te nemen. Hun neus, pootjes en tong zijn ook zwart!

  En het allerleukste? Baby ijsberen zijn zo klein als een hamster wanneer ze geboren worden. Hun mama zorgt heel goed voor hen in een sneeuwgrot tot ze groot genoeg zijn om naar buiten te gaan.`;

  const quizQuestions = [
    {
      id: 1,
      question: "Welke kleur hebben de haren van ijsberen echt?",
      options: ["Wit", "Doorzichtig", "Zwart", "Geel"],
      correct: "Doorzichtig"
    },
    {
      id: 2,
      question: "Waarom hebben ijsberen een zwarte huid?",
      options: [
        "Om er eng uit te zien",
        "Om warmte van de zon op te nemen", 
        "Om zich te verstoppen",
        "Dat is toeval"
      ],
      correct: "Om warmte van de zon op te nemen"
    },
    {
      id: 3,
      question: "Hoe groot zijn baby ijsberen bij de geboorte?",
      options: [
        "Zo groot als een hond",
        "Zo groot als een kat", 
        "Zo groot als een hamster",
        "Zo groot als een konijn"
      ],
      correct: "Zo groot als een hamster"
    },
    {
      id: 4,
      question: "Waar zorgt mama ijsbeer voor haar baby's?",
      options: [
        "In een boom",
        "In een sneeuwgrot",
        "Op het ijs",
        "In het water"
      ],
      correct: "In een sneeuwgrot"
    }
  ];

  const handleAnswerChange = (questionId: number, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmitQuiz = () => {
    const correctAnswers = quizQuestions.filter(q => 
      selectedAnswers[q.id] === q.correct
    ).length;
    
    setShowResults(true);
    
    toast({
      title: `Quiz voltooid! 🎉`,
      description: `Je hebt ${correctAnswers} van de ${quizQuestions.length} vragen goed beantwoord!`,
    });
  };

  const allQuestionsAnswered = quizQuestions.every(q => selectedAnswers[q.id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-purple/20 via-theme-white to-theme-green/20 pb-20">
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="font-heebo-black font-black text-4xl text-theme-dark mb-4">
            Nieuws van Olijfje 📰
          </h1>
        </div>

        {/* News Story */}
        <Card className="max-w-4xl mx-auto mb-8 bg-theme-white/90">
          <CardContent className="p-8">
            <div className="text-lg text-theme-dark leading-relaxed whitespace-pre-line mb-8">
              {newsStory}
            </div>
            
            {/* Pet Display */}
            <div className="max-w-md mx-auto">
              <PetDisplay pet={currentPet} showStats={false} />
            </div>
          </CardContent>
        </Card>

        {/* Quiz Section */}
        <Card className="max-w-4xl mx-auto bg-theme-white/90">
          <CardHeader>
            <CardTitle className="font-heebo-black text-2xl text-theme-dark text-center">
              Test je kennis! 🧠
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-8">
              {quizQuestions.map((question) => (
                <div key={question.id} className="space-y-4">
                  <h3 className="font-bold text-lg text-theme-dark">
                    {question.id}. {question.question}
                  </h3>
                  
                  <RadioGroup
                    value={selectedAnswers[question.id] || ""}
                    onValueChange={(value) => handleAnswerChange(question.id, value)}
                  >
                    {question.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={option} 
                          id={`q${question.id}-${index}`}
                          className={showResults ? (
                            option === question.correct 
                              ? "border-green-500 text-green-500" 
                              : selectedAnswers[question.id] === option && option !== question.correct
                                ? "border-red-500 text-red-500"
                                : ""
                          ) : ""}
                        />
                        <Label 
                          htmlFor={`q${question.id}-${index}`}
                          className={`cursor-pointer ${showResults ? (
                            option === question.correct 
                              ? "text-green-600 font-semibold" 
                              : selectedAnswers[question.id] === option && option !== question.correct
                                ? "text-red-600"
                                : "text-theme-dark"
                          ) : "text-theme-dark"}`}
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}
              
              {!showResults && (
                <Button
                  onClick={handleSubmitQuiz}
                  disabled={!allQuestionsAnswered}
                  className="w-full bg-theme-green hover:bg-theme-green/80 text-theme-white font-semibold text-lg py-3"
                >
                  Controleer Antwoorden
                </Button>
              )}
              
              {showResults && (
                <div className="text-center p-6 bg-theme-green/10 rounded-lg">
                  <p className="text-lg text-theme-dark">
                    Goed gedaan! 🎉 Olijfje is trots op je!
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Navigation />
    </div>
  );
};

export default NewsCenter;
