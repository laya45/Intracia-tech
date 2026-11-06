import React from "react";
import { Link } from "react-router-dom";
import "./CallCenterServices.css";

// Local images from public/images
const UPLOADS = "/images";

// HERO FEATURES
const features = [
  "Multi-Channel Support",
  "Technical Expertise",
  "Language Support",
  "Compliance Management",
  "Round-the-Clock Availability",
  "Emergency Response",
];

// CALL CENTER SERVICES
const services = [
  {
    name: "Inbound Call Center Services",
    image: "inbound-call-center.jpg",
    text: "Boost customer loyalty and streamline operations by outsourcing to us. We handle inquiries with precision, letting you focus on core tasks. Entrust us to elevate your customer service while you drive business growth."
  },
  {
    name: "Outbound Call Center Services",
    image: "outbound-call-center.jpg",
    text: "Elevate sales with our expertise by outsourcing call center services. Gain access to a dedicated sales team, expanding market reach efficiently. Focus on strategic initiatives while we drive revenue growth seamlessly."
  },
  {
    name: "Telemarketing Services",
    image: "telemarketing.jpg",
    text: "Efficiently captivate prospects, communicate your value proposition, and catalyze conversions for your business. Tap into our expertise to elevate lead conversions, diminish operational costs, and fortify your market position."
  },
  {
    name: "Customer Support Services",
    image: "customer-support.jpg",
    text: "Immerse yourself in heightened customer satisfaction through our exceptional support services. From handling inquiries to troubleshooting issues, we guarantee seamless experiences for every customer interaction.",
    to: "/contact",
  },
  {
    name: "Lead Generation Services",
    image: "lead-generation.jpg",
    text: "Accelerate your sales pipeline by leveraging our lead generation services. By outsourcing call center operations to us, you can efficiently identify and qualify potential customers, ensuring a steady stream of high-quality leads primed for conversion.",
    to: "/services/lead-generation",
  },
  {
    name: "Helpdesk Services",
    image: "helpdesk.jpg",
    text: "Elevate your technical support capabilities with our comprehensive Helpdesk Services. Our team of experts is dedicated to providing swift and effective assistance for all your technical issues, guaranteeing seamless product experiences for your customers.",
    to: "/contact",
  },
  {
    name: "Answering Services",
    image: "answering-services.jpg",
    text: "We provide 24/7 professional call handling, ensuring you're always available to your customers. By outsourcing to a call center services company like ours, you will never miss an opportunity, and your customers will appreciate the immediate and professional assistance.",
    to: "/contact",
  },
  {
    name: "Call Center Consulting Services",
    image: "call-center-consulting.jpg",
    text: "Optimize your call center operations with our call center outsourcing services for consultancy. Get tailored strategies, technology recommendations, and process improvements...",
    to: "/contact",
  },
];

// COMMUNICATION CHANNELS
const channels = [
  "Phone Support",
  "Email Support",
  "SMS Support",
  "Social Media Engagement",
  "Web Support",
  "Live Chat",
];

// INDUSTRIES
const industries = [
  "Customer Support and Service",
  "Technical Support",
  "Healthcare",
  "Travel and Hospitality",
  "Education",
  "Legal Services",
  "Insurance",
  "Technology and Software",
  "Transportation and Logistics",
  "Gaming",
  "Retail and E-commerce",
  "Automotive",
  "Food and Beverage",
  "Entertainment and Media",
  "Manufacturing",
  "Utility and Energy",
];

// WHY CHOOSE INTRACIA
const reasons = [
  [
    "Industry Specialization",
    "Solutions fitted to the details of your industry, rather than generic strategies.",
  ],
  [
    "Proven Expertise",
    "Careful attention to each industry's nuances for precise, effective results.",
  ],
  [
    "Data Security",
    "Sensitive data stays confidential, with compliance and strong security measures upheld.",
  ],
  [
    "24/7 Support",
    "Uninterrupted assistance and expert guidance whenever you need it.",
  ],
  [
    "Multi-channel Support",
    "Reach customers across several channels for a consistent, satisfying experience.",
  ],
  [
    "Scalability",
    "Adaptable solutions that let you grow at your own pace, with confidence.",
  ],
  [
    "Cutting-Edge Technology",
    "Access to current tools that keep you competitive in changing markets.",
  ],
  [
    "Dedicated Team",
    "Experts who take the time to understand your goals and give personal attention.",
  ],
  [
    "Competitive Pricing",
    "Premium solutions at affordable rates, without giving up quality.",
  ],
];

