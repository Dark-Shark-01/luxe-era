import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ServiceCard({ service, index = 0 }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-card-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="service-card-category">
          {service.category === "complete"
            ? "Complete Solution"
            : service.category}
        </span>
      </div>

      <div className="service-card-content">
        <h3>{service.title}</h3>

        <p>
          {service.shortDescription ||
            "A carefully planned solution designed around your requirements."}
        </p>
      </div>

      {service.features?.length > 0 && (
        <ul className="service-card-features">
          {service.features.slice(0, 4).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}

      <Link
        to={`/services#${service.id}`}
        className="service-card-link"
        aria-label={`Explore ${service.title}`}
      >
        <span>Explore service</span>
        <ArrowUpRight size={18} strokeWidth={1.4} />
      </Link>
    </article>
  );
}

export default ServiceCard;