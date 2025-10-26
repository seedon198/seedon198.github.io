const CFP = () => {
  const topics = [
    "Embedded Systems",
    "Satellite Security",
    "OT/ICS Hacking",
    "Hardware RE",
    "IoT Security",
    "Side-Channel Attacks",
    "Firmware Analysis",
    "RF Hacking",
    "JTAG/Debug",
    "Chip Decapping",
  ];

  return (
    <section id="cfp" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black mb-4 spaced-heading">
            CALL FOR PAPERS
          </h2>
          <p className="text-muted-foreground">Share your hardware security knowledge</p>
        </div>

        <div className="cfp-container max-w-3xl mx-auto bg-card border border-border rounded-lg p-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-3">Hardware Track - Feb 20, 2026</h3>
          <p className="text-muted-foreground mb-4">Submissions Open Now • Deadline: December 31, 2025</p>

          <p className="text-muted-foreground mb-6">
            We're looking for speakers passionate about hardware security to deliver technical talks on February 20th. Whether you're breaking embedded systems, hacking satellites, or reverse engineering hardware—we want to hear from you!
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {topics.map((t, i) => (
              <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-sm text-muted-foreground">{t}</span>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdd-7pgL5SQl_pn6hQmDQomam0vzDcnPHQHP0OgkshOk-xSQw/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-black font-bold px-6 py-3 rounded-md"
            >
              Submit Your Talk Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CFP;
