# S.R. Bangle - E-Commerce Web Application

A modern e-commerce platform for selling bangles, built with React.js, Node.js, Express.js, and MongoDB.

## Features

- **Home Page**: Professional UI with banner section and featured product collections
- **Authentication**: JWT-based authentication with role-based access (Admin & Seller)
- **Product Management**: Admin can add products, all users can view products
- **Product Listing**: Beautiful grid layout with product cards
- **Responsive Design**: Fully responsive for mobile and desktop devices

## Tech Stack

- **Frontend**: React.js, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)

## Project Structure

```
MyBusiness/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── products.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   ├── Products.js
│   │   │   └── AddProduct.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── utils/
│   │   │   └── api.js
│   │   └── App.js
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/sr-bangle
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000
```

4. Start the backend server:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Create a `.env` file in the frontend directory (optional):
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## User Roles

### Admin
- Can add products
- Can view products
- Can buy products

### Seller
- Can view products
- Can buy products
- Cannot add products

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires authentication)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Add new product (Admin only, requires authentication)

## Default Configuration

- Backend runs on port 5000
- Frontend runs on port 3000
- MongoDB connection: `mongodb://localhost:27017/sr-bangle`

## Notes

- Make sure MongoDB is running before starting the backend
- For production, change the JWT_SECRET to a strong, random string
- Image URLs can be from any external source (Unsplash, Google Images, etc.)

## Future Enhancements

- Payment gateway integration
- Shopping cart functionality
- Order management
- User profile management
- Product search and filtering
- Product reviews and ratings
