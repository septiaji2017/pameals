import { Instagram, Phone, Mail } from "lucide-react";
import logo from "@/assets/fameals-logo.png";

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#prices", label: "Price List" },
  { href: "#products", label: "Out Product" },
  { href: "#seasonal", label: "Special & Seasonal Menus" },  
  { href: "#reviews", label: "Testimonies" },
  { href: "#contact", label: "Contact Us" },
];  


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B1B1B] text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Fameals Bandung" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Penyedia katering makanan harian sehat non MSG dengan variasi menu 
              dan harga terjangkau di Bandung.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/fameals"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/6281323966051"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:famealsfoods@gmail.com"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Menu</h4>
            <ul className="space-y-3">
              {/* Desktop Navigation */}
                {navLinks.map((link) => (
                  <li>
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone size={16} />
                0813-2396-6051
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail size={16} />
                famealsfoods@gmail.com
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Instagram size={16} />
                @fameals
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <p className="text-center text-background/50 text-sm">
            © {currentYear} Fameals Bandung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
