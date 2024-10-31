const swagData = [
    {
        name: "Hardware Hacker Hulk Sticker",
        image: "static/media/stickers/HHV_Hulk.png",
        description: "Check out this amazing Hulk sticker designed by Ajmal Insta :- @ajmalmehroof_, This sticker is a part of HHV sticker pack."
    },
    {
        name: "Hardware Hacker Deadpool Sticker",
        image: "static/media/stickers/HHV_Deadpool.png",
        description: "Check out this amazing Deadpool sticker designed by Ajmal Insta :- @ajmalmehroof_, This sticker is a part of HHV sticker pack."
    },
    {
        name: "Hardware Hacker Iron Man Sticker",
        image: "static/media/stickers/HHV_Ironman.png",
        description: "Check out this amazing Iron Man sticker designed by Ajmal Insta :- @ajmalmehroof_, This sticker is a part of HHV sticker pack."
    },
    {
        name: "Hardware Hacker Captain Sticker",
        image: "static/media/stickers/HHV_Captain.png",
        description: "Check out this amazing Captain America sticker designed by Ajmal Insta :- @ajmalmehroof_, This sticker is a part of HHV sticker pack."
    },
    {
        name: "Mark VII - Flipper Zero Sticker",
        image: "static/media/stickers/flipper_zero_village.png",
        description: "Check out this excusive Mark VII inspired sitcker created by Sagnik Haldar X :- @SagnikHaldar1. Win this swag by completing the Flipper Zero challenge!"
    },
    {
        name: "Badge Builders Club Sticker",
        image: "static/media/stickers/cap_shield_village.png",
        description: "Join the elite with this stylish Badge Builders Club sticker. Get this Captian America Shied sticker Sagnik Haldar X :- @SagnikHaldar1 upon completing the badge challenge!"
    },
    {
        name: "HAM Radio Mjölnir Sticker",
        image: "static/media/stickers/ham_village.png",
        description: "Celebrate your passion for HAM radio with this Mjölnir inspired HAM sticker made by Sagnik Haldar X :- @SagnikHaldar1. Win this swag by completing the HAM Village challenge!"
    },
    {
        name: "Lock Picking 101 Flipbook",
        image: "static/media/stickers/lockpicking_flipbook.png",
        description: 'Earn this Pirate themed lockpicking flipbook designed by Minhaj X :- @0xblick by breaking our mock doors at the lockpicking village!</p><br><p><a href="static/media/pdf/Lockpicking_Flipbook.pdf">Download the digital copy!</a>'
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