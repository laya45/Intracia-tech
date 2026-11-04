
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Business enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company || "Not provided"}\n` +
        `Service: ${formData.service || "Not specified"}\n\n` +
        `Message:\n${formData.message}`
    );

    // Replace this address with Intracia's verified business email.
    const businessEmail = "your-business-email@example.com";

    window.location.href =
      `mailto:${businessEmail}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-container">
          <p className="contact-eyebrow">CONTACT INTRACIA TECHNOLOGIES</p>

          <h1>
            Let's start a
            <br />
            business conversation.
          </h1>

          <p className="contact-hero-description">
            Tell us about your customer support or business process
            requirements. We would be glad to learn more about your needs.
          </p>

          <div className="contact-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="contact-container contact-main-grid">
          <aside className="contact-information">
            <p className="contact-eyebrow">GET IN TOUCH</p>
            <h2>How can we help your business?</h2>

            <p className="contact-information-description">
              Share a little about your organisation and what you are
              looking for. Include your preferred service or the challenge
              you would like to discuss.
            </p>

            <div className="contact-information-item">
              <span className="contact-information-number">01</span>
              <div>
                <h3>Business enquiries</h3>
                <p>
                  Tell us about your project, support requirements or
                  potential business collaboration.
                </p>
              </div>
            </div>

            <div className="contact-information-item">
              <span className="contact-information-number">02</span>
              <div>
                <h3>Service information</h3>
                <p>
                  Explore the types of customer communication and
                  operational support that may suit your needs.
                </p>
                <Link to="/services" className="contact-inline-link">
                  View services <span>→</span>
                </Link>
              </div>
            </div>

            <div className="contact-information-note">
              <span className="contact-note-line" />
              <p>
                Providing clear information helps us better understand
                your enquiry.
              </p>
            </div>
          </aside>

          <div className="contact-form-panel">
            <div className="contact-form-heading">
              <p className="contact-eyebrow">SEND AN ENQUIRY</p>
              <h2>Tell us about your requirements.</h2>
              <p>Fields marked with * are required.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Full name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Business email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-company">Company name</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Your organisation"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-service">Service of interest</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="Call Center Services">
                      Call Center Services
                    </option>
                    <option value="Inbound Call Center Services">
                      Inbound Call Center Services
                    </option>
                    <option value="Outbound Call Center Services">
                      Outbound Call Center Services
                    </option>
                    <option value="Telemarketing Services">
                      Telemarketing Services
                    </option>
                    <option value="Lead Generation Services">
                      Lead Generation Services
                    </option>
                    <option value="Other Enquiry">Other enquiry</option>
                  </select>
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">How can we help? *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Describe your requirements or enquiry..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit-button">
                Send Enquiry <span>→</span>
              </button>

              {submitted && (
                <p className="contact-form-notice" role="status">
                  Your email application should open with your enquiry.
                  Please review and send the email to complete your enquiry.
                </p>
              )}

              <p className="contact-form-disclaimer">
                Your email application will be used to prepare the enquiry.
                No information is submitted directly from this website.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-bottom-cta">
        <div className="contact-container contact-bottom-inner">
          <div>
            <p className="contact-eyebrow">EXPLORE FURTHER</p>
            <h2>Learn more about our approach to business support.</h2>
          </div>

          <Link to="/about" className="contact-bottom-button">
            About Intracia <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Contact;
