import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Globe, Download, User, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Navbar({ activeFilter, setActiveFilter }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Digital Platforms', href: '#platforms', icon: Globe },
    { name: 'Hardware & Research', href: '#hardware', icon: Cpu },
    { name: 'Native Android (.APK)', href: '#android', icon: Download },
    { name: 'Leadership', href: '#founder', icon: User },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-[#27272a]/80 shadow-2xl shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#121215] border border-[#27272a] group-hover:border-zinc-500 transition-colors shadow-inner">
              <span className="font-mono font-bold text-base tracking-tighter text-white">AR</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                  A.R. LABS
                </span>
                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                  HUB
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 hidden sm:block tracking-wide">
                Applied Intelligence & Embedded Systems
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121215]/90 border border-[#27272a] rounded-full px-3 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 rounded-full transition-all flex items-center gap-1.5"
              >
                <link.icon className="w-3.5 h-3.5 text-zinc-400" />
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header Badges & Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#121215] border border-[#27272a] text-xs font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Core Operational</span>
            </div>
            <a
              href="https://arrawal050-gif.github.io/protfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 transition-all hover:scale-[1.02] shadow-sm"
            >
              <span>Founder Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#android"
              className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-200"
            >
              APKs
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b]/95 border-b border-zinc-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-lg"
            >
              <link.icon className="w-4 h-4 text-zinc-400" />
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
            <a
              href="https://arrawal050-gif.github.io/protfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-zinc-100 text-zinc-950"
            >
              <span>Founder Portfolio</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
