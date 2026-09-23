# RAWAN (Ruang Antisipasi Waspada Anak Nusantara)
## Interactive 3D Web-Based Platform for Disaster Education Among Indonesian Youth

**INTERNATIONAL WEB TECHNOLOGY COMPETITION**

---

### Team Information
* **Institution:** Universitas Negeri Surabaya (UNESA), Indonesia
* **Study Program:** D4 Informatics Management, Vocational Faculty
* **Year:** 2026
* **Advisor:** Binti Kholifah, S.Kom., M.Tr.Kom.
* **Team Members:**
  1. Fitrya Chalifatus Zahro (D4 Informatics Management)
  2. Tegar Eka Pambudi El Akhsan (D4 Informatics Management)
  3. El Syifa Sawitri (D4 Informatics Management)
* **GitHub Repository:** [https://github.com/TegarAkhsan/Rawan](https://github.com/TegarAkhsan/Rawan)
* **Live Demo:** [Google Drive Demo Folder](https://drive.google.com/drive/folders/1SX6Vf0N-v3EhZbfSSv5313IC_eNIubxF)

---

## 1. Project Overview & Background

As an archipelagic nation situated at the convergence of three major tectonic plates (Indo-Australian, Eurasian, and Pacific), Indonesia requires robust, equitable disaster preparedness systems. Earthquakes, floods, volcanic eruptions, and tsunamis consistently represent the most frequent and devastating hazards in the country (BNPB). Children remain among the most vulnerable demographic due to cognitive limitations in assessing acute risks and performing autonomous evacuations (Ronoh, Gaillard, & Marlowe, 2015), underscoring the necessity of early, experiential disaster education.

Despite disaster mitigation being integrated into Indonesia's national curriculum, implementation remains highly disparate across schools and regions. Existing instructional media—printed modules, static infographics, and conventional lectures—are text-heavy and abstract, failing to convey the physical, sensory reality of natural disasters; understanding "liquefaction" from a textbook differs profoundly from observing the mechanical process in real-time. This pedagogical gap between abstract instruction and experiential comprehension is well-documented across primary and junior secondary education, where interactive, concrete visual tools substantially enhance engagement and long-term knowledge retention.

BNPB telemetry underscores this urgency: in 2023 alone, over 3,500 disaster events occurred across Indonesia, dominated by hydrometeorological phenomena, seismic ruptures, and volcanic eruptions (BNPB, 2024).

Simultaneously, the maturity of modern web technologies unlocks viable solutions: real-time 3D rendering via Three.js and React Three Fiber runs natively within standard web browsers without requiring software installation or high-end graphics hardware. This creates an accessible, highly scalable delivery vector capable of reaching schools across diverse socioeconomic landscapes, including resource-constrained regions.

**RAWAN** directly addresses this critical challenge: overcoming low youth disaster preparedness by leveraging browser-based interactive 3D simulation technology.

---

## 2. Problem Identification

1. **Disaster Literacy Gap Among Children**  
   Primary and junior high school students exhibit substantial gaps in understanding core disaster mechanisms and executing appropriate emergency protocols. Students must comprehend cause-and-effect dynamics, hazard characteristics, and actionable safety protocols beyond superficial disaster identification.
2. **Lack of Interactive Instructional Media**  
   Disaster education remains predominantly reliant on static posters, PDF booklets, and lectures. While informative, these media lack simulational affordances that allow learners to observe physical dynamics and practice decision-making. Mayer's (2009) cognitive theory of multimedia learning demonstrates that integrating complementary visual and verbal channels significantly boosts cognitive retention.
3. **Inconsistent Educational Delivery Across Schools**  
   The execution of Disaster Risk Reduction (DRR) education varies widely based on teacher preparedness and local infrastructure. Amri et al. (2017) highlighted structural inconsistencies across Indonesian schools, emphasizing the need for standardized, self-contained interactive media.
4. **Hardware and Cost Barriers to Advanced Simulations**  
   Immersive alternatives such as Virtual Reality (VR) headsets or native desktop software demand high capital investments, complex installations, and dedicated hardware rarely accessible in Indonesian public schools.
5. **Fragmented, Single-Hazard Coverage**  
   Existing educational tools typically focus on isolated hazard types, requiring students to navigate disconnected applications. Indonesia's multi-hazard geography necessitates a unified platform encompassing earthquakes, tsunamis, volcanic eruptions, floods, landslides, and tornadoes within a single cohesive experience.

---

## 3. Proposed Solution

**RAWAN** is a lightweight, zero-install web-based disaster education platform tailored for primary and junior high school students (ages 7–15). It replaces static texts with interactive, decision-driven 3D simulations paired with age-appropriate scientific explanations. The functional prototype is fully implemented and accessible in the team's GitHub repository.

The platform centers on Indonesia's most critical disaster hazards: **Earthquakes, Floods, Volcanic Eruptions, and Tsunamis**, alongside extended modules for **Landslides and Tornadoes**.

For each disaster, learners navigate a fully rendered 3D environment (such as a school classroom, coastal settlement, or volcanic hillside) and engage in branching decision-making scenarios: selecting actions, receiving instant visual and textual feedback with scientific justifications, and earning XP before advancing through sequential disaster stages.

### Technical Architecture Overview:
* **UI & Component Layer:** React 18 + TypeScript, built with Vite and styled with Tailwind CSS.
* **Real-Time 3D Engine:** Three.js orchestrated declaratively via `@react-three/fiber` and `@react-three/drei`.
* **State & Local Persistence:** Zero-backend client-side architecture; progress, XP, and accessibility preferences persist locally via `localStorage` with zero collection of student personally identifiable information (PII).
* **Pedagogical Structure:** Each module adopts a three-tier learning cycle: **Learn** (causes, warning signs, impacts, emergency protocols, and Indonesian case studies), **Simulate** (3D decision arena), and **Test** (gamified multi-tier assessment).

---

## 4. Project Objectives

1. **Enhance Disaster Literacy:** Deliver intuitive understanding of the mechanics, warning signs, and impacts of earthquakes, floods, volcanoes, and tsunamis through interactive 3D simulations for students aged 7–15.
2. **Zero-Barrier Classroom Adoption:** Provide educators with a completely free, browser-based, zero-installation teaching tool compatible with existing curricula without requiring specialized hardware or user registration.
3. **Strengthen Emergency Decision Reflexes:** Improve knowledge retention and emergency reflexes by requiring students to actively execute critical safety decisions before, during, and after disasters.
4. **Demonstrate Scalable, Low-Footprint Architecture:** Showcase an infrastructure-light model easily extensible to additional disaster types and geographic regions, as evidenced by the successful addition of landslide and tornado modules.
5. **Gamified Progress Tracking:** Quantify learning milestones via embedded XP progression, multi-tiered quizzes, and achievement badges visible to students and teachers.

---

## 5. Target Audience

### Primary Users:
* **Primary School Students (Ages 7–12):** Core audience benefiting from simplified visual explanations, intuitive color coding, and guided decision scenarios.
* **Junior High School Students (Ages 12–15):** Engaged through advanced scientific breakdowns, geological fault mappings, and higher quiz difficulty tiers.

### Secondary Users & Stakeholders:
* **Educators & Schools:** Utilizing RAWAN during Disaster Risk Reduction Month, mitigation drills, and integrated Science/Social Studies classes.
* **Parents & Guardians:** Reinforcing emergency readiness at home, including practical tools like the 72-hour emergency kit checklist.
* **Regional Disaster Management Agencies (BPBD) & Education Authorities:** Serving as distribution partners for wide-scale regional adoption across high-risk tectonic zones.

---

## 6. Key Features

1. **Interactive 3D Disaster Simulations:** Fully modeled 3D environments with branching decision logic, dynamic camera positioning, and real-time XP rewards across 6 disaster modules.
2. **Curriculum-Aligned Educational Content:** Detailed breakdowns of geological causes, early warning indicators, historical Indonesian case studies (e.g., the 2018 Palu earthquake/liquefaction), and official BNPB emergency hotlines.
3. **Gamified Quiz Matrix:** Multi-tier question banks (Easy, Medium, Hard) rewarding XP and awarding the *"Disaster Preparedness Cadre"* badge upon mastery.
4. **Interactive Indonesian Hazard Geoportal:** Geospatial mapping of megathrust subduction zones, active faults (Semangko, Lembang, Palu-Koro), and active volcanoes (Merapi, Sinabung, Krakatoa) paired with live BMKG telemetry.
5. **72-Hour Emergency Supply Checklist (Tas Siaga Bencana):** Interactive checklist categorized by basic survival, medical aid, communication, and document preservation, with automatic kit weight estimation following BNPB standards.
6. **Comprehensive Accessibility Suite:** Adjustable typography scaling, High Contrast mode, Reduced Motion toggling for vestibular safety, and Indonesian Text-to-Speech (TTS) narration via Web Speech API.
7. **Procedural Sound Design:** Real-time Web Audio API synthesizer generating earthquake rumbles, tsunami swells, volcanic detonations, and UI feedback without external audio files.
8. **Client-Side Anonymous Progress:** Zero-friction local storage preserving user progress without login barriers or privacy overhead.

---

## 7. Sustainable Development Goals (SDGs) Alignment

* **SDG 4 (Quality Education — Target 4.7):** Equips learners with essential disaster risk reduction knowledge and adaptive capabilities through engaging, universally accessible digital learning.
* **SDG 11 (Sustainable Cities and Communities — Targets 11.5 & 11.b):** Strengthens community resilience by cultivating disaster-prepared households from early childhood.
* **SDG 13 (Climate Action — Target 13.3):** Enhances capacity for climate-induced hydrometeorological hazard mitigation, extreme flood preparedness, and early warning responsiveness.
* **SDG 3 (Good Health and Well-Being — Target 3.d):** Secondary alignment through casualty reduction and injury prevention resulting from rapid, correct emergency response behaviors.

---

## 8. Innovation & Competitive Analysis

| Dimension | Printed Modules / BNPB Posters | InaRISK Personal (BNPB) | Educational Videos / Animations | RAWAN Platform |
| :--- | :--- | :--- | :--- | :--- |
| **Format** | Static text & illustrations | Risk maps & static regional data | Linear passive video | **Interactive 3D decision-driven simulations** |
| **Interactivity** | None | Low (location query only) | Passive observation | **High (active decisions with direct consequences & XP)** |
| **Setup Barrier** | Physical distribution required | Requires mobile app install & account | Platform dependent | **Zero-install, instant browser execution** |
| **Hazard Coverage**| Single-hazard per booklet | Multi-hazard risk overview | Single-hazard per video | **6 unified disaster modules in 1 platform** |
| **Accessibility**  | None | Limited | Rarely supported | **Built-in (Font scale, High Contrast, TTS, Reduced Motion)** |
| **Marginal Cost**  | High reprinting costs | Requires mobile hardware & storage | Bandwidth intensive | **Near zero (static client-side browser execution)** |

### Literature Gaps Addressed by RAWAN:
1. **Multi-Hazard Integration:** Most gamified tools target single hazards in isolation; RAWAN provides a unified 6-hazard architectural framework.
2. **Public Accessibility:** Bridges the gap between academic VR prototypes and real-world school deployment via zero-install WebGL.
3. **Infrastructure Independence:** Eliminates expensive VR headset prerequisites in favor of broad cross-device web compatibility.
4. **Constructive Decision Learning:** Replaces passive rote instruction with exploratory, consequence-driven decision loops grounded in Mayer's cognitive multimedia principles.

---

## 9. Impact Potential, Limitations, & Validation Framework

### Educational & Preparedness Impact:
RAWAN enables active experiential learning where students understand *what, when,* and *why* specific protective actions are necessary during acute disasters. It serves as a potent classroom instructional supplement alongside physical evacuation drills.

### Measurable Success Indicators:
1. **Knowledge Acquisition:** Pre-test vs. post-test score differentials.
2. **Decision Accuracy:** Percentage of correct safety decisions in 3D scenarios.
3. **Knowledge Retention:** Re-test accuracy evaluated across 30-day and 60-day intervals.
4. **Module Completion Rate:** Percentage of users completing full 7-stage simulations.
5. **Engagement Metrics:** Session duration and frequency of voluntary quiz replays.
6. **Qualitative Feedback:** Educator and student evaluations of usability and clarity.

---

## 10. Development Methodology & Verification

The project followed an Agile sprint methodology with iterative testing:

### Black-Box Functional Verification Results:

| No. | Module / Feature | Test Scenario | Expected Result | Actual Result | Status |
| :-: | :--- | :--- | :--- | :--- | :-: |
| 1 | **Earthquake Module** | Choose classroom protective action | Instant visual feedback & XP gain | As expected | **Pass** |
| 2 | **Flood Module** | Navigate evacuation route | Water rises, decision logic branch | As expected | **Pass** |
| 3 | **Volcano Module** | Select mountain evacuation route | 3D camera transitions & feedback | As expected | **Pass** |
| 4 | **Tsunami Module** | Respond to early coastal warning | Wave surge physics & explanation | As expected | **Pass** |
| 5 | **Landslide Module** | Lateral evacuation path selection | Debris physics & prompt guidance | As expected | **Pass** |
| 6 | **Tornado Module** | Identify indoor shelter location | Funnel touchdown & safety feedback | As expected | **Pass** |
| 7 | **Gamified Quiz** | Answer 3-tier difficulty questions | Dynamic score, streak, & badge unlock | As expected | **Pass** |
| 8 | **Hazard Geoportal** | Select fault line / volcano marker | Real-time BMKG telemetry / risk panel | As expected | **Pass** |
| 9 | **Emergency Kit** | Check items across categories | Weight calculation & local persistence | As expected | **Pass** |
| 10 | **Progress Storage** | Refresh / restart browser session | XP & settings retained via localStorage | As expected | **Pass** |
| 11 | **Contrast & Scaling**| Toggle high contrast & font size | UI adapts without element overflow | As expected | **Pass** |
| 12 | **Reduced Motion** | Enable reduced motion mode | Camera shake & auto-rotations paused | As expected | **Pass** |
| 13 | **Speech Narration** | Trigger audio narration button | Web Speech synthesis vocalizes text | As expected | **Pass** |

### Cross-Browser Compatibility Results:

| Device / Browser | Screen Resolution | 3D Rendering Performance | UI & Navigation | Status |
| :--- | :--- | :--- | :--- | :-: |
| **Google Chrome (Desktop)** | 1920×1080 | Optimal 60 FPS rendering | Responsive & fluid | **Pass** |
| **Mozilla Firefox (Desktop)**| 1920×1080 | Smooth WebGL rendering | Full feature support | **Pass** |
| **Microsoft Edge (Desktop)** | 1366×768 | Stable frame rates | No latency observed | **Pass** |
| **Google Chrome (Android)** | 360×800 | Dynamic viewport adaptation | Touch-friendly controls | **Pass** |
| **Apple Safari (iOS)** | 390×844 | Smooth rendering with safe-insets | Core navigation verified | **Pass** |
| **Chrome (Tablet)** | 800×1280 | Adaptive multi-column layout | Optimal readability | **Pass** |

---

## 11. References

* Badan Nasional Penanggulangan Bencana (BNPB). (2024). *Data Informasi Bencana Indonesia (DIBI)*. https://dibi.bnpb.go.id
* Badan Nasional Penanggulangan Bencana (BNPB). (2023). *Panduan Tas Siaga Bencana*. https://bnpb.go.id
* Badan Meteorologi, Klimatologi, dan Geofisika (BMKG). *Peta Zona Megathrust dan Sesar Aktif Indonesia*. https://bmkg.go.id
* Pusat Vulkanologi dan Mitigasi Bencana Geologi (PVMBG). *Status Aktivitas Gunung Berapi Indonesia*. https://vsi.esdm.go.id
* Amri, A., Bird, D.K., Ronan, K., Haynes, K., & Towers, B. (2017). *Disaster risk reduction education in Indonesia: challenges and recommendations for scaling up*. Natural Hazards and Earth System Sciences, 17(4), 595–612.
* Mayer, R.E. (2009). *Multimedia Learning (2nd ed.)*. Cambridge University Press.
* Ronoh, S., Gaillard, J.C., & Marlowe, J. (2015). *Children with disabilities and disaster risk reduction: A review*. International Journal of Disaster Risk Science, 6(1), 38–48.
* United Nations. (2015). *Transforming Our World: The 2030 Agenda for Sustainable Development (SDGs 3, 4, 11, 13)*. https://sdgs.un.org/2030agenda
* UNDRR. (2015). *Sendai Framework for Disaster Risk Reduction 2015–2030*. https://www.undrr.org

---

## Appendix: Platform User Interface Showcase

The platform features a cohesive dark theme with emerald/slate accents:
* **Interactive 3D Earth Hero:** Rotating planetary sphere with cloud layers and atmospheric halo.
* **Disaster Simulation Viewport:** 3D scene canvas with stage progression bar, interactive decision buttons, and XP reward animations.
* **BMKG Geoportal:** Full interactive Indonesian map with tectonic fault lines, volcano markers, and live seismic telemetry cards.
* **72-Hour Emergency Checklist:** BNPB category-filtered checklist with real-time kit weight computation.
