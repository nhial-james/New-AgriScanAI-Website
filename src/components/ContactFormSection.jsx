import { useState } from 'react';
import emailjs from '@emailjs/browser';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

function validate(form) {
  const errors = {};
  if (!form.firstName.trim()) errors.firstName = 'First name is required.';
  if (!form.lastName.trim()) errors.lastName = 'Last name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email.';
  }
  if (!form.message.trim()) errors.message = 'Please include a message.';
  return errors;
}

export default function ContactFormSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    
    try {
      const serviceId = 'service_11ah9yu';
      const templateId = 'template_kci4c6v';
      const publicKey = '5ni8LpNq2kawFdv9P';

      const templateParams = {
        firstName: form.firstName,
        lastName: form.lastName,
        from_name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        from_email: form.email,
        phone: form.phone,
        company: form.company,
        message: form.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      });

      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS send error:', err);
      setErrors({ message: 'Failed to send message. Please try again later.' });
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-card">
        {submitted ? (
          <div className="contact-success">
            <div className="contact-success-icon">&#10003;</div>
            <h3 className="contact-success-title">Message Sent!</h3>
            <p className="contact-success-msg">
              Thank you for reaching out. Our team will get back to you shortly.
            </p>
            <button className="contact-success-reset" onClick={handleReset}>
              Send Another Message
            </button>
          </div>
        ) : (
          <>
            <h2 className="contact-form-title">Fill in the form</h2>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form-row">
                <div className="contact-field-group">
                  <label htmlFor="firstName" className="contact-label">First Name *</label>
                  <input
                    id="firstName"
                    className={`contact-input${errors.firstName ? ' input-error' : ''}`}
                    type="text"
                    name="firstName"
                    placeholder="e.g. Jane"
                    value={form.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                  />
                  {errors.firstName && (
                    <p className="contact-field-error">{errors.firstName}</p>
                  )}
                </div>
                <div className="contact-field-group">
                  <label htmlFor="lastName" className="contact-label">Last Name *</label>
                  <input
                    id="lastName"
                    className={`contact-input${errors.lastName ? ' input-error' : ''}`}
                    type="text"
                    name="lastName"
                    placeholder="e.g. Doe"
                    value={form.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                  />
                  {errors.lastName && (
                    <p className="contact-field-error">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="contact-field-group">
                <label htmlFor="email" className="contact-label">Email Address *</label>
                <input
                  id="email"
                  className={`contact-input${errors.email ? ' input-error' : ''}`}
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="contact-field-error">{errors.email}</p>
                )}
              </div>

              <div className="contact-field-group">
                <label htmlFor="phone" className="contact-label">Phone Number</label>
                <input
                  id="phone"
                  className="contact-input"
                  type="tel"
                  name="phone"
                  placeholder="+254 700 000 000"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>

              <div className="contact-field-group">
                <label htmlFor="company" className="contact-label">Organisation / Company</label>
                <input
                  id="company"
                  className="contact-input"
                  type="text"
                  name="company"
                  placeholder="Your organisation name"
                  value={form.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </div>

              <div className="contact-field-group">
                <label htmlFor="message" className="contact-label">Message *</label>
                <textarea
                  id="message"
                  className={`contact-textarea${errors.message ? ' input-error' : ''}`}
                  name="message"
                  placeholder="Tell us how we can help you…"
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="contact-field-error">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={loading}
              >
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
