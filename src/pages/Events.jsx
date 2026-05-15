import '../Events.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventsBg from "../assets/Events.png";


const CalendarIcon = () => (
  <svg className="event-meta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" fill="#245421" />
  </svg>
);

const LocationIcon = () => (
  <svg className="event-meta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.88 14.12 16.19 12 18.88C9.92 16.21 7 11.85 7 9Z" fill="#65758B" />
    <path d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z" fill="#65758B" />
  </svg>
);

const events = [
  {
    id: 1,
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bbce0ee594a19e3372079693b0d6dcccfed6c312?width=1500',
    date: 'November 18–19, 2025',
    location: 'Sarit Expo Centre',
    title: 'AgriScanAI at the International Conference on Contract Farming (ICCF) 2025',
    excerpt: 'AgriScanAI showcased transformative AI-powered farm management solutions at ICCF 2025, demonstrating how technology can revolutionize',
    slug: 'iccf-2025',
  },
  {
    id: 2,
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bbce0ee594a19e3372079693b0d6dcccfed6c312?width=1500',
    date: 'November 18–19, 2025',
    location: 'Sarit Expo Centre',
    title: 'AgriScanAI at the International Conference on Contract Farming (ICCF) 2025',
    excerpt: 'AgriScanAI showcased transformative AI-powered farm management solutions at ICCF 2025, demonstrating how technology can revolutionize',
    slug: 'iccf-2025-2',
  },
];

export default function Events() {
  return (
    <>
      <Navbar />

      {/* Hero */}
    <section
  className="events-hero"
  style={{
    backgroundImage: `url(${EventsBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="events-hero-overlay" />

  <div className="events-hero-content">
    <p className="events-hero-eyebrow">Events</p>

    <h1 className="events-hero-title">
      Conferences &amp; Summits
    </h1>

    <p className="events-hero-subtitle">
      Join us at agricultural innovation summits, tech conferences,
      and industry gatherings where AgriScanAI is making an impact.
    </p>
  </div>
</section>

      {/* Events Grid */}
      <section className="events-grid-section">
        <div className="events-grid">
          {events.map((event) => (
            <article key={event.id} className="event-card">
              <img src={event.image} alt={event.title} className="event-card-img" />
              <div className="event-card-body">
                <div className="event-meta-row">
                  <span className="event-meta-date">
                    <CalendarIcon />
                    {event.date}
                  </span>
                  <span className="event-meta-location">
                    <LocationIcon />
                    {event.location}
                  </span>
                </div>
                <h2 className="event-card-title">{event.title}</h2>
                <p className="event-card-excerpt">{event.excerpt}</p>
                <div className="event-card-footer">
                  <Link to={`/events/${event.slug}`} className="event-read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="events-cta-section">
        <div className="events-cta-card">
          <h2 className="events-cta-title">Host, Invite, or Sponsor an Event With Us</h2>
          <p className="events-cta-desc">
            Are you organizing a tech summit, university innovation day, community workshop, or industry roundtable? We'd love to join you!
          </p>
          <Link to="/contact" className="events-cta-btn">Contact Us</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
