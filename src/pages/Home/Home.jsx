import Hero from "../../components/home/Hero";
import IntroSection from "../../components/home/IntroSection";
import ServicesPreview from "../../components/home/ServicesPreview";
import ProjectsPreview from "../../components/home/ProjectsPreview";
import StylesExplorer from "../../components/home/StylesExplorer";
import ProcessPreview from "../../components/home/ProcessPreview";
import BeforeAfterPreview from "../../components/home/BeforeAfterPreview";
import TestimonialsPreview from "../../components/home/TestimonialsPreview";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import ContactCTA from "../../components/home/ContactCTA";

function Home() {
  return (
    <div className="page home-page">
      <main>
        <Hero />
        <IntroSection />
        <ServicesPreview />
        <ProjectsPreview />
        <StylesExplorer />
        <ProcessPreview />
        <BeforeAfterPreview />
        <TestimonialsPreview />
        <CalculatorCTA />
        <ContactCTA />
      </main>
    </div>
  );
}

export default Home;