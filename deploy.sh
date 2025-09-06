#!/bin/bash

# Deployment script for Hostinger
# This script builds the application and deploys it via SSH

echo "🚀 Starting deployment to Hostinger..."

# Build the application
echo "📦 Building application..."
cd apps/web
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Deploy to Hostinger via SSH
echo "🌐 Deploying to Hostinger..."

# Remove old files and upload new ones
ssh -p 65002 u927641836@217.21.90.2 "rm -rf domains/codecrafterscreators.com/public_html/*"

# Upload the built files
scp -P 65002 -r out/* u927641836@217.21.90.2:domains/codecrafterscreators.com/public_html/

echo "✅ Deployment complete!"
echo "🌍 Your site should be live at: https://codecrafterscreators.com"
