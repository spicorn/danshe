import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight">DANSHE</span>
            <div className="w-0.5 h-6 bg-[#9333ea]"></div>
            <span className="font-bold text-xl tracking-tight">GAMING</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium hover:text-[#9333ea] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-[#9333ea] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-[#9333ea] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium hover:text-[#9333ea] transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium hover:text-[#9333ea] transition-colors"
            >
              Prices
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#9333ea] text-white px-6 py-2 rounded-md hover:bg-[#9333ea] transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-black/10">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-sm font-medium hover:text-[#9333ea]"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-sm font-medium hover:text-[#9333ea]"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-sm font-medium hover:text-[#9333ea]"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left py-2 text-sm font-medium hover:text-[#9333ea]"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left py-2 text-sm font-medium hover:text-[#9333ea]"
            >
              Prices
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-[#9333ea] text-white px-6 py-2 rounded-md hover:bg-[#cc0000] transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
