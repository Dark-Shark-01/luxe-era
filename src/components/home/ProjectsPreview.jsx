import { ArrowUpRight } from "lucide-react";

import { projects } from "../../data/projects";
import AnimatedReveal from "../ui/AnimatedReveal";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function ProjectsPreview() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section
      className="projects-preview"
      aria-labelledby="projects-preview-title"
    >
      <Container>
        <AnimatedReveal>
          <div id="projects-preview-title">
            <SectionHeading
              eyebrow="Selected Work"
              title="Spaces that speak through every detail."
              description="Explore a selection of residential and commercial projects shaped by thoughtful planning, refined materials, and purposeful design."
            />
          </div>
        </AnimatedReveal>

        <div className="projects-preview-grid">
          {featuredProjects.map((project, index) => (
            <AnimatedReveal key={project.id} delay={index * 100}>
              <article className="project-card">
                <div className="project-card-image">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.location}`}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  )}

                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="project-card-content">
                  <div className="project-card-meta">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.shortDescription}</p>

                  <div className="project-card-footer">
                    <span>{project.location}</span>

                    <a
                      href={`/projects/${project.id}`}
                      aria-label={`View ${project.title} project`}
                    >
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal delay={180}>
          <div className="projects-preview-footer">
            <a className="text-link" href="/projects">
              <span>View All Projects</span>
              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </a>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}

export default ProjectsPreview;