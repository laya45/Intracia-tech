
import {
  ShieldCheck,
  Users,
  TrendingUp,
  Clock,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Experienced Professionals',
    description:
      'A customer-focused team committed to professional and consistent service.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Operations',
    description:
      'Flexible support solutions that can adapt to changing business requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Security-Conscious Processes',
    description:
      'Processes designed with confidentiality, responsible handling, and quality in mind.',
  },
  {
    icon: Clock,
    title: 'Flexible Support Coverage',
    description:
      'Support arrangements tailored to your customers, workflows, and operating needs.',
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section section" id="why-us">
      <div className="container why-container">
        <div className="why-visual">
          <div className="why-image">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85"
              alt="Customer support professionals collaborating"
              loading="lazy"
            />

            <div className="why-image-overlay"></div>

            <div className="why-image-caption">
              <BadgeCheck size={24} />

              <div>
                <strong>Service with purpose</strong>
                <p>Focused on better customer experiences</p>
              </div>
            </div>
          </div>

          <div className="why-floating-card">
            <div className="why-floating-icon">
              <ShieldCheck size={23} />
            </div>

            <div>
              <strong>A partner in your growth</strong>
              <p>Support aligned with your goals</p>
            </div>
          </div>

          <div className="why-decoration"></div>
        </div>

        <div className="why-content">
          <span className="why-label">
            <span></span>
            WHY INTRACIA TECHNOLOGIES
          </span>

          <h2>
            More Than Support.
            <br />
            <span>A Partner in Progress.</span>
          </h2>

          <p className="why-description">
            Outsourcing should do more than handle daily operations.
            It should help your business create better customer
            experiences, improve operational flexibility, and focus
            on what matters most.
          </p>

          <div className="why-reasons">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div className="why-reason" key={reason.title}>
                  <div className="why-reason-icon">
                    <Icon size={21} />
                  </div>

                  <div className="why-reason-text">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>

                  <CheckCircle2
                    className="why-check"
                    size={18}
                  />
                </div>
              );
            })}
          </div>

          <a href="#contact" className="why-button">
            Find Your Solution
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
