#!/bin/bash

# Simple Full Next.js Deployment script for Hostinger
echo "🚀 Starting full Next.js deployment to Hostinger..."

# Build the application locally
echo "📦 Building application locally..."
cd apps/web
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Go back to root directory
cd ../..

# Deploy to Hostinger via SSH
echo "🌐 Deploying to Hostinger..."

# Upload the built .next directory
echo "📤 Uploading built application..."
scp -P 65002 -r apps/web/.next u927641836@217.21.90.2:domains/codecrafterscreators.com/public_html/apps/web/

# Upload updated configuration files
echo "📤 Uploading configuration files..."
scp -P 65002 apps/web/next.config.js u927641836@217.21.90.2:domains/codecrafterscreators.com/public_html/apps/web/
scp -P 65002 apps/web/package.json u927641836@217.21.90.2:domains/codecrafterscreators.com/public_html/apps/web/
scp -P 65002 .htaccess u927641836@217.21.90.2:domains/codecrafterscreators.com/public_html/

# Upload and run startup script
echo "📤 Uploading startup script..."
scp -P 65002 start.sh u927641836@217.21.90.2:domains/codecrafterscreators.com/public_html/apps/web/

# Restart the application
echo "🔄 Restarting application..."
ssh -p 65002 u927641836@217.21.90.2 "cd domains/codecrafterscreators.com/public_html/apps/web && chmod +x start.sh && ./start.sh"

echo "✅ Deployment complete!"
echo "🌍 Your app should be live at: https://codecrafterscreators.com"
echo "📊 Application running on port 3001 internally"
echo "📝 Check logs: ssh -p 65002 u927641836@217.21.90.2 'cd domains/codecrafterscreators.com/public_html/apps/web && tail -f app.log'"
