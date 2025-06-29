import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import logo from "../assets/bg-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Rahima_Khatun_Resume.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Resume download failed:", error);
      window.open("/resume.pdf", "_blank");
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl md:text-2xl">
            <img
              src={logo || "/placeholder.svg"}
              alt="Rakhima Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-pink-500">Rakhima</span> Khatun
          </Link>

          {/* Desktop & Tablet Menu (≥768px) */}
          <div className="hidden sm:flex space-x-4 md:space-x-6 items-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-pink-500 transition-colors duration-200 text-sm md:text-base font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={handleResumeDownload}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
              title="Download Resume"
            >
              <Download size={18} />
              Resume
            </button>
          </div>

          {/* Mobile Menu Toggle (only <768px) */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden transition-all duration-300 ease-in-out bg-gray-800 rounded-lg mt-2 px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-pink-500 block w-full text-left text-base font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={handleResumeDownload}
              className="mt-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-pink-500/25"
            >
              <Download size={18} />
              Resume
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
