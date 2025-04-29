"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => pos === 1 ? "relative" : "fixed");

  return (
    <section ref={targetRef} className="relative w-full h-screen">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-pattern" />
      
      <motion.div
        style={{ opacity, scale, position }}
        className="top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-center px-4 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <div className="glass-effect rounded-full px-4 py-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium">Discover Beautiful Components</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            Build stunning interfaces with
            <span className="gradient-text block mt-2">Modern UI Components</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Explore our collection of beautiful, responsive components designed to help you create exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="gradient-border bg-background hover:bg-accent/10 transition-colors"
            >
              <Link href="/components">
                Explore Components <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass-effect hover:bg-accent/10"
            >
              <Link href="/documentation">
                Read Documentation
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="h-[50vh]" />
    </section>
  );
};

export default Hero;