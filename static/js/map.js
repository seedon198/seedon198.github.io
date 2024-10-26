const villageData = [
    { name: "Entrance", x: 0, y: 90 , isEntrance: true },
    { name: "Badge Village", x: 25, y: 87 },
    { name: "Soldering Station", x: 0, y: 35 },
    { name: "Reflow Station", x: 0, y: 48 },
    { name: "ICS Village", x: 45, y: 0 },
    { name: "WiFi Village", x: 65, y: 0 },
    { name: "HAM Village", x: 25, y: 0 },
    { name: "Flipper Zero Village", x: 89.5, y: 40 },
    { name: "Drone Village", x: 45, y: 87 },
    { name: "Lockpick Booth", x: 65, y: 87 },
    { name: "Exit", x: 0, y: 0, isExit: true }
];

function createMap() {
    const map = document.querySelector('.map');

    villageData.forEach((village, index) => {
        const booth = document.createElement('div');
        booth.classList.add('booth');
        booth.style.left = `${village.x}%`;
        booth.style.top = `${village.y}%`;
        
        if (village.isEntrance) {
            booth.classList.add('entrance');
            booth.innerHTML = `
                <span class="arrow">↑</span>
                <span class="label">Entrance</span>
            `;
        } else if (village.isExit) {
            booth.classList.add('exit');
            booth.innerHTML = `
                <span class="label">Exit</span>
                <span class="arrow">←</span>
            `;
        } else {
            booth.innerHTML = village.name;
        }
        
        booth.style.animationDelay = `${index * 0.1}s`;
        booth.style.animation = 'fadeIn 0.5s ease-out forwards';

        booth.addEventListener('mouseover', () => {
            booth.style.animation = 'pulse 0.5s infinite alternate';
        });

        booth.addEventListener('mouseout', () => {
            booth.style.animation = '';
        });

        map.appendChild(booth);
    });

    createPath();
}

function createPath() {
    const map = document.querySelector('.map');
    const path = document.createElement('svg');
    path.classList.add('path');
    path.setAttribute('width', '100%');
    path.setAttribute('height', '100%');

    let pathString = 'M 5 95';
    villageData.forEach((village, index) => {
        if (index > 0 && !village.isExit) {
            pathString += ` L ${village.x} ${village.y}`;
        }
    });

    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', pathString);
    pathElement.classList.add('path-line');

    path.appendChild(pathElement);
    map.appendChild(path);
}

document.addEventListener('DOMContentLoaded', createMap);
