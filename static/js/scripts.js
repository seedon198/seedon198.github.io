// Debug flag
const DEBUG = true;

function debug(message) {
    if (DEBUG) {
        console.log(`[Debug]: ${message}`);
    }
}


// Village details data with formatted descriptions and key takeaways
const villageDetails = {
    flipper: {
        title: "Flipper Zero Village",
        description: `
            <p>Dive deep into the world of Flipper Zero. Our experts will guide you through:</p>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Radio Frequency (RF) analysis</li>
                    <li>NFC cloning</li>
                    <li>Infrared communication</li>
                    <li>GPIO, UART, SPI interfaces exploration</li>
                    <li>Practical demonstrations with Flipper Zero</li>
                </ul>
            </div>
            
            <div class="spacer"></div>
            
            <strong>Key Takeaways:</strong>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Understanding Flipper Zero hardware capabilities</li>
                    <li>Practical knowledge of RF, NFC, and IR operations</li>
                    <li>Hands-on experience with Flipper Zero in real-world scenarios</li>
                </ul>
            </div>

        `,
    },
    badge: {
        title: "Badge Village",
        description: `
            <p>Explore the world of electronic badge hacking. Sessions will cover:</p>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Modifying and programming conference badges</li>
                    <li>Understanding embedded systems in badges</li>
                    <li>Creating custom badge modifications</li>
                </ul>
            </div>
            
            <div class="spacer"></div>
            
            <strong>Key Takeaways:</strong>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Hands-on experience with badge hardware and software</li>
                    <li>Customizing badges with embedded systems knowledge</li>
                    <li>Insights into programming and modifying badges for personal use</li>
                </ul>
            </div>
        `,
    },
    ham: {
        title: "HAM Village",
        description: `
            <p>Get hands-on experience with amateur radio operations. Learn about:</p>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Software-Defined Radio (SDR)</li>
                    <li>Radio protocols and signal analysis</li>
                    <li>How radio communications intersect with cybersecurity</li>
                </ul>
            </div>
            
            <div class="spacer"></div>
            
            <strong>Key Takeaways:</strong>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Basic understanding of HAM radio operations</li>
                    <li>Using SDR for radio signal analysis</li>
                    <li>Applying radio protocols in cybersecurity contexts</li>
                </ul>
            </div>
        `,
    },
    forensics: {
        title: "Digital Forensics Village",
        description: `
            <p>Master the tools and techniques of digital forensics, focusing on:</p>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Data recovery and evidence handling</li>
                    <li>Investigation methodologies used by professionals</li>
                    <li>Real-world digital forensic case studies</li>
                </ul>
            </div>
            
            <div class="spacer"></div>
            
            <strong>Key Takeaways:</strong>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Deep understanding of data recovery tools</li>
                    <li>Best practices for evidence handling</li>
                    <li>Real-world experience through case studies</li>
                </ul>
            </div>
        `,
    },
    wifi: {
        title: "WiFi Village",
        description: `
            <p>Explore wireless network security, focusing on:</p>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Packet analysis and network penetration testing</li>
                    <li>The latest WiFi security protocols</li>
                    <li>Assessing wireless network vulnerabilities</li>
                </ul>
            </div>
            
            <div class="spacer"></div>
            
            <strong>Key Takeaways:</strong>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Understanding WiFi vulnerabilities and security protocols</li>
                    <li>Using packet analysis for penetration testing</li>
                    <li>Best practices for wireless security assessments</li>
                </ul>
            </div>
        `,
    },
    ics: {
        title: "ICS Village",
        description: `
            <p>Understanding Industrial Control Systems (ICS) security, with a focus on:</p>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>SCADA systems and PLC security</li>
                    <li>Securing critical infrastructure from cyber threats</li>
                    <li>Real-world ICS security breach scenarios</li>
                </ul>
            </div>
            
            <div class="spacer"></div>
            
            <strong>Key Takeaways:</strong>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Comprehensive knowledge of ICS and SCADA systems</li>
                    <li>Strategies to secure critical infrastructure</li>
                    <li>Insights into real-world ICS security challenges</li>
                </ul>
            </div>
        `,
    },
    drone: {
        title: "Drone Village",
        description: `
            <p>Learn about drone security, focusing on:</p>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Drone control systems and wireless communications</li>
                    <li>Drone hacking techniques and counter-drone technologies</li>
                    <li>Signal analysis for drones</li>
                </ul>
            </div>
            
            <div class="spacer"></div>
            
            <strong>Key Takeaways:</strong>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Understanding drone control systems and vulnerabilities</li>
                    <li>Hacking drones and implementing counter-drone measures</li>
                    <li>Applying signal analysis techniques in drone security</li>
                </ul>
            </div>
        `,
    },
    lockpicking: {
        title: "Lock Picking Village",
        description: `
              <p>Hands-on experience in lock picking and physical security assessment:</p>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Understanding various lock mechanisms</li>
                    <li>Practicing lock picking techniques</li>
                    <li>Assessing physical security systems</li>
                </ul>
            </div>
            
            <div class="spacer"></div>
            
            <strong>Key Takeaways:</strong>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Hands-on knowledge of lock mechanics</li>
                    <li>Best practices in lock picking and security assessments</li>
                    <li>Understanding physical security vulnerabilities</li>
                </ul>
            </div>
        `,
    },
    soldering: {
        title: "Soldering Village",
        description: `
            <p>Master electronic assembly techniques, focusing on:</p>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Component identification and soldering techniques</li>
                    <li>PCB board repair and troubleshooting</li>
                    <li>Building electronic projects from scratch</li>
                </ul>
            </div>
            
            <div class="spacer"></div>
            
            <strong>Key Takeaways:</strong>
             <div class="spacer"></div>
            <div class="bulleted-section">
                <ul>
                    <li>Hands-on experience with soldering and repair techniques</li>
                    <li>Component identification skills</li>
                    <li>Guided project building with expert supervision</li>
                </ul>
            </div>
        `,
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
                modalDescription.innerHTML = details.description;  // Use innerHTML for proper formatting
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
            ctx.fillStyle = `rgba(0, 243, 255, ${this.life * this.opacity * 0.8})`; // Fixed: wrap in backticks
            ctx.fill();
        }
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

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YC8JWDXN1J');