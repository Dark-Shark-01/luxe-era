import { ArrowUpRight } from "lucide-react";

import { services } from "../../data/services";
import AnimatedReveal from "../ui/AnimatedReveal";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function ServicesPreview() {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="services-preview">
      <Container>
        <AnimatedReveal>
          <SectionHeading
            eyebrow="What We Do"
            title="From structure to finishing touches, every detail matters."
            description="A complete range of construction and interior solutions designed to turn your vision into a considered, functional space."
          />
        </AnimatedReveal>

        <div className="services-preview-grid">
          {featuredServices.map((service, index) => (
            <AnimatedReveal key={service.id} delay={index * 80}>
              <article className="service-card">
                <div className="service-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="service-card-content">
                  <p className="service-card-category">
                    {service.category}
                  </p>

                  <h3>{service.title}</h3>

                  <p>{service.shortDescription}</p>

                  <a href="/services" aria-label={`Explore ${service.title}`}>
                    <span>Explore Service</span>
                    <ArrowUpRight size={17} strokeWidth={1.8} />
                  </a>
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal delay={200}>
          <div className="services-preview-footer">
            <a className="text-link" href="/services">
              <span>View All Services</span>
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}

export default ServicesPreview;