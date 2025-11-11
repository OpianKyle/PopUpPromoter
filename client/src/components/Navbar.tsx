import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@assets/Groovy_Gala_neon_logo_8f9579e1_1762851125994.png";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3"
            data-testid="nav-logo"
          >
            <img src={logo} alt="Groovy Gala" className="h-12 sm:h-16 md:h-20 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            data-testid="nav-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
          data-testid="nav-mobile-menu"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left py-3 px-4 text-base font-medium text-foreground/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors"
                data-testid={`nav-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
