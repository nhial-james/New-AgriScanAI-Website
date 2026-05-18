import '../Contact.css';
import Navbar from '../components/Navbar';
import ContactFormSection from '../components/ContactFormSection';
import ContactInfoSection from '../components/ContactInfoSection';
import JoinSection from '../components/JoinSection';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-content-wrap">
          <div className="contact-ring contact-ring-top-right" aria-hidden="true" />
          <div className="contact-ring contact-ring-mid-right" aria-hidden="true" />
          <div className="contact-ring contact-ring-bottom-left" aria-hidden="true" />

          <header className="contact-hero">
            <p className="contact-hero-eyebrow">Contact Us</p>
            <h1 className="contact-hero-title">Get in Touch with Our Team</h1>
            <p className="contact-hero-subtitle">
              We'd love to hear from you! Whether you're a farmer looking for support, an NGO or
              agency interested in partnering, or a sponsor exploring opportunities, our team is
              ready to help.
            </p>
          </header>

          <ContactFormSection />
          <ContactInfoSection />
        </div>

        <JoinSection />
        <Footer />
      </div>
    </>
  );
}
