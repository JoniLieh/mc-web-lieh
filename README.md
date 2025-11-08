# mc-web-lieh

Public webpage to join the minecraft server  
🌐 [https://mc.joni.li](https://mc.joni.li)

## 🏗️ Architecture

This is a **statically generated Nuxt 3 application** served via nginx in Docker.

### Routing Flow
```
Internet (HTTPS) 
  → Traefik (Port 443, TLS termination)
    → mc.joni.li route
      → localhost:30000
        → Docker Container: nginx:alpine
          → Static files (/usr/share/nginx/html)
```

### Tech Stack
- **Frontend**: Nuxt 3 + Vuetify 3 + TypeScript
- **Build**: Bun + SSG (Static Site Generation)
- **Server**: nginx:alpine (~15MB image)
- **Deployment**: Docker + GitHub Actions
- **Reverse Proxy**: Traefik (handles HTTPS)

## 🚀 Setup on Server

### Initial Setup
Location: `/home/docker_user/mc-web-lieh`

No custom network needed - uses default Docker bridge.

### Traefik Configuration
Ensure your Traefik config has:
```yaml
services:
  nuxt-mc-web-lieh:
    loadBalancer:
      servers:
        - url: "http://localhost:30000"
```

### Deployment
Automatic via GitHub Actions on push to `main` branch.

Manual deployment:
```bash
cd /home/docker_user/mc-web-lieh
git pull origin main
./deploy.sh
```

The `deploy.sh` script will:
1. Stop old container
2. Clean up networks and images
3. Build new static site (via `bun run generate`)
4. Start nginx container

## 💻 Local Development

```bash
# Install dependencies
bun install

# Development server with hot reload
bun run dev

# Generate static site (for production testing)
bun run generate

# Preview generated static site
bun run preview
```

## 🐳 Docker

```bash
# Build and run locally
docker compose up -d --build

# View logs
docker compose logs -f

# Stop
docker compose down
```

### Container Details
- **Port Mapping**: `127.0.0.1:30000:80`
- **Resource Limits**: 128MB RAM, 0.5 CPU
- **Health Check**: Built-in nginx health check
- **Image Size**: ~15MB (nginx:alpine + static files)

## 📁 Project Structure

```
mc-web-lieh/
├── app/
│   ├── components/     # Vue components (vanilla, bmc, atm)
│   ├── pages/          # Routes (auto-generated)
│   ├── layouts/        # Layout templates
│   ├── plugins/        # Vuetify, Pinia plugins
│   ├── composables/    # Reusable composition functions
│   ├── assets/         # SCSS, themes
│   └── utils/          # Helper functions
├── public/             # Static assets (images, robots.txt)
├── Dockerfile          # Multi-stage build (bun + nginx)
├── docker-compose.yml  # Container orchestration
├── nuxt.config.ts      # Nuxt configuration
└── deploy.sh           # Deployment script
```

## 🔧 Configuration

### Environment
- **NODE_ENV**: `production` for builds
- **Build Tool**: Bun (faster than npm/yarn)
- **SSR**: Enabled during build, disabled in production (SSG)

### Key Features
- ✅ PWA Support (Progressive Web App)
- ✅ Vuetify 3 (Material Design)
- ✅ TypeScript
- ✅ Auto-imports (composables, components)
- ✅ Pinia (state management)
- ✅ Security headers
- ✅ Gzip compression

## 📚 Documentation

- [Nuxt 3 Docs](https://nuxt.com/docs)
- [Vuetify 3 Docs](https://vuetifyjs.com/)
- [Bun Docs](https://bun.sh/docs)

## 🐛 Troubleshooting

### Build fails with DNS errors
The Dockerfile uses `network: host` during build to avoid DNS issues.

### Too many redirects
Ensure nginx config has `absolute_redirect off` and `port_in_redirect off`.

### Container won't start
Check logs: `docker compose logs -f`
Verify port 30000 is not already in use: `netstat -tuln | grep 30000`

### Changes not visible
Clear browser cache or use incognito mode (Service Worker might cache old version).
