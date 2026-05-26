import webAppMockup from '../assets/Farming Visualized image.png';

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
          src={webAppMockup}
          alt="AgriScanAI Web Dashboard"
          className="sol-laptop-img"
        />
      </div>
    </section>
  );
}
