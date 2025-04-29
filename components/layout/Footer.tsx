"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { footerLinks } from "@/lib/site-config";
import { staggerContainer, fadeIn } from "@/lib/framer-animations";

const Footer = () => {
  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="border-t bg-muted/40"
    >
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <motion.div variants={fadeIn("right", 0.2)} className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-lg">UI Explorer</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              A modern UI component explorer showcasing beautiful components for your next project.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com/d43ash1sh/modern-ui-explorer"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://x.com/d43a_io"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </motion.div>

          {footerLinks.map((section, i) => (
            <motion.div 
              key={section.title}
              variants={fadeIn("up", 0.1 * (i + 1))}
              className="space-y-4"
            >
              <h3 className="text-sm font-medium">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} UI Explorer. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;