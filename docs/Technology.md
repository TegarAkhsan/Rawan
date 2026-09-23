# Technology Stack & Architecture

This document provides a comprehensive overview of the technology stack, core libraries, system architecture, and performance engineering strategies implemented across the **RAWAN (Ruang Antisipasi Waspada Anak Nusantara)** platform.

---

## 🏗️ 1. Technology Stack Overview

RAWAN is engineered as a modern Single Page Application (SPA) combining real-time 3D graphics rendering, geospatial information systems (GIS), and procedural audio synthesis.

```
+-------------------------------------------------------------------------+
|                              USER INTERFACE                             |
|       (React 18.3 + TypeScript + Tailwind CSS + Lucide Icons)           |
+--------------------+--------------------+-------------------------------+
|      3D GRAPHICS   |     GEOPORTAL      |          AUDIO ENGINE         |
|  Three.js (r165)   |   Leaflet 1.9.4    |         Web Audio API         |
| React Three Fiber  |   React Leaflet    | (Synthesizer & Procedural FX) |
|  React Three Drei  | BMKG TEWS Live API |   Web Speech Synthesis TTS    |
+--------------------+--------------------+-------------------------------+
|                        BUILD & RUNTIME TOOLING                          |
|              Vite 5.2 (ESBuild + Rollup) + PostCSS                      |
+-------------------------------------------------------------------------+
```

---

## 🛠️ 2. Core Libraries & Framework Details

### A. Core Frontend Framework
- **React 18.3.1**: Foundational library for declarative UI state management, concurrent features, and modular, reusable component architecture.
- **TypeScript 5.4.5**: Enforces strict type safety across complex 7-stage disaster simulation payloads, minimizing runtime anomalies.
- **Vite 5.2.11**: Next-generation ES module bundler and development server delivering instant Hot Module Replacement (HMR) and optimized production chunking.

### B. Real-Time 3D Graphics Engine
- **Three.js (v0.165.0)**: Low-level WebGL graphics engine handling meshes, geometries, procedural materials, directional lighting, shadow mapping, and dynamic particle systems.
- **@react-three/fiber (v8.16.8)**: Declarative React renderer for Three.js enabling component-driven 3D scene construction with automatic object lifecycle disposal.
- **@react-three/drei (v9.106.0)**: Collection of high-level abstractions for R3F, including `OrbitControls`, `Stars`, procedural shader materials, and environment lighting helpers.

### C. Geospatial Mapping & Geoportal
- **Leaflet (v1.9.4)**: Lightweight, mobile-friendly interactive mapping library.
- **React-Leaflet (v4.2.1)**: React wrapper for Leaflet managing earthquake epicenter markers, active fault lines, and tectonic subduction zones.
- **BMKG Open Data API**: Direct integration with Indonesia's national meteorology and geophysics agency (BMKG) for real-time earthquake telemetry feeds.

### D. Procedural Audio & Speech Synthesis
- **Web Audio API**: All atmospheric sound effects (earthquake rumble, tsunami wave swell, volcano explosions, tornado wind howling, and button click feedback) are synthesized procedurally via `OscillatorNode`, `BiquadFilterNode`, and `AudioBufferSourceNode`, completely eliminating bulky audio file downloads.
- **Web Speech API (SpeechSynthesis)**: Provides automated voice narration in Indonesian (`id-ID`) for educational disaster modules, ensuring accessibility for auditory learners and visually impaired students.

### E. UI Design & Styling
- **Tailwind CSS 3.4.3**: Utility-first CSS framework establishing a solid dark theme (emerald/slate) with consistent design tokens, smooth micro-interactions, and safe-area inset adaptation.
- **Lucide React (v0.383.0)**: Crisp, customizable vector iconography.
- **Canvas-Confetti (v1.9.3)**: Lightweight celebratory particle animation triggered upon completing knowledge assessments.

---

## ⚡ 3. Performance Engineering Strategies

Rendering interactive 3D graphics in the browser demands disciplined memory and GPU optimization:

### 1. Procedural Geometry & Low-Poly Optimization
3D models are generated procedurally via code with tightly budgeted polygon counts. This delivers instantaneous initial page loads without downloading multi-megabyte 3D asset bundles (`.gltf` or `.obj`).

### 2. Selective Texture Resolution & Anisotropy
Planetary surface texture maps are compressed in JPEG format with `anisotropy: 16` and `sRGBColorSpace` applied exclusively to materials requiring photorealistic clarity.

### 3. Lifecycle Cleanup & Memory Leak Prevention
All Web Audio synthesizers and BMKG live polling timers implement strict React `useEffect` cleanup routines to prevent memory retention during view transitions.

### 4. Dynamic Delta-Time Animation Loop
Earth planetary rotation, tornado vortex dynamics, seismic building oscillations, and pyroclastic particle updates utilize the frame delta multiplier from Three.js `useFrame`. This guarantees uniform physics speeds across 60Hz, 90Hz, and 120Hz/144Hz high-refresh displays.

---

## 📊 4. Browser Compatibility Matrix

| Browser | Minimum Version | Support Level |
| :--- | :--- | :--- |
| **Google Chrome** | v90+ | Full Support (WebGL 2.0, Web Audio, SpeechSynthesis) |
| **Mozilla Firefox** | v88+ | Full Support (WebGL 2.0, Web Audio, SpeechSynthesis) |
| **Microsoft Edge** | v90+ | Full Support (WebGL 2.0, Web Audio, SpeechSynthesis) |
| **Apple Safari** | v15+ (macOS & iOS) | Full Support (Touch Gestures, WebGL 2.0, Safe Area Insets) |
| **Android Chrome / Samsung Internet** | v90+ | Full Support (Touch OrbitControls, Responsive 100dvh) |
