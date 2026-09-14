PHONELAND

A full-stack web app for a phone repair and device shop, built with the MERN stack. Customers can browse devices, request repairs, and get in touch — the shop owner manages everything from a simple admin dashboard.
Technologies used:Tailwind,react,nodejs,express,mongodb
Live demo: phoneland-84ad.vercel.app

Phoneland started as a typical e-commerce build — products, cart, checkout — but the scope changed as the project evolved. Most local phone repair shops don't actually run in-app checkouts; customers call, describe the problem, and get a quote over the phone. So instead of a generic cart flow, Phoneland is built around that real workflow:

Customers browse devices and repair services
They submit a repair request (name, phone, device model, issue) instead of an in-app quote
The shop owner (admin) logs into a dashboard, sees incoming requests, and calls the customer back directly

This mirrors how small repair shops actually operate, rather than forcing an e-commerce pattern where it doesn't fit.

Features

Customer-facing

Browse devices by brand (Apple, Samsung, Google, and more)
View repair services offered: hardware repair, software & unlocking, diagnostics & data recovery
Submit a repair request with device details and issue description
Contact form for general enquiries
Fully responsive — works on mobile and desktop

Admin

Secure login (JWT-based authentication)
Dashboard to view and manage incoming repair requests
Dashboard to view and manage contact/enquiry submissions
Single admin account model — no public signup, account is seeded once
Tech stack

Frontend

React (Vite)
React Router
Tailwind CSS

Backend

Node.js + Express
MongoDB with Mongoose
JWT authentication
bcrypt for password hashing

Deployment

Frontend: [Vercel / Netlify — update with what you use]
Backend: Render
Database: MongoDB Atlas
Project structure
mobile-shop/
├── backend/
│   ├── routes/            # API route handlers (products, repairs, contact, users)
│   ├── middleware/        # Auth middleware (JWT verification)
│   ├── *.schema.js         # Mongoose models
│   ├── seedscript.js      # One-time script to create the admin account
│   └── main.js            # Express app entry point
├── src/
│   ├── components/        # React components (Navbar, Forms, AdminDashboard, etc.)
│   ├── assets/             # SVG icons
│   └── App.jsx
└── public/
Getting started locally

Prerequisites: Node.js, npm, a MongoDB connection string (local or Atlas)

1. Clone the repo

bash
git clone https://github.com/ShehreenFarooq/phoneland.git
cd phoneland

2. Install dependencies

bash
npm install
cd backend && npm install

3. Set up environment variables

Create a .env file in backend/ with:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Seed the admin account

bash
node backend/seedscript.js

5. Run the app

Backend:

bash
cd backend
node main.js

Frontend (in a separate terminal):

bash
npm run dev

The app will be available at http://localhost:5173 (or whichever port Vite assigns).

What I'd add next
Product management (currently static, not database-backed)
Email notifications for new repair/contact requests
Image uploads for device listings
Automated tests
Author

Shehreen Farooq Computer Science student | Building frontend & full-stack projects GitHub
