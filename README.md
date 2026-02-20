# CARP Tech

## App Summary
CARP Tech is a guided learning platform that helps adults and seniors build confidence with everyday technology. Many people want to use email, video calling, web search, and smartphone features but feel overwhelmed by technical jargon. Our app solves this by offering plain-language, step-by-step lessons with clear objectives and progress indicators. Learners can move through tutorials at their own pace and receive a completion flow at the end of each lesson. For this backend milestone, we implemented a vertical slice where an existing lesson rating button updates persistent data in the database. The primary users are beginner technology learners and caregivers or community organizations that support digital literacy.

## Tech Stack
- Frontend: React, TypeScript, Vite, Tailwind CSS, shadcn/ui, React Router
- Backend: Node.js, Express (REST API)
- Database: PostgreSQL with SQL scripts in `db/schema.sql` and `db/seed.sql`
- Authentication: None for this milestone
- External Services/APIs: None for this milestone
- Testing/Tooling: Vitest, ESLint

## Architecture Diagram
```mermaid
flowchart LR
    U[User Browser] -->|HTTP requests| F[React Frontend (Vite)]
    F -->|fetch/axios to /api| B[Node + Express Backend]
    B -->|SQL queries| D[(PostgreSQL Database)]
    D -->|query results| B
    B -->|JSON responses| F
    F -->|updated UI state| U
```

## Prerequisites
Install the following software before running locally:
- Node.js (LTS): https://nodejs.org/en/download
- npm (included with Node.js): https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- PostgreSQL: https://www.postgresql.org/download/
- `psql` CLI in your PATH: https://www.postgresql.org/docs/current/app-psql.html
- Git: https://git-scm.com/downloads

Verify installation:
```bash
node -v
npm -v
psql --version
git --version
```

## Installation and Setup
1. Clone the repository:
```bash
git clone https://github.com/phoenixfisher/carptech.git
cd carptech
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies (if backend is in `server/`):
```bash
cd server
npm install
cd ..
```

4. Create a PostgreSQL database:
```bash
createdb carptech
```

5. Create tables and seed sample data:
```bash
psql -d carptech -f db/schema.sql
psql -d carptech -f db/seed.sql
```

6. Configure environment variables (example):
```bash
# server/.env
DATABASE_URL=postgres://<username>:<password>@localhost:5432/carptech
PORT=3001
```

## Running the Application
Start backend and frontend in separate terminals.

Terminal 1 (backend):
```bash
cd server
npm run dev
```

Terminal 2 (frontend):
```bash
npm run dev
```

Open the frontend at `http://localhost:8080` (or the Vite URL shown in your terminal).  
Backend API should run at `http://localhost:3001`.

## Verifying the Vertical Slice
This milestone wires one existing UI button to persistent backend behavior. In our case, the lesson rating button on the completion page now saves to PostgreSQL.

1. Open a lesson and progress through all steps until the completion screen (`/lesson/:id/complete`).
2. Click a star rating (existing button in the UI).
3. Confirm in browser DevTools that a request is sent to the backend endpoint (for example, `POST /api/lessons/:id/rating`).
4. Confirm the frontend updates with the saved value returned from the backend.
5. Verify the database row was updated:
```bash
psql -d carptech -c "SELECT lesson_id, rating, updated_at FROM lesson_ratings ORDER BY updated_at DESC LIMIT 5;"
```
6. Refresh the page and confirm the saved rating is still shown, proving persistence.

## Repository Access
Add the instructor GitHub account as a collaborator:
- `taforlauracutler`

## Team
- Phoenix Fisher
