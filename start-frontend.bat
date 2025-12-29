@echo off
echo Starting S.R. Bangle Frontend Server...
cd frontend
if not exist node_modules (
    echo Installing frontend dependencies...
    call npm install
)
echo Starting frontend development server on port 3000...
call npm start
pause


