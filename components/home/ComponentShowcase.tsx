"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";
import { componentCategories } from "@/lib/component-data";

// Mock component previews for the showcase
const componentPreviews = [
  {
    category: "buttons",
    components: [
      {
        name: "Primary Button",
        element: <Button variant="default">Button</Button>,
      },
      {
        name: "Secondary Button",
        element: <Button variant="secondary">Button</Button>,
      },
      {
        name: "Outline Button",
        element: <Button variant="outline">Button</Button>,
      },
      {
        name: "Ghost Button",
        element: <Button variant="ghost">Button</Button>,
      },
    ],
  },
  {
    category: "cards",
    components: [
      {
        name: "Simple Card",
        element: (
          <Card className="w-full max-w-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium">Card Title</h3>
              <p className="text-muted-foreground mt-2">This is a simple card component.</p>
            </CardContent>
          </Card>
        ),
      },
    ],
  },
  {
    category: "forms",
    components: [
      {
        name: "Input",
        element: (
          <div className="w-full max-w-sm">
            <label className="text-sm font-medium mb-2 block">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            />
          </div>
        ),
      },
    ],
  },
];

const ComponentShowcase = () => {
  const [activeTab, setActiveTab] = useState("buttons");
  
  const filteredPreviews = componentPreviews.find(item => item.category === activeTab)?.components || [];

  return (
    <section className="py-24">
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
            Explore Our Component Library
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse through our collection of beautifully designed components for your next project.
          </p>
        </motion.div>

        <Tabs defaultValue="buttons" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 gap-2">
            {componentCategories.slice(0, 6).map((category) => (
              <TabsTrigger 
                key={category.slug} 
                value={category.slug}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPreviews.map((component, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", 0.1 * (index + 1))}
                  className="flex flex-col items-center"
                >
                  <Card className="w-full h-32 flex items-center justify-center border bg-card/50">
                    <CardContent className="p-6 flex items-center justify-center">
                      {component.element}
                    </CardContent>
                  </Card>
                  <p className="text-sm mt-2">{component.name}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeIn("up", 0.4)}
              className="flex justify-center mt-12"
            >
              <Button asChild variant="outline">
                <Link href="/components">
                  View All Components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
};

export default ComponentShowcase;