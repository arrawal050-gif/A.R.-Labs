import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DigitalPlatforms from './components/DigitalPlatforms';
import HardwareProjects from './components/HardwareProjects';
import AndroidDownloads from './components/AndroidDownloads';
import FounderSection from './components/FounderSection';
import TechStackMatrix from './components/TechStackMatrix';
import Footer from './components/Footer';
import ArchitectureModal from './components/ArchitectureModal';
import ReleaseModal from './components/ReleaseModal';
import Toast from './components/Toast';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isArchModalOpen, setIsArchModalOpen] = useState(false);
  const [selectedApkForRelease, setSelectedApkForRelease] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const showNotification = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f4f4f0] bg-grid-minimal flex flex-col selection:bg-zinc-800 selection:text-white relative">
      {/* Interactive Magnetic Cursor */}
      <CustomCursor />

      {/* Intro Preloader Sequence */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Sticky Glass Navbar */}
      <Navbar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Hero Section with Liquid Typography */}
      <Hero activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Core Digital Platforms */}
        {(activeFilter === 'all' || activeFilter === 'platforms') && (
          <DigitalPlatforms onNotify={showNotification} />
        )}

        {/* Hardware & Research Projects */}
        {(activeFilter === 'all' || activeFilter === 'hardware') && (
          <HardwareProjects onOpenSpecs={() => setIsArchModalOpen(true)} />
        )}

        {/* Native Android APK Distribution */}
        {(activeFilter === 'all' || activeFilter === 'android') && (
          <AndroidDownloads
            onNotify={showNotification}
            onOpenReleaseNotes={(apk) => setSelectedApkForRelease(apk)}
          />
        )}

        {/* Founder & Leadership Section */}
        <FounderSection />

        {/* Foundational Tech Stack Matrix */}
        <TechStackMatrix />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Sakhi Architecture Modal */}
      <ArchitectureModal
        isOpen={isArchModalOpen}
        onClose={() => setIsArchModalOpen(false)}
      />

      {/* Interactive APK Release Notes Modal */}
      <ReleaseModal
        apk={selectedApkForRelease}
        onClose={() => setSelectedApkForRelease(null)}
        onDownload={(apk) => showNotification(`Starting download: ${apk.filename}`)}
      />

      {/* Visual Toast Feedback */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
