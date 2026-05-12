const features = [
  {
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/bd61d77533e67baf8e43ac23b851e455fcee0345?width=188',
    title: 'Farmer Profiling & Digital Records',
    desc: 'Create and manage detailed farmer profiles including location, crops, acreage, and production history all stored in a centralized digital system.',
  },
  {
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/02ef20dc023f8e78feff4debb6344587320e465e?width=193',
    title: 'Real-Time Data & Analytics Dashboard',
    desc: 'Access live dashboards that provide insights into farmer activity, productivity trends, and overall program performance.',
  },
  {
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/c8395012d7483eb1cb96a05f6b1f1bd19eba8c2f?width=204',
    title: 'AI-Powered Crop Disease Detection',
    desc: 'Use image recognition to instantly identify crop diseases and pests, enabling faster and more accurate interventions.',
  },
  {
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/75d901e737ed881bf3673b720be90a1b500642cf?width=213',
    title: 'Mobile Field Data Collection',
    desc: 'Capture field data directly from smartphones or tablets, even in remote areas, reducing reliance on paper-based systems.',
  },
  {
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/f3f62dea6e145bd8dac5c47dbe9ed426aa835b9e?width=203',
    title: 'Yield Recording & Tracking',
    desc: 'Record harvest data and monitor crop yields over time. Analyze productivity trends across seasons and regions to improve planning.',
  },
  {
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/f171b5e1f7b7f4bd005b539b8520150a5ce5d287?width=188',
    title: 'Financial & Input Tracking',
    desc: 'Track inputs, costs, financing, and farmer income to provide better financial visibility and decision-making support.',
  },
  {
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/e12d5c9fef628d9d5971a74dddb842a2f10e2827?width=208',
    title: 'Climate & Carbon Monitoring',
    desc: 'Record and analyze environmental data, including emissions and carbon sequestration, to support climate-smart agriculture initiatives.',
  },
  {
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/9f4d9db222d407569f54a79160e997b0c6f284af?width=183',
    title: 'Mwanedu AI Smart Recommendations',
    desc: 'Provide farmers with personalized agronomic advice, crop management tips, and best practices based on collected data and AI insights.',
  },
  {
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/02918aca003aaf45bd8ba11393155c5c60aa9923?width=196',
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
              <img src={f.icon} alt={f.title} />
            </div>
            <h3 className="feature-card-title">{f.title}</h3>
            <p className="feature-card-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
