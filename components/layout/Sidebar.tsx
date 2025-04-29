"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { componentCategories } from "@/lib/component-data";

interface SidebarItemProps {
  title: string;
  href: string;
  isActive: boolean;
  isNested?: boolean;
}

const SidebarItem = ({ title, href, isActive, isNested = false }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center py-2 px-4 text-sm transition-colors rounded-md",
        isActive
          ? "bg-accent text-accent-foreground font-medium"
          : "text-muted-foreground hover:text-foreground hover:bg-muted",
        isNested && "ml-4"
      )}
    >
      {title}
    </Link>
  );
};

interface CategoryGroupProps {
  category: {
    name: string;
    slug: string;
    components: { name: string; slug: string }[];
  };
}

const CategoryGroup = ({ category }: CategoryGroupProps) => {
  const pathname = usePathname();
  const isCategoryActive = pathname?.includes(`/components/${category.slug}`);
  const [isExpanded, setIsExpanded] = useState(isCategoryActive);

  useEffect(() => {
    if (isCategoryActive) {
      setIsExpanded(true);
    }
  }, [isCategoryActive]);

  return (
    <div className="mb-2">
      <Button
        variant="ghost"
        className="w-full justify-start px-4 py-2 font-medium"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          {isExpanded ? (
            <ChevronDown className="mr-1 h-4 w-4" />
          ) : (
            <ChevronRight className="mr-1 h-4 w-4" />
          )}
          {category.name}
        </div>
      </Button>
      {isExpanded && (
        <div className="mt-1 space-y-1">
          {category.components.map((component) => (
            <SidebarItem
              key={component.slug}
              title={component.name}
              href={`/components/${category.slug}/${component.slug}`}
              isActive={pathname === `/components/${category.slug}/${component.slug}`}
              isNested
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const isComponentsPage = pathname?.startsWith('/components');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !isComponentsPage) {
    return null;
  }

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="fixed left-0 top-16 z-30 hidden h-[calc(100vh-4rem)] w-64 border-r bg-background md:block"
    >
      <ScrollArea className="h-full py-6 pl-4 pr-6">
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold pl-4">Getting Started</h4>
            <div className="space-y-1">
              <SidebarItem
                title="Introduction"
                href="/components"
                isActive={pathname === '/components'}
              />
              <SidebarItem
                title="Installation"
                href="/components/installation"
                isActive={pathname === '/components/installation'}
              />
              <SidebarItem
                title="Theming"
                href="/components/theming"
                isActive={pathname === '/components/theming'}
              />
            </div>
          </div>

          <Separator className="my-4" />

          <div>
            <h4 className="mb-3 text-sm font-semibold pl-4">Components</h4>
            <div className="space-y-1">
              {componentCategories.map((category) => (
                <CategoryGroup key={category.slug} category={category} />
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </motion.aside>
  );
};

export default Sidebar;