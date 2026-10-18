import React from 'react';
import { Cpu, Heart, Activity, Radio, Volume2, ShieldAlert, Sparkles, Sliders, ChevronRight, Mic, Terminal } from 'lucide-react';

export default function HardwareProjects({ onOpenSpecs }) {
  return (
    <section id="hardware" className="py-24 border-t border-[#1f1f24] bg-[#070709]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#1f1f24] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-tech uppercase tracking-widest text-orange-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-orange-400" />
              <span>02 / SILICON & TELEMETRY</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
              Research & Hardware Initiatives
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl font-normal">
              Screenless tactile computing, edge microcontroller voice nodes, and non-invasive cognitive health telemetry.
            </p>
          </div>
          <div className="mt-4 md:mt-0 font-tech text-xs text-zinc-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span>Hardware Bench Active</span>
          </div>
        </div>

        {/* Bento Grid: 2 High-Contrast Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Sakhi Card (Larger Bento Span - 7 Cols) */}
          <div
            data-cursor-text="HARDWARE"
            className="lg:col-span-7 creative-card accent-glow-tangerine p-7 sm:p-9 flex flex-col justify-between relative group"
          >
            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 p-2.5">
                    <Mic className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-tech uppercase tracking-wider text-orange-400 block">
                      EMBODIED TACTILE COMPANION
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl text-white group-hover:text-orange-100 tracking-wide uppercase">
                      Sakhi Hardware Companion
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-tech bg-orange-500/15 border border-orange-500/40 text-orange-300 font-medium">
                    Hardware Prototype
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-tech bg-zinc-800 border border-zinc-700 text-zinc-300">
                    Ages 3–5
                  </span>
                </div>
              </div>

              {/* Core Mission Banner */}
              <div className="p-4 rounded-xl bg-[#121217] border border-orange-500/20 mb-6">
                <p className="text-xs font-tech text-orange-200/90 leading-relaxed">
                  <strong className="text-orange-400 font-semibold uppercase">Design Philosophy:</strong> A screenless, low-distraction interactive hardware assistant engineered to foster early curiosity, bilingual language stimulation (Hindi & English), cognitive play, and emotional grounding through natural conversational voice and gentle tactile feedback.
                </p>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                By removing blue-light screens and manipulative video algorithms, Sakhi replaces screen addiction with embodied conversational intelligence. Runs an ESP32 edge microcontroller with real-time I2S audio capture, neural speech synthesis, and local ChromaDB story vectors.
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-3.5 rounded-xl bg-[#121217] border border-zinc-800">
                  <span className="text-[10px] font-tech uppercase text-zinc-400 block">Silicon SoC</span>
                  <span className="text-xs font-semibold font-tech text-zinc-200 mt-0.5 block">ESP32 (WROOM)</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#121217] border border-zinc-800">
                  <span className="text-[10px] font-tech uppercase text-zinc-400 block">DAC Output</span>
                  <span className="text-xs font-semibold font-tech text-zinc-200 mt-0.5 block">MAX98357A I2S</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#121217] border border-zinc-800">
                  <span className="text-[10px] font-tech uppercase text-zinc-400 block">Neural Voice</span>
                  <span className="text-xs font-semibold font-tech text-zinc-200 mt-0.5 block">Gemini + Piper</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#121217] border border-zinc-800">
                  <span className="text-[10px] font-tech uppercase text-zinc-400 block">Streaming</span>
                  <span className="text-xs font-semibold font-tech text-zinc-200 mt-0.5 block">Full-Duplex WS</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#121217] border border-zinc-800">
                  <span className="text-[10px] font-tech uppercase text-zinc-400 block">Vector Index</span>
                  <span className="text-xs font-semibold font-tech text-zinc-200 mt-0.5 block">ChromaDB Store</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#121217] border border-zinc-800">
                  <span className="text-[10px] font-tech uppercase text-zinc-400 block">Interaction</span>
                  <span className="text-xs font-semibold font-tech text-zinc-200 mt-0.5 block">Tactile / Audio</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-zinc-800/80 mt-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-tech text-zinc-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <span>Firmware: ESP32 I2S v1.0.4 Ready</span>
              </span>
              <button
                onClick={onOpenSpecs}
                data-cursor-text="SPECS"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-zinc-950 font-tech font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Cpu className="w-4 h-4" />
                <span>Inspect Hardware Schematics</span>
              </button>
            </div>
          </div>

          {/* BlackBox Card (Complementary Bento Span - 5 Cols) */}
          <div
            data-cursor-text="RESEARCH"
            className="lg:col-span-5 creative-card accent-glow-lavender p-7 sm:p-9 flex flex-col justify-between relative group"
          >
            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 p-2.5">
                    <Activity className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-tech uppercase tracking-wider text-pink-400 block">
                      COGNITIVE TELEMETRY
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl text-white group-hover:text-pink-100 tracking-wide uppercase">
                      BlackBox
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-tech bg-pink-500/15 border border-pink-500/40 text-pink-300 font-medium">
                  Upcoming Research
                </span>
              </div>

              {/* Tagline Box */}
              <div className="p-4 rounded-xl bg-[#121217] border border-pink-500/20 mb-6">
                <p className="text-xs font-tech text-pink-200/90 leading-relaxed">
                  <strong className="text-pink-400 font-semibold uppercase">Platform Goal:</strong> An intelligent mental health stabilization platform and grounding ecosystem engineered to monitor daily mood shifts, offer cognitive behavioral support, and build personal resilience through passive telemetry.
                </p>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                Engineered to run discreetly in personal environments. BlackBox correlates subtle biometric variability, acoustic stress cues, and circadian signals to trigger micro-grounding routines before stress cycles peak.
              </p>

              {/* Architecture Pillars */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#121217] border border-zinc-800">
                  <Heart className="w-4 h-4 text-pink-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold font-tech text-zinc-200">Passive Sensor Telemetry</div>
                    <div className="text-[11px] text-zinc-400">Continuous HRV metrics, acoustic stress patterns, and non-intrusive ambient tracking.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#121217] border border-zinc-800">
                  <Sliders className="w-4 h-4 text-pink-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold font-tech text-zinc-200">CBT Grounding Protocols</div>
                    <div className="text-[11px] text-zinc-400">Micro-interventions calibrated to down-regulate somatic arousal and mental fog.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#121217] border border-zinc-800">
                  <ShieldAlert className="w-4 h-4 text-pink-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold font-tech text-zinc-200">Zero-Knowledge Edge Privacy</div>
                    <div className="text-[11px] text-zinc-400">Emotive telemetry is stored on encrypted local silicon and never sent to data brokers.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-zinc-800/80 mt-auto flex items-center justify-between">
              <span className="text-xs font-tech text-zinc-400">
                Phase: Research & Protocol Modeling
              </span>
              <span className="px-3 py-1 rounded-lg bg-zinc-800 text-xs font-tech text-zinc-300">
                Q4 2026 Pipeline
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
