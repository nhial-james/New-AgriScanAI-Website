import { Link } from 'react-router-dom';
import approachImg from '../assets/Our Approach Image.png';

const CheckIcon = ({ color = '#33B34D' }) => (
  <svg className="check-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40ZM33.18 15.16L20 28.34L14.82 23.18L12 26L20 34L36 18L33.18 15.16Z" fill={color} />
  </svg>
);

const features = [
  'AI Powered crops and disease identification',
  'Local language advisory (Swahili & more)',
  'Works Offline and in low Connectivity Areas',
  'Data insight for program decision-making',
];

export default function ApproachSection() {
  return (
    <section className="approach-section" id="impact">
      <div className="section-header">
        <p className="section-eyebrow">Our Approach</p>
        <h2 className="section-title">AI-Powered tools. Real-world Impact</h2>
      </div>

      <div className="approach-content">
        <div className="approach-text">
          <p className="approach-description">
            AgriScanAI is a digital extension support system that combines Artificial Intelligence,
            local language advisory, and data insights to strengthen agriculture programs
          </p>

          <div className="approach-checklist">
            {features.map((feature) => (
              <div className="check-item" key={feature}>
                <CheckIcon />
                <span className="check-text">{feature}</span>
              </div>
            ))}
          </div>

          <Link to="/about" className="approach-cta">Learn More about AgriScanAI</Link>
        </div>

        <div className="approach-image">
          <img
            src={approachImg}
            alt="AgriScanAI App on Phone"
            className="approach-phone-img"
          />
        </div>
      </div>
    </section>
  );
}
