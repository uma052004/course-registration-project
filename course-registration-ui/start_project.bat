@echo off
title Course Registration Project

echo 🚀 Starting Course Registration Backend...
start cmd /k "cd ../course-registration && mvn spring-boot:run"

echo Waiting for backend to start...
timeout /t 10 > nul

echo Opening Dashboard UI...
start "" "UI-D-dashboards\index.html"

exit
