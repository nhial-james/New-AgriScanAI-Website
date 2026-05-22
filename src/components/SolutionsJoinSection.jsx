import googlePlayBadge from '../assets/Play Store.png';


const stats = [
  { value: '50+', label: 'Crops & Diseases' },
  { value: '94%', label: 'Detection Accuracy' },
  { value: '24/7', label: 'AI Availability' },
];

export default function SolutionsJoinSection() {
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
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="sol-store-badge-link"
            aria-label="Get it on Google Play"
          >
            <img
              src={googlePlayBadge}
              alt="Get it on Google Play"
              className="sol-store-badge-img"
            />
          </a>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="sol-store-badge-link"
            aria-label="Download on the App Store"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="sol-store-badge-img sol-store-badge-apple"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
