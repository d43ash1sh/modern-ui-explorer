"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Copy, Loader2, TerminalSquare, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";
import Footer from "@/components/layout/Footer";

export default function AIGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [activeTab, setActiveTab] = useState("code");
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!prompt) return;
    
    setGenerating(true);
    
    // Mock AI generation - in a real app, this would call the Gemini API
    setTimeout(() => {
      // Mock response based on the prompt
      const mockResponses: Record<string, string> = {
        button: `<Button variant="default" className="flex items-center gap-2">
  <Download className="h-4 w-4" />
  Download Report
</Button>`,
        card: `<Card className="max-w-md">
  <CardHeader>
    <CardTitle>User Analytics</CardTitle>
    <CardDescription>View your site visitor statistics</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Visitors today</span>
        <span className="font-bold">1,245</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div className="bg-primary h-full w-3/4" />
      </div>
    </div>
  </CardContent>
</Card>`,
        navbar: `<nav className="flex items-center justify-between px-6 py-4 border-b">
  <div className="flex items-center gap-6">
    <h1 className="text-xl font-bold">Brand</h1>
    <div className="hidden md:flex items-center gap-4">
      <a href="#" className="text-sm font-medium hover:text-primary">Home</a>
      <a href="#" className="text-sm font-medium hover:text-primary">Features</a>
      <a href="#" className="text-sm font-medium hover:text-primary">Pricing</a>
      <a href="#" className="text-sm font-medium hover:text-primary">About</a>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <Button variant="ghost" size="sm">Login</Button>
    <Button size="sm">Sign Up</Button>
  </div>
</nav>`,
        default: `<div className="p-4 border rounded-lg shadow-sm">
  <h3 className="text-lg font-medium mb-2">Custom Component</h3>
  <p className="text-muted-foreground">This is a custom component generated based on your prompt.</p>
  <div className="mt-4">
    <Button variant="default">Click Me</Button>
  </div>
</div>`
      };
      
      // Check if the prompt contains keywords to determine which response to use
      const promptLower = prompt.toLowerCase();
      let responseKey = "default";
      
      if (promptLower.includes("button")) responseKey = "button";
      else if (promptLower.includes("card")) responseKey = "card";
      else if (promptLower.includes("navbar") || promptLower.includes("navigation")) responseKey = "navbar";
      
      setGeneratedCode(mockResponses[responseKey]);
      setGenerating(false);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container py-16 md:py-24"
      >
        <motion.div
          variants={fadeIn("up", 0.2)}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
            AI Component Generator
          </h1>
          <p className="text-lg text-muted-foreground">
            Describe the component you need, and let our AI create it for you. 
            Powered by advanced machine learning to save you time.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          className="max-w-4xl mx-auto"
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Describe Your Component</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="E.g., Create a button with a download icon and text that says 'Download Report'"
                className="min-h-32 mb-4"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <Button 
                onClick={handleGenerate} 
                disabled={!prompt || generating}
                className="w-full"
              >
                {generating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    Generate Component <Wand2 className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {generatedCode && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Generated Component</CardTitle>
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                      <TabsList>
                        <TabsTrigger value="code">
                          <TerminalSquare className="h-4 w-4 mr-2" />
                          Code
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </CardHeader>
                <CardContent>
                  <TabsContent value="code" className="m-0">
                    <div className="relative">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-2 right-2"
                        onClick={copyToClipboard}
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy code</span>
                      </Button>
                      <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                        <code className="text-sm">{generatedCode}</code>
                      </pre>
                    </div>
                  </TabsContent>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}