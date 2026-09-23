import { ArrowUpRight, Check } from "lucide-react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AnimatedReveal from "../components/ui/AnimatedReveal";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

const values = [
  {
    number: "01",
    title: "Design with purpose",
    description:
      "Every space begins with a clear understanding of how it should look, feel, and function in everyday life.",
  },
  {
    number: "02",
    title: "Details that matter",
    description:
      "Materials, proportions, lighting, finishes, and craftsmanship are considered as one complete design language.",
  },
  {
    number: "03",
    title: "Built with precision",
    description:
      "We connect design thinking with disciplined execution so the finished space reflects the original vision.",
  },
  {
    number: "04",
    title: "Made around you",
    description:
      "Every project is shaped around the client's lifestyle, requirements, aspirations, and budget.",
  },
];

const capabilities = [
  "Residential construction",
  "Complete home interiors",
  "Renovation & transformation",
  "Modular kitchens",
  "Living & bedroom interiors",
  "Office & commercial interiors",
  "Custom furniture",
  "Turnkey execution",
];

function About() {
  return (
    <div className="page about-page">
      <Header />

      <main>
        <section className="about-hero">
          <Container>
            <AnimatedReveal direction="up">
              <Badge variant="dark">About Luxe Era</Badge>

              <h1>
                We create spaces
                <br />
                that feel like <em>you.</em>
              </h1>

              <p>
                Luxe Era brings together architecture, construction, and
                interior design to create refined spaces with a clear sense of
                identity.
              </p>
            </AnimatedReveal>
          </Container>
        </section>

        <section className="about-introduction">
          <Container>
            <div className="about-introduction-grid">
              <AnimatedReveal direction="left">
                <p className="about-section-label">Our approach</p>
              </AnimatedReveal>

              <AnimatedReveal direction="up">
                <div className="about-introduction-copy">
                  <h2>
                    From the first idea to the final detail, we think about
                    the entire space.
                  </h2>

                  <p>
                    A successful project is more than beautiful furniture or an
                    impressive facade. It is the relationship between
                    structure, light, material, proportion, movement, and the
                    people who experience the space.
                  </p>

                  <p>
                    That is why Luxe Era approaches construction and interiors
                    as one connected process — combining thoughtful design with
                    practical execution.
                  </p>
                </div>
              </AnimatedReveal>
            </div>
          </Container>
        </section>

        <section className="about-statement">
          <Container>
            <AnimatedReveal direction="up">
              <div className="about-statement-card">
                <div className="about-statement-grid" />

                <div className="about-statement-frame" />

                <div className="about-statement-content">
                  <span>Luxury Architectural Minimalism</span>

                  <strong>
                    Form.
                    <br />
                    Function.
                    <br />
                    Feeling.
                  </strong>
                </div>

                <div className="about-statement-mark">
                  <ArrowUpRight size={20} strokeWidth={1.4} />
                </div>
              </div>
            </AnimatedReveal>
          </Container>
        </section>

        <section className="about-values">
          <Container>
            <AnimatedReveal direction="up">
              <SectionHeading
                eyebrow="What defines us"
                title="A considered approach to every project."
                description="We believe premium spaces come from hundreds of thoughtful decisions working together."
              />
            </AnimatedReveal>

            <div className="about-values-grid">
              {values.map((value, index) => (
                <AnimatedReveal
                  key={value.number}
                  direction="up"
                  delay={index * 90}
                >
                  <article className="about-value-card">
                    <span className="about-value-number">
                      {value.number}
                    </span>

                    <h3>{value.title}</h3>

                    <p>{value.description}</p>
                  </article>
                </AnimatedReveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="about-capabilities">
          <Container>
            <div className="about-capabilities-grid">
              <AnimatedReveal direction="left">
                <div>
                  <p className="about-section-label">What we do</p>

                  <h2>
                    One team.
                    <br />
                    Complete solutions.
                  </h2>

                  <p className="about-capabilities-description">
                    From a single-room transformation to a complete
                    construction and interior project, our capabilities cover
                    the journey from concept to completion.
                  </p>

                  <Button href="/services" variant="primary">
                    Explore our services
                  </Button>
                </div>
              </AnimatedReveal>

              <AnimatedReveal direction="right">
                <div className="about-capabilities-list">
                  {capabilities.map((capability) => (
                    <div
                      className="about-capability-item"
                      key={capability}
                    >
                      <Check size={16} strokeWidth={1.5} />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </AnimatedReveal>
            </div>
          </Container>
        </section>

        <section className="about-closing">
          <Container>
            <AnimatedReveal direction="up">
              <div className="about-closing-inner">
                <p className="about-section-label">Your next space</p>

                <h2>
                  Let&apos;s create
                  <br />
                  something <em>lasting.</em>
                </h2>

                <p>
                  Tell us what you are planning. We will help turn the idea
                  into a considered, buildable space.
                </p>

                <Button href="/contact" variant="primary">
                  Start a conversation
                </Button>
              </div>
            </AnimatedReveal>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;