import { useState } from "react";
import { PreviewTab} from "../../components/common/TabbedLayout";
import { Box, Flex, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Switch, Text } from "@chakra-ui/react";


import Particles from "../../ts-default/Backgrounds/Particles/Particles";
import { particles } from "../../constants/code/Backgrounds/particlesCode";
import StepperDemo from "../Components/StepperDemo";

const ParticlesDemo = () => {

  const [colors, setColors] = useState('#ffffff');

  const [particleCount, setParticleCount] = useState(200);
  const [particleSpread, setParticleSpread] = useState(10);
  const [speed, setSpeed] = useState(0.1);
  const [baseSize, setBaseSize] = useState(100);

  const [moveParticlesOnHover, setMoveParticlesOnHover] = useState(true);
  const [alphaParticles, setAlphaParticles] = useState(false);
  const [disableRotation, setDisableRotation] = useState(false);

  

  return (
      <div>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} p={0} overflow="hidden">
          <Particles
            particleColors={[colors]}
            particleCount={particleCount}
            particleSpread={particleSpread}
            speed={speed}
            particleBaseSize={baseSize}
            
            moveParticlesOnHover={moveParticlesOnHover}
            alphaParticles={alphaParticles}
            disableRotation={disableRotation}
          />
          <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={10}>
            <StepperDemo />
      </Box>
        </Box>
      </PreviewTab>
      </div>
  );
};

export default ParticlesDemo;