import React from 'react';
import { X, Cpu, Radio, Volume2, Database, Sparkles, Terminal, CheckCircle2, Layers } from 'lucide-react';

export default function ArchitectureModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#0f0f13] border border-zinc-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">Sakhi Hardware Architecture</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/20 text-orange-300 border border-orange-500/40">
                  ESP32 • I2S • Edge
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Technical schematic for early childhood low-distraction embodied voice node
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-800/60 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-6 space-y-6">
          
          {/* Architecture ASCII / Flow Block */}
          <div className="p-4 rounded-xl bg-[#08080a] border border-zinc-800 font-mono text-xs text-orange-300/90 overflow-x-auto leading-relaxed">
            <pre className="text-center sm:text-left">
{`  +--------------------------------------------------------+
  |              ESP32 Embedded Edge Hardware              |
  |  (ADC / I2S Mic -> Ring Buffer -> MAX98357A I2S DAC)  |
  +---------------------------+----------------------------+
                              | Full-Duplex WebSockets
                              v
  +--------------------------------------------------------+
  |            Python FastAPI Companion Server             |
  |  - Audio Packet Ingestion & Circular Frame Buffering  |
  |  - Local Hardware Telemetry Verification & Sweeps     |
  +-------------+----------------------------+-------------+
                |                            |
                v                            v
  +---------------------------+  +-------------------------+
  | Google Gemini AI Core     |  | Offline Piper / EdgeTTS |
  | (Hindi & English Dialog)  |  | (16kHz / 24kHz Synthesis)|
  +-------------+-------------+  +-------------------------+
                |
                v
  +--------------------------------------------------------+
  |       ChromaDB Semantic Vector Knowledge Base          |
  |   (Curated Nursery Rhymes, Tales & Child-Safe Trivia)  |
  +--------------------------------------------------------+`}
            </pre>
          </div>

          {/* Module Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-xl bg-[#141418] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-white mb-2">
                <Volume2 className="w-4 h-4 text-orange-400" />
                <span>Audio Pipeline & Edge Sampling</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Raw audio is sampled via internal ADC / I2S microphone at 16kHz, chunked into PCM frames, and streamed over low-latency binary WebSockets to eliminate cognitive lag during conversational exchanges.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#141418] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-white mb-2">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>Conversational Intelligence</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Integrated with Google Gemini models with child-protective guardrails. Tuned specifically for 3-5 year old phoneme recognition, bilingual Hindi-English comprehension, and imaginative guidance.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#141418] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-white mb-2">
                <Database className="w-4 h-4 text-orange-400" />
                <span>Vector Knowledge Base (ChromaDB)</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Pre-indexed corpus of classical Indian folk stories, moral tales, and nursery rhymes stored in an on-prem ChromaDB vector index for immediate semantic retrieval with zero halluncination.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#141418] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-white mb-2">
                <Terminal className="w-4 h-4 text-orange-400" />
                <span>Diagnostic Test Harness</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Built-in diagnostic server validating microphone packet timing, network jitter, and generating synthetic sine waves to verify MAX98357A DAC audio fidelity prior to enclosure assembly.
              </p>
            </div>

          </div>

          {/* Child Safety & Non-Addictive Design Note */}
          <div className="p-4 rounded-xl bg-orange-950/20 border border-orange-500/30 text-xs text-orange-200/90 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
            <div>
              <strong className="text-orange-300">Screenless Architecture Philosophy:</strong>{' '}
              Sakhi deliberately omits high-refresh video displays, blue-light screens, and algorithmic feedback loops. Interaction occurs purely through natural conversational voice and soft, reassuring tactile LED signals.
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors"
          >
            Close Schematic
          </button>
        </div>
      </div>
    </div>
  );
}
