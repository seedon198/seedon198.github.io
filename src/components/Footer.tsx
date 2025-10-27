import { Mail, MapPin, Twitter, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
          <h3 className="text-xl font-black mb-4 uppercase tracking-wide">
            Hardware Hacks
          </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Building the future of hardware, one hack at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About HHV
                </a>
              </li>
              <li>
                <a href="#domains" className="text-muted-foreground hover:text-primary transition-colors">
                  Hack Domains
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#prizes" className="text-muted-foreground hover:text-primary transition-colors">
                  Prizes
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>contact@hardwarehackingvillage.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>Tech Innovation Center<br />123 Maker Street, Silicon Valley, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Hardware Hacking Village. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
