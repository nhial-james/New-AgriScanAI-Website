import limitedExtension from '../assets/Icons/Limited Extension Capacity.svg';
import risingPest from '../assets/Icons/Rising Pest and Climate Risks.svg';
import delayAccess from '../assets/Icons/Delay Access to Advisory.svg';

const challenges = [
  {
    icon: limitedExtension,
    title: 'Limited Extension Capacity',
    desc: 'Not enough field staff to reach all farmers who need support.',
  },
  {
    icon: risingPest,
    title: 'Rising Pest and Climate Risks',
    desc: 'Increasing crop threats and unpredictable weather patterns.',
  },
  {
    icon: delayAccess,
    title: 'Delay Access to Advisory',
    desc: 'Farmers often get information too late to take action.',
  },
];

export default function ChallengeSection() {
  return (
    <section className="challenge-section" id="about">
      <div className="challenge-wave-bg" />

      <div className="challenge-content">
        <div className="section-header">
          <p className="section-eyebrow">The Challenge</p>
          <h2 className="section-title">Limited Reach of Agricultural Programs</h2>
        </div>

        <div className="challenge-cards">
          {challenges.map((item, i) => (
            <div className="challenge-card-group" key={item.title}>
              <div className="challenge-card">
                <div className="challenge-icon-wrap">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3 className="challenge-card-title">{item.title}</h3>
                <p className="challenge-card-desc">{item.desc}</p>
              </div>
              {i < challenges.length - 1 && (
                <div className="challenge-divider" />
              )}
            </div>
          ))}
        </div>

        <p className="challenge-summary">
          These Challenges leads to preventable crop losses, reduced incomes and weakened resilience.
        </p>
      </div>
    </section>
  );
}
