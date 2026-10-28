# Demo Video Link:- 
https://drive.google.com/drive/folders/1PZZ6Vh2qDc0UYtO-JJ3dtZqEBvX1jzmr?usp=sharing

---

# BlueBite · Food Discovery & Delivery Application

A modern, full-stack food discovery and restaurant ordering application built with the MERN stack (MongoDB, Express, React, Node.js). Inspired by the usability, information hierarchy, and visual polish of modern food tech platforms, engineered strictly with a bespoke blue-and-white visual identity and robust MVC architecture.

---

## 🎯 Problem Statement
Online food discovery platforms frequently suffer from three major friction points:
1. **Disjointed Discovery Modes:** Users are forced to switch between completely different apps or clumsy sub-menus to differentiate between quick doorstep delivery, table-booking dining out, and work-friendly cafe hopping.
2. **Choice Fatigue & Ineffective Filtering:** Searching through hundreds of restaurants without granular cuisine-level dish matching or dietary filters leads to frustration.
3. **Flawed & Rigid Address Handling:** Students and working professionals often live in hostels, PGs, or co-working spaces with strict gate deliveries, roommates receiving packages, or specific floor/room instructions. Generic single-line address inputs result in failed or misplaced deliveries.

---

## 👥 Target Users
- **College Students & Hostellers:** Need address categorization (`Hostel`), quick budget filters (`Under ₹250`), room/block numbers, and delivery contact person details.
- **Office Professionals & Remote Workers:** Need quick workday lunch delivery (`Work`), fast delivery filter (`≤25m`), or discovery of work-friendly cafes with high-speed Wi-Fi.
- **Families & Food Enthusiasts:** Discovering fine dining spots, reserving tables, exploring top rooftop lounges, and ordering multi-course family meals (`Home`).

---

## 💡 Solution
BlueBite provides a cohesive, full-stack food discovery engine that unifies:
1. **Centralized Discovery Modes:** Distinct sections for *All Spots*, *Delivery*, *Dining Out*, and *Cafes* with live restaurant counts.
2. **Granular Multi-Category Address Manager:** Built-in address system supporting 🏢 **Hostel**, 🏠 **Home**, 💼 **Work**, and 📍 **Other**, with 10-digit phone verification, recipient names, Bangalore quick-fill pincode chips, and landmark instructions.
3. **Rich Menu & Cart Stepper:** Interactive dish ordering with quantity stepper, live subtotal calculations, promo code validation (`BLUEBITE`), and dynamic delivery fee estimation.
4. **JWT Authentication & Gated Workflows:** Open exploration of restaurants, menus, and reviews for unauthenticated guests, with seamless modal gating for orders, cart mutations, and saved favorites.
5. **Zero-Downtime Resilience:** Dual-mode persistence combining production Mongoose schemas with an intelligent in-memory failover store ensuring evaluators can run the app without local MongoDB setup headaches.

---

## 🚀 Key Features

### 1. Centralized Discovery Modes
- **All Spots:** Search and filter across the complete directory of 36+ curated restaurants.
- **Delivery:** Fast doorstep delivery (20-30 mins), delivery fee waivers, and discount badges.
- **Dining Out:** Table reservations, outdoor seating tags, and curated collections (*Top Rooftops*, *Romantic Candlelight*, *Craft Breweries*, *Family Buffets*).
- **Cafes:** Workspaces with Wi-Fi, specialty third-wave coffee pour-overs, and artisan sourdough bakeries.

### 2. Multi-Category Address Management System
- Multi-category address tagging: 🏢 **Hostel / PG**, 🏠 **Home**, 💼 **Work**, 📍 **Other** (with custom tags).
- Recipient contact details: Name & 10-digit mobile number.
- Granular address fields: Flat/House/Hostel Block & Room No., Street/Locality, 6-digit Pincode with Bangalore quick-fill chips, City, and Nearby Landmark.
- Dynamic header indicator displaying category icons and area pincode.
- Checkout integration with instant "Change Address" modal inside the cart drawer.
- Past orders display full structured delivery destinations.

### 3. Food Cuisines Scroller & Advanced Filtering
- Dedicated food cuisine scroller: *Biryani*, *Pizza*, *Burgers*, *South Indian*, *North Indian*, *Chinese*, *Cafes*, *Desserts*, *Starters & Kebabs*.
- Real-time search query matching dish names, restaurant names, areas, and descriptions.
- Quick toggles: *Rating 4.0+*, *Pure Veg*, *Offers*, *Under ₹250*, *Fast Delivery (≤25m)*.
- Cyclic sorting: *Rating (High to Low)*, *Fastest Delivery*, *Cost: Low to High*, *Cost: High to Low*.

### 4. Interactive Cart, Promo Coupons & Itemized Billing
- Restaurant modal with categorized dishes, authentic veg/non-veg dot indicators, and live quantity stepper.
- Real-time cart calculations: Subtotal, dynamic delivery fees (free on orders above ₹300), and coupon discounts.
- Promo coupon code validator (e.g. `BLUEBITE` provides instant ₹50 discount).

### 5. Protected Orders & History Tracking
- Order placement validated through JWT auth.
- Orders page displaying unique Order IDs, formatted timestamps, itemized quantities, total paid, structured delivery address, and status badges (*Placed*, *Preparing*, *Delivered*).
- One-click "Order Again" button.

