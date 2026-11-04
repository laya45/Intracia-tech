
import React from "react";
import { Link } from "react-router-dom";

const values = [
  {
    number: "01",
    title: "Customer Focus",
    description:
      "We believe effective service starts with understanding customer needs and communicating with clarity, patience and professionalism.",
  },
  {
    number: "02",
    title: "Quality and Consistency",
    description:
      "Structured processes and attention to detail help create reliable service experiences across customer interactions and business operations.",
  },
  {
    number: "03",
    title: "Accountability",
    description:
      "Clear communication, ownership of responsibilities and a commitment to agreed processes are central to effective collaboration.",
  },
  {
    number: "04",
    title: "Continuous Improvement",
    description:
      "We value learning, feedback and practical improvements that help align service delivery with changing business requirements.",
  },
];

function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-container about-hero-grid">
          <div className="about-hero-content">
            <p className="about-eyebrow">
              ABOUT INTRACIA TECHNOLOGIES
            </p>

            <h1>
              Building better
              <br />
              business connections.
            </h1>

            <p className="about-hero-description">
              We focus on customer communication, business support and
              service delivery that help organisations manage their
              day-to-day operations and customer relationships.
            </p>

            <div className="about-hero-actions">
              <Link to="/services" className="about-button">
                Explore Our Services <span>→</span>
              </Link>

              <Link to="/contact" className="about-text-link">
                Talk to Our Team
              </Link>
            </div>
          </div>

          <div className="about-hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Professionals collaborating in a workplace"
              className="about-hero-image"
            />

            <div className="about-image-caption">
              <span className="about-caption-mark" />
              <div>
                <strong>People. Processes. Service.</strong>
                <p>Focused on meaningful business relationships.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-container about-hero-footer">
          <span>OUR APPROACH</span>
          <span className="about-footer-line" />
          <span>Customer-focused service delivery</span>
        </div>
      </section>

      {/* Company introduction */}
      <section className="about-intro">
        <div className="about-container about-intro-grid">
          <div>
            <p className="about-eyebrow">WHO WE ARE</p>
            <h2>
              A practical approach to
              <br />
              business support.
            </h2>
          </div>

          <div className="about-intro-copy">
            <p>
              Intracia Technologies focuses on helping businesses manage
              customer interactions and operational support through
              structured service processes and professional communication.
            </p>

            <p>
              We recognise that every organisation has different customers,
              workflows and service expectations. Our approach begins with
              understanding those requirements and identifying how support
              services can fit into the wider business operation.
            </p>

            <p>
              Our aim is to support clear communication, dependable
              processes and positive working relationships with the
              businesses and customers we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="about-mission-section">
        <div className="about-container">
          <div className="about-section-heading">
            <p className="about-eyebrow">OUR DIRECTION</p>
            <h2>What guides our work</h2>
            <p>
              A shared focus on service quality, business needs and
              long-term working relationships.
            </p>
          </div>

          <div className="about-mission-grid">
            <article className="about-mission-card">
              <span className="about-card-number">01 / MISSION</span>
              <h3>Our Mission</h3>
              <p>
                To provide thoughtful customer and business support
                through professional communication, organised processes
                and a commitment to service quality.
              </p>
            </article>

            <article className="about-mission-card about-mission-card-accent">
              <span className="about-card-number">02 / VISION</span>
              <h3>Our Vision</h3>
              <p>
                To build lasting business relationships by delivering
                support services that respond to customer expectations
                and evolving operational needs.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values-section">
        <div className="about-container">
          <div className="about-values-heading">
            <div>
              <p className="about-eyebrow">OUR PRINCIPLES</p>
              <h2>How we approach our work</h2>
            </div>

            <p>
              Our working principles shape how we communicate, collaborate
              and approach everyday service responsibilities.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => (
              <article className="about-value-item" key={value.number}>
                <span className="about-value-number">{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service approach */}
      <section className="about-approach-section">
        <div className="about-container about-approach-grid">
          <div className="about-approach-content">
            <p className="about-eyebrow">OUR APPROACH</p>
            <h2>
              Support designed around
              <br />
              business requirements.
            </h2>

            <p>
              Effective outsourcing starts with understanding the work,
              the people involved and the outcomes a business needs.
              We believe that clear expectations and well-defined
              processes are essential to a productive working relationship.
            </p>

            <Link to="/services" className="about-approach-link">
              View Our Services <span>→</span>
            </Link>
          </div>

          <div className="about-approach-list">
            <div className="about-approach-row">
              <span>01</span>
              <div>
                <h3>Understand</h3>
                <p>Identify business priorities, workflows and service needs.</p>
              </div>
            </div>

            <div className="about-approach-row">
              <span>02</span>
              <div>
                <h3>Organise</h3>
                <p>Define processes, responsibilities and communication channels.</p>
              </div>
            </div>

            <div className="about-approach-row">
              <span>03</span>
              <div>
                <h3>Support</h3>
                <p>Align service activities with agreed business requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="about-container about-cta-inner">
          <div>
            <p className="about-eyebrow">START A CONVERSATION</p>
            <h2>Let's discuss your business support needs.</h2>
            <p>
              Tell us about your requirements and explore the services
              that may be suitable for your organisation.
            </p>
          </div>

          <Link to="/contact" className="about-cta-button">
            Contact Intracia <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
