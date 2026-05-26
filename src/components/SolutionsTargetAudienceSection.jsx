import ngosIcon from '../assets/Icons/NGOs & Development Programs.svg';
import cooperativesIcon from '../assets/Icons/Farmers Cooperatives & Networks.svg';
import govtIcon from '../assets/Icons/Government Agencies & Network.svg';
import climateIcon from '../assets/Icons/Climate & Food Security Initiatives.svg';

const audiences = [
  {
    icon: ngosIcon,
    title: 'NGOs & Development Programs',
    desc: 'Monitor farmer impact, track program effectiveness, and demonstrate ROI to donors and stakeholders with granular, real-time ground truth visibility.',
  },
  {
    icon: cooperativesIcon,
    title: 'Agribusiness & Cooperatives',
    desc: 'Manage supply chains natively, ensure farmer compliance, predict yield risks, and optimize sourcing with offline-first mobile data collection.',
  },
  {
    icon: govtIcon,
    title: 'Government Agencies',
    desc: 'Scale agricultural initiatives nationwide, securely track input subsidy usage, and measure far-reaching policy impact efficiently using verified data.',
  },
  {
    icon: climateIcon,
    title: 'Climate Resilience Projects',
    desc: 'Monitor verified carbon credits, cross-check climate-smart practices, overlay satellite vegetation indices, and accurately report environmental impact.',
  },
];

export default function SolutionsTargetAudienceSection() {
  return (
    <section className="sol-audience" id="target-audience">
      <div className="sol-section-header">
        <p className="sol-eyebrow">Target Audience</p>
        <h2 className="sol-section-title">Empowering Stakeholders Across the Ecosystem</h2>
      </div>
      <div className="sol-audience-grid">
        {audiences.map((item) => (
          <div className="sol-audience-card" key={item.title}>
            <img src={item.icon} alt={item.title} className="sol-audience-icon" />
            <h3 className="sol-card-title">{item.title}</h3>
            <p className="sol-card-desc">{item.desc}</p>
            <button className="sol-btn-outline sol-btn-sm">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
