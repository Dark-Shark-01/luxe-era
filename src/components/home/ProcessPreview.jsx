import { ArrowUpRight } from "lucide-react";

import { processSteps } from "../../data/process";
import AnimatedReveal from "../ui/AnimatedReveal";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function ProcessPreview() {
  return (
    <section
      className="process-preview"
      aria-labelledby="process-preview-title"
    >
      <Container>
        <div className="process-preview-header">
          <AnimatedReveal>
            <div id="process-preview-title">
              <SectionHeading
                eyebrow="Our Process"
                title="A clear process from first conversation to final handover."
                description="We keep every stage organized, transparent, and focused on creating the right result for your space."
              />
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={120}>
            <a
              className="text-link"
              href="/contact"
              aria-label="Start your Luxe Era project"
            >
              <span>Start Your Project</span>
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>
          </AnimatedReveal>
        </div>

        <div className="process-preview-list">
          {processSteps.map((step, index) => (
            <AnimatedReveal key={step.id} delay={index * 80}>
              <article className="process-step">
                <span
                  className="process-step-number"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <div className="process-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                <ArrowUpRight
                  className="process-step-icon"
                  size={20}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProcessPreview;