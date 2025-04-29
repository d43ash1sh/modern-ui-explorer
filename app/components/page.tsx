"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";
import Link from "next/link";
import { componentCategories } from "@/lib/component-data";
import Footer from "@/components/layout/Footer";

export default function ComponentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories = activeTab === "all" 
    ? componentCategories 
    : componentCategories.filter(category => category.slug === activeTab);

  return (
    <div className="min-h-screen">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container py-16 md:py-24 md:pl-72"
      >
        <motion.div
          variants={fadeIn("up", 0.2)}
          className="max-w-3xl mb-10"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
            Components
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse our collection of beautiful, reusable components built with React, Tailwind CSS, and love.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          className="mb-8"
        >
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search components..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Components</TabsTrigger>
            {componentCategories.slice(0, 5).map((category) => (
              <TabsTrigger key={category.slug} value={category.slug}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="space-y-12">
            {filteredCategories.map((category, index) => (
              <motion.section
                key={category.slug}
                variants={fadeIn("up", 0.1 * (index + 1))}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.components
                    .filter(component => 
                      component.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((component, idx) => (
                      <Link 
                        key={component.slug} 
                        href={`/components/${category.slug}/${component.slug}`}
                      >
                        <Card className="h-full cursor-pointer transition-all hover:shadow-md hover:-translate-y-1">
                          <CardHeader>
                            <CardTitle>{component.name}</CardTitle>
                            <CardDescription>
                              {/* Component description would go here */}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="h-32 bg-muted rounded-md flex items-center justify-center">
                              <span className="text-muted-foreground">{component.name} Preview</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
              </motion.section>
            ))}
          </TabsContent>
        </Tabs>
      </motion.div>
      <Footer />
    </div>
  );
}