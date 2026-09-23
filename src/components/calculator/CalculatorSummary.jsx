import { ArrowUpRight, Check } from "lucide-react";

function CalculatorSummary({
  estimate,
  projectType,
  area,
  finishLevel,
  onConsultation,
}) {
  const hasEstimate = Number(estimate) > 0;

  return (
    <aside className="calculator-summary" aria-live="polite">
      <div className="calculator-summary-header">
        <span className="calculator-summary-label">Estimated investment</span>

        <span className="calculator-summary-status">
          <Check size={13} strokeWidth={1.5} />
          Approximate
        </span>
      </div>

      <div className="calculator-summary-price">
        {hasEstimate ? (
          <>
            <span>₹</span>
            {Number(estimate).toLocaleString("en-IN")}
          </>
        ) : (
          "—"
        )}
      </div>

      <p className="calculator-summary-note">
        This estimate is indicative and may change after a detailed site
        assessment, design discussion, material selection, and final scope
        confirmation.
      </p>

      <div className="calculator-summary-details">
        {projectType && (
          <div>
            <span>Project type</span>
            <strong>{projectType}</strong>
          </div>
        )}

        {area && (
          <div>
            <span>Area</span>
            <strong>{Number(area).toLocaleString("en-IN")} sq. ft.</strong>
          </div>
        )}

        {finishLevel && (
          <div>
            <span>Finish level</span>
            <strong>{finishLevel}</strong>
          </div>
        )}
      </div>

      {onConsultation && (
        <button
          type="button"
          className="calculator-summary-action"
          onClick={onConsultation}
        >
          <span>Discuss this estimate</span>
          <ArrowUpRight size={17} strokeWidth={1.4} />
        </button>
      )}
    </aside>
  );
}

export default CalculatorSummary;