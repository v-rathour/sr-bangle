@echo off
echo ========================================
echo   Pushing S.R. Bangle to GitHub
echo ========================================
echo.

echo Checking git status...
git status

echo.
echo Adding all files...
git add .

echo.
echo Committing changes...
git commit -m "S.R. Bangle: Complete e-commerce application with React, Node.js, Express, and MongoDB"

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo   Done! Check your GitHub repository
echo ========================================
pause


