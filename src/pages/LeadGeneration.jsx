
import { Link } from "react-router-dom";
import "./LeadGeneration.css";

const capabilities = [
  {
    number: "01",
    title: "Prospect Research",
    description:
      "Identify relevant businesses and prospects using agreed target-market criteria and available information sources.",
  },
  {
    number: "02",
    title: "Lead Qualification",
    description:
      "Collect and review prospect information against your business requirements and qualification criteria.",
  },
  {
    number: "03",
    title: "Contact Information Research",
    description:
      "Organize relevant business contact information from appropriate sources to support outreach activities.",
  },
  {
    number: "04",
    title: "Data Verification",
    description:
      "Review lead records for completeness, consistency, and potential duplication before they are used.",
  },
  {
    number: "05",
    title: "Lead Segmentation",
    description:
      "Organize prospect records into categories based on agreed business characteristics and campaign requirements.",
  },
  {
    number: "06",
    title: "Lead Data Management",
    description:
      "Maintain structured lead records and document qualification outcomes to support follow-up activities.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Define Your Target Audience",
    description:
      "Establish your ideal customer profile, target industries, geographic requirements, and qualification criteria.",
  },
  {
    number: "02",
    title: "Research Prospects",
    description:
      "Collect relevant prospect information using agreed research methods and appropriate sources.",
  },
  {
    number: "03",
    title: "Validate and Qualify",
    description:
      "Review records for completeness, apply qualification criteria, and organize relevant information.",
  },
  {
    number: "04",
    title: "Deliver Organized Records",
    description:
      "Structure the resulting lead information for review, reporting, and subsequent business outreach.",
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
    title: "Inbound Call Center Services",
    description:
      "Learn about incoming customer inquiries and service requests.",
    path: "/services/inbound-call-center",
  },
  {
    title: "Outbound Call Center Services",
    description:
      "Explore outbound calling and customer follow-up activities.",
    path: "/services/outbound-call-center",
  },
  {
    title: "Telemarketing Services",
    description:
      "Learn about telephone outreach and campaign communication support.",
    path: "/services/telemarketing",
  },
];

export default function LeadGeneration() {
  return (
    <main className="leadgen-page">
      <section className="leadgen-hero">
        <div className="leadgen-container leadgen-hero-grid">
          <div className="leadgen-hero-content">
            <p className="leadgen-eyebrow">
              PROSPECT RESEARCH &amp; QUALIFICATION
            </p>

            <h1>Lead Generation Services</h1>

            <p className="leadgen-hero-description">
              Support your business development activities with organized
              prospect research, lead qualification, contact data verification,
              and structured lead management.
            </p>

            <div className="leadgen-hero-actions">
              <Link to="/contact" className="leadgen-button">
                Discuss Your Requirements
                <span aria-hidden="true">→</span>
              </Link>

              <a href="#leadgen-capabilities" className="leadgen-text-link">
                Explore Our Capabilities
              </a>
            </div>
          </div>

          <div className="leadgen-hero-visual">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=85"
              alt="Business data and analytics displayed on a computer screen"
              fetchPriority="high"
            />

            <div className="leadgen-image-caption">
              <span className="leadgen-caption-line" />
              <p>Organized prospect information for informed decisions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="leadgen-overview leadgen-section">
        <div className="leadgen-container leadgen-overview-grid">
          <div>
            <p className="leadgen-eyebrow">OVERVIEW</p>
            <h2>Build a more organized prospect pipeline.</h2>
          </div>

          <div className="leadgen-overview-copy">
            <p>
              Lead generation support helps businesses identify potential
              customers, organize prospect information, and evaluate leads
              against defined business requirements.
            </p>

            <p>
              A structured process can help sales and marketing teams work
              with more consistent records, clearer qualification criteria,
              and better-organized information for follow-up.
            </p>

            <Link to="/contact" className="leadgen-inline-link">
              Talk to our team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="leadgen-capabilities leadgen-section"
        id="leadgen-capabilities"
      >
        <div className="leadgen-container">
          <div className="leadgen-section-heading">
            <p className="leadgen-eyebrow">OUR CAPABILITIES</p>
            <h2>Lead support aligned with your business criteria.</h2>
            <p>
              Research and data activities can be structured around your
              target market, qualification requirements, and preferred record
              format.
            </p>
          </div>

          <div className="leadgen-capability-grid">
            {capabilities.map((item) => (
              <article className="leadgen-capability-card" key={item.number}>
                <span className="leadgen-card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="leadgen-approach leadgen-section">
        <div className="leadgen-container leadgen-approach-grid">
          <div className="leadgen-approach-intro">
            <p className="leadgen-eyebrow">OUR APPROACH</p>

            <h2>From prospect research to organized lead records.</h2>

            <p>
              Clearly defined criteria and consistent data handling help
              businesses evaluate prospects and prepare information for
              subsequent sales or marketing activities.
            </p>

            <Link to="/contact" className="leadgen-button">
              Start a Conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="leadgen-process-list">
            {processSteps.map((step) => (
              <article className="leadgen-process-item" key={step.number}>
                <div className="leadgen-process-number">{step.number}</div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="leadgen-related leadgen-section">
        <div className="leadgen-container">
          <div className="leadgen-section-heading">
            <p className="leadgen-eyebrow">RELATED SERVICES</p>
            <h2>Explore our other business support services.</h2>
          </div>

          <div className="leadgen-related-grid">
            {relatedServices.map((service) => (
              <article className="leadgen-related-card" key={service.path}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link
                  to={service.path}
                  className="leadgen-related-link"
                  aria-label={`Explore ${service.title}`}
                >
                  Explore service <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="leadgen-contact-cta">
        <div className="leadgen-container leadgen-contact-cta-inner">
          <div>
            <p className="leadgen-eyebrow">LET'S CONNECT</p>

            <h2>Looking for structured lead generation support?</h2>

            <p>
              Tell us about your target audience, data requirements, and
              qualification criteria so we can discuss your needs.
            </p>
          </div>

          <Link
            to="/contact"
            className="leadgen-button leadgen-button-light"
          >
            Contact Intracia
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
