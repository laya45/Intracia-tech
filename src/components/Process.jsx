
import {
  Search,
  ClipboardList,
  Users,
  Rocket,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    subtitle: 'Understand your business',
    description:
      'We learn about your business goals, customer expectations, existing workflows, and support requirements.',
    icon: Search,
    duration: 'Understand',
  },
  {
    number: '02',
    title: 'Planning',
    subtitle: 'Design the right approach',
    description:
      'We outline service requirements, communication workflows, operational priorities, and implementation plans.',
    icon: ClipboardList,
    duration: 'Strategise',
  },
  {
    number: '03',
    title: 'Team Setup',
    subtitle: 'Prepare for delivery',
    description:
      'We organise the team, define responsibilities, and prepare the processes and training needed for service delivery.',
    icon: Users,
    duration: 'Prepare',
  },
  {
    number: '04',
    title: 'Launch',
    subtitle: 'Put the plan into action',
    description:
      'We begin service delivery, coordinate workflows, and monitor the initial operations for a smooth transition.',
    icon: Rocket,
    duration: 'Implement',
  },
  {
    number: '05',
    title: 'Optimisation',
    subtitle: 'Improve continuously',
    description:
      'We review feedback, identify improvement opportunities, and refine processes as business needs evolve.',
    icon: TrendingUp,
    duration: 'Improve',
  },
];

function Process() {
  return (
    <section className="process-section section" id="process">
      <div className="container">
        <div className="process-heading">
          <span className="section-label">
            HOW WE WORK
          </span>

          <h2 className="section-title">
            A Clear Process.
            <br />
            <span className="process-title-accent">
              A Stronger Partnership.
            </span>
          </h2>

          <p className="section-description">
            Every successful outsourcing engagement starts with
            understanding your needs. Our structured approach helps
            guide the journey from initial discovery to continuous
            improvement.
          </p>
        </div>

        <div className="process-timeline">
          <div className="process-connector"></div>

          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                className="process-step"
                key={step.number}
              >
                <div className="process-step-marker">
                  <div className="process-step-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className="process-step-number">
                    {step.number}
                  </span>
                </div>

                <div className="process-step-content">
                  <span className="process-step-label">
                    {step.duration}
                  </span>

                  <h3>{step.title}</h3>

                  <h4>{step.subtitle}</h4>

                  <p>{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="process-bottom">
          <div className="process-bottom-icon">
            <CheckCircle2 size={25} />
          </div>

          <div className="process-bottom-content">
            <h3>Ready to start your outsourcing journey?</h3>
            <p>
              Let's discuss your requirements and explore the right
              approach for your business.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary">
            Start a Conversation
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Process;
