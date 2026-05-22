import '../Home.css';
import '../LegalPages.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="legal-hero">
        <span className="legal-eyebrow">Legal</span>
        <h1 className="legal-hero-title">Privacy Policy</h1>
        <p className="legal-hero-subtitle">Last updated: May 2026</p>
      </div>

      <main className="legal-body">
        <div className="legal-container">
          <p className="legal-intro">
            AgriScanAI ("we", "us", or "our") is committed to protecting the privacy of farmers,
            partner organisations, and all individuals who interact with our platform. This Privacy
            Policy explains what information we collect, how we use it, and the choices you have.
          </p>

          <section className="legal-section">
            <h2 className="legal-section-title">1. Information We Collect</h2>
            <h3 className="legal-subsection-title">1.1 Information you provide</h3>
            <ul className="legal-list">
              <li>Account registration details (name, email, phone number, organisation).</li>
              <li>Farmer profile data entered by extension agents (location, crop type, acreage, production history).</li>
              <li>Images uploaded for crop disease detection.</li>
              <li>Messages and enquiries submitted via contact forms.</li>
            </ul>
            <h3 className="legal-subsection-title">1.2 Information collected automatically</h3>
            <ul className="legal-list">
              <li>Device and browser type, operating system, and IP address.</li>
              <li>Usage data such as pages visited, features used, and session duration.</li>
              <li>GPS co-ordinates when location access is granted on the mobile application.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">2. How We Use Your Information</h2>
            <ul className="legal-list">
              <li>Deliver, operate, and improve the AgriScanAI platform and its AI advisory services.</li>
              <li>Generate aggregated, anonymised analytics to support agricultural program decision-making.</li>
              <li>Send service-related communications (account alerts, product updates).</li>
              <li>Comply with legal obligations and enforce our Terms of Use.</li>
              <li>Conduct research to enhance crop-disease detection accuracy.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">3. Sharing of Information</h2>
            <p className="legal-text">
              We do <strong>not</strong> sell personal data. We may share information with:
            </p>
            <ul className="legal-list">
              <li><strong>Partner organisations</strong> — NGOs, government agencies, or cooperatives that have deployed AgriScanAI within their programs, strictly for program management purposes.</li>
              <li><strong>Service providers</strong> — cloud infrastructure, analytics, and communication vendors bound by data-processing agreements.</li>
              <li><strong>Authorities</strong> — when required by applicable law or to protect the rights and safety of users.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">4. Data Retention</h2>
            <p className="legal-text">
              We retain personal data only as long as necessary to fulfil the purposes outlined in
              this policy or as required by law. Farmer profile data is retained for the duration
              of the partner program and deleted within 90 days of program closure upon request.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">5. Security</h2>
            <p className="legal-text">
              We implement industry-standard technical and organisational measures — including
              encryption in transit (TLS) and at rest, access controls, and regular security
              reviews — to protect your information. No system is perfectly secure; if you suspect
              unauthorised access, contact us immediately.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">6. Offline & Low-Connectivity Use</h2>
            <p className="legal-text">
              AgriScanAI is designed to work offline. Data collected offline is stored locally on
              the device and synchronised when connectivity is restored. Users should ensure
              devices are secured to prevent unauthorised access to locally stored data.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">7. Your Rights</h2>
            <p className="legal-text">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="legal-list">
              <li>Access, correct, or delete your personal data.</li>
              <li>Object to or restrict certain processing activities.</li>
              <li>Receive a portable copy of data you provided.</li>
              <li>Withdraw consent at any time (where processing is based on consent).</li>
            </ul>
            <p className="legal-text">To exercise these rights, email us at <a href="mailto:privacy@agriscanai.com" className="legal-link">privacy@agriscanai.com</a>.</p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">8. Children's Privacy</h2>
            <p className="legal-text">
              AgriScanAI is not directed at children under 13 years of age. We do not knowingly
              collect personal data from children. If you believe a child has provided us personal
              data, contact us and we will delete it promptly.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">9. Changes to This Policy</h2>
            <p className="legal-text">
              We may update this policy periodically. Material changes will be communicated via
              email or a prominent in-app notice at least 14 days before they take effect. Continued
              use of the platform after the effective date constitutes acceptance of the revised policy.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">10. Contact Us</h2>
            <p className="legal-text">
              If you have questions or concerns about this Privacy Policy, please contact:
            </p>
            <address className="legal-address">
              <strong>AgriScanAI — Data Privacy Team</strong><br />
              Good Partners Limited<br />
              {/* Email: <a href="mailto:privacy@agriscanai.com" className="legal-link">privacy@agriscanai.com</a><br /> */}
              Website: <a href="/contact" className="legal-link">agriscanai.com/contact</a>
            </address>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
