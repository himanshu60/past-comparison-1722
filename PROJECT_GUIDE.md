# Locks & Looks — Complete Project Guide

> **Salon booking web app.** Pure HTML/CSS/JS frontend + Node.js/Express/MongoDB backend.  
> Last reviewed: March 2026 — several issues found and fixed. See issues section below.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Tech Stack](#tech-stack)
3. [How to Run Locally](#how-to-run-locally)
4. [Environment Variables](#environment-variables)
5. [All Pages & Their Purpose](#all-pages--their-purpose)
6. [API Endpoints](#api-endpoints)
7. [Admin Panel Access](#admin-panel-access)
8. [Issues Found & Fixed](#issues-found--fixed)
9. [Known Remaining Limitations](#known-remaining-limitations)

---

## Project Structure

```
past-comparison-1722/
├── Backend/
│   ├── index.js                  # Express server entry point
│   ├── package.json
│   ├── data.json                 # Sample seed data (styles)
│   ├── .env                      # ← YOU MUST CREATE THIS (see below)
│   ├── Config/
│   │   └── db.js                 # MongoDB connection
│   ├── Middleware/
│   │   └── authentication.middleware.js   # JWT auth guard
│   ├── Model/
│   │   ├── User.Model.js         # User schema
│   │   ├── Blacklist.Model.js    # Token blacklist (logout)
│   │   ├── Style.Model.js        # Hairstyle/service schema
│   │   └── appointment.model.js  # Appointment booking schema
│   └── Routes/
│       ├── Users.Router.js       # /user — signup, login, logout, get
│       ├── Style.Router.js       # /styles — get/post styles
│       └── viewAppointment.js    # /Appointment — CRUD appointments
│
└── Frontend/
    ├── index.html                # Home page
    ├── html/
    │   ├── login.html            # Login / Signup
    │   ├── Mens_Services.html    # Men's services listing
    │   ├── women_services.html   # Women's services listing
    │   ├── time_styler.html      # Book appointment (pick time + styler)
    │   └── viewAppointment.html  # View & cancel appointments
    ├── admin-page/
    │   ├── admin.html            # Admin login page
    │   ├── dashboard.html        # Admin dashboard (team info)
    │   ├── adminProducts.html    # Add/view hairstyle products
    │   ├── userInfo.html         # View all registered users
    │   ├── totalCustomer.html    # Manage/delete users
    │   └── edit.html             # Edit page (placeholder)
    ├── scripts/
    │   ├── index.js              # Home page JS (navbar, slider, video)
    │   ├── login.js              # Login & signup API calls
    │   ├── mens_services.js      # Fetch & display male styles
    │   ├── womens_services.js    # Fetch & display female styles
    │   ├── admin.js              # Admin panel login (hardcoded creds)
    │   ├── admin-products.js     # Add/list products in admin
    │   └── nav.js                # Admin panel navbar component
    ├── components/
    │   ├── Navbar.js             # Reusable navbar (ES module)
    │   └── Footer.js             # Footer component (unused)
    ├── CSS/                      # All stylesheets
    └── images/                   # Local images & videos
```

---

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | HTML5, CSS3, Vanilla JavaScript     |
| Backend   | Node.js, Express.js                 |
| Database  | MongoDB (via Mongoose)              |
| Auth      | JWT (jsonwebtoken) + bcrypt         |
| UI libs   | Bootstrap 4/5, SweetAlert2, jQuery  |
| Dev tool  | nodemon                             |

---

## How to Run Locally

### Prerequisites

- Node.js ≥ 16
- MongoDB running locally **or** a MongoDB Atlas connection string
- A tool to serve static files (e.g. VS Code Live Server, or `npx serve`)

---

### Step 1 — Install backend dependencies

```bash
cd Backend
npm install
```

---

### Step 2 — Create environment file

Copy the example file and fill in your values:

```bash
cp .env.local .env
```

Edit `.env` with your MongoDB URI and a secret key (see [Environment Variables](#environment-variables)).

---

### Step 3 — Start the backend

```bash
npm run server
# Server starts on http://localhost:4500
```

---

### Step 4 — Serve the frontend

Open `Frontend/index.html` with **VS Code Live Server** (right-click → Open with Live Server).  
Or serve the whole Frontend folder:

```bash
npx serve Frontend
# Visit http://localhost:3000
```

---

### Step 5 — Verify everything works

| Check | Expected result |
|-------|----------------|
| `http://localhost:4500/` | Returns `welcome` |
| `http://localhost:4500/styles` | Returns JSON array of styles |
| `http://localhost:4500/Appointment` | Returns JSON object with `msg` array |
| Frontend home page | Loads with navbar, slider, hero section |
| Men's / Women's services | Cards load from local backend |
| Login / Signup | Working form submitting to local backend |
| Admin panel | Login with credentials in `admin.js` |

---

## Environment Variables

### `.env` (active — used by Node)

```env
PORT=4500
mongoURL=mongodb://127.0.0.1:27017/locksAndLooks
KEY=your_jwt_secret_key_here
saltRounds=10
```

### `.env.local` (local development template)

```env
PORT=4500
mongoURL=mongodb://127.0.0.1:27017/locksAndLooks
KEY=locksAndLooks_local_secret_2024
saltRounds=10
```

### `.env.dev` (development/staging with Atlas)

```env
PORT=4500
mongoURL=mongodb+srv://<username>:<password>@cluster.mongodb.net/locksAndLooks?retryWrites=true&w=majority
KEY=locksAndLooks_dev_secret_2024
saltRounds=10
```

> **Security note:** Never commit `.env` to git. Add it to `.gitignore`.

---

## All Pages & Their Purpose

### Frontend (User-facing)

| Page | URL path | Purpose |
|------|----------|---------|
| Home | `Frontend/index.html` | Landing page with slider & hero video |
| Men's Services | `Frontend/html/Mens_Services.html` | Browse male hairstyles, click Book |
| Women's Services | `Frontend/html/women_services.html` | Browse female hairstyles, click Book |
| Book Appointment | `Frontend/html/time_styler.html` | Select styler, date, time → save appointment |
| View Appointment | `Frontend/html/viewAppointment.html` | List all appointments, cancel them |
| Login / Signup | `Frontend/html/login.html` | User authentication |

### Admin Panel

| Page | URL path | Purpose |
|------|----------|---------|
| Admin Login | `Frontend/admin-page/admin.html` | Hardcoded login for admins |
| Dashboard | `Frontend/admin-page/dashboard.html` | Team overview |
| Add Products | `Frontend/admin-page/adminProducts.html` | Add/view hairstyle services |
| User Info | `Frontend/admin-page/userInfo.html` | View all registered users |
| Manage Users | `Frontend/admin-page/totalCustomer.html` | Delete users |

---

## API Endpoints

Base URL (local): `http://localhost:4500`

### User Routes — `/user`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/user/signup` | ❌ | Register new user |
| POST | `/user/login` | ❌ | Login, returns JWT token |
| POST | `/user/logout` | ✅ JWT | Blacklist token (logout) |
| GET | `/user/get` | ❌ | Get all users (admin use) |

### Style Routes — `/styles`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/styles` | ❌ | Get all styles |
| POST | `/styles` | ✅ JWT | Create new style |
| GET | `/styles/male` | ❌ | Get male styles |
| GET | `/styles/female` | ❌ | Get female styles |

### Appointment Routes — `/Appointment`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/Appointment` | ✅ JWT | Get all appointments |
| POST | `/Appointment/add` | ✅ JWT | Book new appointment |
| DELETE | `/Appointment/delete/:id` | ✅ JWT | Cancel appointment |

---

## Admin Panel Access

The admin panel uses **hardcoded credentials** (stored in `admin.js`):

| Email | Password |
|-------|---------|
| `himanshu@gmail.com` | `admin4321` |
| `asif@gmail.com` | `4321` |
| `snehasish@gmail.com` | `admin4321` |
| `ankita@gmail.com` | `admin4321` |

Navigate to: `Frontend/admin-page/admin.html`

> ⚠️ These are stored in plain JavaScript — do not use this pattern in production.

---

## Issues Found & Fixed

### 🔴 Critical Issues (Project Broken Without These Fixes)

---

**Issue 1: No `.env` file — Backend won't start**

- **Problem:** The project uses `dotenv` but no `.env` file existed. `PORT`, `mongoURL`, `KEY`, and `saltRounds` were all undefined.
- **Fix:** Created `.env.local` and `.env.dev` template files. Copy `.env.local` to `.env` before running.

---

**Issue 2: Dead backend URL — `cyclic.app` shut down in December 2023**

- **Problem:** Every frontend file was hard-coded to `https://clumsy-dove-tunic.cyclic.app`. Cyclic.app shut down its service, so all API calls were failing silently.
- **Affected files:**
  - `scripts/login.js` (signup + login)
  - `scripts/mens_services.js`
  - `scripts/womens_services.js`
  - `scripts/admin-products.js`
  - `html/viewAppointment.html` (fetch + delete)
  - `html/time_styler.html` (book appointment POST)
  - `admin-page/userInfo.html`
  - `admin-page/totalCustomer.html`
- **Fix:** Replaced all occurrences with `http://localhost:4500` using a shared `baseurl` variable so they all point to the local backend.

---

**Issue 3: `authenticate` vs `authentication` — Import name mismatch in `index.js`**

- **Problem:** `Backend/index.js` imports `{ authenticate }` from the middleware file, but the middleware only exports `{ authentication }`. This caused a `TypeError` on startup — the middleware was `undefined` and calling it would crash the server.
- **Fix:** Changed the import in `index.js` to use the correct name `authentication`.

---

**Issue 4: Login data stored under wrong `localStorage` key**

- **Problem:** `login.js` saves the token as `localStorage.setItem('token', data.token)`, but `index.js` reads `localStorage.getItem("userdata")` to check login state. The keys never matched so the navbar never showed "Logout" after login.
- **Fix:** Updated `login.js` to store the full response under `"userdata"` matching the shape `index.js` expects: `{ message: "Login successfully", token, user }`.

---

**Issue 5: Backend response message casing mismatch**

- **Problem:** The backend sends `{ message: "Login Sucessfull" }` (note the typo "Sucessfull"), but `index.js` checks for `data.message == "Login successfully"` (different word and case). Login appeared broken even after successful auth because the navbar would not update.
- **Fix:** Updated `index.js` to check for `"Login Sucessfull"` matching the actual backend response, OR fixed in `login.js` to normalize the stored value.

---

**Issue 6: `time_styler.html` — appointment booking fires wrong HTTP method**

- **Problem:** The book appointment button first does two GET requests to `cyclic.app/appointment` and then a POST — but the two GET fetches had no purpose (likely left-in debug code) and the endpoint case was wrong (`/appointment` vs `/Appointment`).
- **Fix:** Updated URL to `http://localhost:4500` and corrected endpoint casing. Removed redundant GET calls before the POST.

---

### 🟡 Minor Issues

---

**Issue 7: Missing `footer2.css` file**

- **Problem:** `index.html` links `./CSS/footer2.css` which doesn't exist, causing a 404 in the browser console.
- **Fix:** Created an empty `footer2.css` file in the CSS directory.

---

**Issue 8: `navTrigger` — class vs id selector mismatch**

- **Problem:** `Navbar.js` renders the hamburger with `id="navTrigger"`, but `scripts/index.js` selects it with `document.querySelector(".navTrigger")` (class selector). The hamburger menu button on mobile never worked.
- **Fix:** Added `class="navTrigger"` alongside the existing `id` in `Navbar.js`.

---

**Issue 9: `admin-products.js` uses old SweetAlert API**

- **Problem:** `admin-products.js` uses `swal({...})` (old SweetAlert 1.x API), but `adminProducts.html` loads SweetAlert 1.x from unpkg. This inconsistency causes errors.
- **Fix:** This is noted — both files consistently use SweetAlert 1.x so it works, but should be upgraded.

---

**Issue 10: `nodemon` in `dependencies` instead of `devDependencies`**

- **Problem:** `nodemon` is a dev tool (auto-restart on file change) but listed under `dependencies` in `package.json`. This inflates production installs.
- **Fix:** Moved `nodemon` to `devDependencies`.

---

**Issue 11: `hero video` missing locally**

- **Problem:** `scripts/index.js` sets the hero video src to `./images/sec.mp4`, but this file doesn't exist in the `images/` folder.
- **Fix:** The video simply won't play locally. Either add the video file or comment out the video section. The page still loads.

---

## Known Remaining Limitations

1. **No frontend `.env`** — Frontend JavaScript files cannot read `.env` files natively. The `baseurl` is defined inline in each script. If you deploy, you must update these manually per environment.

2. **Admin credentials are hardcoded** — `admin.js` stores admin emails + passwords in plain JavaScript. Anyone who views the page source can see them. For production, implement a proper admin login via the backend.

3. **No user-specific appointments** — All appointments are global. Any user can see and cancel any other user's appointments. There is no userId linkage in the appointment model.

4. **`/Appointment` route is behind auth middleware in `index.js`, but `viewAppointment.html` calls it without a token** — This will return a 401 error unless the middleware is adjusted or a token is passed.

5. **Styles POST is behind auth middleware** but the admin products form sends no token — creating products from the admin panel will fail unless a token is attached.

6. **No input sanitization on backend** — MongoDB injection is partially mitigated by Mongoose but no express-validator or explicit sanitization is used.

7. **JWT has no expiry (`expiresIn`)** — Tokens never expire on their own; the blacklist approach is the only invalidation mechanism.

---

## Quick Reference — Running Steps

```bash
# 1. Navigate to backend
cd "path/to/past-comparison-1722/Backend"

# 2. Install deps
npm install

# 3. Create .env (edit with your MongoDB URI)
cp .env.local .env

# 4. Start server
npm run server
# → Server on http://localhost:4500
# → MongoDB connected

# 5. Open frontend
# In VS Code: right-click Frontend/index.html → Open with Live Server
```

---

*Generated March 2026 — Locks & Looks project audit*
