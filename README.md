# 🚀 JWST Mission Control

An interactive, educational web experience dedicated to the James Webb Space Telescope (JWST). This project explores the engineering marvels, the complex journey to Lagrange Point 2, and the groundbreaking cosmic discoveries of humanity's most powerful space observatory.

**🌍 Live Demo:** [View the live site here!](https://mvishnu07.github.io/JWST-Project/)

---

## ✨ Features

* **Interactive "Time Machine" Slider:** A custom JavaScript-powered image comparison slider that lets users drag back and forth to compare the visible-light view of the Hubble Space Telescope with the infrared view of the JWST (featuring the Carina Nebula).
* **Scroll-Linked Journey Timeline:** An animated timeline tracking Webb's 1.5-million-kilometer journey to L2. As the user scrolls, a rocket travels down the track, passing key mission milestones like the sunshield deployment and mirror unfolding.
* **Dynamic Starry Background:** A vanilla JavaScript particle system that generates a continuous, twinkling starfield mapped to the viewport, giving the site a deep-space aesthetic.
* **Deep-Dive Discovery Pages:** Dedicated sub-pages exploring specific cosmic treasures in an academic article layout:
  * **JADES-GS-z13-0:** The earliest known galaxy.
  * **The Cosmic Cliffs:** Star birth in the Carina Nebula.
  * **WASP-96 b:** Transmission spectroscopy and alien atmospheres.
* **Detailed Engineering Facts:** In-depth, grid-based comparisons explaining the beryllium mirror segments, the Kapton sunshield, and the physics of the L2 orbit.
* **Academic Citations:** Properly formatted APA reference sections detailing the NASA, ESA, and STScI sources used for the project's data.

---

## 🛠️ Tech Stack

This project was built from scratch without the use of external frontend frameworks or heavy libraries to ensure fast load times and clean code.

* **HTML5:** Semantic structuring and multi-page routing.
* **CSS3:** Advanced styling, grid/flexbox layouts, glassmorphism UI elements, and CSS animations (spinning mirror, hover effects).
* **Vanilla JavaScript (ES6):** Logic for the image slider, scroll-progress calculations for the timeline, and dynamic DOM element generation for the background stars.

---

## 📂 Project Structure

```text
JWST-Project/
├── index.html            # The main landing page and interactive hub
├── jades.html            # Deep dive: JADES-GS-z13-0
├── cosmic-cliffs.html    # Deep dive: Carina Nebula
├── wasp96b.html          # Deep dive: Exoplanet Atmosphere
├── style.css             # Global stylesheet for all pages
├── action.js             # Core JavaScript logic
├── res/                  # Directory containing all images and graphics
└── README.md             # Project documentation
