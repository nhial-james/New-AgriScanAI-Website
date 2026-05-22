import { useState } from 'react';
import phoneDashboard from '../assets/phone.png'; 
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

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="glimpse-section" id="resources">
      <div className="section-header">
        <p className="section-eyebrow">Explore</p>
        <h2 className="section-title">A Glimpse into AgriScanAI</h2>
      </div>

      <div className="glimpse-carousel">
        <button className="glimpse-arrow" onClick={prev} aria-label="Previous slide">&#8249;</button>

        <div className="glimpse-phone-wrap">
          <div className="glimpse-image-frame">
            <img
              src={slides[current].img}
              alt={slides[current].title}
              className="glimpse-phone-img"
            />
          </div>

          <div className="glimpse-caption">
            <p className="glimpse-caption-title">{slides[current].title}</p>
            <p className="glimpse-caption-sub">{slides[current].subtitle}</p>
          </div>

          <div className="glimpse-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`glimpse-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <button className="glimpse-arrow" onClick={next} aria-label="Next slide">&#8250;</button>
      </div>
    </section>
  );
}
