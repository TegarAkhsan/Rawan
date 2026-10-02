# Technical System Documentation

This document provides in-depth technical specifications covering internal state architecture, data flow, 3D simulation state machines, the BMKG live telemetry integration pipeline, and procedural audio synthesis on the **RAWAN (Ruang Antisipasi Waspada Anak Nusantara)** platform.

---

## 🏛️ 1. State Architecture & Navigation Flow

RAWAN utilizes centralized state control within [`src/App.tsx`](../src/App.tsx) for deterministic view routing without relying on external URL hash fragilities.

### View Routing State Diagram (`currentView`):

```
                        +------------------+
                        |      'HOME'      |  <-- Home Hero (Interactive 3D Earth)
                        +--------+---------+
                                 |
         +-----------------------+-----------------------+
         |                       |                       |
+--------v---------+    +--------v---------+    +--------v---------+
|    'MODULES'     |    |      'MAP'       |    |   'CHECKLIST'    |
| (Disaster List)  |    | (BMKG Geoportal) |    | (72-Hr Prep Kit) |
+--------+---------+    +------------------+    +------------------+
         |
+--------v---------+
|   'SIMULATION'   |  <-- 3D Interactive Simulation Arena
+--------+---------+
         |
+--------v---------+
|      'QUIZ'      |  <-- Gamified Evaluation & XP Gain
+------------------+
```

### Global State Definitions:
- `currentView`: `'HOME' | 'MODULES' | 'SIMULATION' | 'MAP' | 'CHECKLIST' | 'QUIZ'`
- `activeDisaster`: `'EARTHQUAKE' | 'TSUNAMI' | 'VOLCANO' | 'FLOOD' | 'LANDSLIDE' | 'TORNADO'`
- `userXp`: Cumulative player experience points persisted in `localStorage (dv3d_user_xp)`.
- `soundEnabled`: Audio playback state toggle persisted in `localStorage (dv3d_sound_enabled)`.
- `fontSize`, `highContrast`, `reducedMotion`, `voiceNarrationEnabled`: Accessibility preferences.

---

## 🎮 2. 3D Simulation Engine & 7-Stage State Machine

Each 3D disaster simulation module implements a sequential 7-stage state machine modeling real-world disaster progression:

### Procedural Disaster Escalation Stages (7-Stage Lifecycle):

| Stage Index | Phase Category | 3D Visuals & Physics Behavior |
| :---: | :--- | :--- |
| **0** | `NORMAL` | Quiescent baseline environment, zero seismic/volcanic anomaly, stable daylight illumination. |
| **1** | `UNREST / INFLOW` | Early anomaly detection (micro-tremor vibrations, cumulonimbus cloud buildup, heavy precipitation). |
| **2** | `PRECURSOR / WARNING` | Evident precursor signs (lava dome swelling, coastal ocean retreat, slope surface tension cracks). |
| **3** | `IMMINENT ESCALATION` | Physical threshold breach (funnel cloud descent, river levee breach, deep magma conduit ascent). |
| **4** | `VIOLENT CLIMAX` | Maximum catastrophic peak (Plinian eruption column, tornado touchdown, M > 7.0 tsunami inundation). |
| **5** | `MITIGATION / ACTION` | Interactive decision-making checkpoint (*Drop Cover Hold*, highland evacuation, emergency kit deployment). |
| **6** | `AFTERMATH & RECOVERY` | Post-impact assessment, search & rescue operations, secondary hazard mitigation (*lahar / aftershocks*). |

### Subterranean Cutaway System (*Cutaway View*)
Scene components (such as [`VolcanoScene.tsx`](../src/scenes/VolcanoScene.tsx) and [`EarthquakeScene.tsx`](../src/scenes/EarthquakeScene.tsx)) feature a boolean `showCutaway` toggle. When enabled, frontal terrain cross-sections are clipped to reveal:
- Subterranean magma chambers and volcanic feeder dykes.
- Tectonic fault slip planes and seismic hypocenter coordinates.
- Groundwater saturation zones and failure slip surfaces within hillsides.

---

## 🛰️ 3. Geoportal & Real-Time BMKG TEWS API Integration

The [`src/components/IndonesiaMapView.tsx`](../src/components/IndonesiaMapView.tsx) component integrates directly with BMKG open telemetry endpoints:

### Endpoints:
1. **Latest Major Earthquake (M ≥ 5.0 or Tsunami Potential)**:
   - URL: `https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`
2. **List of 15 Recent Earthquakes**:
   - URL: `https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json`

### Polling & Resilience Architecture:
- Telemetry is fetched upon component mount and polled every **60 seconds** via interval timers.
- If upstream APIs experience network latency or CORS restrictions, the system triggers a **graceful fallback** to the bundled seismic registry in [`src/data/mapData.ts`](../src/data/mapData.ts), ensuring uninterrupted user experience.

---

## 🔊 4. Procedural Audio Synthesis (Web Audio Synthesizer)

All auditory feedback and environmental soundscapes are synthesized dynamically in [`src/audio/soundEngine.ts`](../src/audio/soundEngine.ts) using the Web Audio API without external media files:

### Synthesis Pipeline:
1. **Noise Generation**:
   - Custom `AudioBuffer` populated with white/pink noise arrays (`Math.random() * 2 - 1`) for atmospheric turbulence.
2. **Multi-Stage Resonant Filtering**:
   - `BiquadFilterNode` in `lowpass` configuration (60Hz - 250Hz) for deep tectonic ground rumbling.
   - `BiquadFilterNode` in `bandpass` configuration (800Hz - 2500Hz) for tornado vortex wind shearing.
3. **Envelope & Gain Shaping**:
   - `GainNode` with `exponentialRampToValueAtTime` curves modeling explosive attack, decay, and reverberation for volcanic detonations.
4. **Interactive Harmonic Chimes**:
   - Sine wave oscillators tuned to 523.25 Hz (C5) and 659.25 Hz (E5) delivering positive assessment feedback.

---

## ♿ 5. Accessibility & Multi-Device Standards

RAWAN is built in strict adherence to **WCAG 2.1 AA** accessibility standards:

### 1. Typography Scaling & High Contrast
- Dynamic font size classes: `.font-size-large` (110%) and `.font-size-xlarge` (125%).
- High Contrast mode applies a 1.25x contrast filter and high-visibility emerald outlines (`rgba(52, 211, 153, 0.5)`) to all actionable elements.

### 2. Reduced Motion Support
- When `reducedMotion` is toggled, automatic Earth rotation, seismic camera shakes, and particle dynamics are subdued to prevent visual disorientation for vestibular-sensitive users.

### 3. Indonesian Text-to-Speech Narration
- Uses the `window.speechSynthesis` interface targeting `id-ID` voice engines to vocalize scenario summaries and mitigation steps.

### 4. Full Viewport Responsiveness (`100dvh` & Safe Area)
- Leverages modern `100dvh` viewport units to prevent layout reflows when virtual keyboards or browser URL bars toggle on mobile Safari and Chrome.
- Integrated CSS `env(safe-area-inset-*)` rules prevent content clipping under hardware camera cutouts and navigation notches.
