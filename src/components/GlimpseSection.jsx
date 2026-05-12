import { useState } from 'react';

const slides = [
  {
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/055b133f7a652bc5697596cecc0331811dd26e61?width=824',
    title: 'Carbon Tracker',
    subtitle: 'Environmental impact monitor',
  },
  {
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/4793c0a42e758ce80d84e2e288e0a7203108e4e0?width=1970',
    title: 'Crop Disease Detection',
    subtitle: 'AI-powered diagnosis in seconds',
  },
  {
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/3fa8d94e679aa5621174208b453bd51302c9c1d9?width=2650',
    title: 'Farmer Dashboard',
    subtitle: 'Real-time farm insights',
  },
  {
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/055b133f7a652bc5697596cecc0331811dd26e61?width=824',
    title: 'Yield Tracking',
    subtitle: 'Season-by-season performance',
  },
  {
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/4793c0a42e758ce80d84e2e288e0a7203108e4e0?width=1970',
    title: 'Advisory Chat',
    subtitle: 'Multilingual farming guidance',
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
          <div className="glimpse-side-icons">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/27530e7a8a5a912c9d2a109ae50a641cd3d21a18?width=240"
              alt=""
              className="glimpse-side-icon"
            />
            <img
              src={slides[current].img}
              alt={slides[current].title}
              className="glimpse-phone-img"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/eec6181afcc9a4c13aa12810c2e802c0fec187df?width=240"
              alt=""
              className="glimpse-side-icon"
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
