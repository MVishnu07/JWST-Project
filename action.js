// // 1. Slider Logic
// const slider = document.getElementById('mirror-range');
// const webbImage = document.getElementById('webb-image');

// slider.addEventListener('input', (e) => {
//     webbImage.style.width = `${e.target.value}%`;
// });

// // Star Generator Logic (Works across all pages)
// function createStars() {
//     const container = document.getElementById('star-container');
//     if (!container) return; // Prevents errors if container isn't loaded

//     const starCount = 200;

//     for (let i = 0; i < starCount; i++) {
//         const star = document.createElement('div');
//         star.className = 'star';

//         // Random position across the fixed viewport
//         const x = Math.random() * 100;
//         const y = Math.random() * 100;

//         const size = Math.random() * 3 + 1;
//         const duration = Math.random() * 3 + 2;

//         star.style.left = `${x}vw`;
//         star.style.top = `${y}vh`;
//         star.style.width = `${size}px`;
//         star.style.height = `${size}px`;
//         star.style.setProperty('--duration', `${duration}s`);

//         container.appendChild(star);
//     }
// }

// // Fade in effect for the title on load
// window.addEventListener('load', () => {
//     createStars();

//     const title = document.querySelector('.main-title');
//     if (title) {
//         title.style.opacity = 0;
//         title.style.transition = 'opacity 2s ease-in';
//         setTimeout(() => title.style.opacity = 1, 300);
//     }
// });


// if (slider && webbImage) {
//     slider.addEventListener('input', (e) => {
//         webbImage.style.width = `${e.target.value}%`;
//     });
// }

// window.addEventListener('scroll', () => {
//     const missionSection = document.getElementById('mission-orbit');
//     const jwst = document.getElementById('jwst-traveler');

//     // Get the position of the section relative to the viewport
//     const sectionRect = missionSection.getBoundingClientRect();
//     const sectionTop = sectionRect.top;
//     const sectionHeight = sectionRect.height;

//     // Calculate progress (0 to 1) based on how much of the section has passed the top of the screen
//     let progress = -sectionTop / (sectionHeight - window.innerHeight);

//     // Clamp progress between 0 and 1
//     progress = Math.max(0, Math.min(1, progress));

//     // Move the JWST icon down the track (0% to 100% of the track height)
//     const trackHeight = missionSection.querySelector('.mission-track').offsetHeight;
//     jwst.style.transform = `translateY(${progress * (trackHeight - 40)}px)`;
// });

// function toggleDetails(id) {
//     const pane = document.getElementById(id);
//     // Toggle the 'active' class to expand/collapse
//     pane.classList.toggle('active');

//     // Close other panes if one is opened
//     const allPanes = document.querySelectorAll('.details-pane');
//     allPanes.forEach(p => {
//         if (p.id !== id) p.classList.remove('active');
//     });
// }

// // Initialize stars on load
// window.onload = createStars;

// 1. Slider Logic
const slider = document.getElementById('mirror-range');
const webbImage = document.getElementById('webb-image');
// Get references to the new labels
const jwstLabel = document.querySelector('.large-slider .left-label');
const hubbleLabel = document.querySelector('.large-slider .right-label');

if (slider && webbImage && jwstLabel && hubbleLabel) {
    slider.addEventListener('input', (e) => {
        const value = e.target.value; // 0 to 100
        webbImage.style.width = `${value}%`;

        // Progressive fade effect for labels based on slider position
        // Left label vanishes near 0 (Hubble only) and is fully visible near 100 (JWST only)
        jwstLabel.style.opacity = Math.max(0, (value - 10) / 40);

        // Right label vanishes near 100 (JWST only) and is fully visible near 0 (Hubble only)
        hubbleLabel.style.opacity = Math.max(0, (90 - value) / 40);
    });
}

// Star Generator Logic (Works across all pages)
function createStars() {
    const container = document.getElementById('star-container');
    if (!container) return; // Prevents errors if container isn't loaded

    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Random position across the fixed viewport
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 3 + 2;

        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);

        container.appendChild(star);
    }
}

// Fade in effect for the title on load
window.addEventListener('load', () => {
    createStars();

    const title = document.querySelector('.main-title');
    if (title) {
        title.style.opacity = 0;
        title.style.transition = 'opacity 2s ease-in';
        setTimeout(() => title.style.opacity = 1, 300);
    }
});

window.addEventListener('scroll', () => {
    const missionSection = document.getElementById('mission-orbit');
    const jwst = document.getElementById('jwst-traveler');

    if (missionSection && jwst) {
        // Get the position of the section relative to the viewport
        const sectionRect = missionSection.getBoundingClientRect();
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;

        // Calculate progress (0 to 1) based on how much of the section has passed the top of the screen
        let progress = -sectionTop / (sectionHeight - window.innerHeight);

        // Clamp progress between 0 and 1
        progress = Math.max(0, Math.min(1, progress));

        // Move the JWST icon down the track (0% to 100% of the track height)
        const trackHeight = missionSection.querySelector('.mission-track').offsetHeight;
        jwst.style.transform = `translateY(${progress * (trackHeight - 40)}px)`;
    }
});

function toggleDetails(id) {
    const pane = document.getElementById(id);
    // Toggle the 'active' class to expand/collapse
    pane.classList.toggle('active');

    // Close other panes if one is opened
    const allPanes = document.querySelectorAll('.details-pane');
    allPanes.forEach(p => {
        if (p.id !== id) p.classList.remove('active');
    });
}

// Initialize stars on load
window.onload = createStars;