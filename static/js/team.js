const teamData = [
    {
        name: "Fazalu Rahman",
        role: "Core Team",
        image: "static/media/mugshots/fazalu.png",
        skills: ["VAPT", "Red Teaming", "Lockpicking"],
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Seedon D'Souza",
        role: "Village Coordinator",
        image: "static/media/mugshots/seedon.png",
        skills: ["Leadership", "IoT Hacking", "Hardware Debugging"],
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Mohammed Arif",
        role: "Core Team",
        image: "static/media/mugshots/arif.png",
        skills: ["Python", "Linux", "Reverse Engineering"],
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Kartheek Laade",
        role: "Core Team",
        image: "static/media/mugshots/kartheek.png",
        skills: ["Electronics", "Hardware Security", "FPGA"],
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Ujwal Patel",
        role: "Core Team",
        image: "static/media/mugshots/ujwal.png",
        skills: ["Networking", "Hardware Debugging", "Protocol Analysis"],
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Muhsin Bin Irshad",
        role: "Core Team",
        image: "static/media/mugshots/muhsin.png",
        skills: ["C Programming", "IoT Penetration Testing", "Wi-Fi Hacking"],
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Kiran Gupta",
        role: "Core Team",
        image: "static/media/mugshots/Michael_Scott.png",
        skills: ["Red Teaming", "Security Automation", "Tool Development"],
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Sreehari",
        role: "Trainer",
        image: "static/media/mugshots/sreehari.png",
        skills: ["Cryptography", "Web Security", "C++"],
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Rageeth",
        role: "Web Designer",
        image: "static/media/mugshots/rageeth.png",
        skills: ["HTML", "CSS", "JavaScript"],
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Minhaj",
        role: "Trainer",
        image: "static/media/mugshots/minhaj.png",
        skills: ["Web Pentesting", "IoT Hacking", "Red Teaming"],
        social: {
            instagram: "https://www.instagram.com/4minhaj/",
            github: "https://github.com/saltX5",
            twitter: "http://x.com/0xblick",
            linkedin: "https://www.linkedin.com/in/0xminhaj",
        },
    },
    {
        name: "Aswin Krishna",
        role: "Trainer",
        image: "static/media/mugshots/aswin.png",
        skills: ["Digital Forensics", "Cloud Security", "Python"],
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Vishnu T.",
        role: "Trainer",
        image: "static/media/mugshots/vishnu.png",
        skills: ["Hardware Debugging", "Penetration Testing", "Networking"],
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Nishal",
        role: "Trainer",
        image: "static/media/mugshots/nishal.png",
        skills: ["Web Security", "OSINT", "Threat Intelligence"],
        social: {
            instagram: "https://www.instagram.com/nishhhaaallll",
            github: "https://github.com/nishhaaallll",
            twitter: "#",
            linkedin: "https://www.linkedin.com/in/",
        },
    },
    {
        name: "Keta Desai",
        role: "Trainer",
        image: "static/media/mugshots/keta.png",
        skills: ["Electronics", "RF Analysis", "IoT Hacking"],
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Graham Gohil",
        role: "Trainer",
        image: "static/media/mugshots/graham.png",
        skills: ["Firmware Analysis", "Exploit Development", "Reverse Engineering"],
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Rajan Kumbhani",
        role: "Trainer",
        image: "static/media/mugshots/rajan.png",
        skills: ["Hardware Forensics", "IoT Security", "Microcontrollers"],
        social: {
            instagram: "#",
            github: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Rishabh Soni",
        role: "Trainer",
        image: "static/media/mugshots/rishab.png",
        skills: ["ICS/Scada", "Red Teaming", "IOT Security"],
        social: {
            instagram: "https://www.instagram.com/azmendus/",
            github: "http://github.com/azmendus",
            twitter: "https://x.com/azmendus",
            linkedin: "https://www.linkedin.com/in/azmendus/",
        },
    },
    {
        name: "Sagnik Haldar",
        role: "Graphic Designer",
        image: "static/media/mugshots/Sagnik.png",
        skills: ["Graphic Design", "UI/UX", "Branding"],
        social: {
            instagram: "#",
            github: "http://github.com/hsagnik",
            twitter: "http://x.com/SagnikHaldar1",
            linkedin: "http://www.linkedin.com/in/hsagnik",
        },
    },
    {
        name: "Abhinav Salgunan",
        role: "Trainer",
        image: "static/media/mugshots/Abhinav.png",
        skills: ["Malware Analysis", "Red Teaming", "Shellcoding"],
        social: {
            instagram: "https://www.instagram.com/abiiinv",
            github: "http://github.com/abiiinv",
            twitter: "http://x.com/abiiinv",
            linkedin: "#",
        },
    },
    {
        name: "Ajmal Mehroof",
        role: "Graphic Designer",
        image: "static/media/mugshots/ajmal.png",
        skills: ["Graphic Design", "UI/UX", "Branding"],
        social: {
            instagram: "https://www.instagram.com/",
            github: "http://github.com/",
            twitter: "http://x.com/",
            linkedin: "http://linkedin.com/in/ajmalkp77",
        },
    },
    {
        name: "Deepu",
        role: "Trainer",
        image: "static/media/mugshots/deepu.png",
        skills: ["Exploit Development", "Kernel Debugging", "Programming"],
        social: {
            instagram: "#",
            github: "http://github.com/DEEPU0777",
            twitter: "http://x.com/deepurs924",
            linkedin: "#",
        },
    },
    {
        name: "Sourav Sivan",
        role: "Trainer",
        image: "static/media/mugshots/sourav.png",
        skills: ["Exploit Development", "Kernel Debugging", "Programming"],
        social: {
            instagram: "https://www.instagram.com/s8urav",
            github: "https://github.com/S8URAV",
            twitter: "https://x.com/sourav_sivan ",
            linkedin: "https://www.linkedin.com/in/souravsivan",
        },
    },
    {    
        name: "Vishnu Narayanan",
        role: "Trainer",
        image: "static/media/mugshots/vishnu-n.png",
        skills: [" IOT Hacking", "Wireless pentesting", "Bughunting"],
        social: {
            instagram: "https://www.instagram.com/vnx.py",
            github: "https://github.com/0V-N",
            twitter: "https://x.com/vn_viii ",
            linkedin: "https://www.linkedin.com/in/vishnu-narayanan",
        },
    },
];

function populateTeam() {
    const teamGrid = document.getElementById('team-grid');
    teamData.forEach((member) => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('team-card');

        const skillsHTML = member.skills
            .map((skill) => `<span class="skill-box">${skill}</span>`)
            .join("");

        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
            <div class="skill-container">${skillsHTML}</div>
            <div class="team-member-socials">
                <a href="${member.social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="${member.social.github}" target="_blank"><i class="fab fa-github"></i></a>
                <a href="${member.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>`;
        teamGrid.appendChild(memberCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateTeam();
});
