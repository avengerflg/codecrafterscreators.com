#!/bin/bash
export PATH=~/nodejs/node-v20.18.0-linux-x64/bin:$PATH
export PORT=3001

# Kill any existing process
if [ -f app.pid ]; then
    kill $(cat app.pid) 2>/dev/null
    rm app.pid
fi

# Start the application
echo "Starting Next.js application on port 3001..."
nohup npm start > app.log 2>&1 &
echo $! > app.pid
echo "Application started on port 3001"
echo "PID: $(cat app.pid)"
echo "Log file: app.log"
