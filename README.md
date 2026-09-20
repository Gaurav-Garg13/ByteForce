# 🚗 CarInsu - AI-Powered Vehicle Insurance Platform

CarInsu is an end-to-end vehicle insurance management platform featuring automated AI claim processing, Google OAuth integration, real-time damage estimation, and interactive user dashboards.

---

## ✨ Features

- 🔐 **Authentication**: Google OAuth 2.0 & JWT-based authentication flow.
- 📝 **Claim Submission**: Interactive step-by-step claim registration with photo and document upload.
- 🤖 **AI Damage Assessment**: Integrated Google Gemini 2.5 Flash LLM for automated estimation and severity scoring.
- 📊 **User Dashboard**: Real-time status tracking, claim overview, and document management.
- 🛠️ **Modern Stack**: Vite + Vanilla JavaScript frontend, Express + Prisma + PostgreSQL backend.

---

## 🏗️ Repository Structure

```text
carinsu/
├── backend/            # Express.js REST API server
│   ├── prisma/         # Prisma schema and database migrations
│   ├── uploads/        # Uploaded claim media files
│   ├── server.js       # Main server entrypoint
│   └── package.json
└── frontend/           # Vite + Vanilla JS single-page application
    ├── public/         # Static assets and images
    ├── src/            # Components, pages, and router logic
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL database

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory based on `.env.example`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/carinsu_db?schema=public"
GEMINI_API_KEY="your_gemini_api_key_here"
```

Run database migrations:

```bash
npx prisma db push
```

Start the backend server:

```bash
node server.js
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔒 Security Notice

Do not commit `.env` files or API keys. Make sure `.env` is listed in your `.gitignore`.
