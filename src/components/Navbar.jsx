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
            <button onClick={() => scrollTo('solutions')}>
              Solutions <ExpandIcon />
            </button>
          </li>
          <li><button onClick={() => scrollTo('pilot')}>Pilot Program</button></li>
          <li><button onClick={() => scrollTo('impact')}>Impact</button></li>
          <li>
            <button onClick={() => scrollTo('resources')}>
              Resources <ExpandIcon />
            </button>
          </li>
          <li><button onClick={() => scrollTo('contact')}>Contact Us</button></li>
        </ul>

        <button className="navbar-cta" onClick={() => scrollTo('pilot')}>
          Apply for Partnership
        </button>

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
        <button onClick={() => scrollTo('solutions')}>Solutions</button>
        <button onClick={() => scrollTo('pilot')}>Pilot Program</button>
        <button onClick={() => scrollTo('impact')}>Impact</button>
        <button onClick={() => scrollTo('resources')}>Resources</button>
        <button onClick={() => scrollTo('contact')}>Contact Us</button>
        <button className="navbar-mobile-cta" onClick={() => scrollTo('pilot')}>
          Apply for Partnership
        </button>
      </div>
    </>
  );
}
