
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
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

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const newsStory = "Hallo! Ik ben Olijfje en ik heb een interessant verhaal voor je. Wist je dat konijnen in de winter een extra dikke vacht krijgen om warm te blijven? Hun vacht wordt wel 25% dikker! Ook graven ze diepe holen in de grond waar het warmer is dan buiten.";

  const quizQuestions = [
    {
      question: "Hoeveel dikker wordt de vacht van konijnen in de winter?",
      answers: ["15%", "25%", "35%", "45%"],
      correct: 1
    },
    {
      question: "Waarom graven konijnen holen in de winter?",
      answers: ["Om voedsel te verstoppen", "Om warm te blijven", "Om te spelen", "Om andere dieren te verstoppen"],
      correct: 1
    },
    {
      question: "Wat gebeurt er met konijnenvacht in de winter?",
      answers: ["Wordt dunner", "Valt uit", "Wordt dikker", "Verandert van kleur"],
      correct: 2
    }
  ];

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      // Quiz completed
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-purple/20 via-theme-white to-theme-green/20 pb-20">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Left Side - Pet with News */}
          <div className="space-y-6">
            {/* News Story */}
            <Card className="bg-theme-white/90 border-2 border-theme-yellow">
              <CardContent className="p-6">
                <p className="text-theme-dark text-lg leading-relaxed">
                  {newsStory}
                </p>
              </CardContent>
            </Card>

            {/* Pet Display */}
            <div className="flex justify-center">
              <PetDisplay pet={currentPet} showStats={false} />
            </div>

            {/* Progress */}
            <Card className="bg-theme-white/80 border-2 border-theme-green">
              <CardHeader className="pb-4">
                <CardTitle className="font-heebo-black text-center text-theme-dark text-lg">
                  Voortgang deze week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-theme-dark font-semibold">Verhalen gelezen</span>
                  <span className="text-theme-dark font-bold">3/5</span>
                </div>
                <div className="w-full bg-theme-purple/20 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-theme-yellow to-theme-orange h-4 rounded-full transition-all duration-500" 
                    style={{ width: '60%' }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Quiz */}
          <div className="space-y-6">
            <Card className="bg-theme-white/90 border-2 border-theme-purple">
              <CardHeader>
                <CardTitle className="font-heebo-black text-theme-dark text-xl">
                  Quiz Vraag {currentQuestionIndex + 1}/{quizQuestions.length}
                </CardTitle>
                <CardDescription className="text-lg">
                  {currentQuestion.question}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentQuestion.answers.map((answer, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`w-full text-left justify-start p-4 h-auto text-wrap ${
                      selectedAnswer === index 
                        ? index === currentQuestion.correct
                          ? 'bg-theme-green text-theme-white border-theme-green'
                          : 'bg-red-500 text-white border-red-500'
                        : selectedAnswer !== null && index === currentQuestion.correct
                          ? 'bg-theme-green text-theme-white border-theme-green'
                          : 'hover:bg-theme-yellow/20'
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="text-base">{answer}</span>
                  </Button>
                ))}
                
                {selectedAnswer !== null && (
                  <div className="pt-4">
                    <Button 
                      onClick={handleNextQuestion}
                      className="w-full bg-theme-orange hover:bg-theme-orange/80 text-theme-white"
                    >
                      {currentQuestionIndex < quizQuestions.length - 1 ? 'Volgende Vraag' : 'Quiz Opnieuw'}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {selectedAnswer !== null && (
              <Card className="bg-theme-yellow/20 border-theme-yellow">
                <CardContent className="p-4">
                  <p className="text-theme-dark text-sm">
                    {selectedAnswer === currentQuestion.correct 
                      ? "🎉 Goed gedaan! Je antwoord is correct." 
                      : "❌ Helaas, dat is niet het juiste antwoord. Probeer het nog eens!"}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
};

export default Index;
