const CheckIcon = () => (
  <svg className="about-feature-check" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40ZM33.18 15.16L20 28.34L14.82 23.18L12 26L20 34L36 18L33.18 15.16Z"
      fill="#33B34D"
    />
  </svg>
);

const features = [
  {
    title: 'Proven Impact',
    desc: 'Successfully deployed across multiple African countries, helping thousands of farmers improve their yields and incomes.',
  },
  {
    title: 'Mobile-First Design',
    desc: 'Works on any smartphone, even in low-connectivity areas, making it accessible to farmers everywhere.',
  },
  {
    title: 'Local Expertise',
    desc: 'Built by Africans for Africans, with deep understanding of local crops, diseases, and farming practices.',
  },
  {
    title: 'Continuous Innovation',
    desc: 'Constantly improving our AI models and adding new features based on farmer feedback and emerging agricultural challenges.',
  },
  {
    title: 'Affordable & Accessible',
    desc: 'Designed to be affordable for smallholder farmers, with flexible pricing and support for local languages.',
  },
  {
    title: 'Comprehensive Support',
    desc: 'Dedicated support team, training programs, and ongoing assistance to ensure farmer success.',
  },
];

export default function AboutWhyChooseSection() {
  return (
    <section className="about-why-choose">
      <div className="about-why-header">
        <p className="about-why-eyebrow">Partner with Us</p>
        <h2 className="about-why-title">Why Choose AgriScanAI</h2>
      </div>
      <div className="about-feature-grid">
        {features.map((feature) => (
          <div key={feature.title} className="about-feature-card">
            <div className="about-feature-card-header">
              <CheckIcon />
              <h3 className="about-feature-title">{feature.title}</h3>
            </div>
            <p className="about-feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
