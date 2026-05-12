export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-phone-wrap">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/3fa8d94e679aa5621174208b453bd51302c9c1d9?width=2650"
          alt="AgriScanAI App Preview"
          className="hero-phones-img"
        />
        <div className="hero-store-badges">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-store-badge-link"
            aria-label="Get on Google Play"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
              alt="Get it on Google Play"
              className="hero-store-badge"
            />
          </a>
          <a
            href="https://apps.apple.com"
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
      </div>
    </section>
  );
}
