import { Link } from 'react-router-dom';

const XIcon = () => (
  <svg
    className="footer-social-icon"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.543 2.914H25.41L17.01 12.51L26.893 25.087H19.13L13.027 17.145L6.055 25.087H2.186L11.167 14.836L1.685 2.914H9.644L15.172 10.174L21.543 2.914ZM20.196 22.778H22.332L8.474 5.1H6.18L20.196 22.778Z"
      fill="#2E7D32"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="footer-social-icon"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.9273 0H2.06719C0.924219 0 0 0.902344 0 2.01797V25.9766C0 27.0922 0.924219 28 2.06719 28H25.9273C27.0703 28 28 27.0922 28 25.982V2.01797C28 0.902344 27.0703 0 25.9273 0ZM8.30703 23.8602H4.15078V10.4945H8.30703V23.8602ZM6.22891 8.67344C4.89453 8.67344 3.81719 7.59609 3.81719 6.26719C3.81719 4.93828 4.89453 3.86094 6.22891 3.86094C7.55781 3.86094 8.63516 4.93828 8.63516 6.26719C8.63516 7.59062 7.55781 8.67344 6.22891 8.67344ZM23.8602 23.8602H19.7094V17.3633C19.7094 15.8156 19.682 13.8195 17.5492 13.8195C15.3891 13.8195 15.0609 15.5094 15.0609 17.2539V23.8602H10.9156V10.4945H14.8969V12.3211H14.9516C15.5039 11.2711 16.8602 10.1609 18.8781 10.1609C23.0836 10.1609 23.8602 12.9281 23.8602 16.5266V23.8602Z"
      fill="#2E7D32"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg
    className="footer-social-icon"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 0C6.26808 0 0 6.26808 0 14C0 20.5654 4.52032 26.0747 10.6182 27.5878V18.2784H7.73136V14H10.6182V12.1565C10.6182 7.39144 12.7747 5.1828 17.453 5.1828C18.34 5.1828 19.8705 5.35696 20.4966 5.53056V9.40856C20.1662 9.37384 19.5922 9.35648 18.8793 9.35648C16.5838 9.35648 15.6968 10.2262 15.6968 12.4869V14H20.2698L19.4841 18.2784H15.6968V27.8975C22.629 27.0603 28.0006 21.1579 28.0006 14C28 6.26808 21.7319 0 14 0Z"
      fill="#2E7D32"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="footer-social-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 2H7C4.239 2 2 4.239 2 7V17C2 19.761 4.239 22 7 22H17C19.761 22 22 19.761 22 17V7C22 4.239 19.761 2 17 2ZM20 17C20 18.654 18.654 20 17 20H7C5.346 20 4 18.654 4 17V7C4 5.346 5.346 4 7 4H17C18.654 4 20 5.346 20 7V17Z"
      fill="#2E7D32"
    />
    <path
      d="M12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12C17 9.243 14.757 7 12 7ZM12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15Z"
      fill="#2E7D32"
    />
    <circle cx="17.5" cy="6.5" r="1.5" fill="#2E7D32" />
  </svg>
);

const footerNav = [
  {
    heading: 'Solutions',
    links: [
      { label: 'AgriScanAI', href: '/solutions' },
      { label: 'AgriPay (Payments)', href: '/solutions' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Request Demo', href: '/contact' },
    ],
  },
{
  heading: 'Company',
  links: [
    { label: 'Good Partners', href: 'https://goodpartnerske.org/' },
    { label: 'Contact Us', href: '/contact' },
  ],
},
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-logo-col">
          <Link to="/">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8875a797b6b2ecb01b311084b9748f9728f23b34?width=562"
              alt="AgriScanAI"
              className="footer-logo"
            />
          </Link>
        </div>

        {footerNav.map((col) => (
          <div key={col.heading}>
            <h4 className="footer-col-title">{col.heading}</h4>

            <ul className="footer-link-list">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="footer-col-title">Follow Us</h4>

          <div className="footer-social-icons">
            {/* X / Twitter */}
            <a
              href="https://x.com/GoodPartners_KE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
            >
              <XIcon />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/good-partners-limited/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/Good-Partners/61580951851606/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/goodpartnerske/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 AgriScanAI | All rights reserved
        </p>

        <p className="footer-legal">
          <Link to="/privacy-policy">Privacy Policy</Link> |{' '}
          <Link to="/terms-of-use">Terms of Use</Link>
        </p>
      </div>
    </footer>
  );
}
