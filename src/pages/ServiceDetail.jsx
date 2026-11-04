
import React from "react";
import { Link } from "react-router-dom";

function ServiceDetail({ title, eyebrow, description, benefits }) {
  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-container">
          <p className="service-detail-eyebrow">
            INTRACIA TECHNOLOGIES / SERVICES
          </p>

          <h1>{title}</h1>

          <p className="service-detail-description">{description}</p>

          <div className="service-detail-actions">
            <Link to="/contact" className="service-detail-button">
              Discuss Your Requirements <span>→</span>
            </Link>

            <Link to="/services" className="service-detail-back">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="service-detail-content">
        <div className="service-detail-container service-detail-grid">
          <div>
            <p className="service-detail-eyebrow">{eyebrow}</p>
            <h2>Support aligned with your business needs.</h2>
          </div>

          <div>
            <p>
              Every business has different customer communication and
              operational requirements. Our approach begins with understanding
              your objectives, expected workflows and service priorities.
            </p>
            <p>
              We can discuss the scope of your requirements and explore an
              approach appropriate to your organisation.
            </p>
          </div>
        </div>
      </section>

      <section className="service-detail-benefits">
        <div className="service-detail-container">
          <p className="service-detail-eyebrow">SERVICE SCOPE</p>
          <h2>Areas we can discuss</h2>

          <div className="service-detail-benefit-list">
            {benefits.map((benefit, index) => (
              <article className="service-detail-benefit" key={benefit}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{benefit}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-container service-detail-cta-inner">
          <div>
            <p className="service-detail-eyebrow">LET'S TALK</p>
            <h2>Looking for support with {title.toLowerCase()}?</h2>
            <p>
              Contact our team to share your requirements and discuss the
              next steps.
            </p>
          </div>

          <Link to="/contact" className="service-detail-button service-detail-button-light">
            Contact Us <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetail;
