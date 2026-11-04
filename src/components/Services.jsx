
import {
  PhoneIncoming,
  PhoneOutgoing,
  Headset,
  MonitorCog,
  Megaphone,
  CalendarCheck,
  PhoneCall,
  ChartNoAxesCombined,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    number: '01',
    icon: PhoneIncoming,
    title: 'Inbound Call Center Services',
    description:
      'Handle incoming customer calls with professional support, product information, order assistance, and responsive service.',
    tags: ['Customer Care', 'Call Handling'],
  },
  {
    number: '02',
    icon: PhoneOutgoing,
    title: 'Outbound Call Center Services',
    description:
      'Build customer relationships through outbound calling, follow-ups, customer surveys, and proactive communication.',
    tags: ['Follow-ups', 'Engagement'],
  },
  {
    number: '03',
    icon: Headset,
    title: 'Customer Support Services',
    description:
      'Help customers resolve questions and concerns through dependable support focused on satisfaction and retention.',
    tags: ['Customer Experience', 'Retention'],
  },
  {
    number: '04',
    icon: MonitorCog,
    title: 'Help Desk Services',
    description:
      'Provide structured assistance for technical questions, troubleshooting, service requests, and issue resolution.',
    tags: ['Technical Support', 'Resolution'],
  },
  {
    number: '05',
    icon: Megaphone,
    title: 'Telemarketing Services',
    description:
      'Support business outreach through prospect communication, lead qualification, and campaign execution.',
    tags: ['Lead Generation', 'Outreach'],
  },
  {
    number: '06',
    icon: CalendarCheck,
    title: 'Appointment Setting Services',
    description:
      'Coordinate meetings, schedule appointments, and help your sales and service teams use their time effectively.',
    tags: ['Scheduling', 'Coordination'],
  },
  {
    number: '07',
    icon: PhoneCall,
    title: 'Answering Services',
    description:
      'Help ensure customer calls are answered professionally and messages are routed to the right people.',
    tags: ['Call Answering', 'Messages'],
  },
  {
    number: '08',
    icon: ChartNoAxesCombined,
    title: 'Call Center Consulting',
    description:
      'Identify opportunities to improve call center workflows, service processes, and customer support operations.',
    tags: ['Process Improvement', 'Strategy'],
  },
];

function Services() {
  return (
    <section className="services-section section" id="services">
      <div className="container">
        <div className="services-heading">
          <div className="services-heading-content">
            <span className="section-label">
              WHAT WE DO
            </span>

            <h2 className="section-title">
              Outsourcing Solutions
              <br />
              <span className="services-title-accent">
                Built Around Your Business
              </span>
            </h2>

            <p className="section-description">
              From everyday customer enquiries to specialized support
              operations, our services help businesses create more
              consistent and dependable customer experiences.
            </p>
          </div>

          <a href="#contact" className="services-heading-link">
            Discuss Your Requirements
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.number}
              >
                <div className="service-card-top">
                  <div className="service-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span className="service-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span className="service-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="service-card-link"
                  aria-label={`Enquire about ${service.title}`}
                >
                  Explore Service
                  <ArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>

        <div className="services-bottom">
          <div className="services-bottom-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <p>
            Looking for a solution tailored to your operations?
          </p>

          <a href="#contact">
            Let's discuss your needs
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
 