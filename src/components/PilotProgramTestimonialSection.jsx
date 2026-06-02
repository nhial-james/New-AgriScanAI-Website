import nolegaImg from '../assets/Principle Nolega image.png';

const QuoteIcon = () => (
  <svg className="testimonial-quote-icon" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 51H27L33 39V21H15V39H24L18 51ZM42 51H51L57 39V21H39V39H48L42 51Z" fill="#2E7D32" />
  </svg>
);

export default function PilotProgramTestimonialSection() {
  return (
    <section className="pilot-testimonial">
      <div className="testimonial-card">
        <img
          src={nolegaImg}
          alt="Principle Nolega — testimonial"
          className="testimonial-photo"
        />
        <div className="testimonial-content">
          <QuoteIcon />
          <p className="testimonial-quote">
            The financial tracker feature in AgriScanAI will help farmers monitor their finances,
            because many struggle to keep proper records.
          </p>
          <p className="testimonial-author">— Principle Nolega</p>
          <div className="testimonial-org-row">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b206957aff00017d2ac7e5f095f8c45e96d78763?width=200"
              alt="Kilimo Training Institute of Permaculture (KTIP) logo"
              className="testimonial-org-logo"
            />
            <p className="testimonial-org-name">
              Kilimo Training Institute{'\n'}of Permaculture (KTIP)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
