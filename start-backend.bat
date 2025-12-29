@echo off
echo Starting S.R. Bangle Backend Server...
cd backend
if not exist node_modules (
    echo Installing backend dependencies...
    call npm install
)
echo Starting backend server on port 5000...
call npm start
pause


