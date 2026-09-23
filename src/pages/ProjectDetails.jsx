import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AnimatedReveal from "../components/ui/AnimatedReveal";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import { projects } from "../data/projects";

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <div className="page project-details-page">
        <Header />

        <main className="project-not-found">
          <Container>
            <AnimatedReveal direction="up">
              <Badge variant="dark">Project not found</Badge>

              <h1>
                This project
                <br />
                <em>doesn&apos;t exist.</em>
              </h1>

              <Link to="/projects" className="project-back-link">
                <ArrowLeft size={17} strokeWidth={1.5} />
                <span>Back to projects</span>
              </Link>
            </AnimatedReveal>
          </Container>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="page project-details-page">
      <Header />

      <main>
        <section className="project-detail-hero">
          <Container>
            <AnimatedReveal direction="up">
              <Link to="/projects" className="project-back-link">
                <ArrowLeft size={16} strokeWidth={1.5} />
                <span>All projects</span>
              </Link>

              <div className="project-detail-heading">
                <Badge variant="dark">
                  {project.category || project.type}
                </Badge>

                <h1>
                  {project.title}
                  <br />
                  <em>{project.location || "Luxe Era Project"}</em>
                </h1>
              </div>
            </AnimatedReveal>
          </Container>
        </section>

        <section className="project-detail-image-section">
          <Container>
            <AnimatedReveal direction="up">
              <div className="project-detail-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-detail-placeholder">
                    <span>LUXE ERA</span>
                  </div>
                )}
              </div>
            </AnimatedReveal>
          </Container>
        </section>

        <section className="project-detail-overview">
          <Container>
            <div className="project-detail-overview-grid">
              <AnimatedReveal direction="left">
                <div>
                  <p className="project-detail-label">Project overview</p>

                  <h2>
                    A space shaped around
                    <br />
                    <em>its purpose.</em>
                  </h2>
                </div>
              </AnimatedReveal>

              <AnimatedReveal direction="right">
                <div className="project-detail-copy">
                  <p>
                    {project.description ||
                      "A considered project where architecture, materials, lighting, and functionality come together to create a distinctive environment."}
                  </p>

                  <div className="project-detail-meta-grid">
                    {project.location && (
                      <div>
                        <span>Location</span>
                        <strong>{project.location}</strong>
                      </div>
                    )}

                    {project.style && (
                      <div>
                        <span>Design style</span>
                        <strong>{project.style}</strong>
                      </div>
                    )}

                    {project.category && (
                      <div>
                        <span>Category</span>
                        <strong>{project.category}</strong>
                      </div>
                    )}

                    {project.year && (
                      <div>
                        <span>Year</span>
                        <strong>{project.year}</strong>
                      </div>
                    )}

                    {project.area && (
                      <div>
                        <span>Area</span>
                        <strong>{project.area}</strong>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedReveal>
            </div>
          </Container>
        </section>

        <section className="project-detail-details">
          <Container>
            <AnimatedReveal direction="up">
              <div className="project-detail-details-header">
                <p className="project-detail-label">Design direction</p>

                <h2>
                  Details that give the
                  <br />
                  project its <em>character.</em>
                </h2>
              </div>
            </AnimatedReveal>

            <div className="project-detail-feature-grid">
              {(project.highlights || []).map((highlight, index) => (
                <AnimatedReveal
                  key={highlight}
                  direction="up"
                  delay={index * 80}
                >
                  <article>
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <Check size={17} strokeWidth={1.4} />

                    <h3>{highlight}</h3>
                  </article>
                </AnimatedReveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="project-detail-closing">
          <Container>
            <AnimatedReveal direction="up">
              <div className="project-detail-closing-inner">
                <p className="project-detail-label">
                  Have something similar in mind?
                </p>

                <h2>
                  Let&apos;s create
                  <br />
                  your <em>next space.</em>
                </h2>

                <div className="project-detail-actions">
                  <Button href="/contact" variant="primary">
                    Start a conversation
                  </Button>

                  <Link
                    to="/projects"
                    className="project-detail-secondary-link"
                  >
                    View all projects
                    <ArrowUpRight size={17} strokeWidth={1.4} />
                  </Link>
                </div>
              </div>
            </AnimatedReveal>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetails;