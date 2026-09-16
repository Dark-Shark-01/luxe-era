import { ArrowUpRight } from "lucide-react";

import AnimatedReveal from "../ui/AnimatedReveal";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function IntroSection() {
  return (
    <section className="intro-section" id="intro" aria-labelledby="intro-title">
      <Container>
        <div className="intro-grid">
          <AnimatedReveal>
            <div id="intro-title">
              <SectionHeading
                eyebrow="The Luxe Era Approach"
                title="We create spaces with purpose, character, and lasting value."
              />
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={120}>
            <div className="intro-content">
              <p>
                From architectural planning to the final interior detail, Luxe
                Era brings design and execution together under one thoughtful
                process.
              </p>

              <p>
                Every project is shaped around its people, its purpose, and the
                way the space needs to perform every day.
              </p>

              <a className="text-link" href="/about">
                <span>Discover Luxe Era</span>
                <ArrowUpRight size={17} strokeWidth={1.8} />
              </a>
            </div>
          </AnimatedReveal>
        </div>

        <AnimatedReveal delay={180}>
          <div className="intro-stats" aria-label="Luxe Era highlights">
            <div className="intro-stat">
              <strong>01</strong>
              <span>Design-led thinking</span>
            </div>

            <div className="intro-stat">
              <strong>02</strong>
              <span>End-to-end execution</span>
            </div>

            <div className="intro-stat">
              <strong>03</strong>
              <span>Spaces made for living</span>
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}

export default IntroSection;