#!/bin/bash

# Simple Full Next.js Deployment for Hostinger
echo "🚀 Starting Next.js deployment to Hostinger..."

# Build the application
echo "📦 Building Next.js application..."
cd apps/web
npm run build
cd ../..

# Create deployment package
echo "📦 Creating deployment package..."
rm -rf deploy_package
mkdir deploy_package

# Copy essential files
cp -r apps/web/.next deploy_package/
cp -r apps/web/public deploy_package/
cp -r apps/web/pages deploy_package/
cp -r apps/web/styles deploy_package/
cp -r apps/web/components deploy_package/
cp -r apps/web/lib deploy_package/
cp -r apps/web/hooks deploy_package/
cp apps/web/next.config.js deploy_package/
cp apps/web/package.json deploy_package/

# Create a simple package.json for production
cat > deploy_package/package.json << 'EOF'
{
  "name": "codecrafterscreators",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "next start -p 3000",
    "dev": "next dev -p 3000"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.4",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.5",
    "typescript": "^5.2.2"
  }
}
EOF

# Create startup script
cat > deploy_package/start.sh << 'EOF'
#!/bin/bash
export PATH="$HOME/nodejs/node-v20.18.0-linux-x64/bin:$PATH"
cd ~/domains/codecrafterscreators.com/app
npm install
nohup npm start > app.log 2>&1 &
echo "Application started. Check app.log for details."
EOF

chmod +x deploy_package/start.sh

# Create stop script
cat > deploy_package/stop.sh << 'EOF'
#!/bin/bash
pkill -f "next start"
echo "Application stopped."
EOF

chmod +x deploy_package/stop.sh

# Deploy to server
echo "🌐 Uploading to Hostinger..."
ssh -p 65002 u927641836@217.21.90.2 "mkdir -p domains/codecrafterscreators.com/app"
scp -P 65002 -r deploy_package/* u927641836@217.21.90.2:domains/codecrafterscreators.com/app/

# Install dependencies and start
echo "📦 Installing dependencies on server..."
ssh -p 65002 u927641836@217.21.90.2 "
export PATH=\"\$HOME/nodejs/node-v20.18.0-linux-x64/bin:\$PATH\" && 
cd domains/codecrafterscreators.com/app && 
npm install &&
pkill -f 'next start' || true &&
nohup npm start > app.log 2>&1 &
echo 'Application deployed and started!'
"

# Cleanup
rm -rf deploy_package

echo "✅ Deployment complete!"
echo "🌍 Your Next.js app should be running at: http://codecrafterscreators.com:3000"
echo "📋 To check status: ssh -p 65002 u927641836@217.21.90.2 'cd domains/codecrafterscreators.com/app && tail app.log'"
