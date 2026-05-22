import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import heroBg from "../assets/herobg.png";
import phoneImg from "../assets/phone.png";
import googlePlayBadge from '../assets/Play Store.png';
  

export default function HeroSection() {
  return (
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
          Strengthening Smallholder<br />
          Farmer Resilience Through AI
        </h1>

        <p className="hero-subtext">
          AgriScanAI Partners with Governments, NGOs and agricultural programs
          to deploy AI-powered advisory tools that improves farmer
          decision-making reduce crop losses, and build climate resilience.
        </p>

        <Link to="/pilot-program" className="hero-cta-btn">
          Apply for Pilot Partnership
        </Link>

        {/* App store badges */}
        <div className="hero-store-badges">
          <a
            href="https://play.google.com/store/apps/details?id=com.agriscanai"  /* ← replace */
            target="_blank"
            rel="noopener noreferrer"
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
            href="https://apps.apple.com/app/agriscanai/idYOURAPPID"  /* ← replace */
            target="_blank"
            rel="noopener noreferrer"
            className="hero-store-badge-link"
            aria-label="Download on App Store"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="hero-store-badge"
            />
          </a>
        </div>

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
    </section>
  );
}
