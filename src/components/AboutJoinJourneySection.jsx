import React, { useState } from 'react';
import DownloadModal from './ui/DownloadModal';
import ComingSoonModal from './ui/ComingSoonModal';

import googlePlayBadge from '../assets/Icons/google play.webp';
import appStoreBadge from '../assets/Icons/app store.webp';
import androidApkBadge from '../assets/Icons/android apk.webp';

// Feature flags (set to true to re-enable in future)
const SHOW_APP_STORES = false;
const SHOW_APK_FORM = false;

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
          {SHOW_APK_FORM ? (
            <button
              onClick={() => setIsApkModalOpen(true)}
              className="about-store-badge-link"
              aria-label="Download Android APK"
            >
              <img loading="lazy" src={androidApkBadge} alt="Download Android APK" className="about-store-badge h-12 w-auto" />
            </button>
          ) : (
            <a
              href="/downloads/AgriScanAI.apk"
              download="AgriScanAI.apk"
              className="about-store-badge-link inline-block"
              aria-label="Download Android APK"
            >
              <img loading="lazy" src={androidApkBadge} alt="Download Android APK" className="about-store-badge h-12 w-auto" />
            </a>
          )}
          
          {/* Google Play and App Store buttons (hidden until app is available on stores) */}
          {SHOW_APP_STORES && (
            <>
              <button
                onClick={() => setIsPlayStoreModalOpen(true)}
                className="about-store-badge-link"
                aria-label="Download on Google Play"
              >
                <img loading="lazy" src={googlePlayBadge} alt="Download on Google Play" className="about-store-badge h-12 w-auto" />
              </button>
              
              <button
                onClick={() => setIsAppStoreModalOpen(true)}
                className="about-store-badge-link"
                aria-label="Download on the App Store"
              >
                <img loading="lazy" src={appStoreBadge} alt="Download on the App Store" className="about-store-badge h-12 w-auto" />
              </button>
            </>
          )}
        </div>
      </div>
      
      {SHOW_APK_FORM && (
        <DownloadModal 
          isOpen={isApkModalOpen} 
          onClose={() => setIsApkModalOpen(false)} 
          downloadUrl="/downloads/AgriScanAI.apk" 
          appName="AgriScanAI APK"
        />
      )}

      {SHOW_APP_STORES && (
        <>
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
        </>
      )}
    </section>
  );
}
