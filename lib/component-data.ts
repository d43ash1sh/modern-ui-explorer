export interface Component {
  name: string;
  slug: string;
  description: string;
  preview?: string;
  library: "shadcn" | "aceternity" | "magic";
  code: string;
  usage: string;
}

export interface ComponentCategory {
  name: string;
  slug: string;
  description: string;
  components: { name: string; slug: string }[];
}

export const componentCategories: ComponentCategory[] = [
  {
    name: "Layout",
    slug: "layout",
    description: "Components for building the layout of your pages.",
    components: [
      { name: "Container", slug: "container" },
      { name: "Grid", slug: "grid" },
      { name: "Box", slug: "box" },
      { name: "Flex", slug: "flex" },
      { name: "Divider", slug: "divider" },
      { name: "Aspect Ratio", slug: "aspect-ratio" },
    ],
  },
  {
    name: "Forms",
    slug: "forms",
    description: "Components for building forms and capturing user input.",
    components: [
      { name: "Button", slug: "button" },
      { name: "Input", slug: "input" },
      { name: "Textarea", slug: "textarea" },
      { name: "Select", slug: "select" },
      { name: "Checkbox", slug: "checkbox" },
      { name: "Radio Group", slug: "radio-group" },
      { name: "Switch", slug: "switch" },
      { name: "Form", slug: "form" },
    ],
  },
  {
    name: "Data Display",
    slug: "data-display",
    description: "Components for displaying data and content.",
    components: [
      { name: "Card", slug: "card" },
      { name: "Table", slug: "table" },
      { name: "List", slug: "list" },
      { name: "Badge", slug: "badge" },
      { name: "Avatar", slug: "avatar" },
      { name: "Tooltip", slug: "tooltip" },
    ],
  },
  {
    name: "Feedback",
    slug: "feedback",
    description: "Components for providing feedback to users.",
    components: [
      { name: "Alert", slug: "alert" },
      { name: "Toast", slug: "toast" },
      { name: "Progress", slug: "progress" },
      { name: "Skeleton", slug: "skeleton" },
      { name: "Spinner", slug: "spinner" },
    ],
  },
  {
    name: "Navigation",
    slug: "navigation",
    description: "Components for navigation within your application.",
    components: [
      { name: "Tabs", slug: "tabs" },
      { name: "Navbar", slug: "navbar" },
      { name: "Pagination", slug: "pagination" },
      { name: "Breadcrumb", slug: "breadcrumb" },
      { name: "Menu", slug: "menu" },
      { name: "Dropdown", slug: "dropdown" },
    ],
  },
  {
    name: "Overlay",
    slug: "overlay",
    description: "Components that overlay the interface.",
    components: [
      { name: "Modal", slug: "modal" },
      { name: "Drawer", slug: "drawer" },
      { name: "Popover", slug: "popover" },
      { name: "Tooltip", slug: "tooltip" },
    ],
  },
  {
    name: "Typography",
    slug: "typography",
    description: "Components and styles for displaying text.",
    components: [
      { name: "Heading", slug: "heading" },
      { name: "Text", slug: "text" },
      { name: "Code", slug: "code" },
      { name: "Quote", slug: "quote" },
    ],
  },
  {
    name: "Animation",
    slug: "animation",
    description: "Components with beautiful animations.",
    components: [
      { name: "Fade", slug: "fade" },
      { name: "Slide", slug: "slide" },
      { name: "Scale", slug: "scale" },
      { name: "Stagger", slug: "stagger" },
    ],
  },
];

export const componentsData: { [key: string]: Component } = {
  button: {
    name: "Button",
    slug: "button",
    description: "A button component with multiple variants and sizes.",
    library: "shadcn",
    code: `import { Button } from "@/components/ui/button"
    
<Button variant="default">Button</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`,
    usage: "Buttons are used to trigger actions or events, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.",
  },
  card: {
    name: "Card",
    slug: "card",
    description: "A card component for displaying content with a header, footer, and various content sections.",
    library: "shadcn",
    code: `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
    
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`,
    usage: "Cards are used to group related content and actions. They can contain content such as text, images, and buttons.",
  },
  // Add more components here
};