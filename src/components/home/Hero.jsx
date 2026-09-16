import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

import AnimatedReveal from "../ui/AnimatedReveal";
import Button from "../ui/Button";

import heroImage from "../../assets/hero.png";

const heroSlides = [
  {
    number: "01",
    eyebrow: "Construction & Interior Solutions",
    title: "Spaces designed",
    emphasis: "to define your era.",
    description:
      "Thoughtfully designed interiors and expertly executed construction solutions, created around the way you live and work.",
  },
  {
    number: "02",
    eyebrow: "Luxury Residential Design",
    title: "Interiors crafted",
    emphasis: "for modern living.",
    description:
      "From spatial planning to the final detail, we create refined environments that feel personal, timeless, and effortless.",
  },
  {
    number: "03",
    eyebrow: "End-to-End Execution",
    title: "From vision",
    emphasis: "to finished space.",
    description:
      "One considered process covering design, planning, construction, interiors, and final execution — managed with precision.",
  },
];

const AUTO_PLAY_DELAY = 7000;

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slide = heroSlides[activeSlide];

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, AUTO_PLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const handlePrevious = () => {
    setActiveSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const handleNext = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <section
      className="hero premium-hero"
      aria-label="Luxe Era introduction"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div
        className="hero-background premium-hero-background"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      >
        <div className="hero-background-overlay premium-hero-overlay" />
      </div>

      <div className="premium-hero-grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Slide indicator */}
      <div className="premium-hero-slide-navigation">
        <div className="premium-hero-slide-count">
          <span>{slide.number}</span>
          <span className="premium-hero-slide-line" />
        </div>

        <div className="premium-hero-slide-controls">
          {heroSlides.map((item, index) => (
            <button
              key={item.number}
              type="button"
              className={index === activeSlide ? "is-active" : ""}
              onClick={() => goToSlide(index)}
              aria-label={`Show slide ${index + 1}: ${item.eyebrow}`}
              aria-current={index === activeSlide ? "true" : undefined}
            >
              {item.number}
            </button>
          ))}
        </div>
      </div>

      {/* Main hero content */}
      <div className="hero-content premium-hero-content">
        <AnimatedReveal>
          <p className="eyebrow premium-hero-eyebrow" key={`${slide.number}-eyebrow`}>
            {slide.eyebrow}
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={100}>
          <div className="premium-hero-title-wrap">
            <h1 key={`${slide.number}-title`}>
              {slide.title}
              <br />
              <em>{slide.emphasis}</em>
            </h1>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={180}>
          <p
            className="hero-description premium-hero-description"
            key={`${slide.number}-description`}
          >
            {slide.description}
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={260}>
          <div className="hero-actions premium-hero-actions">
            <Button href="/projects" variant="primary">
              Explore Our Work
            </Button>

            <Button href="/calculator" variant="secondary">
              Estimate Your Project
            </Button>
          </div>
        </AnimatedReveal>
      </div>

      {/* Consultation rail */}
      <div className="premium-consultation-panel">
        <div className="premium-consultation-icon" aria-hidden="true">
          <CalendarDays size={19} strokeWidth={1.35} />
        </div>

        <span className="premium-consultation-line" aria-hidden="true" />

        <span className="premium-consultation-label">
          Get a Consultation
        </span>

        <a
          href="/contact"
          className="premium-consultation-action"
          aria-label="Get a consultation"
        >
          <ArrowUpRight size={18} strokeWidth={1.35} />
        </a>
      </div>

      {/* Scroll indicator */}
      <a
        href="#intro"
        className="premium-hero-scroll"
        aria-label="Scroll to explore Luxe Era"
      >
        <span className="premium-hero-scroll-button">
          <ArrowDown size={17} strokeWidth={1.3} />
        </span>

        <span>Scroll to Explore</span>
      </a>

      {/* Service categories */}
      <div className="premium-hero-meta">
        <span>Architecture</span>
        <i aria-hidden="true" />
        <span>Interiors</span>
        <i aria-hidden="true" />
        <span>Construction</span>
      </div>

      {/* Previous / next controls */}
      <div className="premium-hero-navigation-actions">
        <button
          type="button"
          className="premium-hero-arrow"
          onClick={handlePrevious}
          aria-label="Previous hero slide"
        >
          <ArrowLeft size={17} strokeWidth={1.3} />
        </button>

        <button
          type="button"
          className="premium-hero-arrow"
          onClick={handleNext}
          aria-label="Next hero slide"
        >
          <ArrowRight size={17} strokeWidth={1.3} />
        </button>
      </div>

      {/* Slide progress */}
      <div
        className="premium-hero-progress"
        role="progressbar"
        aria-label="Hero slideshow progress"
        aria-valuemin="1"
        aria-valuemax={heroSlides.length}
        aria-valuenow={activeSlide + 1}
      >
        <span
          style={{
            width: `${((activeSlide + 1) / heroSlides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
}

export default Hero;