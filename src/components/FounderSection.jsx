import React from 'react';
import { ExternalLink, Globe, ArrowUpRight } from 'lucide-react';

const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.88a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function FounderSection() {
  const socials = [
    {
      name: 'Interactive Portfolio',
      url: 'https://arrawal050-gif.github.io/protfolio/',
      icon: Globe,
      color: 'hover:text-cyan-400 hover:border-cyan-500/40',
      cursorText: 'PORTFOLIO',
    },
    {
      name: 'LinkedIn Profile',
      url: 'https://www.linkedin.com/in/anujrawal-ar/?isSelfProfile=true',
      icon: LinkedInIcon,
      color: 'hover:text-blue-400 hover:border-blue-500/40',
      cursorText: 'LINKEDIN',
    },
    {
      name: 'Instagram Channel',
      url: 'https://www.instagram.com/anujrawal.ar',
      icon: InstagramIcon,
      color: 'hover:text-pink-400 hover:border-pink-500/40',
      cursorText: 'INSTAGRAM',
    },
  ];

  return (
    <section id="founder" className="py-24 border-t border-[#1f1f24] bg-[#070709]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#1f1f24] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-tech uppercase tracking-widest text-zinc-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-zinc-400" />
              <span>04 / DIRECTION & LEADERSHIP</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
              Founder & Architect
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl font-normal">
              Driving research in autonomous agent operating platforms, physical computing prototypes, and open computational utilities.
            </p>
          </div>
        </div>

        {/* Founder Bento Card */}
        <div className="creative-card p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Founder Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
              <div className="relative group" data-cursor-text="FOUNDER">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-pink-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900 shadow-2xl">
                  <img
                    src="/assets/founder_anuj.jpg"
                    alt="Anuj Rawal — Founder & Systems Engineer"
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.target.src = '/assets/publications.png';
                    }}
                  />
                </div>
              </div>
              <div className="mt-5 text-center sm:text-left">
                <div className="font-display text-3xl text-white uppercase tracking-wide">Anuj Rawal</div>
                <div className="text-xs font-tech text-zinc-400 mt-1 uppercase tracking-wider">
                  Founder & Systems Engineer
                </div>
                <div className="text-xs font-tech text-cyan-400 mt-1 font-mono">
                  A.R. Labs Collective
                </div>
              </div>
            </div>

            {/* Biography & Focus Areas */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-tech bg-zinc-800 text-zinc-300 border border-zinc-700 uppercase tracking-widest">
                  Engineering Trajectory
                </span>
                <p className="mt-4 text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
                  <strong className="text-white font-semibold">Anuj Rawal</strong> is an applied AI systems engineer, embedded devices designer, and software architect. Through A.R. Labs, he focuses on the intersection of agentic software architectures, screenless physical computing companions, and high-performance open utilities.
                </p>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed font-normal">
                  His work spans building the <strong className="text-zinc-200 font-medium">AI-OS</strong> cloud execution layer, engineering low-latency ESP32 voice companions like <strong className="text-zinc-200 font-medium">Sakhi</strong>, publishing multidisciplinary literature via <strong className="text-zinc-200 font-medium">A.R. Publications</strong>, and crafting native Android kernels for hardware telemetry.
                </p>
              </div>

              {/* Research Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-[#121217] border border-zinc-800">
                  <div className="text-xs font-bold font-tech text-white uppercase">Applied Intelligence</div>
                  <div className="text-xs text-zinc-400 mt-1 font-normal">Agentic operating environments, prompt orchestration, and vector knowledge systems.</div>
                </div>
                <div className="p-4 rounded-xl bg-[#121217] border border-zinc-800">
                  <div className="text-xs font-bold font-tech text-white uppercase">Embedded Systems</div>
                  <div className="text-xs text-zinc-400 mt-1 font-normal">ESP32 edge nodes, I2S DAC audio pipelines, and tactile child-safe hardware companions.</div>
                </div>
                <div className="p-4 rounded-xl bg-[#121217] border border-zinc-800">
                  <div className="text-xs font-bold font-tech text-white uppercase">Open Architectures</div>
                  <div className="text-xs text-zinc-400 mt-1 font-normal">Academic engineering utilities, Bluetooth repeaters, and distributed knowledge distribution.</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-text={social.cursorText}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141418] border border-zinc-800 text-xs font-tech text-zinc-300 transition-all ${social.color}`}
                  >
                    <social.icon className="w-4 h-4" />
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                  </a>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
