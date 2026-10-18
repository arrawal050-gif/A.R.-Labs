import React from 'react';
import { X, FileCode, Download, ShieldCheck, Check, Smartphone, Terminal } from 'lucide-react';

export default function ReleaseModal({ apk, onClose, onDownload }) {
  if (!apk) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0f0f13] border border-zinc-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 p-2 flex items-center justify-center">
              <img src={apk.icon} alt="" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{apk.name}</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
                  {apk.version}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">{apk.tagline}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-800/60 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-5">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-lg bg-[#141418] border border-zinc-800">
              <span className="text-[10px] font-mono uppercase text-zinc-400 block">File Size</span>
              <span className="text-xs font-bold font-mono text-white mt-0.5 block">{apk.size}</span>
            </div>
            <div className="p-3 rounded-lg bg-[#141418] border border-zinc-800">
              <span className="text-[10px] font-mono uppercase text-zinc-400 block">Target OS</span>
              <span className="text-xs font-semibold text-zinc-200 mt-0.5 block">{apk.compatibility}</span>
            </div>
            <div className="p-3 rounded-lg bg-[#141418] border border-zinc-800">
              <span className="text-[10px] font-mono uppercase text-zinc-400 block">Package Type</span>
              <span className="text-xs font-semibold text-zinc-200 mt-0.5 block">Stand-alone APK</span>
            </div>
            <div className="p-3 rounded-lg bg-[#141418] border border-zinc-800">
              <span className="text-[10px] font-mono uppercase text-zinc-400 block">Security</span>
              <span className="text-xs font-semibold text-emerald-400 mt-0.5 block">Signed Binary</span>
            </div>
          </div>

          {/* Release Notes */}
          <div className="p-4 rounded-xl bg-[#141418] border border-zinc-800">
            <h4 className="text-xs font-mono uppercase text-zinc-300 font-semibold mb-2 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-indigo-400" />
              <span>Changelog & Technical Notes</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-400 leading-relaxed list-disc list-inside">
              <li>Verified compatibility across modern Android kernel audio routing layers.</li>
              <li>Embedded offline assets for immediate zero-network capability after setup.</li>
              <li>Lightweight execution thread consuming minimal foreground RAM and battery.</li>
              <li>Integrated debug diagnostics console for low-level packet tracing.</li>
            </ul>
          </div>

          {/* Installation Steps */}
          <div className="p-4 rounded-xl bg-[#141418] border border-zinc-800 text-xs text-zinc-300">
            <h4 className="text-xs font-mono uppercase text-zinc-300 font-semibold mb-2 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-zinc-400" />
              <span>Direct Sideloading Instructions</span>
            </h4>
            <ol className="list-decimal list-inside space-y-1 text-zinc-400">
              <li>Click the "Download APK" button below to retrieve the signed `.apk` file.</li>
              <li>Open your Android Downloads folder or tap the completed notification.</li>
              <li>If prompted, enable "Allow installation from this source" in system Settings.</li>
              <li>Tap Install and launch the utility from your app drawer.</li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white"
          >
            Cancel
          </button>
          <a
            href={apk.downloadUrl}
            download={apk.filename}
            onClick={() => {
              if (onDownload) onDownload(apk);
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-semibold text-xs flex items-center gap-2 hover:bg-zinc-200 transition-all shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Download {apk.filename} ({apk.size})</span>
          </a>
        </div>
      </div>
    </div>
  );
}
