
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Benefits.css";

const SITE = "https://intraciatechnologies.com";
const UP = `${SITE}/wp-content/uploads/2024/04`;

const NAV_SERVICES = [
  { label: "Call Center Services", path: "/services/call-center" },
  { label: "Inbound Call Center Services", path: "/services/inbound" },
  { label: "Outbound Call Center Services", path: "/services/outbound" },
  { label: "Telemarketing Services", path: "/services/telemarketing" },
  { label: "Customer Support Services", path: "/services/customer-support" },
  { label: "Lead Generation Services", path: "/services/lead-generation" }
];

const SOCIALS = [
  ["Twitter", "https://twitter.com/intraciatech"],
  ["Facebook", "https://www.facebook.com/IntraciaTechnologies/"],
  ["LinkedIn", "https://www.linkedin.com/company/intracia-technologies"],
];

const BENEFITS = [
  {
    title: "Human Capital Mastery",
    text: "Our location gives us access to a deep pool of educated, digitally fluent people, and each year a new group of graduates joins with fresh ideas. Working here means being part of a community that cares about innovation and excellence in IT.",
    img: "contact-1024x492.jpg",
    alt: "Our team working together",
  },
  {
    title: "Diverse Innovation Hub",
    text: "Diverse backgrounds and strong education shape how we work. Different cultures and perspectives feed creativity and lead to solutions with global reach, and we make sure every voice is heard.",
    img: "GettyImages-638106552-1-1-1024x709.jpg",
    alt: "A diverse team collaborating",
  },
  {
    title: "Global Reach, Local Insight",
    text: "We pair knowledge of local markets with an international outlook and run smoothly across time zones. That lets us tailor solutions to each client's needs, wherever they are based.",
    img: "global-network-connection-world-map-point-and-line-composition-concept-of-global-business-illustration-free-vector-1024x724.jpg",
    alt: "World map with connected points",
  },
  {
    title: "Advanced Infrastructure: Pillars of Prosperity",
    text: "Modern telecom, power and transport links connect our operations and give teams the tools they need. Our facilities are built for collaboration and high performance, with sustainability and efficiency in mind.",
    img: "close-up-business-people-hands-together-teamwork-concept-1024x683.jpg",
    alt: "Business people with hands together",
  },
  {
    title: "Excellence Uncompromised",
    text: "Our edge comes from the quality of our people, not just their numbers. Our professionals are known for their IT and software skills, and we encourage continuous learning to stay ahead of industry change.",
    img: "6c32c2e0bf4fe01a389e697b3efbeb5e.jpg",
    alt: "Professionals at work",
  },
  {
    title: "Economical Excellence",
    text: "We deliver high-quality services at prices that stay reasonable. Clients get strong value for their investment without trading away quality.",
    img: "hand-holding-growth-arrow-with-coins-1024x683.jpg",
    alt: "Hand holding a growth arrow with coins",
  },
  {
    title: "Time Zone Advantage",
    text: "Our location offers favorable time differences with the US and other Western countries. That supports round-the-clock service and faster turnaround for global clients.",
    img: "time-is-passing-blue-hourglass-close-up-1024x683.jpg",
    alt: "Blue hourglass",
  },
];

