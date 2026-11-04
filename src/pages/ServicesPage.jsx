
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Call Center Services",
    description:
      "Customer communication support designed to help businesses manage enquiries, maintain clear interactions and support daily service operations.",
    path: "/services/call-center",
    category: "CUSTOMER COMMUNICATION",
  },
  {
    number: "02",
    title: "Inbound Call Center Services",
    description:
      "Support for incoming customer calls, enquiries, information requests and other customer service interactions.",
    path: "/services/inbound-call-center",
    category: "INBOUND SUPPORT",
  },
  {
    number: "03",
    title: "Outbound Call Center Services",
    description:
      "Structured outbound calling support for customer follow-ups, business communication and other agreed calling activities.",
    path: "/services/outbound-call-center",
    category: "OUTBOUND SUPPORT",
  },
  {
    number: "04",
    title: "Telemarketing Services",
    description:
      "Telephone-based outreach to support business communication, prospect engagement and campaign-related activities.",
    path: "/services/telemarketing",
    category: "BUSINESS OUTREACH",
  },
  {
    number: "05",
    title: "Lead Generation Services",
    description:
      "Support for identifying potential prospects, organising lead information and assisting business development activities.",
    path: "/services/lead-generation",
    category: "LEAD DEVELOPMENT",
  },
];

function ServicesPage() {
  return (
    <main className="services-page">
      {/* Hero */}
      <section className="services-page-hero">
        <div className="services-page-container">
          <p className="services-page-eyebrow">
            OUR SERVICES
          </p>

          <div className="services-page-hero-grid">
            <div>
              <h1>
                Business support
                <br />
                built around your needs.
              </h1>

              <p className="services-page-hero-description">
                Explore customer communication and business support
                services designed around your organisation's requirements,
                workflows and customer interactions.
              </p>

              <Link to="/contact" className="services-page-button">
                Discuss Your Requirements <span>→</span>
              </Link>
            </div>

            <div className="services-page-hero-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                alt="Professionals collaborating in a workplace"
                className="services-page-hero-image"
              />
              <div className="services-page-image-caption">
                <span />
                <div>
                  <strong>Communication and operations</strong>
                  <p>Support aligned with business requirements.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="services-page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="services-page-intro">
        <div className="services-page-container services-page-intro-grid">
          <div>
            <p className="services-page-eyebrow">HOW WE CAN HELP</p>
            <h2>
              The right support
              <br />
              for your operations.
            </h2>
          </div>

          <div>
            <p>
              Business support needs differ from one organisation to
              another. The right service depends on your customers,
              communication channels, internal processes and operational
              priorities.
            </p>

            <p>
              Explore the service areas below to learn more about each
              offering and contact our team to discuss your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Service listings */}
      <section className="services-page-list-section">
        <div className="services-page-container">
          <div className="services-page-section-heading">
            <div>
              <p className="services-page-eyebrow">SERVICE AREAS</p>
              <h2>Explore our services</h2>
            </div>

            <p>
              Select a service to learn more about its purpose and
              potential application to your business.
            </p>
          </div>

          <div className="services-page-list">
            {services.map((service) => (
              <article className="services-page-card" key={service.number}>
                <div className="services-page-card-number">
                  {service.number}
                </div>

                <div className="services-page-card-content">
                  <span className="services-page-card-category">
                    {service.category}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <Link
                    to={service.path}
                    className="services-page-card-link"
                  >
                    Explore service <span>→</span>
                  </Link>
                </div>

                <Link
                  to={service.path}
                  className="services-page-card-arrow"
                  aria-label={`Explore ${service.title}`}
                >
                  →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Working approach */}
      <section className="services-page-approach">
        <div className="services-page-container services-page-approach-grid">
          <div>
            <p className="services-page-eyebrow">OUR APPROACH</p>
            <h2>
              Understand the need.
              <br />
              Define the support.
            </h2>

            <p>
              Starting with a clear understanding of your business
              requirements helps establish expectations, responsibilities
              and the scope of service needed.
            </p>
          </div>

          <div className="services-page-steps">
            <div className="services-page-step">
              <span>01</span>
              <div>
                <h3>Discuss</h3>
                <p>Share your goals, requirements and current challenges.</p>
              </div>
            </div>

            <div className="services-page-step">
              <span>02</span>
              <div>
                <h3>Identify</h3>
                <p>Explore relevant service areas and business priorities.</p>
              </div>
            </div>

            <div className="services-page-step">
              <span>03</span>
              <div>
                <h3>Connect</h3>
                <p>Discuss possible next steps with the company team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="services-page-cta">
        <div className="services-page-container services-page-cta-inner">
          <div>
            <p className="services-page-eyebrow">
              LET'S TALK BUSINESS
            </p>

            <h2>Looking for the right service for your organisation?</h2>

            <p>
              Contact us to share your requirements and learn more about
              the available service options.
            </p>
          </div>

          <Link to="/contact" className="services-page-cta-button">
            Contact Our Team <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
