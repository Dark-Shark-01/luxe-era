import { ArrowUpRight, Phone } from "lucide-react";

import AnimatedReveal from "../ui/AnimatedReveal";
import Container from "../ui/Container";

function ContactCTA() {
  return (
    <section className="contact-cta" aria-labelledby="contact-cta-title">
      <Container>
        <AnimatedReveal>
          <div className="contact-cta-inner">
            <div className="contact-cta-content">
              <p className="eyebrow">Let's Create Something Exceptional</p>

              <h2 id="contact-cta-title">Have a space in mind?</h2>

              <p>
                Tell us about your project, and let's explore how thoughtful
                design and expert execution can bring it to life.
              </p>
            </div>

            <div className="contact-cta-actions">
              <a className="primary-button" href="/contact">
                <span>Book a Consultation</span>
                <ArrowUpRight size={17} strokeWidth={1.8} />
              </a>

              <a
                className="secondary-button"
                href="tel:+910000000000"
                aria-label="Call Luxe Era"
              >
                <Phone size={17} strokeWidth={1.8} />
                <span>Talk to Our Team</span>
              </a>
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}

export default ContactCTA;
