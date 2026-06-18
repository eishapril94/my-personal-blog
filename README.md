# 🎨 Apri Yulda - Portfolio & Blog

A modern, glassmorphism-styled portfolio website with a full-featured blog system powered by Strapi headless CMS.

## 📁 Project Structure

```
apri-yulda-blog/
├── frontend/           # Static HTML/CSS/JS website
│   ├── index.html      # Main portfolio page
│   ├── css/
│   │   ├── main.css    # Portfolio styles
│   │   └── blog.css    # Blog styles (glassmorphism)
│   ├── js/
│   │   ├── main.js     # Portfolio animations & effects
│   │   └── blog.js     # Blog API integration
│   └── blog/
│       ├── index.html  # Blog listing page
│       └── post.html   # Blog detail page
├── backend/            # Strapi headless CMS
│   ├── package.json
│   ├── config/
│   └── src/
└── README.md
```

## ✨ Features

### Portfolio
- 🌊 Animated gradient hero with floating blobs
- 📊 Animated number counters
- 🎯 Text scramble effect on hero subtitle
- 🖱️ Custom cursor with hover effects
- 📜 Scroll progress bar
- 🧲 Magnetic button effects
- ✨ AOS scroll animations

### Blog
- 🔮 Glassmorphism card design with backdrop blur
- 🔍 Real-time search & category filtering
- ⭐ Featured post highlight
- 📱 Fully responsive grid layout
- 📧 Newsletter subscription form
- 🔗 Social sharing buttons
- 📖 Related articles
- 🦴 Skeleton loading states

### Admin Dashboard (Strapi)
- 📝 Rich text editor for blog posts
- 🖼️ Media library for images
- 🏷️ Category & tag management
- 👤 Author profiles
- 🔐 Role-based access control
- 🚀 REST API + GraphQL

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### 1. Start the Frontend (Static)

The frontend is pure HTML/CSS/JS - just open in a browser or use a local server:

```bash
# Option 1: Direct open (no server needed)
open frontend/index.html

# Option 2: Use Python's built-in server
cd frontend
python3 -m http.server 3000
# Visit http://localhost:3000

# Option 3: Use VS Code Live Server extension
```

### 2. Start the Backend (Strapi)

```bash
cd backend

# Install dependencies
npm install

# Start development server
npm run develop

# First time setup:
# 1. Visit http://localhost:1337/admin
# 2. Create your admin account
# 3. Create a "Blog Post" collection type (see setup below)
```

### 3. Configure CORS (for local development)

Edit `backend/config/middlewares.js`:

```javascript
module.exports = [
  // ... other middlewares
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:3000', 'http://localhost:5500', 'http://127.0.0.1:5500']
    }
  },
  // ... rest
];
```

## 🛠️ Strapi Setup Guide

### Step 1: Create Content Type "Blog Post"

