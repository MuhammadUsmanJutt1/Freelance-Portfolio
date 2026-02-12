'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            YourAgency
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="gradient-purple text-white px-6 py-2 rounded-full hover:opacity-90 transition"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glassmorphism">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
