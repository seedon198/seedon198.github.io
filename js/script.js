document.addEventListener("DOMContentLoaded", function () {
  const activities = [
    {
      date: "Nov 2019",
      title: "BSides Ahmedabad",
      description: "Presented a talk on Kali on Wheels",
      image: "nov2019.jpg",
    },
    {
      date: "Mar 2020",
      title: "Seasides Information Security Conference",
      description:
        "Presented Wi-Fi deauther, USB rubber ducky & soldering village",
      image: "",
    },
    // Add more activities here in the same format
  ];

  // Function to create a timeline card
  function createCard(activity) {
    const card = document.createElement("div");
    card.classList.add("timeline-card");

    const dateElement = document.createElement("div");
    dateElement.classList.add("timeline-date");
    dateElement.textContent = activity.date;

    const content = document.createElement("div");
    content.classList.add("timeline-content");

    const title = document.createElement("h2");
    title.classList.add("timeline-title");
    title.textContent = activity.title;

    const description = document.createElement("p");
    description.classList.add("timeline-description");
    description.textContent = activity.description;

    const image = document.createElement("img");
    image.classList.add("timeline-image");
    image.src = activity.image;
    image.alt = activity.title;

    content.appendChild(title);
    content.appendChild(description);
    card.appendChild(dateElement);
    card.appendChild(content);
    card.appendChild(image);

    return card;
  }

  // Function to create the timeline
  function createTimeline() {
    const timelineElement = document.getElementById("timeline");

    // Add past activities to the timeline
    for (const activity of activities) {
      const card = createCard(activity);
      timelineElement.appendChild(card);
    }

    // Add upcoming event
    const currentDate = new Date();
    const upcomingEvent = {
      date: "Sep 2023",
      title: "Seasides Information Security Conference",
      description:
        "Hardware hacking village at Seasides 23, includes soldering village, HAM village, Lockpicking village, Firmware hacking, Drone Hacking, 3-D printing & Badge Quest, Hardware CTF.",
      image: "upcoming.jpg",
    };

    const upcomingCard = createCard(upcomingEvent);
    timelineElement.appendChild(upcomingCard);

    // Mark present day on timeline
    const timelineDates = document.querySelectorAll(".timeline-date");
    timelineDates.forEach((dateElement) => {
      if (dateElement.textContent === "Sep 2023") {
        dateElement.classList.add("present-day");
      }
    });
  }

  createTimeline();
});
