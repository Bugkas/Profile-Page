# 🚀 Jericho Boado | Portfolio & Professional Profile

Welcome to the source repository for my professional portfolio website. This project features an enhanced, production-ready **PERN monorepo architecture** (PostgreSQL, Express, React, Node.js) configured for seamless hosting on Vercel, real-time database logging, and email notifications.

The interface boasts a premium glassmorphic theme, custom animations, responsive grid layouts, and modular React components.

---

## 🛠️ Technology Stack

| Tier | Technologies |
| :--- | :--- |
| **Frontend** | ![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=flat-square&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-4.19-000000?style=flat-square&logo=express&logoColor=white) |
| **Database** | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql&logoColor=white) (Hosted on Supabase) |
| **Mailer** | ![Resend](https://img.shields.io/badge/Resend-SDK-000000?style=flat-square) (Email Notifications) |
| **Deployment**| ![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=flat-square&logo=vercel&logoColor=white) |

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

## 📂 Project Structure

```text
.
├── api/                  # Express serverless backend (MVC architecture)
│   ├── config/           # Database and mailer configuration clients
│   │   ├── db.js         # pg.Pool connection config
│   │   └── mailer.js     # Resend client & mailer notification handler
│   ├── controllers/      # Request handlers & validation logic
│   │   └── messageController.js # Contact form message processing & retrieval
│   ├── models/           # Database schema initialization and query logic
│   │   └── messageModel.js      # Message queries & auto-table initializer
│   ├── routes/           # Express endpoint definitions
│   │   └── messageRoutes.js     # /api/messages router
│   └── index.js          # Server entrypoint / Vercel serverless function
├── client/               # React frontend (Vite environment)
│   ├── public/           # Static media assets (avatar, icons)
│   ├── src/              # React source directory
│   │   ├── components/   # Modular, reusable visual components
│   │   │   ├── About.jsx        # About Section (biography & profile)
│   │   │   ├── Contact.jsx      # Contact Section (submission form)
│   │   │   ├── Experience.jsx   # Education & Milestones timeline
│   │   │   ├── Footer.jsx       # Layout footer & copyright
│   │   │   ├── Hero.jsx         # Introduction with dynamic typewriter
│   │   │   ├── Navbar.jsx       # Responsive header nav & theme toggles
│   │   │   ├── Projects.jsx     # Showcase cards for featured creations
│   │   │   ├── Skills.jsx       # Skills showcase list
│   │   │   ├── StarRating.jsx   # Partial/full rating SVG stars
│   │   │   ├── StatCard.jsx     # Numeric counting animations
│   │   │   └── Typewriter.jsx   # Typing cursor effect
│   │   ├── App.jsx       # Section loader and active nav manager
│   │   ├── index.css     # Global glassmorphic styling system
│   │   └── main.jsx      # Vite React root mounting
│   ├── index.html        # Main HTML layout wrapper with Google Fonts
│   ├── package.json      # Client package registry
│   └── vite.config.js    # Vite compilation rules
├── vercel.json           # Vercel monorepo deployment configurations
├── package.json          # Root workspace setup and runner scripts
└── README.md             # Project documentation (this file)
```

---

## ⚙️ API Documentation

### Base URL: `/api`

### 1. Submit a Contact Message
*   **Endpoint:** `POST /api/messages`
*   **Headers:** `Content-Type: application/json`
*   **Request Body:**
    ```json
    {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "subject": "Collab Opportunity",
      "message": "Hey! I would love to collaborate on a hybrid AI project."
    }
    ```
*   **Validations:**
    *   `name` (Required, non-empty)
    *   `email` (Required, non-empty, must contain `@`)
    *   `message` (Required, non-empty)
*   **Response (201 Created):**
    ```json
    {
      "success": true,
      "message": "Message received and saved successfully!",
      "data": {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane@example.com",
        "subject": "Collab Opportunity",
        "created_at": "2026-06-27T01:30:00.000Z"
      },
      "emailSent": true
    }
    ```

### 2. Retrieve All Contact Messages (Admin Utility)
*   **Endpoint:** `GET /api/messages`
*   **Headers:** `x-admin-key: <RESEND_API_KEY>`
*   **Response (200 OK):**
    ```json
    {
      "success": true,
      "data": [
        {
          "id": 1,
          "name": "Jane Doe",
          "email": "jane@example.com",
          "subject": "Collab Opportunity",
          "message": "Hey! I would love to collaborate on a hybrid AI project.",
          "created_at": "2026-06-27T01:30:00.000Z"
        }
      ]
    }
    ```
*   **Response (403 Forbidden):**
    ```json
    {
      "success": false,
      "error": "Unauthorized access"
    }
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

### 4. Testing Endpoints Locally
You can test the backend API endpoints using `curl` while the server is running:

**Test Message Submission:**
```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{"name": "Test User", "email": "test@example.com", "subject": "Hello", "message": "This is a test message"}'
```

**Test Admin Retrieval:**
```bash
curl -H "x-admin-key: your_resend_api_key" http://localhost:5000/api/messages
```

---

## 🗄️ Database Schema Details
The system automatically executes `initTable` on startup to verify or build the required relation:
```sql
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📞 Contact & Networks

*   **GitHub:** [github.com/Bugkas](https://github.com/Bugkas)
*   **Email:** echotagacay0223@gmail.com
