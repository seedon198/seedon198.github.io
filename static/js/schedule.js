const scheduleData = {
    day1: [
        { time: "09:00 - 10:00", title: "Opening Ceremony" },
        { time: "10:30 - 12:00", title: "Intro to Hardware Hacking" },
        // Add more events...
    ],
    day2: [
        { time: "09:00 - 11:00", title: "Advanced RF Techniques" },
        { time: "11:30 - 13:00", title: "IoT Security Workshop" },
        // Add more events...
    ],
    day3: [
        { time: "09:00 - 10:30", title: "Closing Keynote" },
        { time: "11:00 - 12:00", title: "Awards Ceremony" },
        // Add more events...
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
