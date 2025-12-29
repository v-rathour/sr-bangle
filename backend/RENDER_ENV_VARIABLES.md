# Environment Variables for Render.com Deployment

Copy and paste these environment variables into Render.com's Environment Variables section:

## Required Variables

### 1. MONGODB_URI
```
mongodb+srv://aryanrathour696_db_user:kQCQfYCDLuWFybq3@sr-bangle.j1u83pr.mongodb.net/sr-bangle?retryWrites=true&w=majority
```

### 2. JWT_SECRET
```
your-super-secret-jwt-key-change-this-in-production-2024
```
**Note:** Change this to a strong random string for security. You can generate one using:
- Online: https://randomkeygen.com/
- Or use: `openssl rand -base64 32` in terminal

### 3. NODE_ENV
```
production
```

### 4. FRONTEND_URL
```
https://your-frontend-url.vercel.app
```
**Note:** Add this after you deploy your frontend. Replace with your actual Vercel/Netlify URL.

### 5. PORT
```
5000
```
**Note:** Render automatically sets this, but you can add it for clarity.

---

## How to Add in Render.com

1. Go to your web service in Render dashboard
2. Click on "Environment" tab (or scroll to "Environment Variables" section)
3. Click "Add Environment Variable" for each variable above
4. Enter the **NAME** (left field) and **VALUE** (right field)
5. Click "Save Changes" after adding all variables
6. Render will automatically redeploy with new environment variables

---

## Quick Copy-Paste Format

For easy copy-paste, here's the format:

**Variable Name:** `MONGODB_URI`
**Variable Value:** `mongodb+srv://aryanrathour696_db_user:kQCQfYCDLuWFybq3@sr-bangle.j1u83pr.mongodb.net/sr-bangle?retryWrites=true&w=majority`

**Variable Name:** `JWT_SECRET`
**Variable Value:** `your-super-secret-jwt-key-change-this-in-production-2024`

**Variable Name:** `NODE_ENV`
**Variable Value:** `production`

**Variable Name:** `FRONTEND_URL`
**Variable Value:** `https://your-frontend-url.vercel.app` (Update after frontend deployment)

**Variable Name:** `PORT`
**Variable Value:** `5000`

---

## Important Notes

- ✅ The MongoDB connection string includes the database name `sr-bangle`
- ✅ Make sure MongoDB Atlas has your IP whitelisted (or use 0.0.0.0/0 for all IPs)
- ✅ Change JWT_SECRET to a strong random string before production
- ✅ Add FRONTEND_URL after deploying frontend to avoid CORS issues
- ✅ Render will automatically restart your service after adding environment variables
