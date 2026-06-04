import React, { useState } from 'react';
import DownloadModal from './ui/DownloadModal';
import ComingSoonModal from './ui/ComingSoonModal';

import googlePlayBadge from '../assets/Icons/google play.svg';
import appStoreBadge from '../assets/Icons/app store.svg';
import androidApkBadge from '../assets/Icons/android apk.svg';

export default function AboutJoinJourneySection() {
  const [isApkModalOpen, setIsApkModalOpen] = useState(false);
  const [isPlayStoreModalOpen, setIsPlayStoreModalOpen] = useState(false);
  const [isAppStoreModalOpen, setIsAppStoreModalOpen] = useState(false);
  const [isGoogleModalOpen, setIsGoogleModalOpen] = useState(false);
  const [isAppleModalOpen, setIsAppleModalOpen] = useState(false);
  return (
    <section className="about-join-journey">
      <div className="about-join-card">
        <h2 className="about-join-title">Join Our Journey</h2>
        <p className="about-join-desc">
          Our story is still unfolding. With every farmer we empower and every partnership we
          build, we&apos;re creating a future where technology serves agriculture and transforms
          livelihoods. We&apos;re expanding our reach, refining our AI models, and growing a network
          of collaborators, partners, and supporters.
          <br /><br />
          Whether you&apos;re a farmer seeking better yields, an agribusiness looking to support your
          suppliers, or an investor interested in agricultural innovation, we&apos;re here to partner
          with you.
        </p>
        <div className="about-join-stores flex gap-4 mt-8">
          <button
            onClick={() => setIsApkModalOpen(true)}
            className="about-store-badge-link"
            aria-label="Download Android APK"
          >
            <img src={androidApkBadge} alt="Download Android APK" className="about-store-badge h-12 w-auto" />
          </button>
          
          <button
            onClick={() => setIsPlayStoreModalOpen(true)}
            className="about-store-badge-link"
            aria-label="Download on Google Play"
          >
            <img src={googlePlayBadge} alt="Download on Google Play" className="about-store-badge h-12 w-auto" />
          </button>
          
          <button
            onClick={() => setIsAppStoreModalOpen(true)}
            className="about-store-badge-link"
            aria-label="Download on the App Store"
          >
            <img src={appStoreBadge} alt="Download on the App Store" className="about-store-badge h-12 w-auto" />
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
