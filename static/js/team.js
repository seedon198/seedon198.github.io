const teamData = [
    {
        name: "f4z41u",
        role: "Lead Village Coordinator",
        image: "static/media/fazalu.svg",
        bio: "Fazalu Rahman, our dedicated lead village coordinator, is a true jack of all trades. With a wealth of skills and a hands-on approach, he ensures smooth operations across various activities. Whether managing logistics, guiding teams, or troubleshooting on the go, Fazalu's resourcefulness and leadership shine through. His versatility and commitment to excellence make him an invaluable part of our village, driving progress and fostering a collaborative spirit."
    },
    {
        name: "Jane Smith",
        role: "Digital Forensics Specialist",
        image: "path/to/jane.jpg",
        bio: "Jane has over 10 years of experience in digital forensics..."
    },
    // Add more team members...
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
