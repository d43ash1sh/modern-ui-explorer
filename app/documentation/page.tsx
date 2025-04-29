"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code, FileText, Lightbulb, PanelLeft, ToggleLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";
import Footer from "@/components/layout/Footer";

const documentationSections = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", icon: <FileText className="h-4 w-4" />, href: "#introduction" },
      { title: "Installation", icon: <Code className="h-4 w-4" />, href: "#installation" },
      { title: "Project Structure", icon: <PanelLeft className="h-4 w-4" />, href: "#structure" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Theming", icon: <ToggleLeft className="h-4 w-4" />, href: "#theming" },
      { title: "Best Practices", icon: <Lightbulb className="h-4 w-4" />, href: "#practices" },
    ],
  },
];

export default function DocumentationPage() {
  const [activeTab, setActiveTab] = useState("overview");

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
          className="max-w-3xl mb-12"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
            Documentation
          </h1>
          <p className="text-lg text-muted-foreground">
            Learn how to use our component library effectively for your projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.aside
            variants={fadeIn("right", 0.3)}
            className="md:col-span-1 space-y-6"
          >
            {documentationSections.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-medium mb-3">{section.title}</h3>
                <ul className="space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="flex items-center py-1 px-2 text-sm rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
                      >
                        <span className="mr-2">{item.icon}</span>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.aside>

          <motion.div
            variants={fadeIn("up", 0.4)}
            className="md:col-span-3"
          >
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="api">API</TabsTrigger>
                <TabsTrigger value="examples">Examples</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <section id="introduction">
                  <Card>
                    <CardHeader>
                      <CardTitle>Introduction</CardTitle>
                      <CardDescription>
                        Learn about our component library and what it offers.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        UI Explorer is a comprehensive UI component library designed to help developers build beautiful, responsive interfaces quickly. Our components follow best practices for accessibility, performance, and user experience.
                      </p>
                      <p>
                        Built with React, TypeScript, and Tailwind CSS, our components are easy to integrate into your projects and highly customizable to match your brand.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section id="installation">
                  <Card>
                    <CardHeader>
                      <CardTitle>Installation</CardTitle>
                      <CardDescription>
                        How to install and set up the component library in your project.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">To install the component library, run one of the following commands:</p>
                      <div className="bg-muted p-4 rounded-md mb-4">
                        <code>npm install ui-explorer</code>
                      </div>
                      <p className="mb-4">Or with yarn:</p>
                      <div className="bg-muted p-4 rounded-md">
                        <code>yarn add ui-explorer</code>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id="structure">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Structure</CardTitle>
                      <CardDescription>
                        Understanding the organization of the component library.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Our component library is organized into logical categories to make it easy to find what you need:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Layout:</strong> Components for structuring your pages</li>
                        <li><strong>Forms:</strong> Input components for collecting user data</li>
                        <li><strong>Data Display:</strong> Components for showing information</li>
                        <li><strong>Feedback:</strong> Components that provide user feedback</li>
                        <li><strong>Navigation:</strong> Components for moving between pages</li>
                        <li><strong>Overlay:</strong> Components that display over the main UI</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>
              </TabsContent>

              <TabsContent value="guides">
                <Card>
                  <CardHeader>
                    <CardTitle>Guides</CardTitle>
                    <CardDescription>
                      Step-by-step tutorials and guides for common use cases.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Detailed guides are coming soon.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="api">
                <Card>
                  <CardHeader>
                    <CardTitle>API Reference</CardTitle>
                    <CardDescription>
                      Detailed API documentation for each component.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>API documentation is coming soon.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="examples">
                <Card>
                  <CardHeader>
                    <CardTitle>Examples</CardTitle>
                    <CardDescription>
                      Real-world examples and code snippets.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Examples are coming soon.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}