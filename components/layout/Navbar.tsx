"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X, Github, Twitter, Search } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { siteConfig } from "@/lib/site-config";
import { navVariants } from "@/lib/framer-animations";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    setIsMounted(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">UI Explorer</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            {siteConfig.nav.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname?.startsWith(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon" className="hidden md:flex">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search components</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <div className="space-y-4 py-2 pb-4">
                <div className="space-y-2">
                  <Input
                    placeholder="Search components..."
                    className="w-full"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Separator orientation="vertical" className="h-6 hidden md:block" />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden md:flex"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild>
              <Link href={siteConfig.links.github} target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={siteConfig.links.twitter} target="_blank">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              {siteConfig.nav.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
                    pathname?.startsWith(item.href)
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <Link href={siteConfig.links.github} target="_blank">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={siteConfig.links.twitter} target="_blank">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;