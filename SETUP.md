# Setup Guide for S.R. Bangle

## Quick Start

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Setup Backend Environment

Create a `.env` file in the `backend` directory with the following content:

```env
MONGODB_URI=mongodb://localhost:27017/sr-bangle
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-2024
PORT=5000
```

**Note**: If you're using MongoDB Atlas, replace `MONGODB_URI` with your Atlas connection string.

### 3. Start MongoDB

Make sure MongoDB is running on your system. If you're using MongoDB locally:

```bash
# On Windows (if MongoDB is installed as a service, it should start automatically)
# Or start it manually:
mongod
```

### 4. Start Backend Server

```bash
cd backend
npm start
```

The backend will run on `http://localhost:5000`

### 5. Start Frontend Development Server

Open a new terminal:

```bash
cd frontend
npm start
```

The frontend will run on `http://localhost:3000` and automatically open in your browser.

## Testing the Application

### 1. Create an Admin Account

1. Go to `http://localhost:3000/signup`
2. Fill in the form:
   - Name: Your name
   - Email: admin@example.com
   - Role: Select "Admin"
   - Password: Enter a password (min 6 characters)
3. Click "Sign Up"

### 2. Create a Seller Account

1. Go to `http://localhost:3000/signup`
2. Fill in the form:
   - Name: Your name
   - Email: seller@example.com
   - Role: Select "Seller"
   - Password: Enter a password (min 6 characters)
3. Click "Sign Up"

### 3. Add Products (Admin Only)

1. Login as Admin
2. Click "Add Product" in the navbar
3. Fill in the product details:
   - Product Name: e.g., "Elegant Gold Bangle Set"
   - Price: e.g., 2999
   - Category: e.g., "Traditional"
   - Image URL: Use any image URL from Unsplash or Google Images
   - Description: Describe the product
4. Click "Add Product"

### 4. View Products

1. Navigate to "Products" in the navbar
2. You'll see all added products in a beautiful grid layout

## Troubleshooting

### MongoDB Connection Error

- Make sure MongoDB is running
- Check the `MONGODB_URI` in your `.env` file
- If using MongoDB Atlas, ensure your IP is whitelisted

### Port Already in Use

- Backend: Change `PORT` in `.env` file
- Frontend: React will automatically suggest using a different port

### CORS Errors

- Make sure the backend is running before starting the frontend
- Check that the API URL in frontend matches your backend port

## Image URLs for Testing

You can use these sample image URLs for testing:

- `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80`
- `https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80`
- `https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=80`

Or search for "bangles" on Unsplash and use any image URL.


