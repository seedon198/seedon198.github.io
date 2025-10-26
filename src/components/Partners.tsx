const Partners = () => {
  // Placeholder partner names - these would be replaced with actual logos
  const partners = [
    "TechCorp", "InnovateLabs", "CircuitMakers", "HardwareHub",
    "MakerSpace", "RoboTech", "IoT Solutions", "EmbeddedSys",
  ];

  return (
    <section id="partners" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black mb-4 spaced-heading">
            PARTNERS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 flex items-center justify-center hover:border-white/30 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-center">
                <div className="w-32 h-20 flex items-center justify-center text-muted-foreground font-bold">
                  {partner}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Interested in partnering?</p>
          <a
            href="#contact"
            className="inline-block hover:underline"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
