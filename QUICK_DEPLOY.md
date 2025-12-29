# Quick Deployment Steps

## 1. Push to GitHub

Run this command in your project root:
```bash
git add .
git commit -m "S.R. Bangle: Complete e-commerce application"
git push -u origin main
```

Or double-click `push-to-github.bat` (Windows)

## 2. Deploy Backend to Render.com (Free)

1. Go to https://render.com and sign up/login
2. Click "New +" → "Web Service"
3. Connect GitHub → Select "MyBusiness" repository
4. Settings:
   - **Name**: `sr-bangle-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Environment Variables (Add these):
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sr-bangle
   JWT_SECRET=your-super-secret-jwt-key-change-this
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-url.vercel.app
   ```
6. Click "Create Web Service"
7. **Copy the URL** (e.g., `https://sr-bangle-backend.onrender.com`)

## 3. Setup MongoDB Atlas (Free Cloud Database)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up (Free tier available)
3. Create Cluster → Choose FREE (M0)
4. Create Database User (username/password)
5. Network Access → Add IP Address → "Allow Access from Anywhere" (0.0.0.0/0)
6. Click "Connect" → "Connect your application"
7. Copy connection string
8. Replace `<password>` with your database password
9. Use this in Render's `MONGODB_URI` environment variable

## 4. Deploy Frontend to Vercel (Free)

1. Go to https://vercel.com and sign up/login
2. Click "Add New Project"
3. Import GitHub repository → Select "MyBusiness"
4. Settings:
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Environment Variables:
   ```
   REACT_APP_API_URL=https://sr-bangle-backend.onrender.com/api
   ```
   (Use your actual backend URL from Step 2)
6. Click "Deploy"
7. **Copy the URL** (e.g., `https://sr-bangle.vercel.app`)

## 5. Update Backend CORS

Go back to Render.com → Your backend service → Environment Variables:
- Add/Update: `FRONTEND_URL` = `https://your-frontend-url.vercel.app`

## 6. Test Your Deployment

1. Visit your frontend URL
2. Sign up a new user
3. Login
4. If admin, add a product
5. View products

## Your Deployment URLs

- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://your-backend.onrender.com`
- **API Health Check**: `https://your-backend.onrender.com/api/health`

## Troubleshooting

### Backend not connecting to MongoDB
- Check MongoDB Atlas IP whitelist (should allow all: 0.0.0.0/0)
- Verify connection string has correct password
- Check Render logs for errors

### Frontend can't connect to backend
- Verify `REACT_APP_API_URL` is set correctly in Vercel
- Check backend CORS settings
- Ensure backend URL doesn't have trailing slash

### CORS Errors
- Make sure `FRONTEND_URL` is set in backend environment variables
- Check that frontend URL matches exactly (including https://)


