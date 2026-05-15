const webFeatures = [
  {
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/bc4fbbbe5847800e5e36990c4e2e10f7ad934b14?width=890',
    label: 'Farmer Profiles',
    desc: 'Access detailed farmer profiles, plots, and activity history.',
  },
  {
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/117288e4c44625dcfb9b85f324515612bf04f558?width=890',
    label: 'Crop Monitoring',
    desc: 'AI-powered detection to identify plant diseases early.',
  },
  {
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/9de9025ef1f88d3e0c2a3116f1dd0ec2c966fbe8?width=890',
    label: 'Financial Tracking',
    desc: 'Manage payments, subsidies, and farm financing securely.',
  },
];

export default function SolutionsWebAppSection() {
  return (
    <section className="sol-webapp">
      <div className="sol-section-header">
        <p className="sol-eyebrow">AgriScanAI Web App</p>
        <h2 className="sol-section-title">Farming Visualized</h2>
        <p className="sol-section-desc">
          AgriScanAI isn't just mobile, it comes with a powerful web application built for NGOs, agencies, sponsors, and organizations managing farmers. With clean dashboards, AI-powered analytics, and financial tracking, the web app turns complex farm data into clear, actionable insights.
        </p>
      </div>

      <div className="sol-laptop-wrap">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c7f06e74abfbc5cc352fbf808946f5801764a7e1?width=2891"
          alt="AgriScanAI Web Dashboard on MacBook"
          className="sol-laptop-img"
        />
      </div>

      <div className="sol-webapp-features">
        {webFeatures.map((f) => (
          <div className="sol-webapp-feature-card" key={f.label}>
            <img src={f.img} alt={f.label} className="sol-webapp-feature-img" />
            <h4 className="sol-webapp-feature-label">{f.label}</h4>
            <p className="sol-webapp-feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
