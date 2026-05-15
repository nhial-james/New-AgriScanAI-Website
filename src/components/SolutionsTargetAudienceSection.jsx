const CheckIcon = () => (
  <svg className="sol-card-icon" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.9998 4.66663C15.1198 4.66663 4.6665 15.12 4.6665 28C4.6665 40.88 15.1198 51.3333 27.9998 51.3333C40.8798 51.3333 51.3332 40.88 51.3332 28C51.3332 15.12 40.8798 4.66663 27.9998 4.66663ZM27.9998 46.6666C17.7098 46.6666 9.33317 38.29 9.33317 28C9.33317 17.71 17.7098 9.33329 27.9998 9.33329C38.2898 9.33329 46.6665 17.71 46.6665 28C46.6665 38.29 38.2898 46.6666 27.9998 46.6666ZM38.7098 17.6866L23.3332 33.0633L17.2898 27.0433L13.9998 30.3333L23.3332 39.6666L41.9998 21L38.7098 17.6866Z" fill="#2E7D32" />
  </svg>
);

const audiences = [
  {
    title: 'NGOs & Development Programs',
    desc: 'Monitor farmer impact, track program effectiveness, and demonstrate ROI to donors and stakeholders with granular, real-time ground truth visibility.',
  },
  {
    title: 'Agribusiness & Cooperatives',
    desc: 'Manage supply chains natively, ensure farmer compliance, predict yield risks, and optimize sourcing with offline-first mobile data collection.',
  },
  {
    title: 'Government Agencies',
    desc: 'Scale agricultural initiatives nationwide, securely track input subsidy usage, and measure far-reaching policy impact efficiently using verified data.',
  },
  {
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
            <CheckIcon />
            <h3 className="sol-card-title">{item.title}</h3>
            <p className="sol-card-desc">{item.desc}</p>
            <button className="sol-btn-outline sol-btn-sm">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
