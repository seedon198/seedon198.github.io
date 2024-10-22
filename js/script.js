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

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Modal functionality
    initializeModal();
    
    // Initialize Particle system
    initializeParticles();
    
    // Initialize Google Analytics
    initializeGA();
});

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('villageModal');
    const modalClose = document.querySelector('.modal-close');
    const villageCards = document.querySelectorAll('.village-card');

    if (!modal || !modalClose) {
        console.error('Modal elements not found');
        return;
    }

    villageCards.forEach(card => {
        card.addEventListener('click', () => {
            const villageId = card.dataset.village;
            const details = villageDetails[villageId];
            
            if (details) {
                document.querySelector('.modal-title').textContent = details.title;
                document.querySelector('.modal-description').textContent = details.description;
                modal.classList.add('active');
            }
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// Particle animation
function initializeParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) {
        console.error('Particles canvas not found');
        return;
    }

    const ctx = canvas.getContext('2d');

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = document.documentElement.scrollHeight;
    }

    // Particle class
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
            this.opacity = Math.random() * 0.5 + 0.2;
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
            ctx.fillStyle = `rgba(0, 243, 255, ${this.life * this.opacity * 0.5})`;
            ctx.fill();
        }
    }

    // Initialize the canvas
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create particles
    const particles = Array(50).fill().map(() => new Particle());

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    // Start animation
    animate();
}

// Google Analytics initialization
function initializeGA() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-YC8JWDXN1J');
}
