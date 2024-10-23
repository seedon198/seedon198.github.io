const teamData = [
    {
        name: "John Doe",
        role: "Lead Hardware Hacker",
        image: "path/to/john.jpg",
        bio: "John is an expert in RF hacking and IoT security..."
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
