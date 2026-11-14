# 🎬 AI Video Prompt & Hook Architect (v2.0 Pro)

A zero-cost, client-side NLP context engine, 32-second retention storyboard generator, and automated `.SRT` subtitle exporter built for short-form (9:16) documentary and educational creators.

🔗 **Live Web Application:** [Launch AI Video Prompt Architect v2.0](https://tiktokersafibhai1919-byte.github.io/ai-video-prompt-architect/)

## 🚀 Overview & Problem Solved
Producing high-retention vertical videos requires tight narrative pacing, synchronized camera choreography, sound design cues, and frame-accurate subtitles. **AI Video Prompt & Hook Architect v2.0** automates this entire pre-production pipeline 100% locally in the browser—with zero external API costs.

## ✨ Key Features (v2.0)
* **Keyword & Physics Context Engine:** Automatically analyzes input topics to detect domain physics (e.g., *Hydro-Structural Dynamics*, *Bio-Mechanical Macro Optics*, *Architectural Geometry*) and injects matching lens specifications.
* **4-Clip Retention Storyboard (32 Seconds):** Structures voiceover scripts and visual prompts across four 8-second segments (`0–8s Hook`, `8–16s Mechanism`, `16–24s Scale Proof`, `24–32s Loop Twist`).
* **Camera Motion & SFX Direction:** Pairs every 9:16 AI visual prompt with camera choreography controls and sound design (`SFX`) cues.
* **One-Click `.SRT` Subtitle Exporter:** Calculates reading-speed timestamps (`2.6 words/sec`) and generates a downloadable `.srt` file ready for CapCut, Premiere Pro, or DaVinci Resolve.

## 🛠️ Tech Stack
* **Structure:** Semantic HTML5
* **Styling:** Custom Responsive CSS3 (Dark Mode UI)
* **Logic & File Export:** Vanilla JavaScript (ES6+, Blob API for `.srt` generation)
* **Deployment:** GitHub Pages

## 📂 Repository Structure
```text
ai-video-prompt-architect/
├── index.html      # v2.0 UI with camera controls & SRT export trigger
├── style.css       # Responsive dark-mode layout & SFX badge styling
├── script.js       # Context analyzer, 4-scene generator & SRT compiler
└── README.md       # Documentation
