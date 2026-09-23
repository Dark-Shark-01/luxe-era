import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card${featured ? " project-card-featured" : ""}`}>
      <Link
        to={`/projects/${project.id}`}
        className="project-card-image-link"
        aria-label={`View ${project.title} project`}
      >
        <div className="project-card-image">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading={featured ? "eager" : "lazy"}
            />
          ) : (
            <div className="project-card-placeholder">
              <span>LUXE ERA</span>
            </div>
          )}

          <span className="project-card-overlay">
            <ArrowUpRight size={20} strokeWidth={1.4} />
          </span>
        </div>
      </Link>

      <div className="project-card-content">
        <div className="project-card-meta">
          <span>{project.category}</span>
          {project.year && <span>{project.year}</span>}
        </div>

        <div className="project-card-heading">
          <div>
            <h3>{project.title}</h3>

            {project.location && <p>{project.location}</p>}
          </div>

          <Link
            to={`/projects/${project.id}`}
            className="project-card-link"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight size={18} strokeWidth={1.4} />
          </Link>
        </div>

        {project.shortDescription && (
          <p className="project-card-description">
            {project.shortDescription}
          </p>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;