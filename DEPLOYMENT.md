# Deployment Guide for S.R. Bangle

This guide will help you deploy both the backend and frontend to production.

## Step 1: Push Code to GitHub

### 1.1 Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: S.R. Bangle e-commerce application"
```

### 1.2 Add Remote and Push
```bash
git remote add origin https://github.com/v-rathour/MyBusiness.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy Backend (Choose One Option)

### Option A: Render.com (Recommended - Free Tier Available)

1. Go to [Render.com](https://render.com) and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `sr-bangle-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB connection string (use MongoDB Atlas for cloud)
   - `JWT_SECRET`: A strong random string
   - `PORT`: `5000` (Render will override this)
   - `NODE_ENV`: `production`
6. Click "Create Web Service"
7. Copy the deployment URL (e.g., `https://sr-bangle-backend.onrender.com`)

### Option B: Railway.app

1. Go to [Railway.app](https://railway.app) and sign up/login
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add a new service and select the `backend` folder
5. Add Environment Variables (same as Render)
6. Deploy and copy the URL

### Option C: Heroku

1. Install Heroku CLI
2. Run:
```bash
cd backend
heroku create sr-bangle-backend
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_secret
git subtree push --prefix backend heroku main
```

## Step 3: Deploy Frontend

### Option A: Vercel (Recommended - Free & Fast)

1. Go to [Vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Add Environment Variable:
   - `REACT_APP_API_URL`: Your backend deployment URL (e.g., `https://sr-bangle-backend.onrender.com/api`)
6. Click "Deploy"
7. Copy the deployment URL (e.g., `https://sr-bangle.vercel.app`)

### Option B: Netlify

1. Go to [Netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub and select your repository
4. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`
5. Add Environment Variable:
   - `REACT_APP_API_URL`: Your backend URL
6. Click "Deploy site"

## Step 4: Setup MongoDB Atlas (Cloud Database)

Since local MongoDB won't work in production:

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for free account
3. Create a new cluster (Free tier: M0)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password
7. Add your IP address to the whitelist (or use 0.0.0.0/0 for all IPs)
8. Use this connection string in your backend environment variables

Example connection string:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/sr-bangle?retryWrites=true&w=majority
```

## Step 5: Update Frontend API URL

After deploying backend, update the frontend environment variable:
- In Vercel/Netlify: Go to Settings → Environment Variables
- Add/Update: `REACT_APP_API_URL` = `https://your-backend-url.com/api`

## Quick Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] MongoDB Atlas cluster created
- [ ] Backend deployed (Render/Railway/Heroku)
- [ ] Backend environment variables configured
- [ ] Frontend deployed (Vercel/Netlify)
- [ ] Frontend environment variable (API URL) configured
- [ ] Test the deployed application

## Testing Deployment

1. Visit your frontend URL
2. Try signing up a new user
3. Login with the user
4. If admin, try adding a product
5. View products page

## Important Notes

- **Never commit `.env` files** - Always use environment variables in deployment platforms
- **CORS**: Make sure your backend allows requests from your frontend domain
- **MongoDB Atlas**: Free tier has limitations but sufficient for development
- **Render Free Tier**: Services sleep after 15 minutes of inactivity (first request will be slow)

## Troubleshooting

### CORS Errors
Update `backend/server.js` to allow your frontend domain:
```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-frontend-domain.vercel.app'],
  credentials: true
}));
```

### API Connection Errors
- Check that `REACT_APP_API_URL` is set correctly
- Ensure backend is running and accessible
- Check backend logs for errors


