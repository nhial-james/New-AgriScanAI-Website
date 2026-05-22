import { Link } from 'react-router-dom';

export default function SolutionsHeroSection() {
  return (
    <section className="sol-hero">
      <div className="sol-hero-bg-panel" />
      <div className="sol-hero-content">
        <div className="sol-hero-text">
          <p className="sol-eyebrow sol-eyebrow-left">Build for Impact</p>
          <h1 className="sol-hero-title">
            Empowering Ecosystems<br />with Intelligent Data
          </h1>
          <p className="sol-hero-desc">
            Whether you run a small NGO or a large government program, AgriScanAI provides the end-to-end operational visibility needed to transform agricultural networks.
          </p>
          <div className="sol-hero-actions">
            <a href="#target-audience" className="sol-btn-outline">Explore Solutions</a>
            <Link to="/contact" className="sol-btn-filled">Request a Demo</Link>
          </div>
        </div>
        <div className="sol-hero-img-wrap">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/6846a3711641c8e2055d9c94750327885f88551e?width=1724"
            alt="AgriScanAI team in field"
            className="sol-hero-img"
          />
        </div>
      </div>
    </section>
  );
}
