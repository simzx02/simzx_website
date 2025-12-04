# 🚀 Zhong Xian Sim | Electrical-Mechatronics Portfolio 

## Overview ![visitor badge](https://visitor-badge.laobi.icu/badge?page_id=simzx02.visitor-badge&format=true) [![pages-build-deployment](https://github.com/simzx02/simzx_website/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/simzx02/simzx_website/actions/workflows/pages/pages-build-deployment)

Welcome to the personal portfolio of Zhong Xian Sim, a dedicated Electrical-Mechatronics Engineer specializing in Robotics, AI, and innovative embedded systems. This project showcases my journey and key projects, built using a modern component-based architecture for performance, scalability, and ease of content management.

The website features an interactive hero section with a typewriter effect, dynamic scroll-based navigation, high-performance animations (Matrix Rain Easter Egg), and a responsive timeline of academic and professional milestones.

## ✨ Features and Technology Highlights

### Framework
- **Next.js 14+ (App Router)** - Provides Server-Side Rendering (SSR) / Static Site Generation (SSG) for fast loading and optimal SEO.

### Styling
- **Tailwind CSS 3** - Utility-first framework for rapid, responsive, and maintainable styling, including Dark Mode.

### Interactivity
- **React Hooks** (`useState`, `useEffect`) - Manages all client-side logic, scroll progress, dark mode persistence, and complex component states.

### Data Management
- **Centralized `config.ts`** - All portfolio content (achievements, projects, experience entries) is managed in a single, simple configuration file for fast updates.

### Performance
- **Vercel Edge & Analytics** - Optimized deployment on the Vercel Edge Network for low latency and comprehensive visitor tracking.

### Aesthetics
- **Canvas API (Matrix Rain)** - Custom, high-performance animated Easter Egg (`~` key) with variable drop speed and mouse interaction.

## 📂 Project Structure

The project follows the standard Next.js App Router convention with a modular component directory:

```
├── app/
│   ├── layout.tsx         # Root Layout: Handles Vercel Analytics and global fonts.
│   └── page.tsx           # Main App Logic: Manages global state (hooks) and assembles all sections.
├── public/                # Static Assets (Images, Favicon)
│   └── 1731061514308.jpg  # Profile picture and project images.
└── src/
    ├── components/
    │   ├── Nav.tsx          # Navigation, Theme Toggle, Scroll Highlighting.
    │   ├── Hero.tsx         # Typewriter Effect, Profile Image.
    │   ├── MatrixRain.tsx   # Canvas-based Easter Egg animation.
    │   └── ...              # All other sectional components: ProjectsGrid, UpdatesSection, etc.
    └── config.ts            # 🔑 CENTRAL CONTENT FILE: All editable text/data lives here.
```

## 🛠️ Getting Started (Local Development)

### Prerequisites

You need Node.js (version 18 or later) and npm installed on your system.

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/simzx02/zx-portfolio.git
cd zx-portfolio
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

## ✏️ Customization and Content Management

Content is managed exclusively by editing the arrays and objects within the `src/config.ts` file.

### Achievements Section
- **Data Array:** `achievements: []`
- **Tip:** Supports unlimited entries with automatic "Show More" button when over 3 items.

### Projects Section
- **Data Array:** `projects: []`
- **Tip:** Add `image: "/path/to/image.jpg"` for banner images.

### Updates Section
- **Data Array:** `updates: []`
- **Tip:** Add optional `link` property for external resources and auto-highlights top 2 items with `[🌟 NEW!]` badge.

## 🚀 Deployment

This project is deployed and optimized via the Vercel platform.

1. **Vercel Integration:** The repository is linked to Vercel via GitHub.
2. **Custom Domain:** Hosted live at `https://simzx.me`.
3. **Continuous Deployment:** Any changes pushed to the `main` branch automatically trigger a new production build and update the live website.

## 📞 Contact

- **GitHub:** [https://github.com/simzx02](https://github.com/simzx02)
- **LinkedIn:** [https://www.linkedin.com/in/simzhongxian/](https://www.linkedin.com/in/simzhongxian/)
- **Email:** simxian@graduate.utm.my

---

Made with ❤️ using Next.js and Tailwind CSS
