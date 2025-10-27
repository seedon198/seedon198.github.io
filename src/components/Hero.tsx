import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar } from "lucide-react";
import Countdown from "./Countdown";
import { useCallback } from "react";

const Hero = () => {
  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Try to account for a fixed/sticky navbar height if present
    const navbar = document.querySelector('.navbars-main, nav, header');
    const navbarHeight = navbar instanceof HTMLElement ? navbar.offsetHeight : 0;

    const rect = el.getBoundingClientRect();
    const top = window.pageYOffset + rect.top - navbarHeight - 16; // small offset

    window.scrollTo({ top, behavior: 'smooth' });
  }, []);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden starfield">
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center pt-20">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-none tracking-tight">
            Hardware Hacking Village
          </h1>

          {/* Date */}
          <p className="text-lg md:text-xl tracking-widest mb-4 uppercase flex items-center justify-center gap-2">
            <Calendar className="h-6 w-6" />
            FEB 19-21, 2026
          </p>

          {/* Tagline */}
          <p className="text-sm md:text-base text-muted-foreground mb-8 uppercase tracking-wider">
            Three days of soldering, hardware security talks, challenges, and hands-on hacking. Join us for the ultimate hardware security experience. 
          </p>

          {/* CTA Buttons: Submit CFP Talks & View Schedule */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-bold text-base px-10 py-6 rounded-lg"
              onClick={() => scrollToId('cfp')}
            >
              Submit CFP Talks
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-bold text-base px-10 py-6 rounded-lg"
              onClick={() => scrollToId('schedule')}
            >
              View Schedule
            </Button>
          </div>

          {/* Countdown (counts days / hours / minutes / seconds until start) */}
          <Countdown targetDate="2026-02-19T00:00:00" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;
