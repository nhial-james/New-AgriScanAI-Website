import { useState, useEffect, useRef } from 'react';
import phoneDashboard from '../assets/Farmer Dashboard.png'; 
import carbonTracker from '../assets/Carbon Tracker.png';
import DiseaseResults from '../assets/Disease Results.png';
import yieldTracking from '../assets/Yield Tracking.png';
import financeTracking from '../assets/Finance.png';
import advisoryChat from '../assets/Mwanedu.png';

const slides = [
  {
    img: carbonTracker, 
    title: 'Carbon Tracker',
    subtitle: 'Environmental impact monitor',
  },
  {
    img: DiseaseResults,
    title: 'Crop Disease Detection',
    subtitle: 'AI-powered diagnosis in seconds',
  },
  {
    img: phoneDashboard,
    title: 'Farmer Dashboard',
    subtitle: 'Real-time farm insights',
  },
  {
    img: yieldTracking,
    title: 'Yield Tracking',
    subtitle: 'Season-by-season performance',
  },
  {
    img: advisoryChat,
    title: 'Advisory Chat',
    subtitle: 'Multilingual farming guidance',
  },
  {
    img: financeTracking,
    title: 'Finance',
    subtitle: 'Track loans, payments, and market prices',
  },
];

export default function GlimpseSection() {
  const [current, setCurrent] = useState(2);
  const [fading, setFading] = useState(false);
  const timeoutRef = useRef(null);

  const goTo = (index) => {
    if (fading) return;
    setFading(true);
    timeoutRef.current = setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 250);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <section className="glimpse-section" id="resources">
      <div className="section-header">
        <p className="section-eyebrow">Explore</p>
        <h2 className="section-title">A Glimpse into AgriScanAI</h2>
      </div>

      <div className="glimpse-carousel">
        <button className="glimpse-arrow" onClick={prev} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
          </svg>
        </button>

        <div className="glimpse-phone-wrap">
          <div className={`glimpse-image-frame ${fading ? 'glimpse-fading' : ''}`}>
            <img
              src={slides[current].img}
              alt={slides[current].title}
              className="glimpse-phone-img"
            />
          </div>

          <div className={`glimpse-caption ${fading ? 'glimpse-fading' : ''}`}>
            <p className="glimpse-caption-title">{slides[current].title}</p>
            <p className="glimpse-caption-sub">{slides[current].subtitle}</p>
          </div>

          <div className="glimpse-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`glimpse-dot${i === current ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <button className="glimpse-arrow" onClick={next} aria-label="Next slide">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
