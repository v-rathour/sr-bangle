@echo off
echo ========================================
echo   S.R. Bangle - Starting Application
echo ========================================
echo.
echo This will start both backend and frontend servers.
echo Make sure MongoDB is running before starting!
echo.
pause

echo.
echo [1/2] Installing backend dependencies...
cd backend
if not exist node_modules (
    call npm install
)
echo.
echo [2/2] Installing frontend dependencies...
cd ..\frontend
if not exist node_modules (
    call npm install
)
cd ..

echo.
echo ========================================
echo   Installation Complete!
echo ========================================
echo.
echo Please run the following in TWO separate terminals:
echo.
echo Terminal 1 (Backend):
echo   cd backend
echo   npm start
echo.
echo Terminal 2 (Frontend):
echo   cd frontend
echo   npm start
echo.
pause


