// Debug flag
const DEBUG = true;

function debug(message) {
    if (DEBUG) {
        console.log(`[Debug]: ${message}`);
    }
}

// Village details data
const villageDetails = {
    flipper: {
        title: "Flipper Zero Village",
        description: "Dive deep into the world of Flipper Zero. Learn about radio frequency analysis, NFC cloning, infrared communication, and much more. Our experts will guide you through hands-on exercises and real-world applications.",
    },
    badge: {
        title: "Badge Village",
        description: "Explore the art of electronic badge hacking. Learn to modify and program conference badges, understand embedded systems, and create your own badge modifications.",
    },
    ham: {
        title: "HAM Village",
        description: "Get hands-on experience with amateur radio operations. Learn about SDR, radio protocols, signal analysis, and the intersection of radio communications with cybersecurity.",
    },
    forensics: {
        title: "Digital Forensics",
        description: "Master the tools and techniques of digital forensics. Learn about data recovery, evidence handling, and investigation methodologies used by professionals.",
    },
    wifi: {
        title: "WiFi Village",
        description: "Explore wireless network security, packet analysis, and network penetration testing. Learn about the latest WiFi security protocols and how to assess wireless network security.",
    },
    ics: {
        title: "ICS Village",
        description: "Understanding industrial control systems security. Learn about SCADA systems, PLCs, and how to secure critical infrastructure from cyber threats.",
    },
    drone: {
        title: "Drone Village",
        description: "Explore drone security, control systems, and wireless communications. Learn about drone hacking, signal analysis, and counter-drone technologies.",
    },
    lockpicking: {
        title: "Lock Picking Village",
        description: "Learn the art of lock picking, physical security assessment, and understanding mechanical security systems. Hands-on experience with various types of locks and security mechanisms.",
    },
    soldering: {
        title: "Soldering Village",
        description: "Master electronic assembly techniques. Learn component identification, proper soldering techniques, and board repair. Build your own electronic projects with expert guidance.",
    }
};

// Modal functionality
function initializeModal() {
    debug('Initializing modal...');
    
    const modal = document.getElementById('villageModal');
    const modalClose = modal ? modal.querySelector('.modal-close') : null;
    const villageCards = document.querySelectorAll('.village-card');
    const modalTitle = modal ? modal.querySelector('.modal-title') : null;
    const modalDescription = modal ? modal.querySelector('.modal-description') : null;

    if (!modal || !modalClose || !modalTitle || !modalDescription) {
        console.error('Required modal elements not found:', {
            modal: !!modal,
            modalClose: !!modalClose,
            modalTitle: !!modalTitle,
            modalDescription: !!modalDescription
        });
        return;
    }

    debug(`Found ${villageCards.length} village cards`);

    villageCards.forEach(card => {
        card.addEventListener('click', (e) => {
            debug('Village card clicked');
            const villageId = card.dataset.village;
            const details = villageDetails[villageId];
            
            if (details) {
                modalTitle.textContent = details.title;
                modalDescription.textContent = details.description;
                modal.classList.add('active');
                debug(`Opened modal for ${villageId}`);
            }
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        debug('Modal closed via close button');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            debug('Modal closed via outside click');
        }
    });

    debug('Modal initialization complete');
}

// Particle animation
function initializeParticles() {
    debug('Initializing particles...');
    
    const canvas = document.getElementById('particles');
    if (!canvas) {
        console.error('Particles canvas not found');
        return;
    }

    const ctx = canvas.getContext('2d');
    debug('Canvas context acquired');

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = Math.max(
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        );
        debug(`Canvas resized to ${canvas.width}x${canvas.height}`);
    }

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.5;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.life = Math.random() * 0.5 + 0.5;
            this.opacity = Math.random() * 0.5 + 0.4;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 0.005;

            if (this.life <= 0 || 
                this.x < 0 || this.x > canvas.width || 
                this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            // Change this line - increase the final multiplier from 0.5 to 0.8
            ctx.fillStyle = `rgba(0, 243, 255, ${this.life * this.opacity * 0.8})`; // Previously was: * 0.5
            ctx.fill();
    }

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const particles = Array(50).fill().map(() => new Particle());
    debug(`Created ${particles.length} particles`);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
    debug('Particle animation started');
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    debug('DOM Content Loaded');
    initializeModal();
    initializeParticles();
});

// Backup initialization for cases where DOMContentLoaded might have already fired
if (document.readyState === 'complete') {
    debug('DOM already loaded, initializing directly');
    initializeModal();
    initializeParticles();
}
