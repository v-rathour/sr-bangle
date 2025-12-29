# API Configuration

## Current Backend URL

The frontend is configured to use the deployed backend:
```
https://sr-bangle.onrender.com/api
```

## For Local Development

If you want to use a local backend during development, create a `.env` file in the `frontend` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

This will override the default production URL when running `npm start`.

## For Production Deployment

The default API URL is set to:
```
https://sr-bangle.onrender.com/api
```

If you need to change it, you can:
1. Set `REACT_APP_API_URL` environment variable in your deployment platform (Vercel/Netlify)
2. Or update `frontend/src/utils/api.js` directly

## Current Configuration

The API configuration is in `frontend/src/utils/api.js`:
- Default: `https://sr-bangle.onrender.com/api`
- Can be overridden with `REACT_APP_API_URL` environment variable

