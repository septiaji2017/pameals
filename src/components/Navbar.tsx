import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/fameals-logo.png";

const navLinks = [
  { href: "#about", label: "Tentang Kami" },
  { href: "#products", label: "Produk" },
  { href: "#prices", label: "Harga" },
  { href: "#reviews", label: "Testimoni" },
  { href: "#contact", label: "Kontak" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Fameals Bandung" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/6281323966051"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Pesan Sekarang
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/6281323966051"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-opacity mt-2"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
