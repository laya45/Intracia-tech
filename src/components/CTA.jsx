
import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Headset,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-glow cta-glow-one"></div>
      <div className="cta-glow cta-glow-two"></div>

      <div className="container cta-container">
        <div className="cta-content">
          <div className="cta-eyebrow">
            <span className="cta-status-dot"></span>
            LET'S BUILD SOMETHING BETTER
          </div>

          <h2>
            Ready to Elevate
            <br />
            Your <span>Customer Experience?</span>
          </h2>

          <p className="cta-description">
            Let's discuss how Intracia Technologies can help your business
            deliver exceptional customer support, strengthen relationships,
            and create lasting value.
          </p>

          <div className="cta-actions">
            <a href="/contact" className="cta-primary-btn">
              Talk to Our Team
              <ArrowRight size={18} />
            </a>

            <a href="/services" className="cta-secondary-btn">
              Explore Our Services
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="cta-benefits">
            <div className="cta-benefit">
              <span className="cta-benefit-icon">
                <Headset size={17} />
              </span>
              <span>Customer-focused solutions</span>
            </div>

            <div className="cta-benefit">
              <span className="cta-benefit-icon">
                <MessageCircle size={17} />
              </span>
              <span>Personalised consultation</span>
            </div>

            <div className="cta-benefit">
              <span className="cta-benefit-icon">
                <ShieldCheck size={17} />
              </span>
              <span>Quality-driven service</span>
            </div>
          </div>
        </div>

        <div className="cta-visual">
          <div className="cta-orbit cta-orbit-outer"></div>
          <div className="cta-orbit cta-orbit-inner"></div>

          <div className="cta-visual-card">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85"
              alt="Business professionals collaborating on a project"
              className="cta-team-image"
            />

            <div className="cta-image-shade"></div>

            <div className="cta-floating-card">
              <div className="cta-floating-icon">
                <Headset size={21} />
              </div>

              <div>
                <strong>Let's Connect</strong>
                <p>Your next step starts here.</p>
              </div>

              <ArrowUpRight size={20} className="cta-floating-arrow" />
            </div>
          </div>

          <div className="cta-decoration cta-decoration-top"></div>
          <div className="cta-decoration cta-decoration-bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
