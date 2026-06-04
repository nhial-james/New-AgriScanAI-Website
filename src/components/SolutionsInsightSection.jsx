import insightChartImg from '../assets/Farming Visualized image.png';

export default function SolutionsInsightSection() {
  return (
    <section className="sol-insight">
      <div className="sol-section-header">
        <p className="sol-eyebrow">Insight</p>
        <h2 className="sol-section-title">Designed to Keep Farmers Growing</h2>
      </div>

      <div className="max-w-[1300px] mx-auto overflow-hidden">
        <img
          src={insightChartImg}
          alt="Monthly Transactions Trends Chart"
          className="w-full h-auto block"
          style={{ boxShadow: 'none', background: 'transparent' }}
        />
      </div>
    </section>
  );
}
