import React, { useState } from 'react';
import DownloadModal from './ui/DownloadModal';
import ComingSoonModal from './ui/ComingSoonModal';

import googlePlayBadge from '../assets/Icons/google play.svg';
import appStoreBadge from '../assets/Icons/app store.svg';
import androidApkBadge from '../assets/Icons/android apk.svg';

const stats = [
  { value: '50+', label: 'Crops & Diseases' },
  { value: '94%', label: 'Detection Accuracy' },
  { value: '24/7', label: 'AI Availability' },
];

export default function JoinSection() {
  const [isApkModalOpen, setIsApkModalOpen] = useState(false);
  const [isPlayStoreModalOpen, setIsPlayStoreModalOpen] = useState(false);
  const [isAppStoreModalOpen, setIsAppStoreModalOpen] = useState(false);
  const [isGoogleModalOpen, setIsGoogleModalOpen] = useState(false);
  const [isAppleModalOpen, setIsAppleModalOpen] = useState(false);
  return (
    <section className="join-section" id="contact">
      <div className="join-header">
        <p className="section-eyebrow">Join Us Now</p>
        <h2 className="join-headline">Growing Smarter with AgriScanAI</h2>
        <p className="join-description">
          Start your journey to smarter farming today. Download AgriScanAI and
          transform how you manage your crops with AI-powered insights.
        </p>
      </div>

      <div className="stats-row">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="join-cta-banner">
        <div className="join-cta-text">
          <p className="join-cta-label">Try It Now</p>
          <h3 className="join-cta-headline">Ready to transform farming with AI?</h3>
          <p className="join-cta-sub">
            AgriScanAI empowers farmers with AI-powered advisory tools for smarter agriculture.
          </p>
        </div>

        <div className="join-cta-actions">
          <button
            onClick={() => setIsApkModalOpen(true)}
            className="store-badge-btn"
            aria-label="Download Android APK"
          >
            <img src={androidApkBadge} alt="Download Android APK" className="store-badge-img h-12 w-auto" />
          </button>
          
          <button
            onClick={() => setIsPlayStoreModalOpen(true)}
            className="store-badge-btn"
            aria-label="Download on Google Play"
          >
            <img src={googlePlayBadge} alt="Download on Google Play" className="store-badge-img h-12 w-auto" />
          </button>
          
          <button
            onClick={() => setIsAppStoreModalOpen(true)}
            className="store-badge-btn"
            aria-label="Download on the App Store"
          >
            <img src={appStoreBadge} alt="Download on the App Store" className="store-badge-img h-12 w-auto" />
          </button>
        </div>
      </div>

      <DownloadModal 
        isOpen={isApkModalOpen} 
        onClose={() => setIsApkModalOpen(false)} 
        downloadUrl="/downloads/app-release.apk" 
        appName="AgriScanAI APK"
      />
      <DownloadModal 
        isOpen={isPlayStoreModalOpen} 
        onClose={() => setIsPlayStoreModalOpen(false)} 
        downloadUrl="#" 
        appName="Google Play Version"
      />
      <DownloadModal 
        isOpen={isAppStoreModalOpen} 
        onClose={() => setIsAppStoreModalOpen(false)} 
        downloadUrl="#" 
        appName="App Store Version"
      />

      <ComingSoonModal 
        isOpen={isGoogleModalOpen} 
        onClose={() => setIsGoogleModalOpen(false)} 
        storeName="Google Play Store"
        message="AgriScanAI will soon be available on Google Play Store!"
        colorClass="from-blue-500 to-blue-700"
      />

      <ComingSoonModal 
        isOpen={isAppleModalOpen} 
        onClose={() => setIsAppleModalOpen(false)} 
        storeName="Apple App Store"
        message="AgriScanAI will soon be available on Apple App Store!"
        colorClass="from-gray-800 to-black"
      />
    </section>
  );
}
