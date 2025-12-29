# Troubleshooting Signup Issues

## Recent Fixes Applied

### 1. Improved Error Handling
- Frontend now shows detailed error messages instead of just "Signup failed"
- Backend provides specific error messages for different failure scenarios

### 2. CORS Configuration
- Updated CORS to be more flexible and handle different origins
- Should now work from any frontend URL

### 3. JWT_SECRET Fallback
- Added fallback for JWT_SECRET in middleware to prevent undefined errors

## Common Signup Errors and Solutions

### Error: "Unable to connect to server"
**Cause:** Backend is not running or not accessible
**Solution:**
1. Check if backend is deployed and running on Render
2. Verify the API URL in `frontend/src/utils/api.js` is correct
3. Test backend health: Visit `https://sr-bangle.onrender.com/api/health`

### Error: "User already exists with this email"
**Cause:** Email is already registered
**Solution:** Use a different email or login with existing account

### Error: "Password must be at least 6 characters"
**Cause:** Password is too short
**Solution:** Use a password with at least 6 characters

### Error: "Server error during signup"
**Cause:** Backend database or server issue
**Solution:**
1. Check Render logs for detailed error
2. Verify MongoDB connection is working
3. Check if MongoDB Atlas has correct network access settings

## Testing Steps

1. **Check Backend Health:**
   - Visit: `https://sr-bangle.onrender.com/api/health`
   - Should return: `{"status":"OK","message":"S.R. Bangle API is running"}`

2. **Test Signup:**
   - Fill in all required fields
   - Use a unique email address
   - Password must be at least 6 characters
   - Check browser console (F12) for detailed error messages

3. **Check Browser Console:**
   - Open Developer Tools (F12)
   - Go to Console tab
   - Look for any error messages
   - Check Network tab to see the API request/response

## Debugging Tips

### Check Network Tab
1. Open browser DevTools (F12)
2. Go to Network tab
3. Try to signup
4. Look for the `/auth/signup` request
5. Check:
   - Status code (should be 201 for success)
   - Response body (shows actual error message)
   - Request payload (verify data is being sent)

### Check Render Logs
1. Go to Render dashboard
2. Select your backend service
3. Click on "Logs" tab
4. Look for error messages when signup is attempted

### Verify Environment Variables
Make sure these are set in Render:
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `NODE_ENV` - Set to `production`
- `FRONTEND_URL` - Your frontend URL (optional but recommended)

## Still Having Issues?

If signup still fails:
1. Check the exact error message shown in the browser
2. Check browser console for detailed errors
3. Check Render logs for backend errors
4. Verify MongoDB Atlas is accessible and network access is configured

