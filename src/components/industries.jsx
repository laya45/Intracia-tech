
import {
  HeartPulse,
  ShoppingCart,
  Landmark,
  Building2,
  Plane,
  Code2,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';

const industries = [
  {
    title: 'Healthcare',
    description:
      'Support patient enquiries, appointment coordination, and responsive healthcare customer service.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85',
    icon: HeartPulse,
    number: '01',
  },
  {
    title: 'E-commerce & Retail',
    description:
      'Help shoppers with order enquiries, delivery updates, product questions, and returns.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85',
    icon: ShoppingCart,
    number: '02',
  },
  {
    title: 'Banking & Finance',
    description:
      'Provide customer assistance for account enquiries, service requests, and financial products.',
    image:
      'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=900&q=85',
    icon: Landmark,
    number: '03',
  },
  {
    title: 'Real Estate',
    description:
      'Help manage property enquiries, coordinate appointments, and follow up with prospective clients.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85',
    icon: Building2,
    number: '04',
  },
  {
    title: 'Travel & Hospitality',
    description:
      'Assist with booking enquiries, itinerary questions, reservations, and guest communication.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85',
    icon: Plane,
    number: '05',
  },
  {
    title: 'Technology & SaaS',
    description:
      'Support software users with product questions, technical requests, and customer onboarding.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
    icon: Code2,
    number: '06',
  },
  {
    title: 'Insurance',
    description:
      'Assist customers with policy enquiries, claim-related questions, and service follow-ups.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85',
    icon: ShieldCheck,
    number: '07',
  },
];

function Industries() {
  return (
    <section className="industries-section section" id="industries">
      <div className="container">
        <div className="industries-heading">
          <div>
            <span className="section-label">
              INDUSTRIES WE SUPPORT
            </span>

            <h2 className="section-title">
              Industry Knowledge.
              <br />
              <span className="industries-title-accent">
                Customer-Focused Solutions.
              </span>
            </h2>

            <p className="section-description">
              Every industry has different customer expectations.
              Our outsourcing solutions can be tailored to the
              workflows, service needs, and communication requirements
              of your business.
            </p>
          </div>

          <div className="industries-heading-note">
            <span className="industries-note-dot"></span>
            <p>Flexible solutions for diverse business needs</p>
          </div>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                className="industry-card"
                key={industry.number}
              >
                <div className="industry-image">
                  <img
                    src={industry.image}
                    alt={`${industry.title} industry`}
                    loading="lazy"
                  />

                  <div className="industry-image-overlay"></div>

                  <span className="industry-number">
                    {industry.number}
                  </span>

                  <div className="industry-icon">
                    <Icon size={21} />
                  </div>
                </div>

                <div className="industry-card-content">
                  <h3>{industry.title}</h3>

                  <p>{industry.description}</p>

                  <a
                    href="#contact"
                    className="industry-link"
                    aria-label={`Discuss ${industry.title} support`}
                  >
                    Discuss Your Needs
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="industries-bottom">
          <div>
            <span className="industries-bottom-label">
              YOUR BUSINESS. YOUR REQUIREMENTS.
            </span>

            <h3>
              Need support tailored to your industry?
            </h3>

            <p>
              Let's explore a solution that fits your customer
              experience and operational goals.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary">
            Talk to Our Team
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Industries;
