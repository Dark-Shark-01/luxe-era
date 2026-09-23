import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import AnimatedReveal from "../../components/ui/AnimatedReveal";
import Badge from "../../components/ui/Badge";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import { services, serviceCategories } from "../../data/services";

function Services() {
  return (
    <div className="page services-page">
      <Header />

      <main>
        <section className="services-hero">
          <Container>
            <AnimatedReveal direction="up">
              <Badge variant="dark">What We Do</Badge>

              <SectionHeading
                eyebrow="Our Services"
                title="Construction and interiors, thoughtfully brought together."
                description="From new construction to detailed interiors and complete turnkey execution, we create considered spaces through one coordinated process."
              />
            </AnimatedReveal>
          </Container>
        </section>

        <section className="services-listing">
          <Container>
            <div className="services-category-nav" role="tablist">
              {serviceCategories.map((category, index) => (
                <span
                  key={category.id}
                  className={`services-category ${
                    index === 0 ? "is-active" : ""
                  }`}
                >
                  {category.label}
                </span>
              ))}
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <AnimatedReveal
                  key={service.id}
                  direction="up"
                  delay={index * 50}
                >
                  <article className="service-detail-card">
                    <div className="service-detail-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="service-detail-content">
                      <p className="service-detail-category">
                        {service.category}
                      </p>

                      <h2>{service.title}</h2>

                      <p>{service.description}</p>

                      <ul>
                        {service.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className="text-link"
                        aria-label={`Enquire about ${service.title}`}
                      >
                        <span>Discuss This Service</span>
                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.5}
                        />
                      </Link>
                    </div>
                  </article>
                </AnimatedReveal>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Services;