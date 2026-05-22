import googlePlayBadge from '../assets/Play Store.png';

const stats = [
  { value: '50+', label: 'Crops & Diseases' },
  { value: '94%', label: 'Detection Accuracy' },
  { value: '24/7', label: 'AI Availability' },
];

export default function JoinSection() {
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
  <a
    href="https://play.google.com/store"
    target="_blank"
    rel="noopener noreferrer"
    className="store-badge-btn"
    aria-label="Get it on Google Play"
  >
    <img
      src={googlePlayBadge}
      alt="Google Play"
      className="store-badge-img"
    />
  </a>
          <a
    href="https://apps.apple.com"
    target="_blank"
    rel="noopener noreferrer"
    className="store-badge-btn"
    aria-label="Download on the App Store"
  >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="store-badge-img"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
