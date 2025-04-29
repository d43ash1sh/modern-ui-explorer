"use client";

import { motion } from "framer-motion";
import { Paintbrush, Code, Zap, Sparkles, Library, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";

const features = [
  {
    icon: <Library className="h-10 w-10 text-primary" />,
    title: "Extensive Component Library",
    description: "Access hundreds of pre-built, customizable UI components across multiple design libraries.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Copy & Paste Code",
    description: "Get working code snippets for each component that you can copy and use in your projects right away.",
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: "Themeable Design System",
    description: "Customize the appearance of components to match your brand with our flexible theming system.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "High Performance",
    description: "Optimized components that load fast and run smoothly, even on mobile devices.",
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "AI Component Generation",
    description: "Generate custom components using our AI-powered tool - just describe what you need.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: "Interactive Examples",
    description: "See components in action with interactive examples and demos that showcase their capabilities.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container"
      >
        <motion.div
          variants={fadeIn("up", 0.2)}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything You Need to Build Modern UIs
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive UI component library helps you build beautiful, responsive interfaces faster than ever.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1 * (index + 1))}
            >
              <Card className="h-full border bg-background/60 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Feature-specific content could go here */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;