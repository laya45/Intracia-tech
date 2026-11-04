
import { Link } from "react-router-dom";
import "./InboundCallCenter.css";

const capabilities = [
  {
    number: "01",
    title: "Customer Inquiries",
    description:
      "Support customers with product questions, service inquiries, and general information through professional inbound communication.",
  },
  {
    number: "02",
    title: "Order and Service Support",
    description:
      "Help customers with order status, service requests, account questions, and routine follow-up needs.",
  },
  {
    number: "03",
    title: "Issue Resolution",
    description:
      "Listen carefully to customer concerns, provide appropriate guidance, and route complex issues to the relevant team.",
  },
  {
    number: "04",
    title: "Appointment and Request Handling",
    description:
      "Assist with appointment requests, information collection, and other inbound interactions based on your business process.",
  },
  {
    number: "05",
    title: "Customer Communication",
    description:
      "Maintain clear, courteous, and consistent communication throughout each customer interaction.",
  },
  {
    number: "06",
    title: "Call Documentation",
    description:
      "Record interaction details and customer requests to support follow-up, reporting, and service continuity.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We discuss your customer base, common inquiries, communication requirements, and escalation process.",
  },
  {
    number: "02",
    title: "Configure",
    description:
      "We align call handling procedures, scripts, documentation requirements, and service workflows.",
  },
  {
    number: "03",
    title: "Manage",
    description:
      "Inbound interactions are handled according to the agreed process and communication guidelines.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "We review feedback and process requirements to identify opportunities for service improvement.",
  },
];

const relatedServices = [
  {
    title: "Call Center Services",
    description:
      "Explore broader customer communication and call handling support.",
    path: "/services/call-center",
  },
  {
    title: "Outbound Call Center Services",
    description:
      "Explore outbound calling for customer follow-ups and business communication.",
    path: "/services/outbound-call-center",
  },
  {
    title: "Telemarketing Services",
    description:
      "Learn about outbound marketing communication and campaign support.",
    path: "/services/telemarketing",
  },
  {
    title: "Lead Generation Services",
    description:
      "Explore support for prospect research and lead qualification.",
    path: "/services/lead-generation",
  },
];

function InboundCallCenter() {
  return (
    <main className="inbound-page">
      <section className="inbound-hero">
        <div className="inbound-container inbound-hero-grid">
          <div className="inbound-hero-content">
            <p className="inbound-eyebrow">
              CUSTOMER EXPERIENCE &amp; SUPPORT
            </p>

            <h1>Inbound Call Center Services</h1>

            <p className="inbound-hero-description">
              Deliver a more consistent customer experience with professional
              inbound call handling, customer inquiries, service requests, and
              structured communication support.
            </p>

            <div className="inbound-hero-actions">
              <Link to="/contact" className="inbound-button">
                Discuss Your Requirements
                <span aria-hidden="true">→</span>
              </Link>

              <a href="#inbound-capabilities" className="inbound-text-link">
                Explore Our Capabilities
              </a>
            </div>
          </div>

          <div className="inbound-hero-visual">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
              alt="Customer service professionals working together in an office"
              fetchPriority="high"
            />

            <div className="inbound-image-caption">
              <span className="inbound-caption-line" />
              <p>Customer communication with a clear process</p>
            </div>
          </div>
        </div>
      </section>

      <section className="inbound-overview inbound-section">
        <div className="inbound-container inbound-overview-grid">
          <div>
            <p className="inbound-eyebrow">OVERVIEW</p>
            <h2>Every customer interaction matters.</h2>
          </div>

          <div className="inbound-overview-copy">
            <p>
              Inbound call center services help businesses manage incoming
              customer communications in a structured and professional manner.
              From general inquiries to service requests, each interaction
              should be handled with attention, clarity, and care.
            </p>

            <p>
              Intracia Technologies provides inbound support solutions that
              can be aligned with your business requirements, customer
              communication guidelines, and internal operating procedures.
            </p>

            <Link to="/contact" className="inbound-inline-link">
              Talk to our team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="inbound-capabilities inbound-section"
        id="inbound-capabilities"
      >
        <div className="inbound-container">
          <div className="inbound-section-heading">
            <p className="inbound-eyebrow">OUR CAPABILITIES</p>
            <h2>Inbound support for everyday business needs.</h2>
            <p>
              Service activities can be tailored to your customer needs,
              communication standards, and agreed workflows.
            </p>
          </div>

          <div className="inbound-capability-grid">
            {capabilities.map((item) => (
              <article className="inbound-capability-card" key={item.number}>
                <span className="inbound-card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inbound-approach inbound-section">
        <div className="inbound-container inbound-approach-grid">
          <div className="inbound-approach-intro">
            <p className="inbound-eyebrow">OUR APPROACH</p>
            <h2>A clear process for customer support.</h2>
            <p>
              A well-defined workflow helps maintain consistency, clarify
              responsibilities, and support ongoing service improvement.
            </p>

            <Link to="/contact" className="inbound-button">
              Start a Conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="inbound-process-list">
            {processSteps.map((step) => (
              <article className="inbound-process-item" key={step.number}>
                <div className="inbound-process-number">{step.number}</div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inbound-related inbound-section">
        <div className="inbound-container">
          <div className="inbound-section-heading inbound-related-heading">
            <p className="inbound-eyebrow">RELATED SERVICES</p>
            <h2>Explore more ways we can support your business.</h2>
          </div>

          <div className="inbound-related-grid">
            {relatedServices.map((service) => (
              <article className="inbound-related-card" key={service.path}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link
                  to={service.path}
                  className="inbound-related-link"
                  aria-label={`Explore ${service.title}`}
                >
                  Explore service <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inbound-contact-cta">
        <div className="inbound-container inbound-contact-cta-inner">
          <div>
            <p className="inbound-eyebrow">LET'S CONNECT</p>
            <h2>Looking for inbound customer support?</h2>
            <p>
              Tell us about your customer communication needs and the type of
              support your business is looking for.
            </p>
          </div>

          <Link to="/contact" className="inbound-button inbound-button-light">
            Contact Intracia
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default InboundCallCenter;
