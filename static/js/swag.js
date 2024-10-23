const swagData = [
    {
        name: "HHV Sticker Pack",
        image: "path/to/sticker-pack.jpg",
        description: "A set of 10 unique Hardware Hacking Village stickers."
    },
    {
        name: "RF Explorer Sticker",
        image: "path/to/rf-explorer-sticker.jpg",
        description: "Show off your RF hacking skills with this cool sticker."
    },
    // Add more swag items...
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