export default function CallCenterServices() {
  return (
    <main className="intracia-site callcenter-page">

      {/* ================= HEADER ================= */}

      <header className="intracia-header">
        <div className="intracia-header-inner">

          <Link
            className="intracia-logo"
            to="/"
            aria-label="Intracia Technologies home"
          >
            <img
              className="intracia-brand-logo"
              src="/images/intracia-logo.png"
              alt="Intracia Technologies — Moving Ahead"
            />
          </Link>

          <nav
            className="intracia-nav"
            aria-label="Primary navigation"
          >
            <Link to="/">Home</Link>

            <Link to="/benefits">
              Benefits of outsourcing
            </Link>

            {/* SERVICES DROPDOWN */}

            <div className="cc-nav-dropdown">

              <Link
                to="/services/call-center"
                className="cc-nav-current"
              >
                Services <span aria-hidden="true">⌄</span>
              </Link>

              <div className="cc-nav-menu">

                <Link to="/services/call-center">
                  Call Center Services
                </Link>

                <Link to="/services/inbound">
                  Inbound Call Center Services
                </Link>

                <Link to="/services/outbound">
                  Outbound Call Center Services
                </Link>

                <Link to="/services/telemarketing">
                  Telemarketing Services
                </Link>

                <Link to="/services/lead-generation">
                  Lead Generation Services
                </Link>

              </div>
            </div>

            <Link to="/process">Our Process</Link>

            <Link to="/careers">Careers</Link>

            <Link to="/contact">Contact</Link>

            <Link
              className="intracia-nav-cta"
              to="/contact"
            >
              Get in touch <span aria-hidden="true">↗</span>
            </Link>

          </nav>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}

      <section className="cc-hero">
        <div className="cc-container">

          <span className="cc-eyebrow">
            CUSTOMER EXPERIENCE • BUSINESS SUPPORT
          </span>

          <h1>
            Call Center <span>Services</span>
          </h1>

          <p className="cc-hero-subtitle">
            Break Free from Staffing Constraints and Ignite Growth!
          </p>

          <ul
            className="cc-feature-tags"
            aria-label="Service highlights"
          >
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <div className="cc-hero-bottom">

            <p>
              Dependable customer conversations, thoughtful support and
              flexible operations—built around the way your business works.
            </p>

            <Link className="cc-button" to="/contact">
              Discuss your requirements <span>↗</span>
            </Link>

          </div>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}

      <section className="cc-intro cc-section">
        <div className="cc-container">

          <div className="cc-two-column">

            <div>
              <span className="cc-eyebrow">
                CALL CENTER SOLUTIONS
              </span>

              <h2>
                Transform your support with{" "}
                <span>24/7 call center solutions</span>
              </h2>
            </div>

            <div className="cc-copy">

              <p className="cc-lede">
                A call center is the frontline of your brand, and running
                one in-house means wrestling with hiring, training and
                constant operating costs. Our team takes that load off
                you, working around the clock and fitting naturally with
                your brand so you can concentrate on long-term customer
                relationships.
              </p>

              <p>
                Experienced people and modern technology turn routine
                interactions into good experiences. Solutions are shaped
                around your requirements and bring higher customer
                satisfaction, a stronger reputation and lower costs,
                with support available whenever customers need it.
              </p>

            </div>
          </div>

          <div className="cc-inline-cta">

            <h2>
              Empower your customer experience today.
            </h2>

            <Link className="cc-text-link" to="/contact">
              Contact us <span>↗</span>
            </Link>

          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="cc-services cc-section">
        <div className="cc-container">
          <div className="cc-services-heading">
            <span className="cc-eyebrow">WHAT WE OFFER</span>
            <h2>Our <span>Call Center Services</span></h2>
            <p>Flexible customer experience solutions designed around your business.</p>
          </div>

          <div className="cc-service-cards">
            {services.map((service, index) => (
              <article className="cc-service-card" key={service.name}>
                <div className="cc-service-card-image">
                  <img
                    src={`${UPLOADS}/${service.image}`}
                    alt={service.name}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.visibility = "hidden";
                      console.error("Service image not found:", event.currentTarget.src);
                    }}
                  />
                </div>

                <div className="cc-service-card-content">
                  <span className="cc-service-number">
                    OUR SERVICES · {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{service.name}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MULTICHANNEL SUPPORT ================= */}

      <section className="cc-channels cc-section">
        <div className="cc-container cc-two-column">

          <div>
            <span className="cc-eyebrow">
              CONNECTED CONVERSATIONS
            </span>

            <h2>
              Elevate customer engagement with versatile{" "}
              <span>multi-channel support</span>
            </h2>
          </div>

          <div className="cc-channel-grid">

            {channels.map((channel, index) => (
              <div className="cc-channel" key={channel}>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{channel}</strong>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}

      <section className="cc-industries cc-section">
        <div className="cc-container">

          <span className="cc-eyebrow">
            INDUSTRIES WE SUPPORT
          </span>

          <h2>
            Solutions across <span>industries</span>
          </h2>

          <ul>
            {industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="cc-why cc-section">
        <div className="cc-container">

          <div className="cc-two-column">

            <div>
              <span className="cc-eyebrow">
                THE INTRACIA ADVANTAGE
              </span>

              <h2>
                Why are we a preferred call center services provider?
              </h2>
            </div>

            <p className="cc-lede">
              Whether it is inbound support, outbound telemarketing
              or technical helpdesk assistance, we are a one-stop
              provider for clients across the globe. Here are the
              benefits businesses get by partnering with us.
            </p>

          </div>

          <div className="cc-reasons">

            {reasons.map(([title, description], index) => (
              <article className="cc-reason" key={title}>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{title}</h3>

                <p>{description}</p>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="cc-final">
        <div className="cc-container cc-final-inner">

          <div>
            <span className="cc-eyebrow">
              LET'S GROW TOGETHER
            </span>

            <h2>
              Expand your business with outsourced{" "}
              <span>call center services</span>
            </h2>

            <p>
              Customer satisfaction is essential in a competitive
              market. We build solutions around each business’s needs
              to improve efficiency, so you can focus on your core mission.
            </p>
          </div>

          <Link
            className="cc-button cc-button-light"
            to="/contact"
          >
            Contact us <span>↗</span>
          </Link>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="cc-footer">

        <div className="cc-container cc-footer-grid">

          {/* BRAND */}

          <div>

            <Link
              className="intracia-logo"
              to="/"
              aria-label="Intracia Technologies home"
            >
              <img
                className="intracia-brand-logo"
                src="/images/intracia-logo.png"
                alt="Intracia Technologies — Moving Ahead"
              />
            </Link>

            <p className="cc-footer-about">
              Empowering businesses with customer support, knowledge
              process outsourcing and call center solutions.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h4>Quick links</h4>

            <Link to="/">Home</Link>

            <Link to="/benefits">
              Benefits of outsourcing
            </Link>

            <Link to="/services/call-center">
              Call Center Services
            </Link>

            <Link to="/process">
              Our Process
            </Link>

            <Link to="/careers">
              Careers
            </Link>

            <Link to="/contact">
              Contact us
            </Link>

          </div>

          {/* SOCIAL MEDIA */}

          <div>

            <h4>Follow us</h4>

            <a
              href="https://twitter.com/intraciatech"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>

            <a
              href="https://www.facebook.com/IntraciaTechnologies/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>

            <a
              href="https://www.linkedin.com/company/intracia-technologies"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

          {/* CONTACT INFORMATION */}

          <div>

            <h4>Contact info</h4>

            <p>
              Intracia Technologies Pvt Ltd
              <br />
              BHIVE Workspace, No.112, AKR Tech Park, Kudlu Gate,
              Industrial Layout, Begur, Bengaluru, Karnataka 560068
            </p>

            <a href="tel:+919448428090">
              +91 9448428090
            </a>

            <a href="mailto:info@intraciatechnologies.com">
              info@intraciatechnologies.com
            </a>

          </div>

        </div>

        <div className="cc-copyright">
          Intracia Technologies © {new Date().getFullYear()}. All rights reserved.
        </div>

      </footer>

      {/* CONTACT TAB */}

      <Link
        to="/contact"
        className="intracia-side-contact"
      >
        CONTACT US
      </Link>

    </main>
  );
}