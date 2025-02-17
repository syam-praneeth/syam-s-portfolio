import LandingHeader from "../components/landing/LandingHeader/LandingHeader";
import LandingHero from "../components/landing/LandingHero";
import LandingStats from "../components/landing/LandingStats";
import LandingDemo from "../components/landing/LandingDemo";
import LandingTestimonials from "../components/landing/LandingTestimonials";
import LandingFooter from "../components/landing/LandingFooter";
import SkillsCarousel from "../Skills";
import ParticlesDemo from "../demo/Backgrounds/ParticlesDemo";
import SpotlightCardDemo from "../demo/Components/SpotlightCardDemo";
import OrbDemo from "../demo/Backgrounds/OrbDemo";
const LandingPage = () => {
  return (
    <section>
      <div className="landing-wrapper">
      <LandingHeader />
      <LandingHero />
      <LandingStats />
      </div>
      
      <div className="landing-wrapper mb-20">
      <LandingDemo />
      </div><div className="mb-25"><SkillsCarousel/></div>
      <div className="mt-8 mb-12">
      <p className="text-4xl font-bold text-center">Experience.</p>
        <SpotlightCardDemo/>
      </div>
      <div className="landing-wrapper mt-9 mb-20">
      <LandingTestimonials />
      </div>
      <div className="mt-20 mb-8">
      <p className="text-center text-4xl font-bold">Get in Touch</p>
      <ParticlesDemo/>
      </div>
      <div className="landing-wrapper">
      <LandingFooter />
      </div>
    </section>
  );
};

export default LandingPage;
