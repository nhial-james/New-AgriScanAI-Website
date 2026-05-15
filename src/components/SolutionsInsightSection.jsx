const stats = [
  { value: '3,983', label: 'Active Farmers on the App', icon: '👨‍🌾' },
  { value: '25,856', label: 'Disease Scanned by Farmers', icon: '🔬' },
  { value: '102,647', label: "Farmer's Chatbot Interactions", icon: '💬' },
];

export default function SolutionsInsightSection() {
  return (
    <section className="sol-insight">
      <div className="sol-section-header">
        <p className="sol-eyebrow">Insight</p>
        <h2 className="sol-section-title">Designed to Keep Farmers Growing</h2>
      </div>

      <div className="sol-insight-stats">
        {stats.map((s) => (
          <div className="sol-insight-stat-card" key={s.label}>
            <div className="sol-insight-stat-top">
              <span className="sol-insight-stat-icon">{s.icon}</span>
              <svg className="sol-insight-chart-mini" viewBox="0 0 80 40" fill="none">
                <polyline points="0,35 20,20 40,28 60,10 80,18" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="sol-insight-stat-value">{s.value}</p>
            <p className="sol-insight-stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="sol-insight-chart-wrap">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d752a519556ac2ebc88d9ac0bde3c83d0d820185?width=2884"
          alt="Monthly Transactions Trends Chart"
          className="sol-insight-chart-img"
        />
      </div>
    </section>
  );
}
