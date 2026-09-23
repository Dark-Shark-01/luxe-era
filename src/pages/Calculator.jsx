import { useMemo, useState } from "react";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AnimatedReveal from "../components/ui/AnimatedReveal";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import {
  calculatorDefaults,
  designLevels,
  projectTypes,
  propertyTypes,
} from "../data/calculator";

function Calculator() {
  const [form, setForm] = useState(calculatorDefaults);

  const selectedProject = projectTypes.find(
    (item) => item.id === form.projectType,
  );

  const selectedLevel = designLevels.find(
    (item) => item.id === form.designLevel,
  );

  const estimate = useMemo(() => {
    const area = Math.max(Number(form.area) || 0, 0);
    const baseRate = selectedProject?.baseRate ?? 0;
    const multiplier = selectedLevel?.multiplier ?? 1;

    return Math.round(area * baseRate * multiplier);
  }, [form.area, selectedProject, selectedLevel]);

  const formattedEstimate = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(estimate);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const resetCalculator = () => {
    setForm(calculatorDefaults);
  };

  return (
    <div className="page calculator-page">
      <Header />

      <main>
        <section className="calculator-hero">
          <Container>
            <AnimatedReveal direction="up">
              <Badge variant="dark">Project Calculator</Badge>

              <h1>
                Understand your
                <br />
                <em>investment.</em>
              </h1>

              <p>
                Get an approximate project budget based on your property,
                project type, area, and preferred level of design.
              </p>
            </AnimatedReveal>
          </Container>
        </section>

        <section className="calculator-section">
          <Container>
            <div className="calculator-layout">
              <AnimatedReveal direction="left">
                <div className="calculator-form-card">
                  <div className="calculator-card-heading">
                    <p className="calculator-label">01 — Project type</p>

                    <h2>
                      What are you
                      <br />
                      planning?
                    </h2>
                  </div>

                  <div className="calculator-options">
                    {projectTypes.map((project) => (
                      <button
                        type="button"
                        key={project.id}
                        className={`calculator-option ${
                          form.projectType === project.id ? "is-active" : ""
                        }`}
                        onClick={() =>
                          updateField("projectType", project.id)
                        }
                      >
                        <span>{project.label}</span>

                        {form.projectType === project.id && (
                          <Check size={17} strokeWidth={1.5} />
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="calculator-field-group">
                    <label htmlFor="property-type">Property type</label>

                    <select
                      id="property-type"
                      value={form.propertyType}
                      onChange={(event) =>
                        updateField("propertyType", event.target.value)
                      }
                    >
                      {propertyTypes.map((property) => (
                        <option key={property.id} value={property.id}>
                          {property.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="calculator-field-group">
                    <label htmlFor="project-area">Approximate area</label>

                    <div className="calculator-input-with-unit">
                      <input
                        id="project-area"
                        type="number"
                        min="100"
                        step="50"
                        value={form.area}
                        onChange={(event) =>
                          updateField("area", event.target.value)
                        }
                      />

                      <span>sq. ft.</span>
                    </div>
                  </div>

                  <div className="calculator-level-section">
                    <p className="calculator-label">02 — Design level</p>

                    <div className="calculator-level-options">
                      {designLevels.map((level) => (
                        <button
                          type="button"
                          key={level.id}
                          className={`calculator-level ${
                            form.designLevel === level.id ? "is-active" : ""
                          }`}
                          onClick={() =>
                            updateField("designLevel", level.id)
                          }
                        >
                          <span className="calculator-level-title">
                            {level.label}
                          </span>

                          <span className="calculator-level-description">
                            {level.description}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="calculator-reset"
                    onClick={resetCalculator}
                  >
                    <RotateCcw size={15} strokeWidth={1.4} />
                    Reset calculator
                  </button>
                </div>
              </AnimatedReveal>

              <AnimatedReveal direction="right">
                <aside className="calculator-result-card">
                  <div>
                    <p className="calculator-label">Estimated investment</p>

                    <div className="calculator-result">
                      {formattedEstimate}
                    </div>

                    <p className="calculator-result-note">
                      Approximate starting estimate based on the information
                      provided.
                    </p>
                  </div>

                  <div className="calculator-summary">
                    <div>
                      <span>Project</span>
                      <strong>{selectedProject?.label}</strong>
                    </div>

                    <div>
                      <span>Property</span>
                      <strong>
                        {
                          propertyTypes.find(
                            (item) => item.id === form.propertyType,
                          )?.label
                        }
                      </strong>
                    </div>

                    <div>
                      <span>Area</span>
                      <strong>{Number(form.area) || 0} sq. ft.</strong>
                    </div>

                    <div>
                      <span>Design level</span>
                      <strong>{selectedLevel?.label}</strong>
                    </div>
                  </div>

                  <div className="calculator-result-actions">
                    <Button href="/contact" variant="primary">
                      Request a consultation
                    </Button>

                    <Link to="/services" className="calculator-services-link">
                      Explore services
                      <ArrowRight size={16} strokeWidth={1.4} />
                    </Link>
                  </div>
                </aside>
              </AnimatedReveal>
            </div>
          </Container>
        </section>

        <section className="calculator-disclaimer">
          <Container>
            <AnimatedReveal direction="up">
              <div>
                <p className="calculator-label">Important</p>

                <p>
                  This calculator provides an indicative estimate only. Final
                  project pricing depends on site conditions, measurements,
                  material selections, specifications, design requirements,
                  and the final scope agreed during consultation.
                </p>
              </div>
            </AnimatedReveal>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Calculator;