1. Go to **Content-Type Builder** (http://localhost:1337/admin)
2. Click **Create new collection type**
3. Name: `Blog Post` → API ID: `blog-post`
4. Add these fields:

| Field Name | Type | Settings |
|---|---|---|
| `title` | Text | Required |
| `slug` | UID | Attached to title |
| `excerpt` | Text | Required, Short text |
| `content` | Rich Text (Blocks) | Required |
| `category` | Enumeration | Values: Community Health, Education, Research, Academic Writing, General |
| `tags` | JSON | |
| `readTime` | Number | Integer |
| `featured` | Boolean | Default: false |
| `publishedAt` | Date | |
| `coverImage` | Media | Single image |
| `author` | Relation | One-to-one with User |

5. Click **Save**

### Step 2: Set Permissions

1. Go to **Settings → Users & Permissions Plugin → Roles → Public**
2. Under **Blog Post**, check:
   - ✅ `find`
   - ✅ `findOne`
3. Under **Upload**, check:
   - ✅ `find`
   - ✅ `findOne`
4. Click **Save**

### Step 3: Create Your First Post

1. Go to **Content Manager → Blog Post → Create new entry**
2. Fill in the fields
3. Publish the post
4. Refresh your frontend blog page!

## 🎨 Customization

### Colors
Edit CSS variables in `frontend/css/main.css`:

```css
:root {
  --primary: #0066CC;
  --accent: #00D9A3;
  --dark: #0A0E27;
  --light: #F8FAFC;
  --gray: #64748B;
}
```

### API URL
Change the API endpoint in `frontend/js/blog.js`:

```javascript
const API_BASE_URL = 'http://localhost:1337';  // Local
// const API_BASE_URL = 'https://your-strapi-app.com';  // Production
```

## 📦 Deployment (Free — Vercel + Render + Supabase)

### Architecture
```
Vercel (frontend)  ──►  Render (Strapi API)  ──►  Supabase (PostgreSQL)
   free static            free Node.js hosting        free 500MB DB
   hosting               (spins down when idle)       (persistent data)
```

All three services are **truly free** (no time-limited trials).

---

### Step 1: Create a Supabase Project (Database)

1. Go to [supabase.com](https://supabase.com) and sign up
2. Click **New project** → name it `apri-yulda-blog`
3. Choose a region close to you (e.g., Singapore for Indonesia)
4. Set a secure database password — **save it somewhere safe**
5. Wait ~2 minutes for the project to spin up
6. Go to **Project Settings → Database → Connection string**
7. Copy the **URI** — it looks like:
   ```
   postgresql://postgres:YOUR_PASSWORD@db.xxxxx.supabase.co:5432/postgres
   ```
8. Extract these values from that URI:

| Variable | Value |
|----------|-------|
| `DATABASE_HOST` | `db.xxxxx.supabase.co` |
| `DATABASE_PORT` | `5432` |
| `DATABASE_NAME` | `postgres` |
| `DATABASE_USERNAME` | `postgres` |
| `DATABASE_PASSWORD` | (your password) |

9. Go to **Project Settings → API** and find:
   - `Project URL` (e.g., `https://xxxxx.supabase.co`)
   - `anon public` key (not needed for Strapi, but useful later)

---

### Step 2: Deploy Backend (Strapi) to Render

1. Push your project to a **GitHub repository**
2. Go to [render.com](https://render.com) and sign up (GitHub login)
3. Click **New + → Web Service**
4. Connect your GitHub repo → select the `backend` directory
5. Configure:

| Setting | Value |
|---------|-------|
| **Name** | `apri-yulda-blog-api` |
| **Runtime** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run start` |
| **Plan** | **Free** |

6. Add **Environment Variables** (click "Advanced" → "Add Environment Variable"):

| Key | Value |
|-----|-------|
| `NODE_VERSION` | `20` |
| `DATABASE_CLIENT` | `postgres` |
| `DATABASE_HOST` | (your Supabase host) |
| `DATABASE_PORT` | `5432` |
| `DATABASE_NAME` | `postgres` |
| `DATABASE_USERNAME` | `postgres` |
| `DATABASE_PASSWORD` | (your Supabase password) |
| `DATABASE_SSL` | `true` |
| `DATABASE_SSL_REJECT_UNAUTHORIZED` | `false` |
| `HOST` | `0.0.0.0` |
| `PORT` | `1337` |
| `PUBLIC_URL` | `https://your-app-name.onrender.com` |
| `APP_KEYS` | Generate: `openssl rand -base64 24` (run this locally) |
| `API_TOKEN_SALT` | Generate: `openssl rand -base64 24` |
| `ADMIN_JWT_SECRET` | Generate: `openssl rand -base64 24` |
| `TRANSFER_TOKEN_SALT` | Generate: `openssl rand -base64 24` |
| `JWT_SECRET` | Generate: `openssl rand -base64 24` |
| `PROXY_ENABLED` | `true` |

   > **Generate secrets** on your local machine with: `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"` (run 5 times for the 5 secret keys)

7. Click **Create Web Service**
8. Wait ~5 minutes for build + deploy
9. Once live, visit `https://your-app-name.onrender.com/admin` to create your admin account

---

### Step 3: Configure Strapi Content Types & Permissions

1. Go to `https://your-app-name.onrender.com/admin`
2. Create your admin account
3. Create a **Blog Post** collection type (if not already done):
   - Fields: `title` (Text), `slug` (UID from title), `excerpt` (Text), `content` (Rich Text), `category` (Enumeration), `tags` (JSON), `readTime` (Number), `featured` (Boolean), `publishedAt` (Date), `coverImage` (Media), `author` (Relation)
4. Go to **Settings → Users & Permissions → Roles → Public**
5. Enable for **Blog Post**: `find` and `findOne`
6. Enable for **Upload**: `find` and `findOne`
7. Create a few blog posts

---

### Step 4: Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (GitHub login)
2. Click **Add New → Project**
3. Import your GitHub repository
4. Configure:

| Setting | Value |
|---------|-------|
| **Root Directory** | `frontend` |
| **Build Command** | (leave empty — it's static) |
| **Output Directory** | `.` |

5. Click **Deploy**
6. Once deployed, go to your Vercel project **Settings → Domains** and optionally add a custom domain

---

### Step 5: Connect Frontend to Backend

1. In your Vercel project, go to the deployed site URL (e.g., `https://your-project.vercel.app`)
2. Edit `frontend/js/config.js` in your repo:
   ```javascript
   const APP_CONFIG = {
     API_BASE_URL: 'https://your-app-name.onrender.com',
   };
   ```
3. Commit and push — Vercel auto-deploys
4. Done! Your blog is now live with:

| URL | What |
|-----|------|
| `https://your-project.vercel.app` | Frontend (portfolio + blog) |
| `https://your-app-name.onrender.com/admin` | Strapi admin (manage posts) |

---

### Important Notes

- **Render free tier spins down** after 15 min of inactivity. The first request after idle takes ~30s to wake up. This is fine for a personal blog — data is safe in Supabase.
- **Supabase free tier** includes 500MB database. For a blog with text + images hosted elsewhere, this lasts years.
- **Images**: Use external URLs (Unsplash, Imgur) rather than uploading to Strapi to save Supabase storage.

### Upgrade Path (when ready)
- **Render** → $7/month (no spin-down)
- **Supabase** → $25/month (8GB database, more features)
- **Vercel** → Pro ($20/month, more bandwidth)

## 📝 Adding Demo Data

If you want to test without Strapi, the frontend includes 6 demo posts built-in. Just open the blog page and it will work immediately!

## 🐛 Troubleshooting

| Issue | Solution |
|---|---|
| CORS errors | Add your frontend URL to Strapi CORS config |
| Images not loading | Check that media files are publicly accessible |
| API not found | Ensure Strapi is running on port 1337 |
| Styles broken | Check that CSS files are loading (check console) |

## 📄 License

MIT License - feel free to use and modify!

---

Built with ❤️ for public health and community empowerment.
