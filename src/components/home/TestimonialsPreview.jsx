import { Quote } from "lucide-react";

import { testimonials } from "../../data/testimonials";
import AnimatedReveal from "../ui/AnimatedReveal";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function TestimonialsPreview() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="testimonials-preview">
      <Container>
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Client Perspective"
            title="Good design is measured by how it feels to live with."
            description="Our approach is built around understanding the people behind every project and creating spaces that continue to feel right long after completion."
            align="center"
          />
        </AnimatedReveal>

        <div className="testimonials-preview-grid">
          {featuredTestimonials.map((testimonial, index) => (
            <AnimatedReveal key={testimonial.id} delay={index * 100}>
              <article className="testimonial-card">
                <Quote
                  className="testimonial-card-icon"
                  size={24}
                  strokeWidth={1.4}
                  aria-hidden="true"
                />

                <blockquote>{testimonial.quote}</blockquote>

                <div className="testimonial-card-author">
                  <strong>{testimonial.name}</strong>

                  <span>
                    {testimonial.role} · {testimonial.project}
                  </span>
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TestimonialsPreview;