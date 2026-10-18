import React, { useState } from 'react';
import { Download, Smartphone, ShieldCheck, CheckCircle2, FileCode } from 'lucide-react';
import btIcon from '../assets/bluetooth_extender_icon.png';
import portalIcon from '../assets/portal_icon.png';

export default function AndroidDownloads({ onNotify, onOpenReleaseNotes }) {
  const [downloadingId, setDownloadingId] = useState(null);

  const apks = [
    {
      id: 'bluetooth-extender',
      name: 'Bluetooth Extender Utility',
      tagline: 'Audio Packet Multiplexer & Peripheral Repeater',
      filename: 'bluetoothExtender.apk',
      downloadUrl: './downloads/bluetoothExtender.apk',
      version: 'v1.2.0 (Stable)',
      size: '17.9 MB',
      icon: btIcon,
      accentClass: 'accent-glow-indigo',
      badgeColor: 'text-indigo-400 border-indigo-500/40 bg-indigo-950/60',
      buttonBg: 'bg-indigo-600 hover:bg-indigo-500',
      description:
        'A native Android low-level utility engineered to route audio streams across distributed Bluetooth peripherals, repeat low-energy packets, and maintain resilient device handshakes.',
      features: [
        'Multi-Peripheral Audio Kernel',
        'Extended Packet Range Mode',
        'Low-Latency Handshake Monitor',
        'Hardware Signal Strength Trace',
      ],
      compatibility: 'Android 9.0+ (API 28+)',
    },
    {
      id: 'academic-portal',
      name: 'Academic & Communication Portal',
      tagline: 'DSP & 8086 Microprocessor Offline Suite',
      filename: 'acadmic_portal.apk',
      downloadUrl: './downloads/acadmic_portal.apk',
      version: 'v2.0.4 (Release)',
      size: '6.5 MB',
      icon: portalIcon,
      accentClass: 'accent-glow-violet',
      badgeColor: 'text-violet-400 border-violet-500/40 bg-violet-950/60',
      buttonBg: 'bg-violet-600 hover:bg-violet-500',
      description:
        'Interactive academic companion for communication systems, digital signal processing, and 8086 microprocessor simulations with synchronized audio lecture modules.',
      features: [
        'Offline DSP Audio Sync Engine',
        '8086 Virtual Register Simulator',
        'Unit-by-Unit Exam & Viva Banks',
        'Offline Code Generation',
      ],
      compatibility: 'Android 8.0+ (API 26+)',
    },
  ];

  const handleDownload = (apk) => {
    setDownloadingId(apk.id);
    if (onNotify) {
      onNotify(`Downloading binary: ${apk.filename} (${apk.size})`);
    }
    setTimeout(() => {
      setDownloadingId(null);
    }, 2500);
  };

  return (
    <section id="android" className="py-24 border-t border-[#1f1f24] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#1f1f24] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-tech uppercase tracking-widest text-indigo-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>03 / MOBILE BINARIES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
              Native Android Tools (.APK)
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl font-normal">
              Engineered for hardware interaction, low-latency audio routing, and offline educational compute. Direct, signed .APK distribution.
            </p>
          </div>
          <div className="mt-4 md:mt-0 font-tech text-xs text-zinc-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Direct Sideload Ready • Verified Signatures</span>
          </div>
        </div>

        {/* APK Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {apks.map((apk) => (
            <div
              key={apk.id}
              data-cursor-text="DOWNLOAD"
              className={`creative-card ${apk.accentClass} p-7 sm:p-9 flex flex-col justify-between relative group`}
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#141418] border border-zinc-800 p-2.5 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-105 transition-transform">
                      <img
                        src={apk.icon}
                        alt={apk.name}
                        className="w-full h-full object-contain filter drop-shadow"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-tech uppercase tracking-wider text-zinc-400 block">
                        {apk.tagline}
                      </span>
                      <h3 className="font-display text-3xl sm:text-4xl text-white group-hover:text-zinc-100 tracking-wide uppercase">
                        {apk.name}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-tech font-medium border ${apk.badgeColor}`}
                  >
                    {apk.version}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                  {apk.description}
                </p>

                {/* Specs Box */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#121217] border border-zinc-800 mb-6 font-tech">
                  <div>
                    <span className="text-[10px] uppercase text-zinc-400 block">Package Size</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">{apk.size}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-zinc-400 block">Environment</span>
                    <span className="text-xs font-medium text-zinc-300 mt-1 block">{apk.compatibility}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-zinc-400 block">Integrity</span>
                    <span className="text-xs font-medium text-emerald-400 mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Signed APK
                    </span>
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-2 mb-8">
                  <span className="text-[10px] font-tech uppercase tracking-widest text-zinc-400 block">
                    Engineered Capabilities
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {apk.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-tech text-zinc-300 p-2.5 rounded-lg bg-[#141418]/80 border border-zinc-800/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-zinc-800/80 mt-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => onOpenReleaseNotes && onOpenReleaseNotes(apk)}
                  data-cursor-text="NOTES"
                  className="w-full sm:w-auto text-xs font-tech text-zinc-400 hover:text-white transition-colors flex items-center justify-center gap-2 py-2 px-3 rounded-lg hover:bg-zinc-800/60"
                >
                  <FileCode className="w-4 h-4" />
                  <span>Release Notes & Checksums</span>
                </button>

                <a
                  href={apk.downloadUrl}
                  download={apk.filename}
                  onClick={() => handleDownload(apk)}
                  data-cursor-text="DOWNLOAD"
                  className={`w-full sm:w-auto px-6 py-3 rounded-xl font-tech font-bold text-xs tracking-wider uppercase transition-all shadow-xl text-white flex items-center justify-center gap-2 ${apk.buttonBg}`}
                >
                  <Download className={`w-4 h-4 ${downloadingId === apk.id ? 'animate-bounce' : ''}`} />
                  <span>Download APK ({apk.size})</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Installation Instructions */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0c0c0f] border border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-zinc-800 text-zinc-200">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-tech font-bold text-white">How to Install External APKs on Android</h4>
              <p className="text-xs text-zinc-400 mt-1 font-normal max-w-2xl">
                Download the .apk directly to your phone &gt; Tap the completed notification &gt; Enable "Allow from this source" when prompted by Android &gt; Complete installation.
              </p>
            </div>
          </div>
          <span className="text-xs font-tech px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 shrink-0">
            SHA-256 Verified
          </span>
        </div>

      </div>
    </section>
  );
}
