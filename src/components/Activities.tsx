import { Gift, Cpu, Mic, Globe } from "lucide-react";

const ActivityCard = ({ Icon, title, date, description, highlights, limited }: any) => {
  return (
    <div className="activity-card animate-fade-in-up">
      <Icon className="activity-icon" />
      <h3 className="activity-title">{title}</h3>
      <span className="activity-date">{date}</span>
      {limited && <span className="limited-badge">Limited to 100</span>}
      <p className="activity-description">{description}</p>
      <ul className="activity-highlights">
        {highlights.map((h: string, i: number) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
};

const Activities = () => {
  const activities = [
    {
      Icon: Gift,
      title: "Daily Swag Drop",
      date: "Feb 19-21 • All Days",
      description:
        "Score exclusive conference swag every single day! From custom stickers to limited edition t-shirts and other goodies you won't find anywhere else.",
      highlights: [
        "Unique daily drops",
        "Limited edition designs",
        "First come, first served",
        "Show off your hacker style",
      ],
    },
    {
      Icon: Cpu,
      title: "Soldering Village",
      date: "Feb 19-20 • Drop-in Anytime",
      description:
        "Build your own badge and test your hardware skills! Whether you're a soldering pro or complete beginner, grab a badge and join the fun. Hidden challenge included with prizes for those who crack it.",
      highlights: [
        "Walk-in friendly, no reservation needed",
        "All skill levels welcome",
        "Take home a custom badge",
        "Hidden challenge with prizes",
        "Can't solder? Post on social media and take one home!",
      ],
    },
    {
      Icon: Mic,
      title: "Hardware Track",
      date: "Feb 20 • Day 2 Only",
      description:
        "Curated talks focusing exclusively on hardware security, embedded systems, satellite hacking, OT security, and reverse engineering. Learn from the best in the field.",
      highlights: [
        "Embedded Systems Security",
        "Satellite & RF Hacking",
        "OT/ICS Security",
        "Hardware Reverse Engineering",
        "IoT Exploitation",
      ],
    },
    {
      Icon: Globe,
      title: "GeoGuessr Tournament",
      date: "Feb 21 • Final Day",
      limited: true,
      description:
        "Put your Geo OSINT skills to the test! Battle it out in our epic GeoGuessr tournament. Only 100 spots available—register early to secure your place.",
      highlights: [
        "Only 100 participants allowed",
        "Geo OSINT focused challenges",
        "Prizes for top performers",
        "Bragging rights for life",
      ],
    },
  ];

  return (
    <section id="activities">
      <div className="container">
        <div className="section-header animate-fade-in">
          <h2 className="section-title">What's Happening</h2>
          <p className="section-subtitle">Four epic activities across three days</p>
        </div>

        <div className="activities-grid">
          {activities.map((a, i) => (
            <ActivityCard key={i} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
