import { useState } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  propertyType: "",
  budget: "",
  message: "",
};

const projectTypes = [
  "Residential Construction",
  "Villa Construction",
  "Commercial Construction",
  "Renovation & Remodeling",
  "Complete Home Interior",
  "Modular Kitchen",
  "Office Interior",
  "Custom Furniture",
  "Turnkey Solution",
];

const propertyTypes = [
  "Apartment",
  "Villa",
  "Independent House",
  "Office",
  "Commercial Property",
  "Other",
];

const budgetRanges = [
  "Below ₹5 Lakhs",
  "₹5–10 Lakhs",
  "₹10–25 Lakhs",
  "₹25–50 Lakhs",
  "₹50 Lakhs–₹1 Crore",
  "Above ₹1 Crore",
];

function ConsultationForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const validate = () => {
    if (!form.name.trim()) {
      return "Please enter your name.";
    }

    if (!form.email.trim()) {
      return "Please enter your email address.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      return "Please enter your phone number.";
    }

    if (!form.projectType) {
      return "Please select a project type.";
    }

    if (!form.propertyType) {
      return "Please select a property type.";
    }

    if (!form.message.trim()) {
      return "Please tell us briefly about your project.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

      if (!endpoint) {
        const subject = encodeURIComponent(
          `Luxe Era Consultation — ${form.projectType}`,
        );

        const body = encodeURIComponent(
          [
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Phone: ${form.phone}`,
            `Project Type: ${form.projectType}`,
            `Property Type: ${form.propertyType}`,
            `Budget: ${form.budget || "Not specified"}`,
            "",
            "Project Details:",
            form.message,
          ].join("\n"),
        );

        window.location.href = `mailto:info@luxera.in?subject=${subject}&body=${body}`;

        setStatus("success");
        setForm(initialForm);
        return;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Unable to submit consultation request.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setError(
        "We couldn't submit your request right now. Please try again or contact us directly.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="consultation-form-success" role="status">
        <div className="consultation-form-success-icon">
          <Check size={24} strokeWidth={1.5} />
        </div>

        <p className="form-eyebrow">Request received</p>

        <h3>
          Let&apos;s create something
          <br />
          <em>exceptional.</em>
        </h3>

        <p>
          Thank you for contacting Luxe Era. Our team will review your
          requirements and get back to you shortly.
        </p>

        <button
          type="button"
          className="form-reset-button"
          onClick={() => setStatus("idle")}
        >
          Send another request
          <ArrowUpRight size={16} strokeWidth={1.5} />
        </button>
      </div>
    );
  }

  return (
    <form className="consultation-form" onSubmit={handleSubmit} noValidate>
      <div className="consultation-form-header">
        <p className="form-eyebrow">Start your project</p>

        <h3>
          Tell us about your
          <br />
          <em>vision.</em>
        </h3>

        <p>
          Share a few details and our team will help you define the right
          direction for your project.
        </p>
      </div>

      <div className="consultation-form-grid">
        <label>
          <span>Full name *</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>

        <label>
          <span>Email address *</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>

        <label>
          <span>Phone number *</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91"
            autoComplete="tel"
          />
        </label>

        <label>
          <span>Project type *</span>
          <select
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
          >
            <option value="">Select project type</option>

            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Property type *</span>
          <select
            name="propertyType"
            value={form.propertyType}
            onChange={handleChange}
          >
            <option value="">Select property type</option>

            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Approximate budget</span>
          <select name="budget" value={form.budget} onChange={handleChange}>
            <option value="">Select budget</option>

            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </label>

        <label className="consultation-form-full">
          <span>Tell us about your project *</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your space, requirements, preferred style, timeline, or anything else we should know."
            rows={6}
          />
        </label>
      </div>

      {error && (
        <p className="consultation-form-error" role="alert">
          {error}
        </p>
      )}

      <div className="consultation-form-footer">
        <p>
          Your information is used only to understand your project and respond
          to your enquiry.
        </p>

        <button
          type="submit"
          className="consultation-form-submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <LoaderCircle className="form-spinner" size={17} />
              Sending...
            </>
          ) : (
            <>
              Request consultation
              <ArrowUpRight size={17} strokeWidth={1.4} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default ConsultationForm;