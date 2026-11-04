
import {
  ArrowRight,
  ArrowUpRight,
  Headset,
  ShieldCheck,
  Clock3,
  Users,
} from 'lucide-react';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-label">
            <span className="hero-label-dot"></span>
            YOUR CUSTOMER EXPERIENCE PARTNER
          </div>

          <h1>
            Exceptional Support.
            <br />
            <span>Stronger Business.</span>
          </h1>

          <p className="hero-description">
            Transform customer interactions into lasting relationships
            with intelligent outsourcing solutions designed to help
            your business grow, scale, and deliver exceptional service.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Let's Talk Business
              <ArrowRight size={18} />
            </a>

            <a href="#services" className="hero-secondary-link">
              Explore Our Services
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-icon">
              <ShieldCheck size={19} />
            </div>

            <div>
              <strong>Customer-first approach</strong>
              <p>Solutions built around your business needs</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="https://intraciatechnologies.com/wp-content/uploads/2024/04/colleagues-with-headphones-working-call-center-office-scaled.jpg"
              alt="Customer support professionals working in a call center"
            />

            <div className="hero-image-overlay"></div>

            <div className="hero-image-caption">
              <span className="caption-icon">
                <Headset size={21} />
              </span>

              <div>
                <strong>Every interaction matters</strong>
                <p>Delivering better customer experiences</p>
              </div>
            </div>
          </div>

          <div className="hero-floating-card">
            <div className="floating-card-top">
              <div className="floating-card-icon">
                <Users size={20} />
              </div>

              <span className="floating-card-status">
                Customer focused
              </span>
            </div>

            <h3>Support that scales with you.</h3>

            <div className="floating-card-divider"></div>

            <div className="floating-card-bottom">
              <Clock3 size={17} />
              <span>Flexible support solutions</span>
            </div>
          </div>

          <div className="hero-decoration hero-decoration-one"></div>
          <div className="hero-decoration hero-decoration-two"></div>
        </div>
      </div>

      <div className="hero-bottom container">
        <span>BUILT AROUND YOUR CUSTOMERS</span>
        <div></div>
        <span>DESIGNED FOR BUSINESS GROWTH</span>
      </div>
    </section>
  );
}

export default Hero;
