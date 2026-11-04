
import { useState } from "react";
import "./Home.css";

const services = [
  {
    number: "01",
    title: "Inbound Call Center",
    text: "Handle customer calls, enquiries, product questions, and service requests with a professional team.",
  },
  {
    number: "02",
    title: "Outbound Call Center",
    text: "Support customer follow-ups, outreach campaigns, feedback collection, and business communication.",
  },
  {
    number: "03",
    title: "Customer Support",
    text: "Deliver consistent assistance to improve customer satisfaction and build long-term relationships.",
  },
  {
    number: "04",
    title: "Helpdesk Services",
    text: "Provide structured assistance for customer concerns, service issues, and support requests.",
  },
  {
    number: "05",
    title: "Telemarketing",
    text: "Connect with prospective customers through planned campaigns and targeted communication.",
  },
  {
    number: "06",
    title: "Lead Generation",
    text: "Help your sales team identify prospects, qualify leads, and support pipeline development.",
  },
  {
    number: "07",
    title: "Appointment Setting",
    text: "Coordinate appointments, confirmations, and follow-ups to keep your sales process organized.",
  },
  {
    number: "08",
    title: "Call Center Consulting",
    text: "Improve customer communication workflows, operational processes, and service delivery.",
  },
];

const benefits = [
  ["01", "Proven Expertise", "Experienced teams focused on dependable customer interactions and service quality."],
  ["02", "Industry Specialization", "Solutions designed around your business, customers, and operational requirements."],
  ["03", "Multichannel Support", "Reach customers across phone, email, live chat, SMS, and digital channels."],
  ["04", "Modern Technology", "Use structured workflows and technology to support consistent service delivery."],
  ["05", "Dedicated Teams", "A service team aligned with your processes, communication standards, and goals."],
  ["06", "Scalable Operations", "Adjust support capacity as your customer base and business requirements change."],
  ["07", "Data Security", "Apply appropriate processes to protect customer information and business data."],
];

const channels = [
  ["☎", "Phone Support"],
  ["✉", "Email Support"],
  ["▣", "SMS Support"],
  ["◎", "Social Media"],
  ["⌘", "Web Support"],
  ["▤", "Live Chat"],
];

const processSteps = [
  ["01", "Understand", "We discuss your business objectives, customer needs, and service requirements."],
  ["02", "Plan", "We define workflows, responsibilities, communication standards, and success measures."],
  ["03", "Launch", "We prepare the team and establish the agreed support process."],
  ["04", "Improve", "We review performance and identify opportunities to improve service quality."],
];

