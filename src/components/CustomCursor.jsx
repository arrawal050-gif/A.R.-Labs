import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Check if device supports fine hover
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.1, ease: 'power2.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.1, ease: 'power2.out' });

    const fxTo = gsap.quickTo(follower, 'x', { duration: 0.35, ease: 'power3.out' });
    const fyTo = gsap.quickTo(follower, 'y', { duration: 0.35, ease: 'power3.out' });

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      xTo(clientX);
      yTo(clientY);
      fxTo(clientX);
      fyTo(clientY);

      // Check for hover state and text
      const target = e.target.closest('[data-cursor-text], a, button');
      if (target) {
        const text = target.getAttribute('data-cursor-text');
        if (text) {
          setCursorText(text);
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsPointer(true);
        }
      } else {
        setCursorText('');
        setIsHovered(false);
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden hidden md:block">
      {/* Inner tiny dot */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white transition-opacity duration-200 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Trailing follower ring / label */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-300 ease-out border ${
          isHovered
            ? 'w-20 h-20 bg-white text-zinc-950 border-white font-tech text-[10px] font-bold tracking-wider uppercase scale-100'
            : isPointer
            ? 'w-10 h-10 border-white/60 bg-white/10 scale-100'
            : 'w-8 h-8 border-white/30 bg-transparent scale-100'
        }`}
      >
        {isHovered && <span>{cursorText}</span>}
      </div>
    </div>
  );
}
