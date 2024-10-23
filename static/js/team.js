const teamData = [
    {
        name: "Fazalu Rahman",
        role: "Core Team",
        image: "static/media/fazalu.svg",
        bio: "Fazalu Rahman, our dedicated lead village coordinator, is a true jack of all trades. With a wealth of skills and a hands-on approach, he ensures smooth operations across various activities. Whether managing logistics, guiding teams, or troubleshooting on the go, Fazalu's resourcefulness and leadership shine through. His versatility and commitment to excellence make him an invaluable part of our village, driving progress and fostering a collaborative spirit."
    },
    {
        name: "Mohd. Arif",
        role: "Core Team",
        image: "static/media/arif.svg",
        bio: "Mohd. Arif, one of our core team members, is the ultimate workhorse of the group. From navigating the chaos of SP Road to hunt down the tiniest electronic components to literally hauling a 3D printer on his back like it’s no big deal, Arif does it all with a smile. His dedication is unmatched, and if something needs to be done, you can bet Arif’s already halfway there—probably carrying half the workshop with him!"
    },
    {
        name: "Kartheek Laade",
        role: "Core Team",
        image: "static/media/kartheek.svg",
        bio: "Kartheek Laade, a vital part of our core team, is our resident automotive security expert. When it comes to keeping vehicles safe from cyber threats, Kartheek is the mastermind. From securing complex onboard systems to safeguarding modern cars from digital vulnerabilities, his expertise is unmatched. Whether it's hacking into a car to find weaknesses or locking it down to ensure it's impenetrable, Kartheek’s got it covered—he’s the guy you want in your corner if your car ever decides to get tech-savvy!"
    },
    
];

function populateTeam() {
    const teamGrid = document.getElementById('team-grid');
    teamData.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('team-card');
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        memberCard.addEventListener('click', () => showTeamModal(member));
        teamGrid.appendChild(memberCard);
    });
}

function showTeamModal(member) {
    const modal = document.getElementById('teamModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalImage = modal.querySelector('.modal-image');
    const modalDescription = modal.querySelector('.modal-description');

    modalTitle.textContent = `${member.name} - ${member.role}`;
    modalImage.src = member.image;
    modalImage.alt = member.name;
    modalDescription.textContent = member.bio;

    modal.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    populateTeam();
    
    const modalClose = document.querySelector('.modal-close');
    modalClose.addEventListener('click', () => {
        document.getElementById('teamModal').classList.remove('active');
    });
});