export default function BenefitsPage() {
  const [menu, setMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenu(false);
    setServicesOpen(false);
  };

  return (
    <div className="bp">

      {/* HEADER */}
      <header className="hdr">
        <div className="wrap hdr-in">

          <Link
            className="logo"
            to="/"
            aria-label="Intracia Technologies home"
            onClick={closeMenu}
          >
            <img
              className="brand-logo"
              src="/images/intracia-logo.png"
              alt="Intracia Technologies"
            />
          </Link>

          <button
            type="button"
            className="menu-btn"
            aria-expanded={menu}
            aria-controls="benefits-nav"
            onClick={() => setMenu(!menu)}
          >
            {menu ? "Close" : "Menu"}
          </button>

          <nav
            id="benefits-nav"
            className={`nav${menu ? " open" : ""}`}
            aria-label="Primary navigation"
          >

            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link
              to="/benefits"
              className="active-link"
              aria-current="page"
              onClick={closeMenu}
            >
              Benefits of outsourcing
            </Link>

            {/* SERVICES DROPDOWN */}
            <div
              className={`bp-services-dropdown${servicesOpen ? " dropdown-open" : ""}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div className="bp-services-heading">
                <Link
                  to="/services/call-center"
                  onClick={closeMenu}
                >
                  Services
                </Link>

                <button
                  type="button"
                  className="bp-dropdown-toggle"
                  aria-label="Toggle services menu"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  ⌄
                </button>
              </div>

              <div className="bp-services-menu">
                {NAV_SERVICES.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={closeMenu}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/process" onClick={closeMenu}>
              Our Process
            </Link>

            <Link to="/careers" onClick={closeMenu}>
              Careers
            </Link>

            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>

            <Link
              className="nav-cta"
              to="/contact"
              onClick={closeMenu}
            >
              Get in touch <span>↗</span>
            </Link>

          </nav>
        </div>
      </header>


      <main>

        {/* HERO */}
        <section className="hero">
          <div className="wrap">

            <span className="benefits-eyebrow">
              GROWTH THROUGH OUTSOURCING
            </span>

            <h1>
              Surpassing <span>Geographical Limits</span>
            </h1>

            <p className="sub">
              Growth Potential: Leveraging the Benefits of BPO Services
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn">
                Let's Talk <span>↗</span>
              </Link>

              <a href="#outsourcing-benefits" className="btn btn-outline">
                Explore Benefits
              </a>
            </div>

            <div className="hero-img">
              <img
                src={`${UP}/Insurance-BPO-Market-Growth-Through-2029-MCVO-BPO-News-1024x683.jpg`}
                alt="Business outsourcing and growth"
              />
            </div>

          </div>
        </section>


        {/* INTRODUCTION */}
        <section className="intro">
          <div className="wrap g">

            <div className="a">
              <span className="benefits-eyebrow">
                WHY INTRACIA
              </span>

              <h2>
                Supercharge Your Success with Our
                <span> Outsourcing Solutions</span>
              </h2>
            </div>

            <div className="b">
              <p className="lede">
                Intracia Technologies is a leading Indian provider of
                customer support and knowledge process outsourcing.
                Beyond routine support, transaction processing and call
                handling, we work as a strategic partner focused on
                your growth.
              </p>

              <p className="muted">
                Our solutions scale as your needs change, protect your
                confidential data with strong security protocols, and
                use digital workflows that also help reduce your
                carbon footprint.
              </p>
            </div>

          </div>
        </section>


        {/* BENEFITS LIST */}
        <section
          className="benefits-section"
          id="outsourcing-benefits"
          aria-label="Benefits of outsourcing with Intracia"
        >
          <div className="wrap">

            <div className="section-heading">
              <span className="benefits-eyebrow">
                THE ADVANTAGE
              </span>

              <h2>
                The Benefits of <span>Outsourcing</span>
              </h2>

              <p>
                Discover how the right outsourcing partner can help
                your business grow, adapt and deliver better customer
                experiences.
              </p>
            </div>

            <div className="list">

              {BENEFITS.map((benefit, index) => (
                <article
                  className={`item${index % 2 ? " flip" : ""}`}
                  key={benefit.title}
                >
                  <div className="g">

                    <div className="copy">

                      <div className="num">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <span className="benefit-label">
                        OUTSOURCING BENEFIT
                      </span>

                      <h3>{benefit.title}</h3>

                      <div className="benefit-line"></div>

                      <p className="muted">
                        {benefit.text}
                      </p>

                    </div>

                    <div className="pic">
                      <img
                        src={`${UP}/${benefit.img}`}
                        alt={benefit.alt}
                        loading="lazy"
                      />
                    </div>

                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="cta">
          <div className="wrap cta-inner">

            <div>
              <span className="benefits-eyebrow">
                LET'S GROW TOGETHER
              </span>

              <h2>Get in Touch With Us!</h2>

              <p>
                Ready to make a lasting impact? Join our team and help
                drive our story forward.
              </p>
            </div>

            <Link to="/contact" className="btn">
              Contact us <span>↗</span>
            </Link>

          </div>
        </section>

      </main>


      {/* FOOTER */}
      <footer className="foot">
        <div className="wrap">

          <div className="cols">

            <div className="footer-brand">
              <Link className="logo" to="/">
                <img
                  className="brand-logo"
                  src="/images/intracia-logo.png"
                  alt="Intracia Technologies"
                />
              </Link>

              <p>
                Empowering businesses with cutting-edge knowledge
                process outsourcing and call center solutions.
              </p>
            </div>

            <div>
              <h4>Quick links</h4>

              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/benefits">Benefits of outsourcing</Link></li>
                <li><Link to="/services/call-center">Services</Link></li>
                <li><Link to="/process">Our Process</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
              </ul>
            </div>

            <div>
              <h4>Follow us</h4>

              <ul>
                {SOCIALS.map(([label, link]) => (
                  <li key={label}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Contact info</h4>

              <address>
                Intracia Technologies Pvt Ltd
                <br />
                BHIVE Workspace, No.112, AKR Tech Park, Kudlu Gate,
                Industrial Layout, Begur, Bengaluru, Karnataka 560068
                <br />
                <a href="tel:+919448428090">
                  +91 9448428090
                </a>
                <br />
                <a href="mailto:info@intraciatechnologies.com">
                  info@intraciatechnologies.com
                </a>
              </address>
            </div>

          </div>

          <div className="legal">
            Intracia Technologies © 2026. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}
