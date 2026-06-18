# 🔧 Detailed Setup Guide

## Table of Contents
1. [Quick Start (5 minutes)](#quick-start)
2. [Full Strapi Setup](#strapi-setup)
3. [Deploying to Production](#production-deploy)
4. [Troubleshooting](#troubleshooting)

---

## Quick Start (5 minutes) ⏱️

### Option A: Demo Mode (No Backend Required)
The frontend includes 6 demo blog posts. Just open `frontend/index.html` in your browser!

```bash
# On macOS/Linux
open frontend/index.html

# On Windows
start frontend/index.html
```

### Option B: With Strapi Backend

```bash
# 1. Install Node.js 18+ (if not installed)
# Visit: https://nodejs.org/

# 2. Setup everything with one command
./setup.sh        # macOS/Linux
setup.bat         # Windows
```

---

## Strapi Setup (15 minutes) 🛠️

### Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 2: Start Strapi for First Time

```bash
npm run develop
```

This will:
- Create the database
- Build the admin panel
- Start the server on http://localhost:1337

### Step 3: Create Admin Account

1. Visit http://localhost:1337/admin
2. Fill in the form:
   - First name: Apri
   - Last name: Yulda
   - Email: your-email@example.com
   - Password: (choose a strong password)
3. Click "Let's start"

### Step 4: Create Blog Post Content Type

1. In the left sidebar, click **Content-Type Builder**
2. Click **Create new collection type**
3. Display name: `Blog Post`
4. Click **Continue**
5. Add these fields one by one:

#### Field 1: Title
- Type: **Text**
- Name: `title`
- Check: **Required field**
- Click **Add another field**

#### Field 2: Slug
- Type: **UID**
- Name: `slug`
- Attached field: `title`
- Click **Add another field**

#### Field 3: Excerpt
- Type: **Text**
- Name: `excerpt`
- Check: **Required field**
- Click **Add another field**

#### Field 4: Content
- Type: **Rich text (Blocks)**
- Name: `content`
- Check: **Required field**
- Click **Add another field**

#### Field 5: Category
- Type: **Enumeration**
- Name: `category`
- Values (one per line):
  ```
  Community Health
  Education
  Research
  Academic Writing
  General
  ```
- Click **Add another field**

#### Field 6: Tags
- Type: **JSON**
- Name: `tags`
- Click **Add another field**

#### Field 7: Read Time
- Type: **Number**
- Name: `readTime`
- Number format: **integer**
- Click **Add another field**

#### Field 8: Featured
- Type: **Boolean**
- Name: `featured`
- Default value: **FALSE**
- Click **Add another field**

#### Field 9: Cover Image
- Type: **Media**
- Name: `coverImage`
- Select: **Single media**
- Click **Finish**

6. Click **Save** (top right)
7. Strapi will restart automatically

### Step 5: Set Public Permissions

1. Go to **Settings** (bottom left)
2. Click **Users & Permissions Plugin → Roles**
3. Click **Public** (the role, not Authenticated)
4. Scroll down to **Blog Post**
5. Check:
   - ✅ `find` (to list all posts)
   - ✅ `findOne` (to view single post)
6. Scroll to **Upload**
7. Check:
   - ✅ `find`
   - ✅ `findOne`
8. Click **Save**

### Step 6: Create Your First Blog Post

1. Go to **Content Manager** (left sidebar)
2. Click **Blog Post**
3. Click **Create new entry**
4. Fill in the form:
   - Title: "My First Blog Post"
   - Slug: auto-generated from title
   - Excerpt: "A short description of your post..."
   - Content: Write your article using the rich text editor
   - Category: Select one
   - Tags: `["tag1", "tag2"]` (JSON format)
   - Read Time: 5
   - Featured: Toggle ON for featured post
   - Cover Image: Upload an image
5. Click **Save** then **Publish**

### Step 7: Test Your Blog

1. Open `frontend/blog/index.html` in your browser
2. You should see your blog post!
3. If not, check the browser console for errors

---

## Production Deploy 🚀

### Deploy Strapi to Railway (Recommended)

```bash
# 1. Install Railway CLI
npm install -g @railway/cli

# 2. Login
railway login

# 3. Initialize project
cd backend
railway init

# 4. Add PostgreSQL database
railway add --database

# 5. Set environment variables
railway variables set APP_KEYS="key1,key2"
railway variables set API_TOKEN_SALT="your-salt"
railway variables set ADMIN_JWT_SECRET="your-secret"
railway variables set JWT_SECRET="your-secret"

# 6. Deploy
railway up

# 7. Get your URL
railway domain
```

### Deploy Frontend to Vercel

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy
cd frontend
vercel --prod

# 3. Set environment variable for API URL
vercel env add API_URL
# Enter: https://your-strapi-app.up.railway.app
```

### Or Deploy Frontend to Netlify

1. Go to https://app.netlify.com/
2. Drag and drop your `frontend` folder
3. Done! 🎉

---

## Troubleshooting 🔧

### CORS Errors
If you see "CORS policy" errors in browser console:

1. Edit `backend/config/middlewares.js`:
```javascript
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:3000', 'http://localhost:5500', 'https://your-frontend-domain.com']
    }
  },
  // ... rest of middlewares
];
```

2. Restart Strapi

### Images Not Loading
1. Check Strapi is running: http://localhost:1337
2. Check image is uploaded in Media Library
3. Check public permissions for Upload plugin
4. Try accessing image URL directly

### "Cannot find module" errors
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
```

### Port already in use
```bash
# Find and kill process on port 1337
# macOS/Linux:
lsof -ti:1337 | xargs kill -9

# Windows:
netstat -ano | findstr :1337
taskkill /PID <PID> /F
```

---

## 🎨 Customization Guide

### Change Colors
Edit `frontend/css/main.css`:
```css
:root {
  --primary: #0066CC;    /* Your brand color */
  --accent: #00D9A3;     /* Your accent color */
  --dark: #0A0E27;       /* Dark background */
  --light: #F8FAFC;      /* Light background */
}
```

### Change API URL
Edit `frontend/js/blog.js`:
```javascript
const API_BASE_URL = 'https://your-strapi-app.com';
```

### Add New Blog Categories
1. In Strapi, go to Content-Type Builder
2. Edit Blog Post → Category field
3. Add new values
4. Save and restart

---

## 📚 Resources

- [Strapi Documentation](https://docs.strapi.io/)
- [Strapi Quick Start Guide](https://docs.strapi.io/dev-docs/quick-start)
- [Railway Documentation](https://docs.railway.app/)
- [Vercel Documentation](https://vercel.com/docs)

---

Need help? Open an issue or reach out! 🙌
