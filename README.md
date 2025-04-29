
# ⚡ Modern UI Explorer

A sleek, fast, and fully modular **Next.js + Tailwind CSS** UI framework—built with performance, developer experience, and design scalability in mind.

> **Live Repo**: [github.com/d43ash1sh/modern-ui-explorer](https://github.com/d43ash1sh/modern-ui-explorer)

---

## ✨ Features

- ⚙️ **Next.js App Router** with TypeScript
- 🎨 **Tailwind CSS** & **PostCSS** for styling
- 🧱 **Component-driven architecture**
- 🧩 **Custom Hooks** and modular utility layers
- 🧑‍💻 Developer-first setup with **ESLint** and **Prettier**
- 🔌 Easy plugin integrations via `lib` and `hooks`
- 🧪 Ready for extension with minimal config tweaks

---

## 🗂️ Project Structure

```
project/
│
├── app/                   # Application routing (Next.js App Router)
├── components/            # Reusable UI components
│   ├── home/              # Home page-specific UI
│   ├── providers/         # Global context providers
│   └── ui/                # Common styled components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and services
│
├── .bolt/                 # Bolt config (possibly design system or build tool)
├── .next/                 # Next.js build output
│
├── package.json           # Project metadata and dependencies
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS custom config
├── postcss.config.js      # PostCSS pipeline
├── next.config.js         # Next.js config
├── .eslintrc.json         # Linting rules
└── .gitignore             # Ignored files for git
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js (v18+)** and **npm** installed.

```bash
node -v
npm -v
```

### Installation

```bash
git clone https://github.com/d43ash1sh/modern-ui-explorer.git
cd modern-ui-explorer
npm install
```

### Run the Dev Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the app in action.

---

## 🛠️ Scripts

| Command         | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start the development server   |
| `npm run build`| Production build               |
| `npm run lint` | Run ESLint checks              |
| `npm run start`| Start production server        |

---

## 🧱 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: ESLint + Prettier
- **Tooling**: PostCSS, Custom Bolt Configs

---

## 🙌 Author

**Ashish D.**  
[GitHub @d43ash1sh](https://github.com/d43ash1sh)

---

## 📄 License

MIT © 2025 - Open to contributions & forks!
