import { useState } from 'react';
import nolegaImg from '../assets/Principle Nolega image.png';

const testimonials = [
  {
    quote:
      'The financial tracker feature in AgriScanAI will help farmers monitor their finances, because many struggle to keep proper records.',
    author: 'Principle Nolega',
    org: 'Kilimo Training Institute\nof Permaculture(KTIP)',
    logo: 'https://api.builder.io/api/v1/image/assets/TEMP/b206957aff00017d2ac7e5f095f8c45e96d78763?width=200',
    photo: nolegaImg,
  },
  {
    quote:
      'AgriScanAI has revolutionized how we approach crop disease detection and management in our training programs.',
    author: 'Dr. Amara Osei',
    org: 'Agricultural Extension\nServices Kenya',
    logo: 'https://api.builder.io/api/v1/image/assets/TEMP/b206957aff00017d2ac7e5f095f8c45e96d78763?width=200',
    photo: 'https://api.builder.io/api/v1/image/assets/TEMP/83d07385de79191fec0a9a4ae5e7cd482ace8c08?width=1084',
  },
  {
    quote:
      'The platform gives our farmers real-time insights that were simply not accessible before — a true game changer.',
    author: 'James Waweru',
    org: 'Farmers Training\nCenter Nakuru',
    logo: 'https://api.builder.io/api/v1/image/assets/TEMP/b206957aff00017d2ac7e5f095f8c45e96d78763?width=200',
    photo: 'https://api.builder.io/api/v1/image/assets/TEMP/83d07385de79191fec0a9a4ae5e7cd482ace8c08?width=1084',
  },
  {
    quote:
      'Our yield projections improved dramatically after integrating AgriScanAI into our advisory services.',
    author: 'Grace Muthoni',
    org: 'County Agriculture\nOffice Meru',
    logo: 'https://api.builder.io/api/v1/image/assets/TEMP/b206957aff00017d2ac7e5f095f8c45e96d78763?width=200',
    photo: 'https://api.builder.io/api/v1/image/assets/TEMP/83d07385de79191fec0a9a4ae5e7cd482ace8c08?width=1084',
  },
  {
    quote:
      'The ease of use and comprehensive reporting made it simple to demonstrate impact to our stakeholders.',
    author: 'Samuel Kipchoge',
    org: 'Rural Development\nFoundation Kenya',
    logo: 'https://api.builder.io/api/v1/image/assets/TEMP/b206957aff00017d2ac7e5f095f8c45e96d78763?width=200',
    photo: 'https://api.builder.io/api/v1/image/assets/TEMP/83d07385de79191fec0a9a4ae5e7cd482ace8c08?width=1084',
  },
];

const QuoteIcon = () => (
  <svg className="testimonial-quote-icon" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 51H27L33 39V21H15V39H24L18 51ZM42 51H51L57 39V21H39V39H48L42 51Z" fill="#2E7D32" />
  </svg>
);

export default function PilotProgramTestimonialSection() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="pilot-testimonial">
      <div className="testimonial-card">
        <img
          src={t.photo}
          alt={`${t.author} — testimonial`}
          className="testimonial-photo"
        />
        <div className="testimonial-content">
          <QuoteIcon />
          <p className="testimonial-quote">{t.quote}</p>
          <p className="testimonial-author">— {t.author}</p>
          <div className="testimonial-org-row">
            <img
              src={t.logo}
              alt={`${t.org} logo`}
              className="testimonial-org-logo"
            />
            <p className="testimonial-org-name">{t.org}</p>
          </div>
        </div>
      </div>

      <div className="testimonial-nav">
        <button className="testimonial-arrow" onClick={prev} aria-label="Previous testimonial">&#8249;</button>
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button className="testimonial-arrow" onClick={next} aria-label="Next testimonial">&#8250;</button>
      </div>
    </section>
  );
}
