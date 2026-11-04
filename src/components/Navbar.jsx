
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const services = [
  {
    label: "Call Center Services",
    url: "/services/call-center",
  },
  {
    label: "Inbound Call Center",
    url: "/services/inbound-call-center",
  },
  {
    label: "Outbound Call Center",
    url: "/services/outbound-call-center",
  },
  {
    label: "Telemarketing",
    url: "/services/telemarketing",
  },
  {
    label: "Lead Generation",
    url: "/services/lead-generation",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="it-navbar">
      <div className="it-navbar-topbar">
        <div className="it-navbar-container it-navbar-topbar-inner">
          <span>
            Business Process Outsourcing Solutions
          </span>

          <a href="mailto:info@intraciatechnologies.com">
            info@intraciatechnologies.com
          </a>
        </div>
      </div>

      <div className="it-navbar-main">
        <div className="it-navbar-container it-navbar-main-inner">
          <Link
            to="/"
            className="it-navbar-brand"
            aria-label="Intracia Technologies Home"
            onClick={closeMenu}
          >
            {/* Replace this wordmark with your logo image if available. */}
            <span className="it-navbar-brand-mark">I</span>

            <span className="it-navbar-brand-text">
              <strong>INTRACIA</strong>
              <small>TECHNOLOGIES</small>
            </span>
          </Link>

          <button
            type="button"
            className={`it-navbar-toggle ${
              menuOpen ? "is-open" : ""
            }`}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="it-navbar-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="it-navbar-navigation"
            className={`it-navbar-navigation ${
              menuOpen ? "is-open" : ""
            }`}
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `it-navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <a
              href="/#benefits"
              className="it-navbar-link"
              onClick={closeMenu}
            >
              Benefits
            </a>

            <div
              className={`it-navbar-dropdown ${
                servicesOpen ? "is-open" : ""
              }`}
            >
              <button
                type="button"
                className="it-navbar-dropdown-trigger"
                aria-expanded={servicesOpen}
                aria-controls="it-navbar-services-menu"
                onClick={() =>
                  setServicesOpen((open) => !open)
                }
              >
                Services
                <span
                  className="it-navbar-chevron"
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>

              <div
                id="it-navbar-services-menu"
                className="it-navbar-dropdown-menu"
              >
                <Link
                  to="/services"
                  className="it-navbar-dropdown-heading"
                  onClick={closeMenu}
                >
                  Explore All Services
                  <span aria-hidden="true">→</span>
                </Link>

                {services.map((service) => (
                  <Link
                    key={service.url}
                    to={service.url}
                    onClick={closeMenu}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="/#process"
              className="it-navbar-link"
              onClick={closeMenu}
            >
              Our Process
            </a>

            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `it-navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Careers
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `it-navbar-contact ${
                  isActive ? "active" : ""
                }`
              }
              onClick={closeMenu}
            >
              Contact Us
              <span aria-hidden="true">↗</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
