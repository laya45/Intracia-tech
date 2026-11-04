
import { Link } from "react-router-dom";
import "./OutboundCallCenter.css";

const capabilities = [
  {
    number: "01",
    title: "Customer Follow-Ups",
    description:
      "Support customer follow-up activities, service updates, and ongoing business communication.",
  },
  {
    number: "02",
    title: "Lead Qualification",
    description:
      "Collect relevant information from prospects and help businesses identify potential opportunities.",
  },
  {
    number: "03",
    title: "Appointment Scheduling",
    description:
      "Coordinate appointment requests and communicate scheduling details according to agreed workflows.",
  },
  {
    number: "04",
    title: "Customer Surveys",
    description:
      "Gather customer feedback through structured calls and record responses for further review.",
  },
  {
    number: "05",
    title: "Campaign Calling Support",
    description:
      "Assist with outbound calling activities based on campaign objectives, approved scripts, and target audiences.",
  },
  {
    number: "06",
    title: "Call Documentation",
    description:
      "Maintain records of call outcomes, customer responses, and follow-up requirements.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Define Objectives",
    description:
      "Understand the purpose of the campaign, target audience, expected outcomes, and communication requirements.",
  },
  {
    number: "02",
    title: "Prepare the Workflow",
    description:
      "Align calling scripts, contact lists, documentation fields, and escalation procedures.",
  },
  {
    number: "03",
    title: "Execute Calls",
    description:
      "Manage outbound communication according to the agreed process and applicable contact preferences.",
  },
  {
    number: "04",
    title: "Review Outcomes",
    description:
      "Organize call results and identify follow-up actions or process improvements.",
  },
];

const relatedServices = [
  {
    title: "Call Center Services",
    description:
      "Explore broader call handling and customer communication support.",
    path: "/services/call-center",
  },
  {
    title: "Inbound Call Center Services",
    description:
      "Learn about support for incoming customer inquiries and requests.",
    path: "/services/inbound-call-center",
  },
  {
    title: "Telemarketing Services",
    description:
      "Explore outbound marketing communication and campaign assistance.",
    path: "/services/telemarketing",
  },
  {
    title: "Lead Generation Services",
    description:
      "Learn about prospect research and lead qualification support.",
    path: "/services/lead-generation",
  },
];

export default function OutboundCallCenter() {
  return (
    <main className="outbound-page">
      <section className="outbound-hero">
        <div className="outbound-container outbound-hero-grid">
          <div className="outbound-hero-content">
            <p className="outbound-eyebrow">BUSINESS COMMUNICATION</p>

            <h1>Outbound Call Center Services</h1>

            <p className="outbound-hero-description">
              Support your business communication goals with structured
              outbound calling, customer follow-ups, lead qualification, and
              campaign-related calling activities.
            </p>

            <div className="outbound-hero-actions">
              <Link to="/contact" className="outbound-button">
                Discuss Your Requirements
                <span aria-hidden="true">→</span>
              </Link>

              <a href="#outbound-capabilities" className="outbound-text-link">
                Explore Our Capabilities
              </a>
            </div>
          </div>

          <div className="outbound-hero-visual">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85"
              alt="Business professionals collaborating in an office"
              fetchPriority="high"
            />

            <div className="outbound-image-caption">
              <span className="outbound-caption-line" />
              <p>Purposeful communication. Organized workflows.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="outbound-overview outbound-section">
        <div className="outbound-container outbound-overview-grid">
          <div>
            <p className="outbound-eyebrow">OVERVIEW</p>
            <h2>Proactive communication for business needs.</h2>
          </div>

          <div className="outbound-overview-copy">
            <p>
              Outbound call center services help businesses connect with
              customers and prospects through planned telephone communication.
              These activities can include follow-ups, appointment requests,
              surveys, and campaign-related conversations.
            </p>

            <p>
              Intracia Technologies can align outbound calling workflows with
              your business objectives, approved communication scripts,
              reporting requirements, and customer contact preferences.
            </p>

            <Link to="/contact" className="outbound-inline-link">
              Talk to our team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="outbound-capabilities outbound-section"
        id="outbound-capabilities"
      >
        <div className="outbound-container">
          <div className="outbound-section-heading">
            <p className="outbound-eyebrow">OUR CAPABILITIES</p>
            <h2>Outbound calling aligned with your objectives.</h2>
            <p>
              Activities can be structured around your target audience,
              campaign requirements, and agreed business processes.
            </p>
          </div>

          <div className="outbound-capability-grid">
            {capabilities.map((item) => (
              <article
                className="outbound-capability-card"
                key={item.number}
              >
                <span className="outbound-card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="outbound-approach outbound-section">
        <div className="outbound-container outbound-approach-grid">
          <div className="outbound-approach-intro">
            <p className="outbound-eyebrow">OUR APPROACH</p>
            <h2>From campaign planning to call outcomes.</h2>
            <p>
              A clearly defined process helps keep outbound activities
              consistent, organized, and aligned with business requirements.
            </p>

            <Link to="/contact" className="outbound-button">
              Start a Conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="outbound-process-list">
            {processSteps.map((step) => (
              <article className="outbound-process-item" key={step.number}>
                <div className="outbound-process-number">{step.number}</div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="outbound-related outbound-section">
        <div className="outbound-container">
          <div className="outbound-section-heading outbound-related-heading">
            <p className="outbound-eyebrow">RELATED SERVICES</p>
            <h2>Explore our other communication services.</h2>
          </div>

          <div className="outbound-related-grid">
            {relatedServices.map((service) => (
              <article
                className="outbound-related-card"
                key={service.path}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link
                  to={service.path}
                  className="outbound-related-link"
                  aria-label={`Explore ${service.title}`}
                >
                  Explore service <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="outbound-contact-cta">
        <div className="outbound-container outbound-contact-cta-inner">
          <div>
            <p className="outbound-eyebrow">LET'S CONNECT</p>
            <h2>Planning an outbound calling program?</h2>
            <p>
              Tell us about your audience, campaign goals, and communication
              requirements so we can discuss a suitable approach.
            </p>
          </div>

          <Link
            to="/contact"
            className="outbound-button outbound-button-light"
          >
            Contact Intracia
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
