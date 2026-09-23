import { Filter } from "lucide-react";

const filters = [
  {
    id: "all",
    label: "All Projects",
  },
  {
    id: "residential",
    label: "Residential",
  },
  {
    id: "interior",
    label: "Interior",
  },
  {
    id: "commercial",
    label: "Commercial",
  },
  {
    id: "renovation",
    label: "Renovation",
  },
];

function ProjectFilter({ activeFilter = "all", onFilterChange }) {
  return (
    <div className="project-filter" role="group" aria-label="Project filters">
      <div className="project-filter-icon" aria-hidden="true">
        <Filter size={15} strokeWidth={1.4} />
      </div>

      <div className="project-filter-list">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;

          return (
            <button
              key={filter.id}
              type="button"
              className={`project-filter-button ${
                isActive ? "is-active" : ""
              }`}
              aria-pressed={isActive}
              onClick={() => onFilterChange?.(filter.id)}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectFilter;