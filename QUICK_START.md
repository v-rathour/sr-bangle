# Quick Start Guide - S.R. Bangle

## Prerequisites
- Node.js installed (v14 or higher)
- MongoDB running on your system

## Step 1: Install Dependencies

### Backend
Open a terminal and run:
```bash
cd backend
npm install
```

### Frontend
Open another terminal and run:
```bash
cd frontend
npm install
```

## Step 2: Start MongoDB
Make sure MongoDB is running on your system.

## Step 3: Start the Servers

### Terminal 1 - Backend Server
```bash
cd backend
npm start
```
The backend will run on `http://localhost:5000`

### Terminal 2 - Frontend Server
```bash
cd frontend
npm start
```
The frontend will automatically open in your browser at `http://localhost:3000`

## Alternative: Use Batch Files (Windows)

You can also use the provided batch files:

1. **Double-click `start-backend.bat`** - Starts the backend server
2. **Double-click `start-frontend.bat`** - Starts the frontend server

Or use `start-project.bat` for installation instructions.

## Verify It's Working

1. Backend: Visit `http://localhost:5000/api/health` - Should show "S.R. Bangle API is running"
2. Frontend: Should automatically open at `http://localhost:3000`

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check if MongoDB is accessible at `mongodb://127.0.0.1:27017`

### Port Already in Use
- Backend: Change PORT in backend/.env file
- Frontend: React will suggest an alternative port automatically

### Dependencies Not Installing
- Make sure you have Node.js and npm installed
- Try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again


