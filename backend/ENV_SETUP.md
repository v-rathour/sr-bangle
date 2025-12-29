# Environment Variables Setup Guide

## For Local Development

Create a `.env` file in the `backend` folder with:

```env
MONGODB_URI=mongodb+srv://aryanrathour696_db_user:kQCQfYCDLuWFybq3@sr-bangle.j1u83pr.mongodb.net/sr-bangle?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-2024
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

## For Render.com Deployment

Add these environment variables in Render dashboard:

| Variable Name | Variable Value |
|--------------|----------------|
| `MONGODB_URI` | `mongodb+srv://aryanrathour696_db_user:kQCQfYCDLuWFybq3@sr-bangle.j1u83pr.mongodb.net/sr-bangle?retryWrites=true&w=majority` |
| `JWT_SECRET` | `your-super-secret-jwt-key-change-this-in-production-2024` |
| `NODE_ENV` | `production` |
| `FRONTEND_URL` | `https://your-frontend-url.vercel.app` (Add after frontend deployment) |
| `PORT` | `5000` (Optional - Render sets this automatically) |

## Step-by-Step: Adding to Render

1. **Go to Render Dashboard** → Your Web Service
2. **Click "Environment" tab** (or scroll to Environment Variables section)
3. **For each variable:**
   - Click "Add Environment Variable"
   - Enter NAME in left field
   - Enter VALUE in right field
   - Click outside to save
4. **After adding all variables**, Render will automatically redeploy

## MongoDB Atlas Connection String Breakdown

Your connection string:
```
mongodb+srv://aryanrathour696_db_user:kQCQfYCDLuWFybq3@sr-bangle.j1u83pr.mongodb.net/sr-bangle?retryWrites=true&w=majority
```

- **Username:** `aryanrathour696_db_user`
- **Password:** `kQCQfYCDLuWFybq3`
- **Cluster:** `sr-bangle.j1u83pr.mongodb.net`
- **Database:** `sr-bangle` (added at the end)
- **Options:** `retryWrites=true&w=majority`

## Security Notes

⚠️ **Important:**
- Never commit `.env` file to GitHub (it's in .gitignore)
- Change `JWT_SECRET` to a strong random string
- Make sure MongoDB Atlas Network Access allows Render's IPs (or use 0.0.0.0/0)

## Testing Connection

After deployment, check Render logs to see:
- ✅ "MongoDB Connected Successfully" = Working
- ❌ "MongoDB connection error" = Check connection string and network access
