'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, MessageCircle } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center shrink-0">
          <Image
            src="/qabil-logo.png"
            alt="Qabil Engineering Works"
            width={100}
            height={50}
            className="object-contain"
            priority
          />
        </a>

        {/* Center nav links — desktop */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-[#28166F] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions — desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/api/pdf"
            download="Qabil-Company-Profile.pdf"
            className="border border-[#28166F] text-[#28166F] text-sm px-4 py-2 rounded-full hover:bg-[#28166F] hover:text-white transition-all duration-200 font-medium"
          >
            Download PDF
          </a>
          <a
            href="https://wa.me/923041114566"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-green-500 hover:bg-green-600 transition-colors text-white"
            aria-label="WhatsApp"
          >
            <MessageCircle size={17} />
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#28166F] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
            <a
              href="/Company Profile 25.pdf"
              download
              className="border border-[#28166F] text-[#28166F] text-sm px-4 py-2 rounded-full hover:bg-[#28166F] hover:text-white transition-all font-medium"
            >
              Download PDF
            </a>
            <a
              href="https://wa.me/923041114566"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
