import { Link } from 'react-router-dom';

export default function SolutionsGetInvolvedSection() {
  return (
    <section className="sol-get-involved">
      <p className="sol-eyebrow">Get Involved</p>
      <h2 className="sol-get-involved-title">
        Ready to transform your<br />agricultural program?
      </h2>
      <Link to="/pilot-program" className="sol-btn-outline sol-btn-lg">
        Schedule a Demo
      </Link>
    </section>
  );
}
