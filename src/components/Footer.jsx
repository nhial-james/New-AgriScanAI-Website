const XIcon = () => (
  <svg className="footer-social-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.543 2.914H25.41L17.01 12.51L26.893 25.087H19.13L13.027 17.145L6.055 25.087H2.186L11.167 14.836L1.685 2.914H9.644L15.172 10.174L21.543 2.914ZM20.196 22.778H22.332L8.474 5.1H6.18L20.196 22.778Z" fill="#2E7D32" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="footer-social-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.9273 0H2.06719C0.924219 0 0 0.902344 0 2.01797V25.9766C0 27.0922 0.924219 28 2.06719 28H25.9273C27.0703 28 28 27.0922 28 25.982V2.01797C28 0.902344 27.0703 0 25.9273 0ZM8.30703 23.8602H4.15078V10.4945H8.30703V23.8602ZM6.22891 8.67344C4.89453 8.67344 3.81719 7.59609 3.81719 6.26719C3.81719 4.93828 4.89453 3.86094 6.22891 3.86094C7.55781 3.86094 8.63516 4.93828 8.63516 6.26719C8.63516 7.59062 7.55781 8.67344 6.22891 8.67344ZM23.8602 23.8602H19.7094V17.3633C19.7094 15.8156 19.682 13.8195 17.5492 13.8195C15.3891 13.8195 15.0609 15.5094 15.0609 17.2539V23.8602H10.9156V10.4945H14.8969V12.3211H14.9516C15.5039 11.2711 16.8602 10.1609 18.8781 10.1609C23.0836 10.1609 23.8602 12.9281 23.8602 16.5266V23.8602Z" fill="#2E7D32" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="footer-social-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0C6.26808 0 0 6.26808 0 14C0 20.5654 4.52032 26.0747 10.6182 27.5878V18.2784H7.73136V14H10.6182V12.1565C10.6182 7.39144 12.7747 5.1828 17.453 5.1828C18.34 5.1828 19.8705 5.35696 20.4966 5.53056V9.40856C20.1662 9.37384 19.5922 9.35648 18.8793 9.35648C16.5838 9.35648 15.6968 10.2262 15.6968 12.4869V14H20.2698L19.4841 18.2784H15.6968V27.8975C22.629 27.0603 28.0006 21.1579 28.0006 14C28 6.26808 21.7319 0 14 0Z" fill="#2E7D32" />
  </svg>
);

const footerNav = [
  {
    heading: 'Solutions',
    links: [
      { label: 'AgriScanAI', href: '#' },
      { label: 'AgriPay (Payments)', href: '#' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Request Demo', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Good Partners', href: '#' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-logo-col">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8875a797b6b2ecb01b311084b9748f9728f23b34?width=562"
            alt="AgriScanAI"
            className="footer-logo"
          />
        </div>

        {footerNav.map((col) => (
          <div key={col.heading}>
            <h4 className="footer-col-title">{col.heading}</h4>
            <ul className="footer-link-list">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="footer-col-title">Follow Us</h4>
          <div className="footer-social-icons">
            <a href="#" aria-label="X / Twitter"><XIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">© 2026 AgriScanAI | All rights reserved</p>
        <p className="footer-legal">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
        </p>
      </div>
    </footer>
  );
}
