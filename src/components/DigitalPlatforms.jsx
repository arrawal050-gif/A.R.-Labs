import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Layers, BookOpen, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function DigitalPlatforms({ onNotify }) {
  const [copiedId, setCopiedId] = useState(null);

  const platforms = [
    {
      id: 'ai-os',
      title: 'AI-OS Platform',
      tag: 'Operating System / AI',
      tagline: 'Autonomous Intelligence & Multi-Agent Workflows',
      url: 'https://ai-os-powerd-by-ar-labs.vercel.app/',
      description:
        'A unified operating environment engineered for AI workflows, multi-agent toolkits, and ecosystem growth. Bridges neural model execution with low-friction desktop and enterprise interfaces.',
      accentClass: 'accent-glow-cyan',
      accentColor: '#06b6d4',
      badgeBg: 'bg-cyan-950/60 text-cyan-400 border-cyan-500/40',
      logo: './assets/aios_logo.png',
      banner: './assets/aios_hero.png',
      icon: Layers,
      status: 'Live Production',
      highlights: ['Multi-Agent Mesh', 'ICRA Toolkits', 'Model Sandbox', 'Vercel Edge Distribution'],
    },
    {
      id: 'publications',
      title: 'A.R. Publications',
      tag: 'Editorial & Research',
      tagline: 'Technical Monographs & Literary Division',
      url: 'https://arproduction050-byte.github.io/A.R.-Publications/',
      description:
        'The creative, philosophical, and research publication division housing technical articles, literature, philosophical treatises, and open educational assets.',
      accentClass: 'accent-glow-amber',
      accentColor: '#f59e0b',
      badgeBg: 'bg-amber-950/60 text-amber-400 border-amber-500/40',
      logo: './assets/publications.png',
      banner: './assets/publications.png',
      icon: BookOpen,
      status: 'Live Archive',
      highlights: ['Technical Treatises', 'Sanatan Philosophy', 'Fiction Archives', 'Amazon & Flipkart Distribution'],
    },
    {
      id: 'helpdesk-eee',
      title: 'Help Desk EEE',
      tag: 'Academic Utility',
      tagline: 'Departmental Navigation & Lab Telemetry',
      url: 'https://help-desk-eee.vercel.app/',
      description:
        'Departmental navigation, support hub, and engineering workflow assistant engineered for Electrical and Electronics Engineering with interactive 360° virtual laboratory panoramas.',
      accentClass: 'accent-glow-emerald',
      accentColor: '#10b981',
      badgeBg: 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40',
      logo: './assets/helpdesk_entrance.jpg',
      banner: './assets/helpdesk_entrance.jpg',
      icon: GraduationCap,
      status: 'Live Utility',
      highlights: ['360° Lab Panoramas', 'Bosch & Mitsubishi Labs', 'Syllabus Navigator', 'Academic Utilities'],
    },
  ];

  const handleCopy = (id, url) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    if (onNotify) onNotify(`URL copied to clipboard: ${url}`);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="platforms" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#1f1f24] pb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-tech uppercase tracking-widest text-cyan-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>01 / CLOUD ECOSYSTEM</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            Core Digital Platforms
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl font-normal">
            Autonomous web applications, research publishing networks, and departmental engineering utilities.
          </p>
        </div>
        <div className="mt-4 md:mt-0 font-tech text-xs text-zinc-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>3 Active Deployments</span>
        </div>
      </div>

      {/* Grid of Split Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {platforms.map((platform) => {
          const IconComp = platform.icon;
          return (
            <div
              key={platform.id}
              data-cursor-text="VISIT"
              className={`creative-card ${platform.accentClass} flex flex-col justify-between p-6 sm:p-7 relative group`}
            >
              <div>
                {/* Top Bar with Thumbnail and Tag */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-2xl bg-[#141418] border border-zinc-800 p-2.5 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-105 transition-transform">
                    {platform.logo ? (
                      <img
                        src={platform.logo}
                        alt={platform.title}
                        className="w-full h-full object-contain filter drop-shadow"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <IconComp className="w-6 h-6 text-zinc-300" />
                    )}
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-tech font-medium border flex items-center gap-1.5 ${platform.badgeBg}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {platform.tag}
                  </span>
                </div>

                {/* Subtag & Title */}
                <div className="space-y-1 mb-3">
                  <span className="text-[11px] font-tech uppercase tracking-wider text-zinc-400 block">
                    {platform.tagline}
                  </span>
                  <h3 className="text-2xl font-bold font-tech text-white group-hover:text-zinc-100 flex items-center gap-2">
                    {platform.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                  {platform.description}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-tech uppercase tracking-widest text-zinc-400 block">
                    Stack Capabilities
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {platform.highlights.map((feat, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-[#141419] text-zinc-300 border border-zinc-800 font-tech"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-zinc-800/80 mt-auto">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleCopy(platform.id, platform.url)}
                    data-cursor-text="COPY"
                    className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                    title="Copy URL"
                  >
                    {copiedId === platform.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-text="LAUNCH"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-tech font-semibold text-xs tracking-wider uppercase transition-all hover:scale-[1.01] shadow-md"
                  >
                    <span>Launch Platform</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] font-tech text-zinc-400">
                  <span className="truncate max-w-[180px]">{platform.url.replace('https://', '')}</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {platform.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
