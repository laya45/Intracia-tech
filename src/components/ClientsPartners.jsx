
import "./ClientsPartners.css";

const clients = [
  { name: "4", description: "Client Partner" },
  { name: "hj", description: "Business Partner" },
  { name: "cleartex", description: "Client Partner" },
  { name: "Xautocare", description: "Client Partner" },
  { name: "Dana", description: "Business Partner" },
];

function ClientsPartners() {
  return (
    <section className="clients-partners section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Relationships that matter</span>
          <h2>Building better business partnerships</h2>
        </div>

        <p className="section-description">
          We believe strong partnerships are built on trust,
          reliable service, and a commitment to customer
          satisfaction.
        </p>

        <div className="clients-partners-grid">
          {clients.map((client, index) => (
            <div
              className="client-partner-card"
              key={`${client.name}-${index}`}
            >
              <span className={`client-partner-logo client-logo-${index + 1}`}>
                {client.name}
              </span>
              <span className="client-partner-description">
                {client.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsPartners;
