import { Trophy, Medal, Award, Gift } from "lucide-react";

const Prizes = () => {
  const prizes = [
    {
      icon: Trophy,
      title: "GRAND PRIZE",
      amount: "$15,000",
      description: "Best overall hardware project",
    },
    {
      icon: Medal,
      title: "RUNNER UP",
      amount: "$10,000",
      description: "Second place innovation",
    },
    {
      icon: Award,
      title: "DOMAIN WINNERS",
      amount: "$5,000 each",
      description: "Best in each domain category",
    },
    {
      icon: Gift,
      title: "SPECIAL PRIZES",
      amount: "$20,000+",
      description: "Sponsored prizes & hardware kits",
    },
  ];

  return (
    <section id="prizes" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black mb-4 spaced-heading">
            PRIZES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-white/30 transition-all duration-300 hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4 group-hover:scale-110 transition-transform">
                <prize.icon className="h-8 w-8" />
              </div>
              <h3 className="text-sm font-bold text-muted-foreground mb-2 uppercase tracking-wider">
                {prize.title}
              </h3>
              <div className="text-3xl font-black mb-3">
                {prize.amount}
              </div>
              <p className="text-sm text-muted-foreground">
                {prize.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Plus: Swag bags, hardware kits, mentorship opportunities, and more!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
