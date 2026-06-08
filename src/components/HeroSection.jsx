import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import heroBg from "../assets/herobg.png";
import phoneImg from "../assets/phone.png";
import googlePlayBadge from '../assets/Icons/google play.svg';
import appStoreBadge from '../assets/Icons/app store.svg';
import androidApkBadge from '../assets/Icons/android apk.svg';
import DownloadModal from "./ui/DownloadModal";

export default function HeroSection() {
  const [isPlayStoreModalOpen, setIsPlayStoreModalOpen] = useState(false);
  const [isAppStoreModalOpen, setIsAppStoreModalOpen] = useState(false);
  const [isApkModalOpen, setIsApkModalOpen] = useState(false);

  return (
    <>
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* ── LEFT: phone mockup ── */}
        <div className="hero-left">
          <div className="hero-phone-wrap">
            <img
              src={phoneImg}
              alt="AgriScanAI App Preview"
              className="hero-phones-img"
            />
          </div>
        </div>

        {/* ── RIGHT: copy + CTAs ── */}
        <div className="hero-right">
          <h1 className="hero-heading">
            Strengthening Smallholder
            Farmer Resilience Through AI
          </h1>

          <p className="hero-subtext">
            AgriScanAI partners with Governments, NGOs, and agricultural programs
            to deploy AI-powered advisory tools that improve farmer
            decision-making, reduce crop losses, and build climate resilience.
          </p>

          {/* App store badges */}
          <div className="hero-store-badges">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsApkModalOpen(true); }}
              className="hero-store-badge-link"
              aria-label="Download Android APK"
            >
              <img
                src={androidApkBadge}
                alt="Download Android APK"
                className="hero-store-badge"
              />
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsPlayStoreModalOpen(true); }}
              className="hero-store-badge-link"
              aria-label="Get on Google Play"
            >
              <img
                src={googlePlayBadge}
                alt="Get it on Google Play"
                className="hero-store-badge"
              />
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsAppStoreModalOpen(true); }}
              className="hero-store-badge-link"
              aria-label="Download on App Store"
            >
              <img
                src={appStoreBadge}
                alt="Download on the App Store"
                className="hero-store-badge"
              />
            </a>
          </div>

          {/* CTA + FoundersLive badge inline */}
          <div className="hero-cta-row">
            <Link to="/contact" className="hero-cta-btn">
              Apply for Pilot Partnership
            </Link>

            {/* FoundersLive badge */}
            <div className="hero-founders-badge">
              <div className="founders-logo">
                <span className="founders-logo-text">
                  FOUNDERS<br />
                  <span className="founders-logo-live">LIVE</span>
                </span>
              </div>
              <span className="founders-label">
                FoundersLive Nairobi<br />Winner 2025
              </span>
            </div>
          </div>
        </div>
      </section>
      <DownloadModal
        isOpen={isApkModalOpen}
        onClose={() => setIsApkModalOpen(false)}
        downloadUrl="/downloads/agriscanai-v1.0.apk"
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
    </>
  );
}
