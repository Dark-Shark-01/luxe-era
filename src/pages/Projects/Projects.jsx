import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import AnimatedReveal from "../../components/ui/AnimatedReveal";
import Badge from "../../components/ui/Badge";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <div className="page projects-page">
      <Header />

      <main>
        <section className="projects-hero">
          <Container>
            <AnimatedReveal direction="up">
              <Badge variant="dark">Our Work</Badge>

              <SectionHeading
                eyebrow="Selected Projects"
                title="Spaces designed with purpose, character, and lasting detail."
                description="Explore a selection of residential, interior, renovation, and commercial projects shaped by the Luxe Era approach."
              />
            </AnimatedReveal>
          </Container>
        </section>

        <section className="projects-listing">
          <Container>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <AnimatedReveal
                  key={project.id}
                  direction="up"
                  delay={index * 70}
                >
                  <article className="project-card">
                    <Link
                      to={`/projects/${project.id}`}
                      className="project-card-image"
                      aria-label={`View ${project.title} project`}
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="project-card-placeholder">
                          <span>LUXE ERA</span>
                        </div>
                      )}

                      <span className="project-card-overlay">
                        <ArrowUpRight
                          size={20}
                          strokeWidth={1.5}
                        />
                      </span>
                    </Link>

                    <div className="project-card-content">
                      <div className="project-card-meta">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>

                      <h2>{project.title}</h2>

                      <p>
                        {project.shortDescription ||
                          project.description}
                      </p>

                      <Link
                        to={`/projects/${project.id}`}
                        className="text-link"
                      >
                        <span>View Project</span>
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

export default Projects;