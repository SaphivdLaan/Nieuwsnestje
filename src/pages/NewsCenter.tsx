
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Trophy, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const NewsCenter = () => {
  const { toast } = useToast();
  const [readArticles, setReadArticles] = useState<number[]>([]);

  const newsArticles = [
    {
      id: 1,
      title: "Ijsberen bereiden zich voor op de winter",
      description: "Ontdek hoe ijsberen hun dikke vacht krijgen voor de koude maanden.",
      readTime: "3 min",
      reward: "+10 XP",
      category: "Dieren in de Winter",
      difficulty: "Makkelijk",
      isCompleted: true,
      image: "🐻‍❄️"
    },
    {
      id: 2,
      title: "Waarom trekken vogels naar het zuiden?",
      description: "Een fascinerende reis door de wereld van trekvogels en hun lange reizen.",
      readTime: "4 min",
      reward: "+15 XP",
      category: "Dieren in de Winter",
      difficulty: "Gemiddeld",
      isCompleted: true,
      image: "🦅"
    },
    {
      id: 3,
      title: "Hoe houden eekhoorns hun noten warm?",
      description: "De slimme trucjes van eekhoorns om de winter door te komen.",
      readTime: "2 min",
      reward: "+8 XP",
      category: "Dieren in de Winter",
      difficulty: "Makkelijk",
      isCompleted: true,
      image: "🐿️"
    },
    {
      id: 4,
      title: "Winterslapen: Welke dieren doen het?",
      description: "Van beren tot egels - ontdek welke dieren de hele winter slapen.",
      readTime: "5 min",
      reward: "+20 XP",
      category: "Dieren in de Winter",
      difficulty: "Moeilijk",
      isCompleted: false,
      image: "🦔"
    },
    {
      id: 5,
      title: "Pinguïns: Experts in koude overleving",
      description: "Leer over de bijzondere aanpassingen van pinguïns voor het extreme koude.",
      readTime: "4 min",
      reward: "+15 XP",
      category: "Dieren in de Winter",
      difficulty: "Gemiddeld",
      isCompleted: false,
      image: "🐧"
    }
  ];

  const handleReadArticle = (articleId: number) => {
    if (!readArticles.includes(articleId)) {
      setReadArticles([...readArticles, articleId]);
      toast({
        title: "Artikel voltooid! 🎉",
        description: "Je diertje is blij met je nieuwe kennis!",
      });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Makkelijk": return "bg-theme-green text-theme-white";
      case "Gemiddeld": return "bg-theme-yellow text-theme-white";
      case "Moeilijk": return "bg-theme-orange text-theme-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-purple/20 via-theme-white to-theme-green/20">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="font-heebo-black font-black text-4xl text-theme-dark mb-4">
            Nieuws Centrum 📰
          </h1>
          <p className="text-lg text-theme-dark/70 max-w-2xl mx-auto">
            Lees interessante verhalen en help je diertje groeien door vragen te beantwoorden!
          </p>
        </div>

        {/* Week Theme */}
        <Card className="max-w-2xl mx-auto mb-8 bg-gradient-to-r from-theme-yellow/20 to-theme-orange/20 border-2 border-theme-yellow">
          <CardHeader className="text-center">
            <CardTitle className="font-heebo-black text-2xl text-theme-dark">
              Deze Week: Dieren in de Winter ❄️
            </CardTitle>
            <CardDescription>
              Ontdek hoe dieren zich aanpassen aan de koude seizoenen
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-theme-dark">3</div>
                <div className="text-sm text-theme-dark/70">Voltooid</div>
              </div>
              <div className="text-4xl">🏆</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-theme-dark">2</div>
                <div className="text-sm text-theme-dark/70">Te gaan</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* News Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <Card 
              key={article.id}
              className={`hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                article.isCompleted 
                  ? 'bg-theme-green/10 border-theme-green' 
                  : 'bg-theme-white border-gray-200'
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="text-4xl">{article.image}</div>
                  {article.isCompleted && (
                    <Badge className="bg-theme-green text-theme-white">
                      <Trophy className="w-3 h-3 mr-1" />
                      Voltooid
                    </Badge>
                  )}
                </div>
                <CardTitle className="font-heebo-black text-lg text-theme-dark">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-theme-dark/70">
                  {article.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </Badge>
                  <Badge className={getDifficultyColor(article.difficulty)}>
                    {article.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-theme-orange border-theme-orange">
                    {article.reward}
                  </Badge>
                </div>
                
                <Button 
                  className={`w-full ${
                    article.isCompleted 
                      ? 'bg-theme-green hover:bg-theme-green/80' 
                      : 'bg-theme-yellow hover:bg-theme-yellow/80'
                  } text-theme-white font-semibold`}
                  onClick={() => handleReadArticle(article.id)}
                  disabled={readArticles.includes(article.id)}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  {article.isCompleted ? 'Bekijk opnieuw' : 'Start lezen'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Summary */}
        <Card className="max-w-md mx-auto mt-8 bg-theme-white/80">
          <CardHeader className="text-center">
            <CardTitle className="font-heebo-black text-theme-dark">
              Jouw Voortgang
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-theme-dark">Deze week gelezen:</span>
                <span className="font-bold text-theme-dark">3/5</span>
              </div>
              <div className="w-full bg-theme-purple/20 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-theme-yellow to-theme-orange h-3 rounded-full transition-all duration-500" 
                  style={{ width: '60%' }}
                ></div>
              </div>
              <p className="text-center text-sm text-theme-dark/70">
                Nog 2 artikelen en je diertje wordt level 4! 🎯
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewsCenter;
