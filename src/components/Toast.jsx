import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900/95 border border-zinc-700 text-white shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-5 duration-300">
      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      <span className="text-xs font-mono text-zinc-200">{message}</span>
      <button
        onClick={onClose}
        className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ml-2"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
