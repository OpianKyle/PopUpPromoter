import { useState, useEffect } from "react";
import logo from "@assets/generated_images/Groovy_Gala_neon_logo_8f9579e1.png";

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "hero", label: "Home" },
  { id: "highlights", label: "Highlights" },
  { id: "djs", label: "DJs" },
  { id: "details", label: "Details" },
  { id: "tickets", label: "Get Tickets" },
];

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('hero')}
            className="flex items-center gap-3"
            data-testid="nav-logo"
          >
            <img src={logo} alt="Groovy Gala" className="h-10 md:h-12 w-auto" />
            <span className="text-xl md:text-2xl font-black text-primary tracking-tight heading-glow hidden sm:inline">
              GROOVY GALA
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => onNavigate('tickets')}
            className="md:hidden px-6 py-2 bg-primary text-primary-foreground rounded-full font-bold text-sm"
            data-testid="nav-mobile-cta"
          >
            Tickets
          </button>
        </div>
      </div>
    </nav>
  );
}
