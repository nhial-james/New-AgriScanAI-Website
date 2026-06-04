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

export default function SolutionsJoinSection() {
  const [isApkModalOpen, setIsApkModalOpen] = useState(false);
  const [isPlayStoreModalOpen, setIsPlayStoreModalOpen] = useState(false);
  const [isAppStoreModalOpen, setIsAppStoreModalOpen] = useState(false);
  const [isGoogleModalOpen, setIsGoogleModalOpen] = useState(false);
  const [isAppleModalOpen, setIsAppleModalOpen] = useState(false);
  return (
    <section className="sol-join">
      <div className="sol-section-header">
        <p className="sol-eyebrow">Join Us Now</p>
        <h2 className="sol-join-title">Growing Smarter with AgriScanAI</h2>
        <p className="sol-join-desc">
          Start your journey to smarter farming today. Download AgriScanAI and transform how you manage your crops with AI-powered insights.
        </p>
      </div>

      <div className="sol-join-stats">
        {stats.map((s) => (
          <div className="sol-join-stat" key={s.label}>
            <span className="sol-join-stat-value">{s.value}</span>
            <span className="sol-join-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="sol-join-banner">
        <div className="sol-join-banner-text">
          <p className="sol-join-banner-eyebrow">TRY IT NOW</p>
          <h3 className="sol-join-banner-title">Ready to transform farming with AI?</h3>
          <p className="sol-join-banner-desc">
            AgriScanAI empowers farmers and organisations with disease detection, payments and actionable insights for sustainable growth.
          </p>
        </div>
        <div className="sol-join-banner-badges">
          <button
            onClick={() => setIsApkModalOpen(true)}
            className="sol-store-badge-link"
            aria-label="Download Android APK"
          >
            <img src={androidApkBadge} alt="Download Android APK" className="sol-store-badge-img h-12 w-auto" />
          </button>
          
          <button
            onClick={() => setIsPlayStoreModalOpen(true)}
            className="sol-store-badge-link"
            aria-label="Download on Google Play"
          >
            <img src={googlePlayBadge} alt="Download on Google Play" className="sol-store-badge-img h-12 w-auto" />
          </button>
          
          <button
            onClick={() => setIsAppStoreModalOpen(true)}
            className="sol-store-badge-link"
            aria-label="Download on the App Store"
          >
            <img src={appStoreBadge} alt="Download on the App Store" className="sol-store-badge-img h-12 w-auto" />
          </button>
        </div>
      </div>

      <DownloadModal 
        isOpen={isApkModalOpen} 
        onClose={() => setIsApkModalOpen(false)} 
        downloadUrl="/downloads/agriscanai-v2.0.apk" 
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
