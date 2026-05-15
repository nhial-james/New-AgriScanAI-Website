const CheckIcon = () => (
  <svg className="pilot-card-icon" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M27.9998 4.66663C15.1198 4.66663 4.6665 15.12 4.6665 28C4.6665 40.88 15.1198 51.3333 27.9998 51.3333C40.8798 51.3333 51.3332 40.88 51.3332 28C51.3332 15.12 40.8798 4.66663 27.9998 4.66663ZM27.9998 46.6666C17.7098 46.6666 9.33317 38.29 9.33317 28C9.33317 17.71 17.7098 9.33329 27.9998 9.33329C38.2898 9.33329 46.6665 17.71 46.6665 28C46.6665 38.29 38.2898 46.6666 27.9998 46.6666ZM38.7098 17.6866L23.3332 33.0633L17.2898 27.0433L13.9998 30.3333L23.3332 39.6666L41.9998 21L38.7098 17.6866Z"
      fill="#2E7D32"
    />
  </svg>
);

const features = [
  { title: 'Training & Onboarding', desc: 'Complete user training for your team' },
  { title: 'Setup & Configuration', desc: 'Full system setup customized for your organization' },
  { title: 'Dedicated Support', desc: 'Direct access to our success team' },
  { title: 'Analytics & Reports', desc: 'Custom dashboards and reporting' },
  { title: 'Data Management', desc: 'Secure data import and management' },
  { title: 'Launch Assistance', desc: 'End-to-end pilot launch support' },
];

export default function PilotProgramIncludesSection() {
  return (
    <section className="pilot-includes">
      <div className="pilot-includes-header">
        <p className="pilot-eyebrow">Pilot Program Includes</p>
        <p className="pilot-includes-sub">
          Everything needed to launch and manage your pilot successfully
        </p>
      </div>
      <div className="pilot-cards-grid">
        {features.map((f) => (
          <div className="pilot-card" key={f.title}>
            <CheckIcon />
            <h3 className="pilot-card-title">{f.title}</h3>
            <p className="pilot-card-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
