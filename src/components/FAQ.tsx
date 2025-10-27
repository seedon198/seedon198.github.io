import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What hardware can I bring?",
      answer:
        "Bring any hardware you want! Microcontrollers, sensors, actuators, development boards (Arduino, Raspberry Pi, ESP32, etc.), soldering equipment, and maker tools are all welcome. We'll also provide access to shared maker spaces with common tools.",
    },
    {
      question: "What is the team size limit?",
      answer:
        "Teams can have 2-4 members. Solo hackers are also welcome! You can form teams before the event or find teammates during the opening ceremony.",
    },
    {
      question: "Is accommodation provided?",
      answer:
        "We provide 24/7 access to the venue with designated rest areas. However, accommodation is not included. We'll share a list of nearby hotels with discounted rates for participants.",
    },
    {
      question: "Do I need prior hardware experience?",
      answer:
        "While some experience is helpful, beginners are encouraged to participate! We'll have workshops, mentors, and resources to help you learn and build. The best way to learn hardware is by doing.",
    },
    {
      question: "What's provided at the event?",
      answer:
        "We provide: workspace with power outlets, WiFi, maker tools (soldering stations, multimeters, basic components), meals and snacks, workshops, mentorship, and lots of coffee!",
    },
    {
      question: "How do I register?",
      answer:
        "Click the 'REGISTER NOW' button and fill out the registration form. Early bird registration closes February 1st, so sign up soon to secure your spot!",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black mb-4 spaced-heading">
            FAQ'S
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-white/30 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
