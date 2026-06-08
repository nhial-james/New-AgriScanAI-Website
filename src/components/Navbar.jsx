import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  // Add shadow when page scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const scrollTo = (id) => {
    setMobileOpen(false);
    if (!isHome) {
      navigate('/');
      // Use a slightly longer delay to ensure the page has loaded
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
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
            <Link to="/resources" className={location.pathname === '/resources' ? 'navbar-active' : ''} onClick={closeMobile}>
              Resources
            </Link>
          </li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'navbar-active' : ''}>Contact Us</Link></li>
        </ul>

        <Link to="/contact" className="navbar-cta">
          Apply for Partnership
        </Link>

        <button
          className={`navbar-hamburger${mobileOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`navbar-mobile-menu${mobileOpen ? ' open' : ''}`}>
        <Link to="/about" className={location.pathname === '/about' ? 'navbar-active' : ''} onClick={closeMobile}>About</Link>
        <Link to="/solutions" className={location.pathname === '/solutions' ? 'navbar-active' : ''} onClick={closeMobile}>Solutions</Link>
        <Link to="/pilot-program" className={location.pathname === '/pilot-program' ? 'navbar-active' : ''} onClick={closeMobile}>Pilot Program</Link>
        <Link to="/events" className={location.pathname.startsWith('/events') ? 'navbar-active' : ''} onClick={closeMobile}>Events</Link>
        <Link to="/resources" className={location.pathname === '/resources' ? 'navbar-active' : ''} onClick={closeMobile}>Resources</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'navbar-active' : ''} onClick={closeMobile}>Contact Us</Link>
        <Link to="/contact" className="navbar-mobile-cta" onClick={closeMobile}>
          Apply for Partnership
        </Link>
      </div>
    </>
  );
}
