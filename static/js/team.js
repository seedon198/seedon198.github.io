const teamData = [
    {
        name: "Fazalu Rahman",
        role: "Core Team",
        image: "static/media/mugshots/fazalu.png",
        bio: "Fazalu Rahman, our dedicated lead village coordinator, is a true jack of all trades. With a wealth of skills and a hands-on approach, he ensures smooth operations across various activities. Whether managing logistics, guiding teams, or troubleshooting on the go, Fazalu's resourcefulness and leadership shine through. His versatility and commitment to excellence make him an invaluable part of our village, driving progress and fostering a collaborative spirit."
    },
    {
        name: "Mohammed Arif",
        role: "Core Team",
        image: "static/media/mugshots/arif.png",
        bio: "Mohd. Arif, one of our core team members, is the ultimate workhorse of the group. From navigating the chaos of SP Road to hunt down the tiniest electronic components to literally hauling a 3D printer on his back like it’s no big deal, Arif does it all with a smile. His dedication is unmatched, and if something needs to be done, you can bet Arif’s already halfway there—probably carrying half the workshop with him!"
    },
    {
        name: "Kartheek Laade",
        role: "Core Team",
        image: "static/media/mugshots/kartheek.png",
        bio: "Kartheek Laade, a vital part of our core team, is our resident automotive security expert. When it comes to keeping vehicles safe from cyber threats, Kartheek is the mastermind. From securing complex onboard systems to safeguarding modern cars from digital vulnerabilities, his expertise is unmatched. Whether it's hacking into a car to find weaknesses or locking it down to ensure it's impenetrable, Kartheek’s got it covered—he’s the guy you want in your corner if your car ever decides to get tech-savvy!"
    },
    {
        name: "Muhsin Bin Irshad",
        role: "Core Team",
        image: "static/media/mugshots/muhsin.png",
        bio: "Muhsin, our talented graphics designer, is the creative genius behind all things visual. Whether it’s crafting stunning logos, designing eye-catching banners, or adding that perfect touch of flair to every project, Muhsin brings ideas to life with style and precision. With an eye for detail and a knack for turning concepts into captivating visuals, he’s the one who makes everything look as awesome as it works. If it’s visually appealing, you can bet Muhsin had a hand in it!"
    },
    {
        name: "Sreehari",
        role: "Trainer",
        image: "static/media/mugshots/sreehari.png",
        bio: "Sreehari, our lock-picking and physical security trainer, is the master of all things that click, clank, and unlock. With expert hands and a sharp mind, he can bypass the trickiest locks while teaching others how to secure them better. Whether he's cracking open a stubborn padlock or sharing the art of physical security with the team, Sreehari brings a unique mix of skill and knowledge to the table. If you ever find yourself locked out—or want to make sure no one else can get in—Sreehari’s your guy!"
    },
    {
        name: "Rageeth",
        role: "Web Designer",
        image: "static/media/mugshots/rageeth.png",
        bio: "Rageeth, our brilliant web designer and village trainer, is the creative force behind our digital presence. From designing sleek, user-friendly websites to guiding the next generation of tech enthusiasts, he brings a blend of artistic vision and technical know-how to everything he does. Whether he's crafting beautiful web layouts or sharing his skills with the village, Rageeth’s work is always polished and professional. If it looks good and works flawlessly, you can bet Rageeth had a hand in it!"
    },
    {
        name: "Kiran Gupta",
        role: "Core Team",
        image: "static/media/mugshots/woman.png",
        bio: "Kiran Gupta is the powerhouse behind everything that happens in the village. The one who works tirelessly, often behind the scenes, she’s the glue that holds it all together. From coordinating tasks to ensuring everything runs smoothly, Kiran is always there, selflessly putting in the hard work to get things done on time. Her dedication and energy keep the village on track, and she does it all with a smile. If something’s running smoothly, it’s because Kiran’s got it covered!"
    },
    {
        name: "Seedon D'Souza",
        role: "Village Coordinator",
        image: "static/media/mugshots/seedon.png",
        bio: "His role involves orchestrating a range of activities, ensuring everything is set up efficiently, and making sure participants have a rewarding experience. With a focus on collaboration and innovation."
    },
    {
        name: "Ujwal Patel",
        role: "Electronics Mastermind",
        image: "static/media/mugshots/man.png",
        bio: "Ujwal is the mastermind behind last year’s CTF and badge design, and his dedication knows no bounds. Hardworking and versatile, he seamlessly juggles multiple roles—from managing the soldering village to quickly spinning up CTF challenges, all at the same time. His ability to balance so much with precision and energy is truly impressive. We all recognize and deeply value Ujwal's immense contribution to the success of the 2023 Hardware Village. Simply put, the village wouldn't have been the same without him!"
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
