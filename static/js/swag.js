const swagData = [
    {
        name: "Hardware Hacker Hulk",
        image: "static/media/stickers/HHV_Hulk.png",
        description: "Check out this amazing Hulk sticker designed by Ajmal Insta :- @ajmalmehroof_, This sticker is a part of HHV sticker pack."
    },
    {
        name: "Mark VII - Flipper Zero Sticker",
        image: "static/media/stickers/flipper_zero_village.png",
        description: "Check out this excusive Mark VII inspired sitcker created by Sagnik Haldar X :- @SagnikHaldar1. Win this swag by completing the Flipper Zero challenge!"
    },
    {
        name: "Lock Picking Mastery Sticker",
        image: "static/media/sticker.svg",
        description: "Show your skills with this sleek Lock Picking Mastery sticker. Win this swag by completing the Lock Picking challenge!"
    },
    {
        name: "Badge Builders Club Sticker",
        image: "static/media/sticker.svg",
        description: "Join the elite with this stylish Badge Builders Club sticker. Win this swag by completing the Badge Village challenge!"
    },
    {
        name: "Soldering Challenge Sticker",
        image: "static/media/sticker.png",
        description: "Earn this exclusive sticker by showcasing your soldering skills. Win this swag by completing the Soldering challenge!"
    },
    {
        name: "SMD Challenge Sticker",
        image: "static/media/sticker.svg",
        description: "Celebrate your mastery of SMD soldering with this cool sticker. Win this swag by completing the SMD challenge!"
    },
    {
        name: "Digital Forensics Investigator Badge",
        image: "static/media/sticker.svg",
        description: "Prove your digital sleuthing skills with this exclusive badge. Win this swag by completing the Digital Forensics challenge!"
    },
    {
        name: "HAM Radio Enthusiast Sticker",
        image: "static/media/sticker.svg",
        description: "Celebrate your passion for HAM radio with this vibrant sticker. Win this swag by completing the HAM Village challenge!"
    },
    {
        name: "ICS Security Guardian Sticker",
        image: "static/media/sticker.svg",
        description: "Show your commitment to ICS security with this unique sticker. Win this swag by completing the ICS Village challenge!"
    },
    {
        name: "WiFi Warriors Badge",
        image: "static/media/sticker.svg",
        description: "Join the ranks of WiFi Warriors with this exclusive badge. Win this swag by completing the WiFi Village challenge!"
    },
    {
        name: "Drone Navigator Sticker",
        image: "static/media/sticker.svg",
        description: "Take to the skies with this cool Drone Navigator sticker. Win this swag by completing the Drone Village challenge!"
    },
];

function createSVGFilter() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("style", "position: absolute; width: 0; height: 0");
    svg.innerHTML = `
        <defs>
            <filter id="pixelate">
                <feFlood x="4" y="4" height="2" width="2"/>
                <feComposite width="10" height="10"/>
                <feTile result="a"/>
                <feComposite in="SourceGraphic" in2="a" operator="in"/>
                <feMorphology operator="dilate" radius="2"/>
            </filter>
        </defs>
    `;
    document.body.appendChild(svg);
}

function populateSwag() {
    createSVGFilter();
    const swagGrid = document.getElementById('swag-grid');
    
    swagData.forEach(item => {
        const swagCard = document.createElement('div');
        swagCard.classList.add('swag-card');
        swagCard.innerHTML = `
            <h3>${item.name}</h3>
            <img src="${item.image}" alt="${item.name}">
            <p>${item.description}</p>
        `;
        
        swagGrid.appendChild(swagCard);
    });
}

document.addEventListener('DOMContentLoaded', populateSwag);