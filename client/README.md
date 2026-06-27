# 🎨 Portfolio Frontend Client

This is the Vite React frontend client for Jericho Boado's professional portfolio. It is designed around a premium, modern glassmorphic theme with responsive grids, micro-interactions, viewport-triggered scroll animations, and a seamless dual-theme system (Light / Dark Mode).

---

## ⚡ Technical Highlights

*   **Framework:** React 19 + Vite 6
*   **Styling:** Custom Vanilla CSS3 implementing CSS Custom Properties for variables, glassmorphic layout backing (`backdrop-filter`), keyframe animations, and custom scrollbars.
*   **Routing & Scroll:** Smooth window scrolling mapped to the active state in the header navigation.
*   **Ratings Engine:** SVG-based fractional rating stars (using custom SVG gradients for partial fills) for the Skills view.
*   **State Management:** Local React state managing interactive form submissions, theme settings, viewport triggers, and responsive navbar toggles.

---

## 📂 Folder & Component Directory

All UI modules are neatly divided inside the `src/components/` directory:

| Component | Description |
| :--- | :--- |
| **`Navbar.jsx`** | Layout header featuring active-scroll tracking, smooth scroll triggers, and the Dark/Light mode switcher. |
| **`Hero.jsx`** | Interactive greeting section that embeds the dynamic `Typewriter` component. |
| **`Typewriter.jsx`** | Performance-optimized typewriter element animating between multiple development niches. |
| **`About.jsx`** | Profile description highlighting the developer's core credentials. |
| **`Skills.jsx`** | Skills database displaying proficiency using fractional stars. |
| **`StarRating.jsx`** | Renders fractional rating stars (`0` to `5`) using vector math and SVG masks. |
| **`Experience.jsx`** | Chronological timeline charting education and ZyberLab milestones. |
| **`Projects.jsx`** | Responsive card catalog showcase displaying tech tags and GitHub links. |
| **`Contact.jsx`** | Submission form incorporating full state-handling (idle, sending, success, error) and client-side validations, sending requests to the Express server. |
| **`StatCard.jsx`** | Custom counting animations that run when the numbers enter the viewport. |
| **`Footer.jsx`** | Minimalistic visual footer completing the web layout. |

---

## 🎨 Global Styling System

The application's design system is consolidated within `src/index.css`. It implements:
*   **CSS Variable Themes:** Declares variables like `--bg-primary`, `--card-border`, `--accent-color`, and `--text-muted` which toggle dynamically between `.dark-mode` and `.light-mode` classes.
*   **Glassmorphic Base:** Uses `backdrop-filter: blur(16px)` along with semi-transparent background gradients to give a sleek "frosted glass" interface.
*   **Optimized Transitions:** Transitions on colors and transforms are kept light to avoid layout thrashing and maintain high frame rates.

---

## 💻 Running the Client Separately

If you want to run or test the client separately from the backend server:

### 1. Install Dependencies
Run the installation command inside the `client` directory:
```bash
npm install
```

### 2. Startup Scripts
*   **Run Development Server:**
    ```bash
    npm run dev
    ```
    This launches the local dev server at [http://localhost:5173](http://localhost:5173).
*   **Production Build:**
    ```bash
    npm run build
    ```
    Compiles optimized, minified assets into the `dist/` directory ready for static hosting.
*   **Preview Build:**
    ```bash
    npm run preview
    ```
    Launches a local webserver pointing to the production-built assets inside `dist/` to verify build performance.
