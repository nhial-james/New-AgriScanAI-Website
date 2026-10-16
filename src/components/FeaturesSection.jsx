import farmerProfiling from '../assets/Icons/Farmer Profiling & Digital Records.webp';
import realTimeData from '../assets/Icons/Real-Time Data & Analytics Dashboard.webp';
import aiCropDisease from '../assets/Icons/AI-Powered Crop Disease Detection.webp';
import mobileField from '../assets/Icons/Mobile Field Data Collection.webp';
import yieldRecording from '../assets/Icons/Yield Recording & Tracking.webp';
import financialTracking from '../assets/Icons/Financial & Input Tracking.webp';
import climateCarbon from '../assets/Icons/Climate & Carbon Monitoring.webp';
import mwaneduAI from '../assets/Icons/Mwanedu AI Smart Recommendations.webp';
import programFSC from '../assets/Icons/Program & FSC Performance Tracking.webp';

const features = [
  {
    icon: farmerProfiling,
    title: 'Farmer Profiling & Digital Records',
    desc: 'Create and manage detailed farmer profiles including location, crops, acreage, and production history all stored in a centralized digital system.',
  },
  {
    icon: realTimeData,
    title: 'Real-Time Data & Analytics Dashboard',
    desc: 'Access live dashboards that provide insights into farmer activity, productivity trends, and overall program performance.',
  },
  {
    icon: aiCropDisease,
    title: 'AI-Powered Crop Disease Detection',
    desc: 'Use image recognition to instantly identify crop diseases and pests, enabling faster and more accurate interventions.',
  },
  {
    icon: mobileField,
    title: 'Mobile Field Data Collection',
    desc: 'Capture field data directly from smartphones or tablets, even in remote areas, reducing reliance on paper-based systems.',
  },
  {
    icon: yieldRecording,
    title: 'Yield Recording & Tracking',
    desc: 'Record harvest data and monitor crop yields over time. Analyze productivity trends across seasons and regions to improve planning.',
  },
  {
    icon: financialTracking,
    title: 'Financial & Input Tracking',
    desc: 'Track inputs, costs, financing, and farmer income to provide better financial visibility and decision-making support.',
  },
  {
    icon: climateCarbon,
    title: 'Climate & Carbon Monitoring',
    desc: 'Record and analyze environmental data, including emissions and carbon sequestration, to support climate-smart agriculture initiatives.',
  },
  {
    icon: mwaneduAI,
    title: 'Mwanedu AI Smart Recommendations',
    desc: 'Provide farmers with personalized agronomic advice, crop management tips, and best practices based on collected data and AI insights.',
  },
  {
    icon: programFSC,
    title: 'Program & FSC Performance Tracking',
    desc: 'Monitor the performance of farmer groups, aggregators, or FSCs with metrics on productivity, engagement, and financial activity.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section" id="solutions">
      <div className="section-header">
        <p className="section-eyebrow">The Solution</p>
        <h2 className="section-title">Key Features of AgriScanAI</h2>
      </div>

      <div className="features-grid">
        {features.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-icon-wrap">
              <img loading="lazy" src={f.icon} alt={f.title} />
            </div>
            <h3 className="feature-card-title">{f.title}</h3>
            <p className="feature-card-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
