import React from "react";
import { Link } from "react-router-dom";
import "./Benefits.css";

const benefits = [
  {
    number: "01",
    title: "Human Capital Mastery",
    description:
      "Our location gives us access to a deep pool of educated, digitally fluent people. Every year, new graduates bring fresh ideas and perspectives, strengthening innovation and excellence in IT.",
    image:
      "https://intraciatechnologies.com/wp-content/uploads/2024/04/contact-1024x492.jpg",
  },
  {
    number: "02",
    title: "Diverse Innovation Hub",
    description:
      "Diverse backgrounds and strong education shape how we work. Different cultures and perspectives encourage creativity and lead to solutions with global reach.",
    image:
      "https://intraciatechnologies.com/wp-content/uploads/2024/04/GettyImages-638106552-1-1-1024x709.jpg",
  },
  {
    number: "03",
    title: "Global Reach, Local Insight",
    description:
      "We combine knowledge of local markets with an international outlook and operate smoothly across time zones. This helps us tailor solutions to clients wherever they are based.",
    image:
      "https://intraciatechnologies.com/wp-content/uploads/2024/04/global-network-connection-world-map-point-and-line-composition-concept-of-global-business-illustration-free-vector-1024x724.jpg",
  },
  {
    number: "04",
    title: "Advanced Infrastructure: Pillars of Prosperity",
    description:
      "Modern telecom, power and transport links connect our operations and give teams the tools they need. Our facilities support collaboration, high performance and sustainability.",
    image:
      "https://intraciatechnologies.com/wp-content/uploads/2024/04/close-up-business-people-hands-together-teamwork-concept-1024x683.jpg",
  },
  {
    number: "05",
    title: "Excellence Uncompromised",
    description:
      "Our strength comes from the quality of our people. We encourage continuous learning and professional development to stay ahead of industry changes.",
    image:
      "https://intraciatechnologies.com/wp-content/uploads/2024/04/6c32c2e0bf4fe01a389e697b3efbeb5e.jpg",
  },
  {
    number: "06",
    title: "Economical Excellence",
    description:
      "We deliver high-quality services at reasonable prices. Clients receive strong value for their investment without compromising service quality.",
    image:
      "https://intraciatechnologies.com/wp-content/uploads/2024/04/hand-holding-growth-arrow-with-coins-1024x683.jpg",
  },
  {
    number: "07",
    title: "Time Zone Advantage",
    description:
      "Our location offers favorable time differences with the US and other Western countries. This supports round-the-clock service and faster turnaround for global clients.",
    image:
      "https://intraciatechnologies.com/wp-content/uploads/2024/04/time-is-passing-blue-hourglass-close-up-1024x683.jpg",
  },
];

