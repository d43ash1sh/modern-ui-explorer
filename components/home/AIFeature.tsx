"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { fadeIn, slideIn } from "@/lib/framer-animations";

const AIFeature = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  const handleGenerate = () => {
    if (!prompt) return;
    setIsGenerating(true);
    
    // Mock AI generation - in a real app, this would call an API
    setTimeout(() => {
      setGeneratedCode(`<div className="flex items-center justify-between p-4 bg-card rounded-lg shadow-sm">
  <div className="flex items-center space-x-3">
    <div className="rounded-full bg-primary/10 p-2">
      <User className="h-5 w-5 text-primary" />
    </div>
    <div>
      <h3 className="font-medium">User Profile Card</h3>
      <p className="text-sm text-muted-foreground">Display user information</p>
    </div>
  </div>
  <Button variant="outline" size="sm">View Profile</Button>
</div>`);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-white/10" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container relative"
      >
        <motion.div
          variants={fadeIn("up", 0.2)}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Bot className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            AI-Powered Component Generation
          </h2>
          <p className="text-lg text-muted-foreground">
            Describe the component you need, and our AI will generate a custom component for you in seconds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div variants={slideIn("left", "spring", 0.3, 0.75)}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Describe Your Component</h3>
                <Textarea
                  placeholder="E.g., Create a user profile card with avatar, name, description, and a view profile button"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-32 mb-4"
                />
                <Button 
                  onClick={handleGenerate} 
                  disabled={!prompt || isGenerating}
                  className="w-full"
                >
                  {isGenerating ? (
                    <>Generating<span className="loading">...</span></>
                  ) : (
                    <>Generate Component <Wand2 className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={slideIn("right", "spring", 0.3, 0.75)}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Generated Component</h3>
                {generatedCode ? (
                  <div className="rounded-md bg-muted/50 p-4 overflow-auto">
                    <pre className="text-sm text-left">
                      <code>{generatedCode}</code>
                    </pre>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-32 border border-dashed rounded-lg">
                    <p className="text-muted-foreground">
                      Describe a component to generate code
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AIFeature;