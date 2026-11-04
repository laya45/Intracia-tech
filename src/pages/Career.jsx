
import React from "react";
import { Link } from "react-router-dom";

const careerValues = [
  {
    number: "01",
    title: "Professional Growth",
    description:
      "Build your skills through practical experience, collaboration and opportunities to learn in a professional environment.",
  },
  {
    number: "02",
    title: "Customer Communication",
    description:
      "Develop communication, problem-solving and relationship-building skills through customer-focused work.",
  },
  {
    number: "03",
    title: "Team Collaboration",
    description:
      "Contribute to shared goals by working respectfully with colleagues and taking responsibility for your work.",
  },
];

function Career() {
  return (
    <main className="career-page">
      <section className="career-hero">
        <div className="career-container career-hero-grid">
          <div className="career-hero-content">
            <p className="career-eyebrow">CAREERS AT INTRACIA</p>

            <h1>
              Build your skills.
              <br />
              Make an impact.
            </h1>

            <p className="career-hero-description">
              Explore opportunities to contribute to customer service,
              business support and day-to-day operations in a professional
              working environment.
            </p>

            <div className="career-hero-actions">
              <a href="#opportunities" className="career-button">
                Explore Opportunities <span>↓</span>
              </a>

              <Link to="/contact" className="career-text-link">
                Contact Our Team
              </Link>
            </div>
          </div>

          <div className="career-hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Colleagues working together in a professional office"
              className="career-hero-image"
            />

            <div className="career-image-caption">
              <span className="career-caption-mark" />
              <div>
                <strong>People make the difference.</strong>
                <p>Bring your skills, ideas and willingness to learn.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="career-container career-hero-footer">
          <span>CAREERS</span>
          <span className="career-footer-line" />
          <span>Learn · Contribute · Grow</span>
        </div>
      </section>

      <section className="career-intro-section">
        <div className="career-container career-intro-grid">
          <div>
            <p className="career-eyebrow">YOUR NEXT STEP</p>
            <h2>
              Bring your strengths
              <br />
              to the workplace.
            </h2>
          </div>

          <div className="career-intro-copy">
            <p>
              At Intracia Technologies, professional service depends on
              people who communicate clearly, approach responsibilities
              thoughtfully and work well with others.
            </p>

            <p>
              We welcome enquiries from people interested in customer
              communication, contact centre operations and business
              support. Suitable opportunities depend on current hiring
              requirements and role-specific qualifications.
            </p>

            <Link to="/contact" className="career-inline-link">
              Get in touch about opportunities <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="career-values-section">
        <div className="career-container">
          <div className="career-section-heading">
            <p className="career-eyebrow">OUR WORKING PRINCIPLES</p>
            <h2>Grow through meaningful work.</h2>
            <p>
              A professional environment is built through learning,
              communication and a shared commitment to doing the work well.
            </p>
          </div>

          <div className="career-values-grid">
            {careerValues.map((value) => (
              <article className="career-value-card" key={value.number}>
                <span className="career-value-number">{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="career-opportunities-section" id="opportunities">
        <div className="career-container career-opportunities-grid">
          <div className="career-opportunities-heading">
            <p className="career-eyebrow">OPPORTUNITIES</p>
            <h2>Find the right way to connect with us.</h2>
            <p>
              Current vacancies may change over time. Contact our team
              to enquire about available roles and the application process.
            </p>
          </div>

          <div className="career-opportunity-list">
            <article className="career-opportunity-item">
              <div>
                <span className="career-opportunity-category">
                  CUSTOMER OPERATIONS
                </span>
                <h3>Customer Support</h3>
                <p>
                  Enquire about roles involving customer communication,
                  query handling and service support.
                </p>
              </div>
              <Link
                to="/contact"
                className="career-opportunity-link"
                aria-label="Enquire about Customer Support roles"
              >
                →
              </Link>
            </article>

            <article className="career-opportunity-item">
              <div>
                <span className="career-opportunity-category">
                  CONTACT CENTRE
                </span>
                <h3>Contact Centre Operations</h3>
                <p>
                  Ask about opportunities related to inbound or outbound
                  customer communication.
                </p>
              </div>
              <Link
                to="/contact"
                className="career-opportunity-link"
                aria-label="Enquire about Contact Centre Operations roles"
              >
                →
              </Link>
            </article>

            <article className="career-opportunity-item">
              <div>
                <span className="career-opportunity-category">
                  BUSINESS SUPPORT
                </span>
                <h3>Back-Office Support</h3>
                <p>
                  Enquire about work involving business processes,
                  documentation and operational assistance.
                </p>
              </div>
              <Link
                to="/contact"
                className="career-opportunity-link"
                aria-label="Enquire about Back-Office Support roles"
              >
                →
              </Link>
            </article>
          </div>
        </div>

        <div className="career-container career-vacancy-note">
          <span className="career-note-indicator" />
          <p>
            These are areas for enquiry, not confirmed vacancies.
            Please contact the company to verify current openings,
            eligibility and application requirements.
          </p>
        </div>
      </section>

      <section className="career-application-section">
        <div className="career-container career-application-inner">
          <div>
            <p className="career-eyebrow">TAKE THE NEXT STEP</p>
            <h2>Interested in joining our team?</h2>
            <p>
              Contact us with your area of interest and a brief introduction
              about your skills and experience.
            </p>
          </div>

          <Link to="/contact" className="career-application-button">
            Contact Us <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Career;
