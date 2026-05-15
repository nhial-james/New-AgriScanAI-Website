export default function AboutMissionVisionSection() {
  return (
    <section className="about-mission-vision" id="mission">
      <div className="about-mv-grid">
        <div className="about-mv-card mission">
          <h3 className="about-mv-title">Our Mission</h3>
          <p className="about-mv-text">
            &ldquo;Empowering African farmers to maximize productivity, reduce losses, and build
            sustainable livelihoods through accessible AI-powered agricultural insights.&rdquo;
          </p>
        </div>
        <div className="about-mv-card vision">
          <h3 className="about-mv-title">Our Vision</h3>
          <p className="about-mv-text">
            &ldquo;To be the leading AI agricultural platform transforming smallholder farming across
            Africa, where every farmer has access to intelligent, personalized farming guidance
            that drives food security and prosperity.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
