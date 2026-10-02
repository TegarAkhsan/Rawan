# RAWAN — Ruang Antisipasi Waspada Anak Nusantara

[![React](https://img.shields.io/badge/React-18.3-blue.svg?logo=react&style=flat-square)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r165-black.svg?logo=three.js&style=flat-square)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF.svg?logo=vite&style=flat-square)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg?logo=tailwind-css&style=flat-square)](https://tailwindcss.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900.svg?logo=leaflet&style=flat-square)](https://leafletjs.com/)
[![License](https://img.shields.io/badge/License-MIT-emerald.svg?style=flat-square)](LICENSE)

> **RAWAN (Ruang Antisipasi Waspada Anak Nusantara)** is an interactive, real-time 3D disaster education and geospatial monitoring platform designed to enhance disaster literacy, emergency preparedness, and STEM understanding among students and the youth across Indonesia.

---

## 🌟 Background & Objectives

Indonesia sits along the Pacific Ring of Fire at the convergence of three major tectonic plates, making it one of the most seismically and volcanically active regions globally. Traditional disaster education often relies on static posters or text-heavy modules, which struggle to effectively illustrate complex subterranean dynamics and practical emergency response protocols.

**RAWAN** bridges this gap by delivering:
1. **Real-Time Interactive 3D Visualizations**: Explore cutaway views of subterranean earth layers, rotate perspectives, and observe disaster physics as they unfold.
2. **Procedural Multi-Stage Simulations**: 7-stage disaster escalation life cycles aligned with PVMBG and BNPB scientific frameworks.
3. **National Seismic Geoportal**: Live integration with real-time earthquake telemetry from BMKG sensors.
4. **Gamified Knowledge Assessment**: Scenario-based evaluation matrix with response tracking, streak combos, and XP leveling.

---

## 🎯 Key Features

### 1. 6 Interactive 3D Disaster Simulations
- 🌋 **Volcano Eruption**: Simulates lava dome expansion, phreatic activity, Plinian eruption columns, pyroclastic flows (*wedhus gembel*), and lahar mudflows.
- 🌊 **Tsunami**: Undersea megathrust dislocation, coastal water recession, deep-to-shallow wave amplification, and coastal inundation.
- 🏚️ **Earthquake**: Active tectonic fault rupture, multi-story building seismic resonance, and the *Drop, Cover, and Hold On* protocol.
- 🌧️ **Flood**: Extreme precipitation dynamics, riverbank overtopping, progressive water elevation, and highland evacuation navigation.
- ⛰️ **Landslide**: Groundwater slope saturation, shear surface failure, debris avalanche dynamics, and lateral evacuation paths.
- 🌪️ **Tornado**: Supercell cloud updrafts, mesocyclone rotation, funnel cloud touchdown, and indoor safe-zone sheltering.

### 2. Indonesian Geospatial Hazard Map & Geoportal
- National seismic hazard mapping powered by Leaflet and CartoDB base tiles.
- **Live BMKG TEWS Feed**: Direct integration with real-time earthquake feeds updated automatically.
- Geological fault line visualizations (Sunda Megathrust, Semangko Fault, Lembang Fault, Palu-Koro Fault, Baribis Fault).
- Catalog of active Type-A Indonesian volcanoes (Mt. Merapi, Sinabung, Semeru, Krakatoa, etc.).

### 3. Digital 72-Hour Emergency Kit (Tas Siaga Bencana)
- Comprehensive emergency packing guide following standard BNPB guidelines.
- Organized categorizations: basic sustenance, first aid, emergency lighting, communication, and vital document protection.

### 4. Self-Paced Emergency Preparedness Quiz
- Streamlined single-screen dashboard experience with instant feedback.
- Scientific explanations provided for every answer choice.
- Question matrix, combo multipliers, and player XP progression.

### 5. Multi-Device Compatibility & Accessibility
- **Screen Support**: Fully responsive across mobile smartphones (iOS & Android), tablets, laptops, and desktop displays.
- **Inclusive Accessibility**: Dynamic font scaling (Normal, Large, Extra Large), high-contrast UI mode, reduced-motion toggle, and Indonesian Text-to-Speech narration.
- **Procedural Sound Engine**: Lightweight procedural audio synthesis built on the Web Audio API without requiring large audio asset downloads.

---

## 📂 Project Structure

```plaintext
DisasterWeb/
├── public/
│   ├── logo_rawan.png          # Official RAWAN vector logo
│   └── textures/               # Earth texture maps (clouds, diffuse, normal, specular)
├── src/
│   ├── audio/
│   │   └── soundEngine.ts      # Web Audio API Synthesizer (rumble, siren, lava, explosion)
│   ├── components/
│   │   ├── AccessibilityModal.tsx   # Accessibility settings modal
│   │   ├── DisasterDetailModal.tsx  # Scientific disaster literacy modal
│   │   ├── EmergencyChecklistView.tsx# 72-Hour emergency supply checklist
│   │   ├── Footer.tsx               # Platform footer & attribution
│   │   ├── IndonesiaMapView.tsx     # BMKG live geoportal map view
│   │   ├── Navbar.tsx               # Responsive header navigation
│   │   ├── QuizView.tsx             # Gamified quiz assessment view
│   │   └── SimulationOverlay.tsx    # HUD overlay & 3D simulation controls
│   ├── data/
│   │   ├── checklistData.ts    # Emergency kit curated item list
│   │   ├── disasterData.ts     # Scientific data & 7-stage disaster scenarios
│   │   ├── mapData.ts          # Fault line coordinates & volcano registry
│   │   └── quizData.ts         # Scenario-based question bank
│   ├── scenes/
│   │   ├── EarthquakeScene.tsx # 3D Earthquake Simulation Scene
│   │   ├── FloodScene.tsx      # 3D Flood Simulation Scene
│   │   ├── HomeEarthScene.tsx  # 3D Interactive Earth Hero Scene
│   │   ├── LandslideScene.tsx  # 3D Landslide Simulation Scene
│   │   ├── TornadoScene.tsx    # 3D Tornado Simulation Scene
│   │   ├── TsunamiScene.tsx    # 3D Tsunami Simulation Scene
│   │   └── VolcanoScene.tsx    # 3D Volcano Eruption Simulation Scene
│   ├── types/
│   │   └── disaster.ts         # TypeScript Interfaces & Model Types
│   ├── App.tsx                 # Root Router & Global State Controller
│   ├── index.css               # Design System, Tokens, & Safe-Area Insets
│   └── main.tsx                # React DOM Mount Entrypoint
├── docs/
│   ├── Installation.md         # Installation & Deployment Guide
│   ├── Technology.md           # Architecture & Technology Stack Specifications
│   └── TechnicalDocumentation.md # Technical System Specifications & State Lifecycle
├── index.html                  # HTML Shell & Viewport Meta
├── package.json                # Dependencies & Build Scripts
├── tailwind.config.js          # Tailwind Utility Presets
├── tsconfig.json               # TypeScript Compiler Configuration
├── vercel.json                 # Vercel SPA Rewrites Configuration
└── vite.config.ts              # Vite Bundler Configuration
```

---

## 🚀 Quickstart

Ensure **Node.js (version 18.0 or later)** and **npm** are installed on your machine.

```bash
# 1. Clone this repository
git clone https://github.com/TegarAkhsan/Rawan.git

# 2. Navigate to the project directory
cd Rawan

# 3. Install all dependencies
npm install

# 4. Start the local development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to explore the platform.

For in-depth deployment instructions, production builds, and hosting configurations, consult [docs/Installation.md](docs/Installation.md).

---

## 📖 Complete Documentation

- 📄 [**Project Proposal & Academic Paper**](docs/Proposal.md)
- 🛠️ [**Installation & Deployment Guide**](docs/Installation.md)
- 💻 [**Technology Stack & Architecture**](docs/Technology.md)
- 📐 [**Technical Documentation & System Specifications**](docs/TechnicalDocumentation.md)

---

## 📜 License & Contribution

This project is licensed under the **MIT License**. Contributions, bug reports, and feature proposals are welcome to support youth disaster preparedness and STEM education.
