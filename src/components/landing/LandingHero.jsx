import { Link, Spinner } from "@chakra-ui/react";
import { HeroType, PerspectiveGrid } from "../svg/SvgComponents";

import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-haiku";
import { useStars } from "../../hooks/useStars";
import { useActiveBeams } from "../../hooks/useActiveBeams";
import { useScrollVisibility } from "../../hooks/useScrollVisibility";
import DecryptedText from "../../content/TextAnimations/DecryptedText/DecryptedText";
import AnimatedContent from "../../content/Animations/AnimatedContent/AnimatedContent";
import FadeContent from "../../content/Animations/FadeContent/FadeContent";
import HeroShowcase from "./HeroShowcase/HeroShowcase";
import '../../css/landing.css';


const LandingHero = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const stars = useStars();
  const activeBeams = useActiveBeams();
  const isVisible = useScrollVisibility();

  return (
    <div className="hero-content">
      <div className="type-logo">
        <AnimatedContent initialOpacity={isMobile ? 0 : 1} scale={0.8} reverse={isMobile}>
          <p className="Syam">Syam Praneeth</p>
        </AnimatedContent>
        
      </div>
      <div className="hero-info">
      {/* <HeroShowcase /> */}
        <div className="headline">
          <div className="landing-bottom">
          <div className="divider"></div>
            <FadeContent blur duration={1000}>
              <p className="Tech">
                  a tech enthusiast driven by <span>innovation, problem-solving, and continuous learning.</span>
              </p>
            </FadeContent>        
          </div>
        </div>
      </div>
      <div className="perspective-grid">
        <PerspectiveGrid activeBeams={activeBeams} />
      </div>
      
      <div
        className="scroll-indicator"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease" }}
      ></div>
      
    </div>
  );
};

export default LandingHero;