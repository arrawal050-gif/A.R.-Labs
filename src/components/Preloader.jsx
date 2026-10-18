import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Animate percentage counter
    const obj = { val: 0 };
    tl.to(obj, {
      val: 100,
      duration: 1.6,
      ease: 'power2.inOut',
      onUpdate: () => {
        setPercent(Math.floor(obj.val));
      },
    });

    // Stroke animation & reveal
    tl.to(
      '.intro-stroke',
      {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: 'power3.inOut',
        stagger: 0.1,
      },
      0
    );

    // Box expansion clip-path reveal
    tl.to(containerRef.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 1.0,
      ease: 'expo.inOut',
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center text-white select-none pointer-events-auto"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* SVG Monogram with stroke dash animation */}
        <svg
          viewBox="0 0 400 120"
          className="w-72 sm:w-96 h-28 overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="intro-stroke font-display text-7xl sm:text-8xl font-black uppercase tracking-widest"
            stroke="#f4f4f0"
            strokeWidth="1.5"
            strokeDasharray="600"
            strokeDashoffset="600"
            fill="transparent"
          >
            A.R. LABS
          </text>
        </svg>

        <div className="mt-4 flex items-center gap-4 text-xs font-tech text-zinc-500 uppercase tracking-widest">
          <span>Creative Intelligence</span>
          <span className="w-1 h-1 rounded-full bg-cyan-400" />
          <span className="text-zinc-300 font-mono">{percent}%</span>
        </div>
      </div>
    </div>
  );
}
