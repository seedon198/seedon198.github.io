const scheduleData = {
    day1: [
        { time: "08:00 - 09:00", title: "Registration" },
        { time: "09:00 - 10:30", title: "Opening Ceromony & Keynote" },
        { time: "11:00 - 13:30", title: "Hardware Village"},
        { time: "13:30 - 14:30", title: "Lunch"},
        { time: "14:30 - 16:00", title: "Hardware Village"},
        // Add more events...
    ],
    day2: [
        { time: "10:00 - 13:30", title: "Hardware Village"},
        { time: "13:30 - 14:30", title: "Lunch"},
        { time: "14:30 - 16:00", title: "Badge Quest"},
        { time: "14:30 - 16:00", title: "TBD"},
        // Add more events...
    ],
    day3: [
        { time: "09:00 - 13:00", title: "Hardware CTF" },
        { time: "13:30 - 14:30", title: "Lunch"},
        { time: "14:30 - 16:00", title: "TBD"},
        { time: "19:30 - 23:00", title: "Networking Party"},
    ]
};

function populateSchedule() {
    for (let day in scheduleData) {
        const dayElement = document.getElementById(`${day}-events`);
        scheduleData[day].forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event-item');
            eventElement.innerHTML = `
                <div class="event-time">${event.time}</div>
                <div class="event-title">${event.title}</div>
            `;
            dayElement.appendChild(eventElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', populateSchedule);
