import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { designStyles } from "../../data/styles";
import AnimatedReveal from "../ui/AnimatedReveal";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function StylesExplorer() {
  const [activeStyle, setActiveStyle] = useState(designStyles[0]);

  return (
    <section className="styles-explorer">
      <Container>
        <div className="styles-explorer-header">
          <AnimatedReveal>
            <SectionHeading
              eyebrow="Find Your Style"
              title="Explore the design language that feels like you."
              description="Discover different interior styles and find the direction that best matches your personality, lifestyle, and space."
            />
          </AnimatedReveal>

          <AnimatedReveal delay={120}>
            <a className="text-link" href="/services">
              <span>Explore Our Services</span>
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>
          </AnimatedReveal>
        </div>

        <div className="styles-explorer-layout">
          <AnimatedReveal>
            <div
              className="styles-list"
              role="tablist"
              aria-label="Design styles"
            >
              {designStyles.map((style) => {
                const isActive = activeStyle.id === style.id;

                return (
                  <button
                    key={style.id}
                    className={`style-tab ${isActive ? "is-active" : ""}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`style-panel-${style.id}`}
                    onClick={() => setActiveStyle(style)}
                  >
                    <span>{style.name}</span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={140}>
            <div
              className="style-detail"
              id={`style-panel-${activeStyle.id}`}
              role="tabpanel"
              aria-label={`${activeStyle.name} design style`}
            >
              <div className="style-detail-visual" aria-hidden="true">
                <span>{activeStyle.name}</span>
              </div>

              <div className="style-detail-content">
                <p className="style-detail-label">Selected Style</p>

                <h3>{activeStyle.name}</h3>

                <p>{activeStyle.description}</p>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}

export default StylesExplorer;