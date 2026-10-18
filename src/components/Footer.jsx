import React from 'react';
import { ArrowUp, Terminal, Shield, Heart, Globe, Cpu, Download, ExternalLink } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#27272a] bg-[#070709] py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono font-bold text-white text-sm">
                AR
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                A.R. LABS
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Applied Intelligence, Embedded Systems & Open Architectures. 
              Engineering modern cognitive tools, screenless child companions, and specialized hardware telemetry.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-emerald-400">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Global Production Node • Operational</span>
            </div>
          </div>

          {/* Links Column 1: Core Platforms */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200 font-semibold">
              Digital Platforms
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://ai-os-powerd-by-ar-labs.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>AI-OS Operating Platform</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://arproduction050-byte.github.io/A.R.-Publications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>A.R. Publications</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://help-desk-eee.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Help Desk EEE</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Android & Hardware */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200 font-semibold">
              Hardware & Mobile
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hardware" className="hover:text-white transition-colors">
                  Sakhi Hardware Companion
                </a>
              </li>
              <li>
                <a href="#hardware" className="hover:text-white transition-colors">
                  BlackBox Cognitive Health
                </a>
              </li>
              <li>
                <a href="/downloads/bluetoothExtender.apk" download className="hover:text-white transition-colors">
                  Bluetooth Extender (.APK)
                </a>
              </li>
              <li>
                <a href="/downloads/acadmic_portal.apk" download className="hover:text-white transition-colors">
                  Academic Portal (.APK)
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Leadership */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200 font-semibold">
              Leadership
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://arrawal050-gif.github.io/protfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Anuj Rawal Portfolio</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/anujrawal-ar/?isSelfProfile=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>LinkedIn Connect</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/anujrawal.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            &copy; {new Date().getFullYear()} A.R. Labs Collective • Built from scratch by Anuj Rawal.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