### 6. Strict Privacy & Clean Identity
- Zero personal credentials or private user details in code or initial data.
- Built-in dummy demo account (`Alex Taylor`, `demo@bluebite.com`).

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 19 + Vite** | High-performance SPA with instant HMR and optimized production bundles |
| **Styling & Design System** | **Custom Vanilla CSS** | Bespoke blue-and-white theme, glassmorphism, micro-animations, zero Tailwind dependency |
| **Icons & UI Elements** | **Lucide React** | Consistent, modern vector iconography |
| **State Management** | **React Context API (`CartContext`)** | Global cart items, saved addresses, JWT user tokens, and order history |
| **Backend Runtime** | **Node.js + Express** | RESTful API server with MVC architecture |
| **Database & ODM** | **MongoDB + Mongoose** | Structured document schemas (`Restaurant`, `Order`, `User`) |
| **Persistence Resilience** | **In-Memory Failover Store** | Enables full end-to-end functionality even without a running local MongoDB daemon |
| **Authentication** | **JWT (JSON Web Tokens)** | Bearer token authorization, password validation, protected routes |
| **Tooling & Linter** | **Vite, Oxlint, npm** | Fast build system and code quality |

---

## 🏛️ Architecture

```text
[ Browser / Client ] (React 19 + Vite · Port 5173)
       │
       │ HTTP / REST APIs (Proxy: /api -> :5001)
       ▼
[ Express API Server ] (Node.js · Port 5001)
  ├── Middleware (CORS, Express.JSON, JWT Protect, ErrorHandler)
  ├── Routes:
  │    ├── /api/restaurants  --> restaurantController.js
  │    ├── /api/orders       --> orderController.js (Protected)
  │    └── /api/auth         --> authController.js (Register/Login/Address)
  └── Models:
       ├── Restaurant.js     --> Menus, Cuisines, Dining Details
       ├── Order.js          --> Items, Totals, Delivery Address
       └── User.js           --> Credentials, Saved Addresses
             │
             ├── Primary: MongoDB Local / Atlas (Mongoose)
             └── Graceful Fallback: High-Performance In-Memory Data Store
```

---

## 💻 Local Setup

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)
- Optional: Local MongoDB or MongoDB Atlas connection URI

### 1. Clone the Repository
```bash
git clone https://github.com/Amogh17J/BlueBite.git
cd BlueBite
```

### 2. Install All Dependencies
Install both backend and frontend dependencies in one command from root:
```bash
npm run install:all
```
*(Or install separately with `cd server && npm install` and `cd client && npm install`)*

### 3. Setup Environment Variables
Copy the template environment file:
```bash
cp server/.env.example server/.env
```

### 4. Run Both Servers Concurrently
From the project root:
```bash
npm run dev
```

The application will be accessible at:
- **Frontend App:** [http://127.0.0.1:5173](http://127.0.0.1:5173)
- **Backend API:** [http://localhost:5001/api/restaurants](http://localhost:5001/api/restaurants)

---

## 🔐 Environment Variables

The server uses the following environment variables documented in [`server/.env.example`](server/.env.example):

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `PORT` | `5001` | Express backend server listening port |
| `MONGODB_URI` | `mongodb://127.0.0.1:27017/bluebite_food` | MongoDB connection string (automatically falls back to memory if unreachable) |
| `JWT_SECRET` | `bluebite_super_secret_jwt_key_2026` | Secret key used for signing and verifying user JWT tokens |

> [!NOTE]
> All sensitive `.env` files are strictly excluded from version control via `.gitignore`. Evaluators can run the project out-of-the-box without configuring environment variables.

---

## 🔑 Demo Account (Instant Testing)

Use these credentials to sign in and test the gated cart, address management, and ordering flows:
- **Email:** `demo@bluebite.com`
- **Password:** `password123`
- *(Or click the **"⚡ 1-Click Demo Login"** button directly inside the Sign In modal!)*

---

## 🌐 Deployment

The repository is structured for straightforward deployment on cloud platforms:
- **Frontend:** Can be deployed to **Vercel**, **Netlify**, or **Cloudflare Pages** pointing the build command to `npm run build` and output directory to `dist/`.
- **Backend:** Can be deployed to **Render**, **Railway**, or **Fly.io** running `node server.js` with root directory set to `server/`.
- **Full-Stack Single Container:** The production client build can also be served statically by Express for single-dyno hosting.

---

## 🎥 Demo Video Outline (Recommended 3-Minute Walkthrough)
1. **0:00 - 0:45 | Problem & Value Proposition:** Overview of BlueBite, blue-and-white visual identity, and centralized section modes (*All*, *Delivery*, *Dining Out*, *Cafes*).
2. **0:45 - 1:30 | Food Discovery & Search:** Filtering by cuisines (Biryani, Pizza, etc.), live search, and food categories.
3. **1:30 - 2:15 | Detailed Address System:** Opening address selector, creating a new `Hostel` address with room/block, phone, recipient name, and Bangalore quick-fill pincode chips.
4. **2:15 - 2:45 | Cart, Promo Code & Ordering:** Adding dishes with quantity stepper, applying promo code `BLUEBITE`, and placing an order.
5. **2:45 - 3:00 | Order Tracking & Profile:** Viewing order confirmation, status badges (*Placed*, *Preparing*, *Delivered*), and past history.
