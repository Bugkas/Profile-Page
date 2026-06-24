# Jericho Boado | Portfolio & Professional Profile

Welcome to the source repository for my professional portfolio website. This branch features an enhanced, production-ready **PERN monorepo architecture** (PostgreSQL, Express, React, Node.js) configured for seamless hosting on Vercel, real-time database logging, and email notifications.

The interface retains its premium glassmorphic theme and smooth animations, now modularized into React components with refined visual ratings.

---

## 🚀 Key Features

*   **Vite React Frontend:** Migrated from vanilla JavaScript to modular, component-driven React.
*   **MVC Serverless Express Backend:** Clean separation of concerns with config, routes, controllers, and models.
*   **PostgreSQL Persistence:** Automated table verification and database entry logging for all contact form submissions.
*   **Resend Email Notifications:** Real-time form notification alerts sent straight to your email destination using the Resend SDK.
*   **Toolbox Star & Fraction Ratings:** Replaced percentage progress bars in the Skills section with premium visual rating stars (using linear-gradient SVGs for half-stars) and fraction metrics (e.g. `4.5/5`).
*   **Dual-Theme Engine:** Easy-to-use Dark Mode and Light Mode toggles.
*   **Dynamic Stats Counters:** Viewport-triggered counters that animate on scroll.

---

## 🛠️ Technology Stack

*   **Frontend:** React 19, Vite, CSS3 (Vanilla styles, responsive grids, blur filters, keyframe transitions).
*   **Backend:** Express, Node.js (arranged in an MVC structure).
*   **Database:** PostgreSQL (hosted on Supabase, connected via `pg.Pool`).
*   **Mailer Service:** Resend API.
*   **Deployment:** Vercel serverless environment.

---

## 📂 Project Structure

```text
.
├── api/                  # Express serverless backend (MVC architecture)
│   ├── config/           # Database and mailer configuration clients
│   ├── controllers/      # Request handlers & validation logic
│   ├── models/           # Database schema initialization and query logic
│   ├── routes/           # Express endpoint definitions
│   └── index.js          # Server entrypoint / Vercel serverless function
├── client/               # React frontend (Vite environment)
│   ├── public/           # Static media assets (avatar, icons)
│   ├── src/              # React source directory
│   │   ├── components/   # Modular, reusable visual components
│   │   │   ├── StatCard.jsx    # Numeric counting animations
│   │   │   ├── StarRating.jsx  # Partial/full rating SVG stars
│   │   │   └── Typewriter.jsx  # Typing cursor effect
│   │   ├── App.jsx       # Section loader and active nav manager
│   │   ├── index.css     # Global glassmorphic styling system
│   │   └── main.jsx      # Vite React root mounting
│   ├── index.html        # Main HTML layout wrapper with Google Fonts
│   ├── package.json      # Client package registry
│   └── vite.config.js    # Vite compilation rules
├── archive/              # Folder housing legacy files (for reference)
├── vercel.json           # Vercel monorepo deployment configurations
├── package.json          # Root workspace setup and runner scripts
└── README.md             # Project documentation (this file)
```

---

## 💻 Local Setup and Running

To run both the React client and the Express backend locally:

### 1. Install Dependencies
Run the install command at the root workspace directory. This will resolve all packages for the monorepo:
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file at the root of the project using the template provided:
```bash
cp .env.example .env
```
Open the `.env` file and enter your configurations:
```env
DATABASE_URL=your_supabase_postgresql_connection_string
RESEND_API_KEY=your_resend_api_key
PORT=5000
NOTIFICATION_EMAIL=your_inbox_destination_email
NODE_ENV=development
```

### 3. Run Development Servers
Start both the Vite dev server and the local Express server concurrently:
```bash
npm run dev
```
*   **Frontend:** Viewable at [http://localhost:5173](http://localhost:5173)
*   **Backend:** Listening on [http://localhost:5000](http://localhost:5000)

---

## 📞 Contact & Networks

*   **GitHub:** [github.com/Bugkas](https://github.com/Bugkas)
*   **Email:** echotagacy0223@gmail.com
