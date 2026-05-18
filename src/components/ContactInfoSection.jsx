const PhoneIcon = () => (
  <img
    src="https://api.builder.io/api/v1/image/assets/TEMP/d7e4b04669820eb37c15d398ade2a808efe9d984?width=96"
    alt="Phone"
    className="contact-info-icon"
  />
);

const EmailIcon = () => (
  <img
    src="https://api.builder.io/api/v1/image/assets/TEMP/05e6a8dbc073953340b6063a1185c2d4f78e01ba?width=96"
    alt="Email"
    className="contact-info-icon"
  />
);

const LocationIcon = () => (
  <img
    src="https://api.builder.io/api/v1/image/assets/TEMP/41eff01fd066fe841f04109b1145ddc0bf863292?width=96"
    alt="Office Location"
    className="contact-info-icon"
  />
);

const contactDetails = [
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: '+254 711 085 400',
    href: 'tel:+254711085400',
  },
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'info@agriscanai.co.ke',
    href: 'mailto:info@agriscanai.co.ke',
  },
  {
    icon: <LocationIcon />,
    label: 'Office',
    value: 'Marsabit Plaza,\nNgong Road, Nairobi - Kenya',
    href: 'https://maps.google.com/?q=Marsabit+Plaza+Ngong+Road+Nairobi',
  },
];

export default function ContactInfoSection() {
  return (
    <section className="contact-info-section">
      <div className="contact-info-grid">
        {contactDetails.map((item) => (
          <div key={item.label} className="contact-info-card">
            <div className="contact-info-icon-box">{item.icon}</div>
            <div>
              <p className="contact-info-label">{item.label}</p>
              <a
                href={item.href}
                className="contact-info-value contact-info-link"
                target={item.label === 'Office' ? '_blank' : undefined}
                rel={item.label === 'Office' ? 'noopener noreferrer' : undefined}
              >
                {item.value.split('\n').map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>{line}</span>
                ))}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
