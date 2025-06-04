
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import PetDisplay from "@/components/PetDisplay";

const Index = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-theme-yellow/30 via-theme-green/20 to-theme-purple/30 pb-20">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Side - Pet with News */}
          <div className="space-y-8">
            {/* News Story */}
            <div className="bg-gradient-to-r from-theme-yellow to-theme-orange p-8 rounded-3xl shadow-2xl border-4 border-theme-white">
              <h2 className="font-heebo-black text-2xl text-theme-white mb-4 text-center">
                📰 Nieuws van {currentPet.name}
              </h2>
              <p className="text-theme-white text-lg leading-relaxed font-medium">
                {newsStory}
              </p>
            </div>

            {/* Pet Display */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-theme-green to-theme-purple p-8 rounded-full shadow-2xl border-4 border-theme-yellow">
                <PetDisplay pet={currentPet} showStats={false} />
              </div>
            </div>
          </div>

          {/* Right Side - Quiz */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-theme-purple to-theme-green p-8 rounded-3xl shadow-2xl border-4 border-theme-orange">
              <div className="mb-6">
                <h2 className="font-heebo-black text-theme-white text-2xl mb-2">
                  🧠 Quiz Vraag {currentQuestionIndex + 1}/{quizQuestions.length}
                </h2>
                <p className="text-theme-white text-xl font-medium">
                  {currentQuestion.question}
                </p>
              </div>
              
              <div className="space-y-4">
                {currentQuestion.answers.map((answer, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`w-full text-left justify-start p-6 h-auto text-wrap text-lg font-medium rounded-2xl border-3 transition-all duration-300 ${
                      selectedAnswer === index 
                        ? index === currentQuestion.correct
                          ? 'bg-theme-green text-theme-white border-theme-white shadow-lg scale-105'
                          : 'bg-red-500 text-white border-theme-white shadow-lg scale-105'
                        : selectedAnswer !== null && index === currentQuestion.correct
                          ? 'bg-theme-green text-theme-white border-theme-white shadow-lg scale-105'
                          : 'bg-theme-white text-theme-dark border-theme-yellow hover:bg-theme-yellow hover:scale-105 shadow-md'
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="text-base font-semibold">{answer}</span>
                  </Button>
                ))}
                
                {selectedAnswer !== null && (
                  <div className="pt-6">
                    <Button 
                      onClick={handleNextQuestion}
                      className="w-full bg-gradient-to-r from-theme-orange to-theme-yellow hover:from-theme-yellow hover:to-theme-orange text-theme-white font-bold text-lg py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      {currentQuestionIndex < quizQuestions.length - 1 ? '🚀 Volgende Vraag' : '🔄 Quiz Opnieuw'}
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {selectedAnswer !== null && (
              <div className="bg-gradient-to-r from-theme-yellow to-theme-orange p-6 rounded-2xl shadow-lg border-4 border-theme-white">
                <p className="text-theme-white text-lg font-bold text-center">
                  {selectedAnswer === currentQuestion.correct 
                    ? "🎉 Fantastisch! Je antwoord is helemaal goed!" 
                    : "❌ Oeps! Dat is niet juist. Probeer het nog eens!"}
                </p>
              </div>
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