const whyChooseUs = [
  ["Domain Expertise", "Build customer service around your industry and customer expectations."],
  ["Knowledge Management", "Organize information and workflows to support consistent responses."],
  ["Transparent Pricing", "Discuss service scope and operational requirements clearly."],
  ["Scalability", "Adapt service capacity to changing business needs."],
  ["Virtual Operations", "Support business processes through flexible service delivery."],
  ["Customer Focus", "Keep service quality and customer experience at the center."],
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    requirement: "",
  });

  const closeMenu = () => setMenuOpen(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent("Website enquiry - Intracia Technologies");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nWebsite: ${formData.website || "Not provided"}\n\nBusiness requirement:\n${formData.requirement}`
    );
    window.location.href = `mailto:info@intraciatechnologies.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="intracia-site">
      {/* HEADER */}
      <header className="intracia-header">
        <div className="intracia-header-inner">
          <a className="intracia-logo" href="#home" onClick={closeMenu} aria-label="Intracia Technologies home">
            <span className="intracia-logo-mark">I</span>
            <span className="intracia-logo-words">
              <strong>INTRACIA</strong>
              <small>TECHNOLOGIES</small>
            </span>
          </a>

          <button
            className="intracia-menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`intracia-nav ${menuOpen ? "intracia-nav-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#benefits" onClick={closeMenu}>Benefits</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#process" onClick={closeMenu}>Our Process</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="intracia-nav-cta" href="#contact" onClick={closeMenu}>
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="intracia-hero" id="home">
        <div className="intracia-hero-shape intracia-hero-shape-one" />
        <div className="intracia-hero-shape intracia-hero-shape-two" />
        <div className="intracia-hero-shape intracia-hero-shape-three" />

        <div className="intracia-hero-inner">
          <div className="intracia-hero-copy">
            <span className="intracia-eyebrow">YOUR PARTNER IN CUSTOMER EXPERIENCE</span>
            <h1>
              BUSINESS PROCESS
              <br />
              OUTSOURCING
              <br />
              <span>(BPO) SERVICES</span>
            </h1>
            <p>
              Reliable outsourcing solutions that help your business
              improve customer experiences, streamline operations, and
              focus on sustainable growth.
            </p>
            <div className="intracia-hero-actions">
              <a href="#contact" className="intracia-button intracia-button-gradient">
                Discuss your requirements <span aria-hidden="true">↗</span>
              </a>
              <a href="#services" className="intracia-text-link">
                Explore our services <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="intracia-hero-proof">
              <span className="intracia-proof-dot" />
              Customer-focused outsourcing solutions
            </div>
          </div>

          <div className="intracia-hero-visual intracia-hero-agent-container">
            <div className="intracia-visual-glow" aria-hidden="true" />
            <img
              className="intracia-hero-agent-image"
              src="/images/better solution.png"
              alt="Customer support professional representing Intracia Technologies"
            />
            <div className="intracia-visual-badge">
              <span className="intracia-badge-icon" aria-hidden="true">✦</span>
              <div>
                <strong>Customer first</strong>
                <small>Service-focused teams</small>
              </div>
            </div>
          </div>
        </div>
        <a className="intracia-side-contact" href="#contact">CONTACT US</a>
      </section>

      {/* INTRODUCTION */}
      <section className="intracia-intro intracia-section" id="about">
        <div className="intracia-content-width intracia-intro-grid">
          <div className="intracia-section-title">
            <span className="intracia-eyebrow">ABOUT INTRACIA</span>
            <h2>Make every customer interaction <span>count.</span></h2>
          </div>
          <div className="intracia-intro-copy">
            <p>
              Business Process Outsourcing helps organizations delegate
              selected operational activities to a specialized service
              partner. Intracia Technologies supports businesses with
              customer communication and contact center services designed
              around their requirements.
            </p>
            <p>
              From inbound enquiries to outbound campaigns and multichannel
              support, our goal is to help businesses deliver a consistent
              customer experience while keeping their teams focused on
              their core priorities.
            </p>
            <a className="intracia-inline-link" href="#services">
              Discover our solutions <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="intracia-intro-band">
          <div className="intracia-content-width intracia-intro-band-inner">
            <div><span>01</span><strong>Customer-focused service</strong></div>
            <div><span>02</span><strong>Flexible support solutions</strong></div>
            <div><span>03</span><strong>Process-driven delivery</strong></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="intracia-section intracia-services" id="services">
        <div className="intracia-content-width">
          <div className="intracia-section-heading">
            <span className="intracia-eyebrow">WHAT WE DO</span>
            <h2>Outsourcing solutions for <span>better business.</span></h2>
            <p>
              Explore services that can help your team manage customer
              interactions, support sales activities, and improve service delivery.
            </p>
          </div>

          <div className="intracia-service-grid">
            {services.map((service) => (
              <article className="intracia-service-card" key={service.number}>
                <div className="intracia-card-topline">
                  <span className="intracia-card-number">{service.number}</span>
                  <span className="intracia-card-arrow" aria-hidden="true">↗</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" aria-label={`Enquire about ${service.title}`}>
                  Enquire about this service <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="intracia-section intracia-benefits" id="benefits">
        <div className="intracia-content-width">
          <div className="intracia-section-heading">
            <span className="intracia-eyebrow">WHY OUTSOURCE</span>
            <h2>A smarter way to support <span>your customers.</span></h2>
            <p>
              Outsourcing can give your organization access to dedicated
              support capabilities and flexible operational resources.
            </p>
          </div>

          <div className="intracia-benefit-grid">
            {benefits.map(([number, title, text]) => (
              <article className="intracia-benefit-card" key={number}>
                <span className="intracia-benefit-number">{number}</span>
                <div className="intracia-benefit-line" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS AND PARTNERS */}
      <section className="intracia-section intracia-clients" id="clients">
        <div className="intracia-content-width">
          <div className="intracia-section-heading">
            <span className="intracia-eyebrow">PARTNERSHIPS</span>
            <h2>Built on collaboration and <span>trust.</span></h2>
            <p>
              Strong business relationships begin with clear communication,
              dependable delivery, and a shared focus on customer experience.
            </p>
          </div>
          <div className="intracia-client-note">
            <span className="intracia-client-symbol">✦</span>
            <div>
              <h3>Let's build a successful partnership.</h3>
              <p>
                Contact our team to discuss your business needs and the
                support solutions that fit your goals.
              </p>
            </div>
            <a href="#contact" className="intracia-button intracia-button-outline">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="intracia-section intracia-mission" id="mission">
        <div className="intracia-content-width intracia-mission-grid">
          <article className="intracia-mission-card">
            <span className="intracia-eyebrow">OUR MISSION</span>
            <div className="intracia-mission-symbol">↗</div>
            <h2>Make business communication work better.</h2>
            <p>
              Our mission is to help businesses provide reliable customer
              support through structured processes, professional service,
              and solutions aligned with their needs.
            </p>
          </article>
          <article className="intracia-vision-card">
            <span className="intracia-eyebrow">OUR VISION</span>
            <div className="intracia-mission-symbol">✦</div>
            <h2>Build lasting customer relationships.</h2>
            <p>
              Our vision is to be a trusted outsourcing partner that
              contributes to better customer experiences and sustainable
              business relationships.
            </p>
          </article>
        </div>
      </section>

      {/* MULTICHANNEL SUPPORT */}
      <section className="intracia-section intracia-channels" id="channels">
        <div className="intracia-content-width">
          <div className="intracia-section-heading">
            <span className="intracia-eyebrow">CONNECTED EXPERIENCES</span>
            <h2>Support across the channels <span>customers use.</span></h2>
            <p>
              Provide convenient ways for customers to get in touch and
              receive assistance across different communication channels.
            </p>
          </div>
          <div className="intracia-channel-grid">
            {channels.map(([icon, title]) => (
              <div className="intracia-channel-card" key={title}>
                <span className="intracia-channel-icon" aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INTRACIA */}
      <section className="intracia-section intracia-why" id="why-intracia">
        <div className="intracia-content-width intracia-why-layout">
          <div className="intracia-why-intro">
            <span className="intracia-eyebrow">THE INTRACIA APPROACH</span>
            <h2>Support designed around <span>your business.</span></h2>
            <p>
              Every organization has different customers, processes, and
              priorities. We start by understanding those needs and shaping
              the support approach around them.
            </p>
            <a href="#contact" className="intracia-button intracia-button-gradient">
              Talk to our team <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="intracia-why-list">
            {whyChooseUs.map(([title, text], index) => (
              <article className="intracia-why-item" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="intracia-section intracia-process" id="process">
        <div className="intracia-content-width">
          <div className="intracia-section-heading">
            <span className="intracia-eyebrow">HOW WE WORK</span>
            <h2>A clear process from <span>planning to delivery.</span></h2>
            <p>
              A structured approach helps align service delivery with your
              requirements and keeps expectations clear.
            </p>
          </div>
          <div className="intracia-process-grid">
            {processSteps.map(([number, title, text]) => (
              <article className="intracia-process-step" key={number}>
                <span className="intracia-process-number">{number}</span>
                <div className="intracia-process-connector" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA AND ENQUIRY FORM */}
      <section className="intracia-section intracia-contact" id="contact">
        <div className="intracia-content-width intracia-contact-grid">
          <div className="intracia-contact-copy">
            <span className="intracia-eyebrow">LET'S TALK BUSINESS</span>
            <h2>Ready to improve your <span>customer experience?</span></h2>
            <p>
              Tell us about your business requirements. Our team can discuss
              your goals and help you explore a suitable support solution.
            </p>

            <div className="intracia-contact-details">
              <a href="mailto:info@intraciatechnologies.com">
                <span>EMAIL</span>
                info@intraciatechnologies.com
              </a>
              <a href="tel:+919448428090">
                <span>PHONE</span>
                +91 9448428090
              </a>
              <div>
                <span>OFFICE</span>
                BHIVE Workspace, AKR Tech Park, Kudlu Gate,
                Bengaluru, Karnataka 560068
              </div>
            </div>
          </div>

          <form className="intracia-contact-form" onSubmit={handleSubmit}>
            <h3>Send us an enquiry</h3>
            <p>Share a few details and tell us how we can help.</p>

            <label>
              Your name *
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email address *
              <input
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Phone number *
              <input
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Company website
              <input
                name="website"
                type="text"
                placeholder="https://yourcompany.com"
                value={formData.website}
                onChange={handleChange}
              />
            </label>

            <label>
              Business requirements *
              <textarea
                name="requirement"
                placeholder="Tell us about your requirements..."
                rows={4}
                value={formData.requirement}
                onChange={handleChange}
                required
              />
            </label>

            <button className="intracia-button intracia-button-gradient" type="submit">
              Send enquiry <span aria-hidden="true">↗</span>
            </button>
            <small className="intracia-form-note">
              Your email application will open with your enquiry details.
            </small>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="intracia-footer">
        <div className="intracia-content-width">
          <div className="intracia-footer-main">
            <div className="intracia-footer-brand">
              <a className="intracia-logo" href="#home">
                <span className="intracia-logo-mark">I</span>
                <span className="intracia-logo-words">
                  <strong>INTRACIA</strong>
                  <small>TECHNOLOGIES</small>
                </span>
              </a>
              <p>
                Customer-focused outsourcing solutions designed to help
                businesses improve service delivery and customer experience.
              </p>
            </div>

            <div className="intracia-footer-column">
              <h3>Explore</h3>
              <a href="#about">About us</a>
              <a href="#services">Our services</a>
              <a href="#benefits">Benefits of outsourcing</a>
              <a href="#process">Our process</a>
            </div>

            <div className="intracia-footer-column">
              <h3>Our services</h3>
              <a href="#services">Call center services</a>
              <a href="#services">Customer support</a>
              <a href="#services">Telemarketing</a>
              <a href="#services">Lead generation</a>
            </div>

            <div className="intracia-footer-column">
              <h3>Get in touch</h3>
              <a href="mailto:info@intraciatechnologies.com">info@intraciatechnologies.com</a>
              <a href="tel:+919448428090">+91 9448428090</a>
              <a href="#contact">Contact our team</a>
            </div>
          </div>

          <div className="intracia-footer-bottom">
            <p>© {new Date().getFullYear()} Intracia Technologies. All rights reserved.</p>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
 