const Schedule = () => {
  const schedule = [
    {
      day: "Day 1 - February 19, 2026",
      events: [
        "Swag Distribution - Exclusive Day 1 goodies",
        "Soldering Village Opens - Drop in anytime, solder your badge",
        "Badge Challenge - Start hunting for the hidden puzzle",
        "Networking - Meet fellow hardware hackers",
      ],
    },
    {
      day: "Day 2 - February 20, 2026",
      events: [
        "Swag Distribution - Exclusive Day 2 goodies",
        "Soldering Village - Last day to build your badge",
        "Hardware Track Talks - All day speaker sessions",
        "Badge Challenge Submissions - Submit your solutions",
      ],
    },
    {
      day: "Day 3 - February 21, 2026",
      events: [
        "Swag Distribution - Final day exclusive goodies",
        "GeoGuessr Tournament - 100 competitors battle it out",
        "Prize Distribution - Winners announced",
        "Closing Celebration - See you next year!",
      ],
    },
  ];

  return (
    <section id="schedule" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black mb-4 spaced-heading">
            EVENT SCHEDULE
          </h2>
          <p className="text-muted-foreground">Plan your three days of hardware hacking</p>
        </div>

        <div className="timeline max-w-4xl mx-auto">
          {schedule.map((s, idx) => (
            <div key={idx} className="timeline-item animate-fade-in-up mb-10">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-date font-bold text-primary mb-3">{s.day}</div>
                <ul className="timeline-events list-disc pl-5 text-muted-foreground">
                  {s.events.map((ev, i) => (
                    <li key={i} className="py-2">{ev}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
