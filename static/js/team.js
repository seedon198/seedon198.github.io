const teamData = [
    {
        name: "Fazalu Rahman",
        role: "Core Team",
        image: "static/media/mugshots/fazalu.png",
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Seedon D'Souza",
        role: "Village Coordinator",
        image: "static/media/mugshots/seedon.png",
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Mohammed Arif",
        role: "Core Team",
        image: "static/media/mugshots/arif.png",
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Kartheek Laade",
        role: "Core Team",
        image: "static/media/mugshots/kartheek.png",
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Ujwal Patel",
        role: "Core Team",
        image: "static/media/mugshots/ujwal.png",
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Muhsin Bin Irshad",
        role: "Core Team",
        image: "static/media/mugshots/muhsin.png",
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Kiran Gupta",
        role: "Core Team",
        image: "static/media/mugshots/Michael_Scott.png",
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Sreehari",
        role: "Trainer",
        image: "static/media/mugshots/sreehari.png",
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Rageeth",
        role: "Web Designer",
        image: "static/media/mugshots/rageeth.png",
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Minhaj",
        role: "Trainer",
        image: "static/media/mugshots/minhaj.png",
        social: {
            instagram: "https://www.instagram.com/4minhaj/",
            github: "https://github.com/saltX5",
            twitter: "http://x.com/0xblick",
            linkedin: "https://www.linkedin.com/in/0xminhaj"
        }
    },
    {
        name: "Aswin Krishna",
        role: "Trainer",
        image: "static/media/mugshots/aswin.png",
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Vishnu T.",
        role: "Trainer",
        image: "static/media/mugshots/vishnu.png",
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Nishal",
        role: "Trainer",
        image: "static/media/mugshots/nishal.png",
        social: {
            instagram: "https://www.instagram.com/nishhhaaallll",
            github: "https://github.com/nishhaaallll",
            twitter: "#",
            linkedin: "https://www.linkedin.com/in/"
        }
    },
    {
        name: "Keta Desai",
        role: "Trainer",
        image: "static/media/mugshots/keta.png",
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Graham Gohil",
        role: "Trainer",
        image: "static/media/mugshots/graham.png",
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Rajan Kumbhani",
        role: "Trainer",
        image: "static/media/mugshots/rajan.png",
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Rishabh Soni",
        role: "Trainer",
        image: "static/media/mugshots/rishab.png",
        social: {
            instagram: "https://www.instagram.com/azmendus/",
            github: "http://github.com/azmendus",
            twitter: "https://x.com/azmendus",
            linkedin: "https://www.linkedin.com/in/azmendus/"
        }
    },
    {
        name: "Sagnik Haldar",
        role: "Trainer",
        image: "static/media/mugshots/Sagnik.png",
        social: {
            instagram: "#",
            github: "http://github.com/hsagnik",
            twitter: "http://x.com/SagnikHaldar1",
            linkedin: "http://www.linkedin.com/in/hsagnik"
        }
    },
    {
        name: "Abhinav Salgunan",
        role: "Trainer",
        image: "static/media/mugshots/Abhinav.png",
        social: {
            instagram: "https://www.instagram.com/abiiinv",
            github: "http://github.com/abiiinv",
            twitter: "http://x.com/abiiinv",
            linkedin: "#"
        }
    },
    {
        name: "Ajmal Mehroof",
        role: "Graphic Designer",
        image: "static/media/mugshots/ajmal.png",
        social: {
            instagram: "https://www.instagram.com/",
            github: "http://github.com/",
            twitter: "http://x.com/",
            linkedin: "http://linkedin.com/in/ajmalkp77"
        }
    },
    {
        name: "Deepu",
        role: "Trainer",
        image: "static/media/mugshots/deepu.png",
        social: {
            instagram: "#",
            github: "http://github.com/DEEPU0777",
            twitter: "http://x.com/deepurs924",
            linkedin: "#"
        }
    }
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
            <div class="team-member-socials">
                <a href="${member.social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="${member.social.github}" target="_blank"><i class="fab fa-github"></i></a>
                <a href="${member.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
        `;
        teamGrid.appendChild(memberCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateTeam();
});
