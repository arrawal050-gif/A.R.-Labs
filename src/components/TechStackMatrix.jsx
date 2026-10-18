import React from 'react';
import { Cpu, Terminal, Layers, Globe, Code, ShieldCheck, Database, Radio } from 'lucide-react';

export default function TechStackMatrix() {
  const stack = [
    {
      category: 'Embedded & Edge Node',
      icon: Cpu,
      accent: 'text-orange-400',
      items: ['ESP32 WROOM SoC', 'I2S Audio Pipeline', 'MAX98357A DAC', 'FreeRTOS Tasks'],
    },
    {
      category: 'Applied AI & Neural Models',
      icon: Layers,
      accent: 'text-cyan-400',
      items: ['Google Gemini Multimodal', 'Edge-TTS Synthesis', 'Piper Neural Voice', 'ChromaDB Embeddings'],
    },
    {
      category: 'Native Mobile & Audio Kernels',
      icon: Radio,
      accent: 'text-indigo-400',
      items: ['Android SDK / Kotlin', 'Bluetooth LE Routing', 'DSP Virtual Registers', 'Synchronized Audio Engine'],
    },
    {
      category: 'Web & Distributed Delivery',
      icon: Globe,
      accent: 'text-emerald-400',
      items: ['React & Vite Engine', 'Tailwind Design System', 'FastAPI WebSockets', 'Vercel Edge Distribution'],
    },
  ];

  return (
    <section className="py-20 border-t border-[#27272a]/60 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-400" />
            <span>FOUNDATIONAL ARCHITECTURES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Ecosystem Engineering Matrix
          </h2>
          <p className="mt-2 text-zinc-400 text-xs sm:text-sm">
            Underlying protocols, silicon architectures, and neural pipelines powering A.R. Labs deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0f0f13] border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <item.icon className={`w-4 h-4 ${item.accent}`} />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
                  {item.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {item.items.map((tech, tIdx) => (
                  <li
                    key={tIdx}
                    className="text-xs font-mono text-zinc-400 flex items-center gap-2 bg-[#141418] px-2.5 py-1.5 rounded-lg border border-zinc-800/60"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-400" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
