
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import PetDisplay from "@/components/PetDisplay";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

const NewsCenter = () => {
  const { toast } = useToast();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

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

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerChange = (answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
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

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const correctAnswers = quizQuestions.filter(q => 
      selectedAnswers[q.id] === q.correct
    ).length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 pb-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="font-heebo-black font-black text-4xl text-theme-dark mb-4">
              Quiz Resultaten! 🎉
            </h1>
          </div>

          <Card className="max-w-2xl mx-auto bg-white shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">
                {correctAnswers === quizQuestions.length ? "🏆" : correctAnswers >= quizQuestions.length / 2 ? "👏" : "💪"}
              </div>
              <h2 className="text-3xl font-bold text-theme-dark mb-4">
                {correctAnswers} van {quizQuestions.length} correct!
              </h2>
              <p className="text-lg text-theme-dark/70 mb-8">
                {correctAnswers === quizQuestions.length 
                  ? "Perfect! Olijfje is super trots op je!" 
                  : correctAnswers >= quizQuestions.length / 2 
                    ? "Goed gedaan! Je weet veel over ijsberen!" 
                    : "Niet erg! Je hebt veel geleerd vandaag!"}
              </p>
              
              <div className="max-w-md mx-auto mb-8">
                <PetDisplay pet={currentPet} showStats={false} />
              </div>

              <Button
                onClick={resetQuiz}
                className="bg-theme-green hover:bg-theme-green/80 text-white font-semibold text-lg px-8 py-3"
              >
                Opnieuw Proberen
              </Button>
            </CardContent>
          </Card>
        </div>
        <Navigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 pb-20">
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="font-heebo-black font-black text-4xl text-theme-dark mb-4">
            Nieuws van Olijfje 📰
          </h1>
        </div>

        {!quizStarted ? (
          <>
            {/* News Story */}
            <Card className="max-w-4xl mx-auto mb-8 bg-white shadow-lg">
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

            {/* Start Quiz Button */}
            <div className="text-center">
              <Button
                onClick={startQuiz}
                className="bg-theme-green hover:bg-theme-green/80 text-white font-semibold text-xl px-12 py-4"
              >
                Start de Quiz! 🧠
              </Button>
            </div>
          </>
        ) : (
          /* Quiz Question */
          <Card className="max-w-2xl mx-auto bg-white shadow-lg">
            <CardHeader className="bg-theme-green/10">
              <div className="flex items-center justify-between">
                <div className="text-sm text-theme-dark/60">
                  Vraag {currentQuestionIndex + 1} van {quizQuestions.length}
                </div>
                <div className="flex space-x-1">
                  {quizQuestions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentQuestionIndex 
                          ? 'bg-theme-green' 
                          : index < currentQuestionIndex
                            ? 'bg-theme-green/50'
                            : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <CardTitle className="font-heebo-black text-2xl text-theme-dark">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <RadioGroup
                value={selectedAnswers[currentQuestion.id] || ""}
                onValueChange={handleAnswerChange}
                className="space-y-4"
              >
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-100 hover:border-theme-green/30 hover:bg-theme-green/5 transition-all">
                    <RadioGroupItem 
                      value={option} 
                      id={`option-${index}`}
                      className="border-2"
                    />
                    <Label 
                      htmlFor={`option-${index}`}
                      className="cursor-pointer text-lg text-theme-dark font-medium flex-1"
                    >
                      {option}
                    </Label>
                    {selectedAnswers[currentQuestion.id] === option && (
                      <CheckCircle className="w-5 h-5 text-theme-green" />
                    )}
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between items-center mt-8">
                <Button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Vorige</span>
                </Button>

                <Button
                  onClick={handleNextQuestion}
                  disabled={!selectedAnswers[currentQuestion.id]}
                  className="bg-theme-green hover:bg-theme-green/80 text-white flex items-center space-x-2"
                >
                  <span>
                    {currentQuestionIndex === quizQuestions.length - 1 ? 'Resultaten' : 'Volgende'}
                  </span>
                  {currentQuestionIndex < quizQuestions.length - 1 && (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Navigation />
    </div>
  );
};

export default NewsCenter;
