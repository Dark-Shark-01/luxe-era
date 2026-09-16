import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import AnimatedReveal from "../ui/AnimatedReveal";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function BeforeAfterPreview() {
  const [position, setPosition] = useState(50);

  const handlePositionChange = (event) => {
    setPosition(Number(event.target.value));
  };

  return (
    <section className="before-after-preview">
      <Container>
        <div className="before-after-header">
          <AnimatedReveal>
            <SectionHeading
              eyebrow="The Transformation"
              title="See the difference thoughtful design can make."
              description="Explore how considered planning, materials, lighting, and detailing can transform an ordinary space into something extraordinary."
            />
          </AnimatedReveal>

          <AnimatedReveal delay={120}>
            <a className="text-link" href="/projects">
              <span>View Project Transformations</span>
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>
          </AnimatedReveal>
        </div>

        <AnimatedReveal delay={160}>
          <div className="before-after-wrapper">
            <div className="before-after-visual">
              <div className="before-after-panel before-panel">
                <span className="before-after-label">Before</span>
              </div>

              <div
                className="before-after-panel after-panel"
                style={{
                  clipPath: `inset(0 ${100 - position}% 0 0)`,
                }}
              >
                <span className="before-after-label">After</span>
              </div>

              <div
                className="before-after-divider"
                style={{ left: `${position}%` }}
                aria-hidden="true"
              >
                <span className="before-after-handle">
                  <ArrowUpRight size={15} strokeWidth={1.6} />
                </span>
              </div>

              <label className="before-after-control">
                <span className="sr-only">
                  Compare before and after
                </span>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={position}
                  onChange={handlePositionChange}
                  aria-label="Compare before and after"
                />
              </label>
            </div>

            <div className="before-after-caption">
              <div>
                <p>Featured Transformation</p>
                <h3>Urban Apartment</h3>
              </div>

              <span>Interior Design</span>
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}

export default BeforeAfterPreview;