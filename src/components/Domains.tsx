import { Cpu, Wifi, Bot, Sparkles } from "lucide-react";

const Domains = () => {
  const domains = [
    {
      icon: Cpu,
      title: "EMBEDDED SYSTEMS",
      description: "Microcontrollers, firmware, real-time systems, and low-level programming",
    },
    {
      icon: Wifi,
      title: "IoT & SENSORS",
      description: "Connected devices, sensor networks, edge computing, and data collection",
    },
    {
      icon: Bot,
      title: "ROBOTICS",
      description: "Autonomous systems, mechatronics, control systems, and motion planning",
    },
    {
      icon: Sparkles,
      title: "OPEN INNOVATION",
      description: "Experimental hardware, maker tools, open-source projects, and wild ideas",
    },
  ];

  return (
    <section id="domains" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black mb-4 spaced-heading">
            DOMAINS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-white/30 transition-all duration-300 group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <domain.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase">
                {domain.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
