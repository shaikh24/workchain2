
# WorkChain — Deploy-Ready Package

This ZIP is deploy-ready. Server `.env` already contains the Pi credentials you provided.

## Quick start (Local / Termux)

1. Server
```bash
cd server
npm install
npm start
```

2. Client (optional local serve)
```bash
cd client
# client is simple static HTML; in deploy mode backend will serve it
```

## Deploy on Render (recommended)
- Create a Web Service for the **server**:
  - Root directory: `server`
  - Build command: `npm install`
  - Start command: `npm start`
  - Env: Already baked into server/.env but it's safer to set them in Render Env Vars too.

- Create a Static Site for the **client**:
  - Root directory: `client`
  - Build command: `npm install && npm run build`
  - Publish directory: `dist`

