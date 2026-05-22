import { Link } from 'react-router-dom';

const CheckIcon = ({ color = '#2E7D32' }) => (
  <svg className="check-icon-sm" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40ZM33.18 15.16L20 28.34L14.82 23.18L12 26L20 34L36 18L33.18 15.16Z" fill={color} />
  </svg>
);

const weProvide = [
  'Platform deployment & system configuration',
  'Technical onboarding & user setup support',
  'Training & capacity building for teams',
  'Ongoing technical support & maintenance',
  'Monitoring, reporting & data-driven insights',
];

const partnersBring = [
  'Farmer network or program participants',
  'Field coordination & local implementation',
  'Program execution & operational support',
  'Active engagement & user adoption',
  'Learning, feedback & impact evaluation',
];

const partnerTypes = [
  {
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/d98a12bcb54a85ffd375800acf7c51fdea60cf3b?width=180',
    title: 'NGOs & Development Programs',
    desc: 'Implementing agriculture and livelihoods programs',
  },
  {
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/d98a12bcb54a85ffd375800acf7c51fdea60cf3b?width=180',
    title: 'Government Agencies & Network',
    desc: 'Supporting extension services and farmer outreach',
  },
  {
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/d98a12bcb54a85ffd375800acf7c51fdea60cf3b?width=180',
    title: 'Farmers Cooperatives & Networks',
    desc: 'Strengthening advisory access and productivity',
  },
  {
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/d98a12bcb54a85ffd375800acf7c51fdea60cf3b?width=180',
    title: 'Climate & Food Security Initiatives',
    desc: 'Building Resilient in Vulnerable Communities',
  },
];

export default function PartnershipSection() {
  return (
    <section className="partnership-section" id="pilot">
      <div className="section-header">
        <p className="section-eyebrow">Our Partnership Model</p>
        <h2 className="section-title">AgriScanAI Impact Pilot Program</h2>
        <p className="section-subtitle">A structured partnership to deploy, learn, and scale.</p>
      </div>

      <div className="partnership-cards">
        <div className="partnership-card">
          <h3 className="partnership-card-title">What We Provide</h3>
          <div className="partnership-list">
            {weProvide.map((item) => (
              <div className="partnership-list-item" key={item}>
                <CheckIcon />
                <span className="partnership-list-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="partnership-card">
          <h3 className="partnership-card-title">What Partners Bring</h3>
          <div className="partnership-list">
            {partnersBring.map((item) => (
              <div className="partnership-list-item" key={item}>
                <CheckIcon />
                <span className="partnership-list-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="together-banner">
        <h3 className="together-title">Together, We Achieve</h3>
        <p className="together-description">
          Improved farmer outcomes, stronger program delivery, and evidence to support scale and future farming
        </p>
        <Link to="/pilot-program" className="together-btn">Join the Pilot Program</Link>
      </div>

      <div className="partner-types-grid">
        {partnerTypes.map((pt) => (
          <div className="partner-type-card" key={pt.title}>
            <img src={pt.icon} alt={pt.title} className="partner-type-icon" />
            <h4 className="partner-type-title">{pt.title}</h4>
            <p className="partner-type-desc">{pt.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
