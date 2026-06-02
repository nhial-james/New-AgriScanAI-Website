import { Link } from 'react-router-dom';
import heroImg from '../assets/Empowering Ecosystems with Intelligent Data image.png';

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

          {/* Inline mobile hero image */}
          <div className="sol-hero-img-wrap mobile-only-img">
            <img
              src={heroImg}
              alt="AgriScanAI team in field"
              className="sol-hero-img"
            />
          </div>

          <p className="sol-hero-desc">
            Whether you run a small NGO or a large government program, AgriScanAI provides the end-to-end operational visibility needed to transform agricultural networks.
          </p>
          <div className="sol-hero-actions">
            <a href="#target-audience" className="sol-btn-outline">Explore Solutions</a>
            <Link to="/contact" className="sol-btn-filled">Request a Demo</Link>
          </div>
        </div>
        
        {/* Desktop hero side image */}
        <div className="sol-hero-img-wrap desktop-only-img">
          <img
            src={heroImg}
            alt="AgriScanAI team in field"
            className="sol-hero-img"
          />
        </div>
      </div>
    </section>
  );
}
