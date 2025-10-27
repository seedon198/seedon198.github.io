const About = () => {
  const stats = [
    { value: "500+", label: "Registrations" },
    { value: "50+", label: "Colleges" },
    { value: "25+", label: "Cities" },
    { value: "300+", label: "Hackers" },
    { value: "100+", label: "Projects" },
    { value: "₹5", label: "Lakhs + Prize Pool" },
  ];

  return (
    <section id="about" className="py-24 relative bg-black">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black mb-6 spaced-heading">
            ABOUT US
          </h2>
          <h3 className="text-xl md:text-2xl font-bold mb-8">
            Welcome, Innovators and Change-Makers!
          </h3>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            "Welcome to Hardware Hacks, where innovation meets impact! We are thrilled to invite you to
            this exciting hackathon organized by innovators and makers. It is your gateway to a world of possibilities, where
            passionate individuals like you come together to unleash their
            creativity, solve real-world challenges, and make a meaningful
            difference."
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-black mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
