import AboutBg from "../assets/About.png";

export default function AboutHeroSection() {
  return (
    <section
      className="about-hero"
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="about-hero-overlay" />

      <div className="about-hero-content">
        <p className="about-hero-eyebrow">About Us</p>

        <h1 className="about-hero-title">
          Creating radical change in Agriculture
        </h1>

        <div className="about-hero-actions">
          <a href="#mission" className="about-btn-primary">
            Join our Mission
          </a>

          <a
            href="https://www.linkedin.com/company/agriscanai"
            target="_blank"
            rel="noopener noreferrer"
            className="about-btn-outline"
          >
            Connect with us on Linkedin
          </a>
        </div>
      </div>
    </section>
  );
}