#!/bin/bash
set -e

echo "🛑 Stopping old container..."
docker compose down || true

echo "🗑️ Removing old images..."
docker image prune -f

echo "🔨 Building new image..."
docker compose build --no-cache

echo "🚀 Starting container..."
docker compose up -d

echo "⏳ Waiting for container to be healthy..."
sleep 5

echo "✅ Checking container status..."
docker compose ps

echo "📊 Container logs (last 20 lines):"
docker compose logs --tail=20

echo "✅ Deployment completed!"