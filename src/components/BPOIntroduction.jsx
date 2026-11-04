
import "./BPOIntroduction.css";

const BPOIntroduction = () => {
  const benefits = [
    {
      number: "01",
      title: "Reduce Operational Costs",
      description:
        "Reduce recruitment, training, infrastructure, and day-to-day operating expenses with flexible outsourcing solutions.",
    },
    {
      number: "02",
      title: "Focus on Core Business",
      description:
        "Let our experienced team manage routine business operations while your team focuses on growth and strategy.",
    },
    {
      number: "03",
      title: "Scale with Confidence",
      description:
        "Adjust your support capacity as your business grows without the complexity of building an entire in-house team.",
    },
  ];

  return (
    <section className="bpo-intro section" id="benefits">
      <div className="container">
        <div className="bpo-intro-grid">
          <div className="bpo-intro-content">
            <span className="eyebrow">A smarter way to work</span>

            <h2>
              Business operations,
              <span> made simpler.</span>
            </h2>

            <p className="bpo-intro-lead">
              Your business deserves the time and resources to
              focus on what matters most. Intracia Technologies
              provides business process outsourcing solutions
              designed around your operational needs.
            </p>

            <p>
              From customer interactions and telemarketing to
              helpdesk and back-office support, our approach
              combines trained professionals, structured
              processes, and scalable service delivery.
            </p>

            <a href="#services" className="btn btn-primary">
              Explore Our Services <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="bpo-intro-benefits">
            {benefits.map((benefit) => (
              <article className="bpo-benefit-card" key={benefit.number}>
                <span className="bpo-benefit-number">
                  {benefit.number}
                </span>

                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>

                <span className="bpo-benefit-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BPOIntroduction;
