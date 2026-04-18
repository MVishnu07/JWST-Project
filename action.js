const slider = document.getElementById('mirror-range');
const webbImage = document.getElementById('webb-image');
const jwstLabel = document.querySelector('.large-slider .left-label');
const hubbleLabel = document.querySelector('.large-slider .right-label');

if (slider && webbImage && jwstLabel && hubbleLabel) {
    slider.addEventListener('input', (e) => {
        const value = e.target.value; 
        webbImage.style.width = `${value}%`;

        jwstLabel.style.opacity = Math.max(0, (value - 10) / 40);

        hubbleLabel.style.opacity = Math.max(0, (90 - value) / 40);
    });
}

function createStars() {
    const container = document.getElementById('star-container');
    if (!container) return; 

    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

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
    const track = document.querySelector('.mission-track');
    const l2Marker = document.querySelector('.l2-marker');

    if (missionSection && jwst && track) {
        const targetScreenY = window.innerHeight * 0.4;
        
        const trackRect = track.getBoundingClientRect();

        let rocketY = targetScreenY - trackRect.top;
        const l2Height = l2Marker ? l2Marker.offsetHeight : 60;
        const maxTravel = track.offsetHeight - l2Height + 10;

        rocketY = Math.max(0, Math.min(maxTravel, rocketY));

        jwst.style.transform = `translateY(${rocketY}px)`;
    }
});

function toggleDetails(id) {
    const pane = document.getElementById(id);
    pane.classList.toggle('active');

    const allPanes = document.querySelectorAll('.details-pane');
    allPanes.forEach(p => {
        if (p.id !== id) p.classList.remove('active');
    });
}

window.onload = createStars;
