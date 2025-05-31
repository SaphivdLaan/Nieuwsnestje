
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Key } from "lucide-react";

interface ApiKeyInputProps {
  onApiKeySubmit: (apiKey: string) => void;
}

const ApiKeyInput = ({ onApiKeySubmit }: ApiKeyInputProps) => {
  const [apiKey, setApiKey] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onApiKeySubmit(apiKey.trim());
    }
  };

  return (
    <Card className="max-w-md mx-auto bg-theme-yellow/10 border-theme-yellow">
      <CardHeader className="text-center">
        <CardTitle className="font-heebo-black text-theme-dark flex items-center justify-center">
          <Key className="w-5 h-5 mr-2" />
          AI Afbeeldingen Activeren
        </CardTitle>
        <CardDescription>
          Voer je Runware API key in om AI-gegenereerde diertjes te gebruiken
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="Voer je Runware API key in..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="border-theme-yellow/50 focus:border-theme-yellow"
          />
          <Button 
            type="submit" 
            className="w-full bg-theme-yellow hover:bg-theme-yellow/80 text-theme-white"
            disabled={!apiKey.trim()}
          >
            Activeer AI Afbeeldingen
          </Button>
        </form>
        <p className="text-xs text-theme-dark/60 mt-2 text-center">
          Ga naar <a href="https://runware.ai/" target="_blank" rel="noopener noreferrer" className="text-theme-yellow hover:underline">runware.ai</a> om een gratis API key aan te maken
        </p>
      </CardContent>
    </Card>
  );
};

export default ApiKeyInput;
