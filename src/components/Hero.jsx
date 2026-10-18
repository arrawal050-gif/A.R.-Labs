import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowDown, Sparkles, Layers, Cpu, Download } from 'lucide-react';

export default function Hero({ activeFilter, setActiveFilter }) {
  const headlineRef = useRef(null);

  // Liquid SVG filter animation on mouse movement
  useEffect(() => {
    const headline = headlineRef.current;
    const displacement = document.getElementById('liquid-displacement');
    const turbulence = document.getElementById('liquid-turbulence');

    if (!headline || !displacement || !turbulence) return;

    let tween;

    const handleMouseEnter = () => {
      gsap.killTweensOf(displacement);
      gsap.to(displacement, {
        attr: { scale: 28 },
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(turbulence, {
        attr: { baseFrequency: '0.035 0.035' },
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleMouseMove = (e) => {
      const rect = headline.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;
      const freqX = 0.02 + relX * 0.03;
      const freqY = 0.02 + relY * 0.03;

      gsap.to(turbulence, {
        attr: { baseFrequency: `${freqX.toFixed(3)} ${freqY.toFixed(3)}` },
        duration: 0.2,
        ease: 'none',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(displacement, {
        attr: { scale: 0 },
        duration: 0.6,
        ease: 'power3.out',
      });
      gsap.to(turbulence, {
        attr: { baseFrequency: '0.015 0.015' },
        duration: 0.6,
        ease: 'power3.out',
      });
    };

    headline.addEventListener('mouseenter', handleMouseEnter);
    headline.addEventListener('mousemove', handleMouseMove);
    headline.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      headline.removeEventListener('mouseenter', handleMouseEnter);
      headline.removeEventListener('mousemove', handleMouseMove);
      headline.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const marqueeItems = [
    'APPLIED INTELLIGENCE',
    'EMBEDDED SYSTEMS',
    'SCREENLESS COMPANIONS',
    'DISTRIBUTED TELEMETRY',
    'OPEN ARCHITECTURES',
    'NATIVE AUDIO ROUTING',
    'COGNITIVE LABS',
  ];

  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 flex flex-col justify-between border-b border-[#1f1f24] overflow-hidden bg-[#050505]">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-indigo-500/5 blur-[180px] rounded-full pointer-events-none" />

      {/* Main Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center flex-1 flex flex-col justify-center">
        
        {/* Editorial Subtitle Pill */}
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#0d0d11] border border-[#27272a] text-xs font-tech text-zinc-300 mx-auto mb-8 shadow-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-zinc-400 uppercase tracking-widest text-[11px]">CREATIVE ENGINEERING HUB</span>
          <span className="text-zinc-600">/</span>
          <span className="text-white font-mono">2026 REVISION</span>
        </div>

        {/* Massive Display Statement with Liquid Distortion */}
        <div
          ref={headlineRef}
          data-cursor-text="DISTORT"
          className="liquid-text cursor-default select-none my-2 transition-transform duration-300"
        >
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tight leading-[0.88] text-white uppercase">
            APPLIED <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
              INTELLIGENCE
            </span>
          </h1>
          <div className="mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-widest text-zinc-500 uppercase">
            SYSTEMS & LABS
          </div>
        </div>

        {/* Narrative Manifesto */}
        <p className="mt-8 text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          The autonomous engineering atelier of <strong className="text-white font-semibold">A.R. Labs</strong>.
          We architect unified agent environments, tactile voice silicon, audio telemetry kernels, and multidisciplinary publications.
        </p>

        {/* Hero Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#platforms"
            data-cursor-text="EXPLORE"
            className="px-6 py-3 rounded-xl bg-white text-zinc-950 font-tech font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all hover:scale-[1.02] shadow-xl shadow-white/5 flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-zinc-950" />
            <span>Launch Platforms</span>
          </a>

          <a
            href="#hardware"
            data-cursor-text="SPECS"
            className="px-6 py-3 rounded-xl bg-[#0f0f13] border border-[#27272a] text-zinc-300 hover:text-white font-tech font-semibold text-xs tracking-wider uppercase hover:border-zinc-500 transition-all flex items-center gap-2"
          >
            <Cpu className="w-4 h-4 text-orange-400" />
            <span>Hardware Initiatives</span>
          </a>

          <a
            href="#android"
            data-cursor-text="DOWNLOAD"
            className="px-6 py-3 rounded-xl bg-[#0f0f13] border border-[#27272a] text-zinc-300 hover:text-white font-tech font-semibold text-xs tracking-wider uppercase hover:border-zinc-500 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-indigo-400" />
            <span>Android APKs</span>
          </a>
        </div>

      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="mt-16 w-full border-y border-[#1f1f24] bg-[#09090b] py-3.5 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-tech font-medium tracking-widest text-zinc-400 uppercase">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="hover:text-white transition-colors cursor-default">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="mt-6 flex flex-col items-center justify-center text-zinc-400">
        <a
          href="#platforms"
          className="flex flex-col items-center gap-1.5 hover:text-zinc-200 transition-colors"
        >
          <span className="text-[10px] font-tech uppercase tracking-widest text-zinc-400">
            Scroll to Explore
          </span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
