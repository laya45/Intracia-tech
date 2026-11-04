
import React from "react";
import { Link } from "react-router-dom";

const serviceFeatures = [
  {
    number: "01",
    title: "Customer Care",
    description:
      "Professional customer interactions that help address enquiries, resolve concerns, and maintain positive customer relationships.",
  },
  {
    number: "02",
    title: "Inbound and Outbound Calling",
    description:
      "Structured call handling for incoming enquiries, outgoing follow-ups, customer communication, and business support activities.",
  },
  {
    number: "03",
    title: "Customer Query Resolution",
    description:
      "Clear communication and consistent processes to help customers get accurate information and timely assistance.",
  },
  {
    number: "04",
    title: "Call Handling and Documentation",
    description:
      "Organised call records, interaction notes, and information handling to support continuity and service quality.",
  },
];

const serviceProcess = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding your business requirements, customer expectations, and service objectives.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "We define communication guidelines, call-handling procedures, and escalation processes around your needs.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Our service approach focuses on professional communication, consistent execution, and organised workflows.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Feedback and process reviews can help identify opportunities to improve customer interactions over time.",
  },
];

export default function CallCenterServices() {
  return (
    <main className="call-center-page">
      <section className="call-center-hero">
        <div className="call-center-container call-center-hero-grid">
          <div className="call-center-hero-content">
            <p className="call-center-eyebrow">
              OUR SERVICES / CALL CENTER
            </p>

            <h1>
              Every conversation is an opportunity to build trust.
            </h1>

            <p className="call-center-hero-description">
              Support your customers with professional communication,
              organised call handling, and dependable business process
              support from Intracia Technologies.
            </p>

            <div className="call-center-actions">
              <Link to="/contact" className="call-center-button">
                Discuss Your Requirements
                <span aria-hidden="true"> →</span>
              </Link>

              <Link
                to="/services"
                className="call-center-text-link"
              >
                Explore All Services
              </Link>
            </div>
          </div>

          <div className="call-center-hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Professionals collaborating in a modern workplace"
              className="call-center-hero-image"
            />

            <div className="call-center-image-caption">
              <span className="call-center-caption-line" />
              <p>Professional communication. Structured support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="call-center-intro">
        <div className="call-center-container call-center-intro-grid">
          <div>
            <p className="call-center-eyebrow">OVERVIEW</p>
            <h2>
              Customer conversations handled with care and consistency.
            </h2>
          </div>

          <div className="call-center-intro-copy">
            <p>
              A reliable call center operation is an important part of the
              customer experience. Every interaction should be handled with
              professionalism, clarity, and attention to the customer's needs.
            </p>

            <p>
              Intracia Technologies presents a structured approach to call
              center support, helping businesses organise customer
              communication and day-to-day service activities around their
              operational requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="call-center-capabilities">
        <div className="call-center-container">
          <div className="call-center-section-heading">
            <p className="call-center-eyebrow">OUR CAPABILITIES</p>
            <h2>Call center support for business operations</h2>
            <p>
              Service activities can be aligned with your workflows,
              communication standards, and customer support requirements.
            </p>
          </div>

          <div className="call-center-feature-grid">
            {serviceFeatures.map((feature) => (
              <article
                className="call-center-feature"
                key={feature.number}
              >
                <span className="call-center-feature-number">
                  {feature.number}
                </span>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="call-center-approach">
        <div className="call-center-container call-center-approach-grid">
          <div className="call-center-approach-heading">
            <p className="call-center-eyebrow">OUR APPROACH</p>
            <h2>A clear process from requirements to delivery.</h2>
            <p>
              Well-defined workflows help create more consistent customer
              interactions and support day-to-day operational requirements.
            </p>

            <Link
              to="/contact"
              className="call-center-text-link"
            >
              Talk to Our Team <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="call-center-process-list">
            {serviceProcess.map((step) => (
              <article
                className="call-center-process-item"
                key={step.number}
              >
                <span className="call-center-process-number">
                  {step.number}
                </span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="call-center-related">
        <div className="call-center-container">
          <div className="call-center-section-heading">
            <p className="call-center-eyebrow">RELATED SERVICES</p>
            <h2>Explore more ways we can support your business.</h2>
          </div>

          <div className="call-center-related-grid">
            <Link
              to="/services/inbound-call-center"
              className="call-center-related-link"
            >
              <span>Inbound Call Center Services</span>
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              to="/services/outbound-call-center"
              className="call-center-related-link"
            >
              <span>Outbound Call Center Services</span>
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              to="/services/telemarketing"
              className="call-center-related-link"
            >
              <span>Telemarketing Services</span>
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              to="/services/lead-generation"
              className="call-center-related-link"
            >
              <span>Lead Generation Services</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="call-center-cta">
        <div className="call-center-container call-center-cta-content">
          <div>
            <p className="call-center-cta-eyebrow">LET'S WORK TOGETHER</p>
            <h2>Looking for call center support for your business?</h2>
            <p>
              Tell us about your requirements and the type of customer
              support you are looking to organise.
            </p>
          </div>

          <Link to="/contact" className="call-center-cta-button">
            Contact Intracia Technologies
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
