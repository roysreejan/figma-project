# Figma Project

Figma Project is a portfolio and blog web application built with Next.js and TypeScript. It features a modern, responsive UI inspired by Figma designs, and showcases recent posts, featured works, and social links. The project uses Tailwind CSS for styling and leverages Next.js App Router for routing and layout.

## Features

- Responsive portfolio homepage with hero section
- Recent posts and featured works sections
- Social media links in the footer
- Customizable theme colors and fonts
- Modular, reusable React components
- Optimized images with Next.js Image component
- Font integration with next/font
- ESLint and Prettier for code quality

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist, Heebo, Inter (via next/font)
- **Icons**: react-icons
- **Image Optimization**: Next.js Image
- **Linting**: ESLint

## Folder Structure

```
figma-project/
├── public/                  # Static assets (SVGs, images)
│   └── assets/              # Project images
├── src/
│   ├── app/                 # Next.js app directory (pages, layouts)
│   │   ├── components/      # UI and feature components
│   │   └── globals.css      # Global styles (Tailwind, custom CSS variables)
├── .next/                   # Next.js build output (generated)
├── .vscode/                 # VSCode settings
├── .gitignore
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/roysreejan/figma-project
   cd figma-project
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
The app will run on [http://localhost:3000](http://localhost:3000).

## Customization

- Edit content and sections in [`src/app/page.tsx`](src/app/page.tsx)
- Update global styles in [`src/app/globals.css`](src/app/globals.css)
- Add or modify components in [`src/components/`](src/components/)

## Deployment

This project is ready to deploy on [Vercel](https://figma-project-design.vercel.app/) or any platform supporting Next.js.

To deploy on Vercel:

1. Install the Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy:
   ```sh
   vercel
   ```

## License

MIT

## Author

Sreejan Roy