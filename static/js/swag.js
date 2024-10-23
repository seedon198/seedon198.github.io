const swagData = [
    {
        name: "HHV Sticker Pack",
        image: "static/media/sticker.svg",
        description: "A set of 10 unique stickers. Every Attendee of HHV will get these stickers and they will be disbursed during the village."
    },
    {
        name: "Flipper Zero Adventure Pack",
        image: "static/media/sticker.svg",
        description: "Unlock the secrets of Flipper Zero with this exclusive pack. Win this swag by completing the Flipper Zero challenge!"
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
        image: "static/media/sticker.svg",
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

function populateSwag() {
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
