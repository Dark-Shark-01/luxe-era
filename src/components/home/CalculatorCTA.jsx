import { ArrowUpRight, Calculator } from "lucide-react";

import AnimatedReveal from "../ui/AnimatedReveal";
import Container from "../ui/Container";

function CalculatorCTA() {
  return (
    <section className="calculator-cta">
      <Container>
        <AnimatedReveal>
          <div className="calculator-cta-inner">
            <div className="calculator-cta-icon" aria-hidden="true">
              <Calculator size={28} strokeWidth={1.4} />
            </div>

            <div className="calculator-cta-content">
              <p className="eyebrow">Plan With Confidence</p>

              <h2>Wondering what your project might cost?</h2>

              <p>
                Get an approximate project estimate based on your space, project
                type, and preferred level of design.
              </p>
            </div>

            <a className="primary-button" href="/calculator">
              <span>Calculate Your Estimate</span>
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}

export default CalculatorCTA;