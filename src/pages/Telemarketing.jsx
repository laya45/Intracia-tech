
import { Link } from "react-router-dom";
import "./Telemarketing.css";

const capabilities = [
  {
    number: "01",
    title: "Campaign Calling",
    description:
      "Support planned telephone campaigns using approved scripts, defined objectives, and agreed communication guidelines.",
  },
  {
    number: "02",
    title: "Prospect Outreach",
    description:
      "Connect with relevant prospects to introduce products or services and communicate key business information.",
  },
  {
    number: "03",
    title: "Lead Qualification",
    description:
      "Collect relevant prospect information and identify potential interest based on your qualification criteria.",
  },
  {
    number: "04",
    title: "Appointment Setting",
    description:
      "Coordinate appointment requests and communicate meeting details according to your team's availability.",
  },
  {
    number: "05",
    title: "Campaign Follow-Ups",
    description:
      "Support follow-up communication with prospects who have expressed interest or requested additional information.",
  },
  {
    number: "06",
    title: "Campaign Reporting",
    description:
      "Organize call outcomes, responses, and follow-up requirements to support campaign review and planning.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand the Campaign",
    description:
      "Define campaign objectives, target audiences, messaging requirements, and desired outcomes.",
  },
  {
    number: "02",
    title: "Prepare the Calling Process",
    description:
      "Align approved scripts, contact lists, qualification questions, and reporting requirements.",
  },
  {
    number: "03",
    title: "Conduct Outreach",
    description:
      "Carry out calling activities according to the agreed workflow and applicable contact preferences.",
  },
  {
    number: "04",
    title: "Review Responses",
    description:
      "Organize campaign results and identify interested prospects and appropriate next steps.",
  },
];

const relatedServices = [
  {
    title: "Call Center Services",
    description:
      "Explore customer communication and structured call handling support.",
    path: "/services/call-center",
  },
  {
    title: "Inbound Call Center Services",
    description:
      "Learn about incoming customer inquiries and service request handling.",
    path: "/services/inbound-call-center",
  },
  {
    title: "Outbound Call Center Services",
    description:
      "Explore outbound calling, follow-ups, and business communication.",
    path: "/services/outbound-call-center",
  },
  {
    title: "Lead Generation Services",
    description:
      "Learn about prospect research and lead qualification support.",
    path: "/services/lead-generation",
  },
];

export default function Telemarketing() {
  return (
    <main className="telemarketing-page">
      <section className="telemarketing-hero">
        <div className="telemarketing-container telemarketing-hero-grid">
          <div className="telemarketing-hero-content">
            <p className="telemarketing-eyebrow">
              OUTREACH &amp; CAMPAIGN SUPPORT
            </p>

            <h1>Telemarketing Services</h1>

            <p className="telemarketing-hero-description">
              Support your marketing and business development activities
              through structured telephone outreach, prospect communication,
              lead qualification, and campaign follow-ups.
            </p>

            <div className="telemarketing-hero-actions">
              <Link to="/contact" className="telemarketing-button">
                Discuss Your Campaign
                <span aria-hidden="true">→</span>
              </Link>

              <a
                href="#telemarketing-capabilities"
                className="telemarketing-text-link"
              >
                Explore Our Capabilities
              </a>
            </div>
          </div>

          <div className="telemarketing-hero-visual">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=85"
              alt="Business team discussing customer and marketing activities"
              fetchPriority="high"
            />

            <div className="telemarketing-image-caption">
              <span className="telemarketing-caption-line" />
              <p>Structured outreach for business communication</p>
            </div>
          </div>
        </div>
      </section>

      <section className="telemarketing-overview telemarketing-section">
        <div className="telemarketing-container telemarketing-overview-grid">
          <div>
            <p className="telemarketing-eyebrow">OVERVIEW</p>
            <h2>Meaningful conversations start with a clear plan.</h2>
          </div>

          <div className="telemarketing-overview-copy">
            <p>
              Telemarketing involves communicating with prospects and
              customers by telephone to introduce offerings, understand
              interest, gather information, and support business campaigns.
            </p>

            <p>
              Intracia Technologies can align telemarketing activities with
              your campaign objectives, approved messaging, audience criteria,
              and reporting requirements.
            </p>

            <Link to="/contact" className="telemarketing-inline-link">
              Discuss your requirements <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="telemarketing-capabilities telemarketing-section"
        id="telemarketing-capabilities"
      >
        <div className="telemarketing-container">
          <div className="telemarketing-section-heading">
            <p className="telemarketing-eyebrow">OUR CAPABILITIES</p>
            <h2>Campaign support built around your objectives.</h2>
            <p>
              Outreach activities can be organized according to your target
              audience, messaging guidelines, and business priorities.
            </p>
          </div>

          <div className="telemarketing-capability-grid">
            {capabilities.map((item) => (
              <article
                className="telemarketing-capability-card"
                key={item.number}
              >
                <span className="telemarketing-card-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="telemarketing-approach telemarketing-section">
        <div className="telemarketing-container telemarketing-approach-grid">
          <div className="telemarketing-approach-intro">
            <p className="telemarketing-eyebrow">OUR APPROACH</p>

            <h2>A structured approach to every campaign.</h2>

            <p>
              Clear objectives, consistent messaging, and organized reporting
              help support a more manageable campaign process.
            </p>

            <Link to="/contact" className="telemarketing-button">
              Start a Conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="telemarketing-process-list">
            {processSteps.map((step) => (
              <article
                className="telemarketing-process-item"
                key={step.number}
              >
                <div className="telemarketing-process-number">
                  {step.number}
                </div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="telemarketing-related telemarketing-section">
        <div className="telemarketing-container">
          <div className="telemarketing-section-heading">
            <p className="telemarketing-eyebrow">RELATED SERVICES</p>
            <h2>Explore our customer communication services.</h2>
          </div>

          <div className="telemarketing-related-grid">
            {relatedServices.map((service) => (
              <article
                className="telemarketing-related-card"
                key={service.path}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link
                  to={service.path}
                  className="telemarketing-related-link"
                  aria-label={`Explore ${service.title}`}
                >
                  Explore service <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="telemarketing-contact-cta">
        <div className="telemarketing-container telemarketing-contact-cta-inner">
          <div>
            <p className="telemarketing-eyebrow">LET'S CONNECT</p>

            <h2>Planning a telemarketing campaign?</h2>

            <p>
              Tell us about your target audience, campaign objectives, and
              communication requirements so we can discuss a suitable approach.
            </p>
          </div>

          <Link
            to="/contact"
            className="telemarketing-button telemarketing-button-light"
          >
            Contact Intracia
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
