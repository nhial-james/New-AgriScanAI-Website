import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const links = [
  { to: '/', label: 'Home' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/pilot-program', label: 'Pilot Program' },
  { to: '/events', label: 'Events' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact Us' },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'clamp(7rem,12vw,9rem) 1.5rem 4rem',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <p style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0 }}>
          Error 404
        </p>
        <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', color: 'var(--text-dark)', margin: '0.5rem 0 1rem' }}>
          We couldn&rsquo;t find that page
        </h1>
        <p style={{ color: 'var(--text-gray)', maxWidth: 520, lineHeight: 1.6, margin: '0 0 2rem' }}>
          The link may be out of date or the page may have moved. Try one of these instead:
        </p>
        <nav aria-label="Helpful links" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: 999,
                border: '1.5px solid var(--primary)',
                color: 'var(--primary)',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
}
