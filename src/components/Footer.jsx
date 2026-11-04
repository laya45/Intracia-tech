
import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="top">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="footer-logo-icon">✦</span>

              <span className="footer-logo-text">
                <strong>INTRACIA</strong>
                <small>TECHNOLOGIES</small>
              </span>
            </a>

            <p>
              Delivering customer-focused service solutions
              that help businesses build lasting relationships
              and grow with confidence.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                in
              </a>

              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                f
              </a>

              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                ◎
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Our Services</h3>

            <ul>
              <li><a href="/services">Inbound Call Center</a></li>
              <li><a href="/services">Outbound Call Center</a></li>
              <li><a href="/services">Customer Support</a></li>
              <li><a href="/services">Help Desk Services</a></li>
              <li><a href="/services">Telemarketing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Get in Touch</h3>

            <div className="footer-contact-item">
              <span className="footer-icon">⌖</span>
              <span>Contact us for our office location.</span>
            </div>

            <div className="footer-contact-item">
              <span className="footer-icon">☎</span>
              <a href="/contact">Request a callback</a>
            </div>

            <div className="footer-contact-item">
              <span className="footer-icon">✉</span>
              <a href="/contact">Send us an enquiry</a>
            </div>

            <a href="/contact" className="footer-contact-button">
              Contact Our Team <span>→</span>
            </a>
          </div>
        </div>

        {/* Call to action */}
        <div className="footer-banner">
          <div>
            <h3>Let's create better customer experiences.</h3>
            <p>
              Connect with our team to discuss your business needs.
            </p>
          </div>

          <a href="/contact">
            Let's Talk <span>→</span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            © {year} Intracia Technologies. All rights reserved.
          </p>

          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms &amp; Conditions</a>
          </div>

          <a className="footer-top-link" href="#top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
