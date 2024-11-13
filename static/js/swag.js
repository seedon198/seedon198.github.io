const swagData = [
    {
        name: "HHV - Hulk",
        image: "static/media/stickers/HHV_Hulk.png",
        description: "Check out this Incredible Hulk sticker designed by Ajmal Insta :- @ajmalmehroof_, This sticker is a part of HHV sticker pack."
    },
    {
        name: "HHV - Deadpool",
        image: "static/media/stickers/HHV_Deadpool.png",
        description: "Check out this amazing Deadpool sticker designed by Ajmal Insta :- @ajmalmehroof_, This sticker is a part of HHV sticker pack."
    },
    {
        name: "HHV - Captain",
        image: "static/media/stickers/HHV_Captain.png",
        description: "Check out this amazing Captain America sticker designed by Ajmal Insta :- @ajmalmehroof_, This sticker is a part of HHV sticker pack."
    },
    {
        name: "HHV - Iron Man",
        image: "static/media/stickers/HHV_Ironman.png",
        description: "Check out this amazing Iron Man sticker designed by Ajmal Insta :- @ajmalmehroof_, This sticker is a part of HHV sticker pack."
    },
    {
        name: "HHV - Zero Day",
        image: "static/media/stickers/0day.png",
        description: "Check out this Incredible Rocket Raccoon sticker designed by Sandeep Insta :- @h1_sandeep , This sticker is a part of HHV sticker pack."
    },
    {
        name: "HHV - Groot",
        image: "static/media/stickers/groot.png",
        description: "Check out this Incredible Groot sticker designed by Minhaj Insta :- @4minhaj, This sticker is a part of HHV sticker pack."
    },
    {
        name: "HHV - SpiderMan",
        image: "static/media/stickers/spiderman.png",
        description: "Check out this Incredible SpiderMan sticker designed by Minhaj Insta :- @4minhaj, This sticker is a part of HHV sticker pack."
    },
    {
        name: "HHV - Doctor Strange",
        image: "static/media/stickers/doctor.png",
        description: "Check out this Incredible Doctor strange sticker designed by Minhaj Insta :- @4minhaj, This sticker is a part of HHV sticker pack."
    },
    {
        name: "ICS/SCADA Village",
        image: "static/media/stickers/ics_village.png",
        description: "Check out this amazing sticker designed by Muhsin Bin Irshad :- @muhsinbinirshad, Earn this sticker by hacking into & blowing up a virtual factory at the ICS Village."
    },
    {
        name: "Lock Picking Village",
        image: "static/media/stickers/lock_p_village.png",
        description: "Unlock new skills with this Lock Picking Village sticker made by Sagnik Haldar X :- @SagnikHaldar1. Claim this exclusive swag by mastering the Lock Picking  challenge!"
    },
    {
        name: "Badge Builders Club",
        image: "static/media/stickers/cap_shield_village.png",
        description: "Join the elite with this stylish Badge Builders Club sticker. Get this Captian America Shied sticker Sagnik Haldar X :- @SagnikHaldar1 upon completing the badge quest!"
    },
    {
        name: "HAM Radio Mjölnir",
        image: "static/media/stickers/ham_village.png",
        description: "Celebrate your passion for HAM radio with this Mjölnir inspired HAM sticker made by Sagnik Haldar X :- @SagnikHaldar1. Win this swag by making a successful QSO at the HAM booth!"
    },
    {
        name: "Forensics Village",
        image: "static/media/stickers/digi_forensic_village.png",
        description: "Dive into the world of investigation with this Digital Forensics sticker made by Sagnik Haldar X :- @SagnikHaldar1. Win this unique swag by completing the Forensics challenge!"
    },
    {
        name: "Drone Hacking Village",
        image: "static/media/stickers/drone_village.png",
        description: "Soar into the skies with this phoenix-inspired Drone sticker made by Sagnik Haldar X :- @SagnikHaldar1. Earn this exclusive swag by completing the Drone Quiz!"
    },
    {
        name: "Mark VII - Flipper",
        image: "static/media/stickers/flipper_zero_village.png",
        description: "Check out this excusive Mark VII inspired sitcker created by Sagnik Haldar X :- @SagnikHaldar1. Win this swag by completing the Flipper Zero challenge!"
    },
    {
        name: "Soldering Village",
        image: "static/media/stickers/soldering_village.png",
        description: "Spark your creativity with this Soldering Village sticker made by Sagnik Haldar X :- @SagnikHaldar1. Earn this exclusive swag by completing the Soldering challenge!"
    },
    {
        name: "Lock Picking 101 Flipbook",
        image: "static/media/stickers/lockpicking_flipbook.png",
        description: 'Earn this Pirate themed lockpicking flipbook designed by Minhaj insta :- @4minhaj by breaking our mock doors at the lockpicking village!</p><br><p><a href="static/media/pdf/Lockpicking_Flipbook.pdf">Download the digital copy!</a>'
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
