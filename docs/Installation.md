# Installation & Deployment Guide

This guide outlines the system prerequisites, local development environment setup, build procedures, and production deployment strategies for the **RAWAN (Ruang Antisipasi Waspada Anak Nusantara)** platform.

---

## 📋 1. System Prerequisites

Before proceeding with the installation, verify that your development or hosting environment satisfies the following requirements:

### Software Requirements:
- **Node.js**: Version `18.0.0` or higher (Active LTS `v20.x` recommended).
- **Package Manager**: `npm` (v9.x or higher) / `pnpm` / `yarn`.
- **Git**: Version 2.x or higher.
- **Web Browser**: Modern browser with **WebGL 2.0** support (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari 15+).

### Hardware Requirements:
- **RAM**: Minimum 4 GB (8 GB or higher recommended for smooth 3D rendering).
- **GPU**: Hardware acceleration enabled.

---

## 🛠️ 2. Local Setup & Installation

### Step 1: Clone the Repository
Open your terminal and clone the project repository:

```bash
git clone https://github.com/TegarAkhsan/Rawan.git
cd Rawan
```

### Step 2: Install Dependencies
Install the required packages using your preferred package manager:

```bash
npm install
```

> **Note:** If you are using `pnpm` or `yarn`, run `pnpm install` or `yarn install` respectively.

### Step 3: Run the Development Server
Start the local Vite development server:

```bash
npm run dev
```

The terminal will display the local development address:
```text
  VITE v5.2.11  ready in 420 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Open your browser and navigate to `http://localhost:5173`. The application will immediately load the Home view and initialize the interactive 3D Earth scene.

---

## 📦 3. Available NPM Scripts

The project includes preconfigured scripts in `package.json`:

| Script | Description |
| :--- | :--- |
| `npm run dev` | Launches the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Performs TypeScript type-checking (`tsc`) and compiles the production bundle into `dist/`. |
| `npm run preview` | Starts a local HTTP server to preview the production build from `dist/`. |

---

## 🚀 4. Production Deployment

### Option A: Deploying to Vercel (Recommended)

Vercel is the optimal hosting platform for Vite-powered React SPAs.

#### Method 1 — Via Vercel Dashboard (Git Integration):
1. Navigate to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** > select **"Project"**.
3. Connect your GitHub account and import the `Rawan` repository.
4. Vercel automatically detects the build settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. The site will be live within seconds.

#### Method 2 — Via Vercel CLI:
1. Open a terminal in the root project directory:
   ```bash
   npx vercel
   ```
2. Follow the terminal prompts to authenticate and select project defaults.
3. Deploy directly to production:
   ```bash
   npx vercel --prod
   ```

---

### Option B: Deploying to Netlify

1. Navigate to [netlify.com](https://netlify.com) and click **"Add new site"** > **"Import an existing project"**.
2. Connect your GitHub provider and choose the `Rawan` repository.
3. Configure the build parameters:
   - **Base directory**: *(leave empty)*
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Ensure SPA routing redirects are configured via `public/_redirects`:
   ```text
   /*    /index.html   200
   ```
5. Click **"Deploy Site"**.

---

### Option C: Self-Hosted Server (Nginx / Linux VPS)

For custom VPS or on-premise deployments:

1. Build the production bundle locally or in your CI/CD pipeline:
   ```bash
   npm run build
   ```
2. The generated assets will be located in the `dist/` directory.
3. Copy the contents of `dist/` to your web server root (e.g., `/var/www/html/rawan`).
4. Configure your Nginx virtual host configuration:
   ```nginx
   server {
       listen 80;
       server_name rawan.example.com;
       root /var/www/html/rawan;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Cache control headers for static 3D assets and media
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```
5. Reload Nginx configuration: `sudo systemctl reload nginx`.

---

## 🔧 5. Troubleshooting Common Issues

### 1. WebGL Context Loss / Black Screen
- **Symptom**: 3D scene appears black or fails to render.
- **Resolution**: Ensure Hardware Acceleration is enabled in your browser settings (`chrome://settings/system` > "Use hardware acceleration when available"). Update graphics drivers if necessary.

### 2. Live BMKG Feed Network Warning
- **Symptom**: Warning displayed when fetching live earthquake telemetry.
- **Resolution**: This occurs if BMKG API servers experience temporary downtime or network firewalls restrict the request. RAWAN automatically transitions to its built-in fallback earthquake dataset seamlessly.

### 3. Node.js Memory Limits on Build
- **Symptom**: `JavaScript heap out of memory` during `npm run build`.
- **Resolution**: Increase Node.js memory allocation:
  ```bash
  NODE_OPTIONS="--max-old-space-size=4096" npm run build
  ```
