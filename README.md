# BlueBite · Food Discovery & Delivery Application

A modern, responsive food discovery and ordering web application inspired by the usability, information hierarchy, and UX patterns of Zomato, built strictly using the core concepts from the **MERN Term-5 Curriculum**.

---

## 🎨 Visual Identity & Color Palette

In accordance with the project requirements, **no red accents** or proprietary Zomato branding are used. The application uses a custom blue-and-white visual identity:

- **Primary Blue:** `#2563EB` (Buttons, active states, key highlights)
- **Dark Navy:** `#172554` (Wordmark, headings, high-contrast text)
- **Secondary Blue:** `#3B82F6` (Interactive hover states, badges)
- **Light Blue:** `#DBEAFE` (Subtle pills, borders, highlights)
- **Pale Blue Background:** `#F5F9FF` (Card backgrounds, active filter surfaces)
- **Pure White:** `#FFFFFF` (Main page background, cards)
- **Success Green:** `#16A34A` (Restrained rating badges, pure-veg indicator)
- **Discount Accent:** `#1D4ED8` (Promotional highlights and coupon states)
- **Typography:** `Inter` (Clean modern sans-serif)

---

## 🏗️ Architecture & Term-5 Curriculum Alignment

| Term-5 Module | Topic Covered | Implementation in BlueBite |
| :--- | :--- | :--- |
| **MERN-1 & MERN-2** | Node.js & Express | Express application in `server/server.js`, routing, JSON middleware, CORS |
| **MERN-3 & MERN-6** | MongoDB & Mongoose Models | `Restaurant.js`, `Order.js`, `User.js` models in `server/models/` |
| **MERN-4** | MVC Architecture | Separation into `models/`, `controllers/`, and `routes/` |
| **MERN-5** | Fullstack Scaffolding | React frontend (`client/`) powered by Vite & Node.js backend (`server/`) |
| **MERN-7 & MERN-8** | JWT Auth & Middleware | `authController.js` and `authMiddleware.js` with token generation, login/signup flows, and protected routes |
| **MERN-9** | Food & Restaurant REST APIs | `GET /api/restaurants`, `GET /api/restaurants/:id`, `GET /api/restaurants/categories` |
| **MERN-10 & MERN-11** | Favorites & Reviews | Dynamic favorites toggle (`POST /api/restaurants/:id/favorite`), ratings & reviews |
| **MERN-12 to MERN-17** | Orders & Checkout | Order placement (`POST /api/orders`), order history (`GET /api/orders`), and status tracking |

---

## 🔐 Authentication & Access Control (MERN-7)

The application enforces strict **Authentication & Authorization gates**:
- **Browsing is Free:** Any user can search, filter, and view restaurant menus freely.
- **Cart & Ordering are Gated:** Users **must** sign in or register before they can add dishes to the cart, favorite restaurants, or place an order.
- **Protected REST APIs:** `POST /api/orders` and `GET /api/orders` reject unauthenticated requests with `401 Unauthorized`.
- **JWT Persistence:** Signed JWT tokens are securely stored in the client state and attached via the `Authorization: Bearer <token>` HTTP header.

### 🔑 Demo Account (for instant testing):
- **Name:** `Alex Taylor`
- **Email:** `demo@bluebite.com`
- **Password:** `password123`
- *(Or use the **"⚡ 1-Click Demo Login"** button inside the Sign In modal!)*


---

## 🚀 Key Features

1. **Centralized Section Navigation Modes:**
   - **All Spots:** Comprehensive discovery across all categories and cuisines.
   - **Delivery:** Order online for fast 20-30 min doorstep delivery, promotional coupon discounts, and delivery fee tags.
   - **Dining Out:** Table booking reservations, outdoor garden seating, and curated collections (*Top Rooftops*, *Romantic Candlelight*, *Craft Breweries*, *Family Buffets*).
   - **Cafes:** Workspaces with Wi-Fi, specialty third-wave coffee pour-overs, cold brews, and artisanal bakeries (*Work-Friendly*, *Pour-Overs*, *Artisan Sourdough*).

2. **Clean Food Cuisines Scroller (No mixing!):**
   - Distinct, horizontally scrollable food categories: *All Dishes*, *Biryani*, *Pizza*, *Burgers*, *South Indian*, *North Indian*, *Chinese*, *Desserts*.
   - Filter any cuisine smoothly within Delivery or All Spots.

3. **Comprehensive Address Management System:**
   - Multi-category address tagging: 🏢 **Hostel / PG**, 🏠 **Home**, 💼 **Work**, 📍 **Other** (with custom tags).
   - Recipient contact details: Name & 10-digit mobile number.
   - Granular address fields: Flat/House/Hostel Block & Room No., Street/Locality, 6-digit Pincode with Bangalore quick-fill chips, City, and Nearby Landmark.
   - Dynamic header indicator displaying category icons and area pincode.
   - Checkout integration with instant "Change Address" modal inside the cart drawer.
   - Past orders display full structured delivery destinations.

4. **Expanded Restaurant & Dish Dataset:**
   - **36 curated restaurants** across Bangalore food hubs (Indiranagar, Koramangala, Lavelle Road, Church Street, HSR Layout, Sarjapur, Whitefield, Basavanagudi).
   - **130+ menu dishes** with authentic veg/non-veg tags, ratings, prices, and dish descriptions.

5. **Promotional Banner:**
   - Premium blue gradient banner with special coupon code `BLUEBITE` for ₹50 off.

6. **Filters & Sorting:**
   - Outlined pill filters with active blue fill.
   - Cyclic sorting: *Rating (High to Low)*, *Fastest Delivery*, *Cost: Low to High*, *Cost: High to Low*.
   - Quick toggles: *Rating 4.0+*, *Pure Veg*, *Offers*, *Under ₹250*, *Fast Delivery (≤25m)*.

7. **Restaurant Cards:**
   - 16:9 landscape food photography with rounded corners.
   - Compact green rating badge (`★ 4.6`).
   - Cuisines, area, distance, and price for two.
   - Blue discount badges ("50% OFF up to ₹100", "Flat ₹120 OFF").
   - Free delivery indicator & heart favorite toggle.

8. **Restaurant Detail Modal & Menu:**
   - Full restaurant menu categorized by dish types (Biryani, Starters, Breads, Pizzas, etc.).
   - Authentic veg/non-veg indicator square dots.
   - Add to Cart button with interactive `+` / `-` quantity stepper.
   - Floating cart banner when dishes are added.

9. **Cart Drawer & Checkout:**
   - Itemized bill breakdown (Item Total, Delivery Fee, Discount Applied, To Pay).
   - Promo coupon code validator (`BLUEBITE`).
   - Delivery destination card with category badge, recipient name, phone, and pincode.
   - "Place Order" button connected to the backend API.

10. **Orders View & Tracking:**
    - Complete order history with order ID, date, status tags (*Placed*, *Preparing*, *Delivered*), items ordered, delivery address, and total paid.
    - "Order Again" quick action.

11. **Fixed Mobile Bottom Navigation:**
    - Mobile-first bottom bar with *Home*, *Search*, *Orders*, *Cart* (with badge), and *Profile*.

---

## 💻 Running the Application Locally

### Environment Setup
Copy the example environment file for the backend server:
```bash
cp server/.env.example server/.env
```

### 1. Start Both Client & Server Concurrently:
From the project root:
```bash
npm run dev
```

### 2. Or Start Separately:
**Backend API Server:**
```bash
cd server
npm install
npm run dev
# Server runs on http://localhost:5001
```

**Frontend React Client:**
```bash
cd client
npm install
npm run dev
# Frontend runs on http://127.0.0.1:5173
```