function Benefits() {
  return (
    <main className="intracia-site benefits-site">

      {/* HEADER — shared homepage navigation and branding */}
      <header className="intracia-header">
        <div className="intracia-header-inner">
          <Link
            className="intracia-logo"
            to="/"
            aria-label="Intracia Technologies home"
          >
            <span className="intracia-logo-mark">I</span>
            <span className="intracia-logo-words">
              <strong>INTRACIA</strong>
              <small>TECHNOLOGIES</small>
            </span>
          </Link>

          <nav className="intracia-nav" aria-label="Primary navigation">
            <Link to="/">Home</Link>
            <Link to="/benefits" className="intracia-current-page">
              Benefits of outsourcing
            </Link>
            <Link to="/services">Services</Link>
            <Link to="/process">Our Process</Link>
            <Link to="/contact">Contact</Link>
            <Link className="intracia-nav-cta" to="/contact">
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="benefits-hero">
        <div className="benefits-hero-content">
          <span className="benefits-eyebrow">
            GROWTH THROUGH OUTSOURCING
          </span>

          <h1>
            Surpassing
            <span> Geographical Limits</span>
          </h1>

          <p>
            Growth Potential: Leveraging the Benefits of BPO Services
          </p>

          <div className="benefits-hero-buttons">
            <Link to="/contact" className="benefits-primary-btn">
              Let's Talk <span>↗</span>
            </Link>
            <a href="#outsourcing-benefits" className="benefits-outline-btn">
              Explore Benefits
            </a>
          </div>

          <div className="benefits-hero-image">
            <img
              src="https://intraciatechnologies.com/wp-content/uploads/2024/04/Insurance-BPO-Market-Growth-Through-2029-MCVO-BPO-News-1024x683.jpg"
              alt="Business outsourcing and growth"
            />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="benefits-intro">
        <div className="benefits-container benefits-intro-grid">
          <div>
            <span className="benefits-eyebrow">WHY INTRACIA</span>
            <h2>
              Supercharge Your Success with Our{" "}
              <span>Outsourcing Solutions</span>
            </h2>
          </div>

          <div className="benefits-intro-copy">
            <p>
              Intracia Technologies is a leading Indian provider of customer
              support and knowledge process outsourcing. Beyond routine
              support, transaction processing and call handling, we work as a
              strategic partner focused on your growth.
            </p>

            <p>
              Our solutions scale as your needs change, protect your
              confidential data with strong security protocols, and use
              digital workflows that also help reduce your carbon footprint.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        className="benefits-details"
        id="outsourcing-benefits"
      >
        <div className="benefits-container">
          <div className="benefits-section-heading">
            <span className="benefits-eyebrow">THE ADVANTAGE</span>
            <h2>
              The Benefits of <span>Outsourcing</span>
            </h2>
            <p>
              Discover how the right outsourcing partner can help your
              business grow, adapt and deliver better customer experiences.
            </p>
          </div>

          <div className="benefits-cards">
            {benefits.map((item, index) => (
              <article
                className={`benefit-card ${index % 2 ? "reverse" : ""}`}
                key={item.number}
              >
                <div className="benefit-card-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                  <span className="benefit-image-number">
                    {item.number}
                  </span>
                </div>

                <div className="benefit-card-content">
                  <span className="benefit-card-label">
                    OUTSOURCING ADVANTAGE {item.number}
                  </span>

                  <div className="benefit-small-line"></div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="benefits-cta">
        <div className="benefits-container benefits-cta-inner">
          <div>
            <span className="benefits-eyebrow">LET'S WORK TOGETHER</span>
            <h2>
              Ready to take your business to the <span>next level?</span>
            </h2>
            <p>
              Let's build smarter customer experiences and create new
              opportunities for your business.
            </p>
          </div>

          <Link to="/contact" className="benefits-primary-btn">
            Get in Touch <span>↗</span>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="benefits-footer">
        <div className="benefits-container benefits-footer-grid">
          <div className="benefits-footer-about">
            <Link to="/" className="intracia-logo" aria-label="Intracia Technologies home">
              <span className="intracia-logo-mark">I</span>
              <span className="intracia-logo-words">
                <strong>INTRACIA</strong>
                <small>TECHNOLOGIES</small>
              </span>
            </Link>

            <p>
              Empowering businesses with customer support, knowledge process
              outsourcing and call center solutions.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/benefits">Benefits of Outsourcing</Link>
            <Link to="/services">Services</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div>
            <h4>Contact Info</h4>
            <p>
              Intracia Technologies Pvt Ltd
              <br />
              BHIVE Workspace, No.112, AKR Tech Park, Kudlu Gate,
              Bengaluru, Karnataka 560068
            </p>
            <a href="tel:+919448428090">+91 9448428090</a>
            <a href="mailto:info@intraciatechnologies.com">
              info@intraciatechnologies.com
            </a>
          </div>
        </div>

        <div className="benefits-copyright">
          © 2026 Intracia Technologies. All rights reserved.
        </div>
      </footer>

     

    </main>
  );
}

export default Benefits;