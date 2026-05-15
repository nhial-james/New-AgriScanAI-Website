import { Link } from 'react-router-dom';

export default function PilotProgramGetInvolvedSection() {
  return (
    <section className="pilot-get-involved">
      <p className="pilot-eyebrow">Get Involved</p>
      <h2 className="pilot-involved-title">
        Ready to transform your<br />agricultural program?
      </h2>
      <Link to="/contact" className="pilot-demo-btn">
        Schedule Your Demo Today
      </Link>
    </section>
  );
}
