import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ExpandIcon = () => (
  <svg className="navbar-dropdown-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="#245421"/>
  </svg>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const scrollTo = (id) => {
    setMobileOpen(false);
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo-link">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8875a797b6b2ecb01b311084b9748f9728f23b34?width=562"
            alt="AgriScanAI"
            className="navbar-logo"
          />
        </Link>

        <ul className="navbar-links">
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'navbar-active' : ''}>
              About
            </Link>
          </li>
          <li>
            <Link to="/solutions" className={location.pathname === '/solutions' ? 'navbar-active' : ''}>
              Solutions 
            </Link>
          </li>
          <li>
            <Link to="/pilot-program" className={location.pathname === '/pilot-program' ? 'navbar-active' : ''} onClick={closeMobile}>
              Pilot Program
            </Link>
          </li>
          <li>
            <Link to="/events" className={location.pathname.startsWith('/events') ? 'navbar-active' : ''} onClick={closeMobile}>
              Events
            </Link>
          </li>
          <li>
            <button onClick={() => scrollTo('resources')}>
              Resources
            </button>
          </li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'navbar-active' : ''}>Contact Us</Link></li>
        </ul>

        <Link to="/pilot-program" className="navbar-cta">
          Apply for Partnership
        </Link>

        <button
          className="navbar-hamburger"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`navbar-mobile-menu${mobileOpen ? ' open' : ''}`}>
        <Link to="/about" onClick={closeMobile}>About</Link>
        <Link to="/solutions" onClick={closeMobile}>Solutions</Link>
        <Link to="/pilot-program" onClick={closeMobile}>Pilot Program</Link>
        <Link to="/events" onClick={closeMobile}>Events</Link>
        <button onClick={() => scrollTo('resources')}>Resources</button>
        <Link to="/contact" onClick={closeMobile}>Contact Us</Link>
        <Link to="/pilot-program" className="navbar-mobile-cta" onClick={closeMobile}>
          Apply for Partnership
        </Link>
      </div>
    </>
  );
}
