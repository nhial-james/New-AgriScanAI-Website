import { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
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
                <div>
                  <input
                    className={`contact-input${errors.firstName ? ' input-error' : ''}`}
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                  />
                  {errors.firstName && (
                    <p className="contact-field-error">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <input
                    className={`contact-input${errors.lastName ? ' input-error' : ''}`}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                  />
                  {errors.lastName && (
                    <p className="contact-field-error">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  className={`contact-input${errors.email ? ' input-error' : ''}`}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="contact-field-error">{errors.email}</p>
                )}
              </div>

              <input
                className="contact-input"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
              />

              <input
                className="contact-input"
                type="text"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                autoComplete="organization"
              />

              <div>
                <textarea
                  className={`contact-textarea${errors.message ? ' input-error' : ''}`}
                  name="message"
                  placeholder="Message"
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
