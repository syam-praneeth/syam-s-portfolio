import { Box, Flex, Text } from "@chakra-ui/react";

import FadeContent from "../../content/Animations/FadeContent/FadeContent";
import CountUp from "../../content/TextAnimations/CountUp/CountUp";
import Squares from "../../content/Backgrounds/Squares/Squares";
import Particles from "../../content/Backgrounds/Particles/Particles";
import DecryptedTextDemo from "../../demo/TextAnimations/DecryptedTextDemo";
import RotatingTextDemo from "../../demo/TextAnimations/RotatingTextDemo";
const LandingStats = () => (
  <Box className="stats-content" color="#00d8ff" mb={12}>
    <FadeContent blur>
    <div className="Stat"><DecryptedTextDemo /></div>
      <Flex w="100%" justifyContent="center">
        <FadeContent blur>
          <Text
            textAlign="center"
            mb={12}
            maxW="20ch"
            lineHeight={1.2}
            color="#fff"
            fontSize="clamp(2rem, 6vw, 4rem)"
          >
            <span> Turning logic into solutions, ideas into impact.</span>
          </Text>
        </FadeContent>
      </Flex>
      <Flex
        justifyContent="space-between"
        gap={6}
        alignItems="center"
        mb={6}
        direction={{ base: "column", sm: "row" }}
      >
        <Flex
          w={{ base: "100%", sm: "50%" }}
          h="250px"
          justifyContent="flex-end"
          alignItems="flex-start"
          direction="column"
          bg="#00d8ff"
          px={8}
          py={6}
          className="stats-first"
          borderRadius="25px"
        >
          <Text
            position="relative"
            zIndex={4}
            color="#060606"
            fontSize="clamp(4rem, 14vw, 8rem)"
            fontWeight={900}
            m={0}
            lineHeight={0.9}
          >
            <CountUp to={7} />+
          </Text>
          <Text
            position="relative"
            zIndex={2}
            fontSize="clamp(1rem, 2vw, 1.2rem)"
            color="#060606"
            m={0}
          >
            Projects
          </Text>
          <Squares
            className="stats-squares"
            speed={0.2}
            borderColor="#060606"
            direction="diagonal"
            squareSize={40}
          />
        </Flex>
        <Flex
          w={{ base: "100%", sm: "50%" }}
          h="250px"
          justifyContent="flex-end"
          alignItems="flex-start"
          direction="column"
          px={8}
          py={6}
          className="stats-second"
          borderRadius="25px"
        >
          <Text
            position="relative"
            zIndex={2}
            color="#00d8ff"
            fontSize="clamp(4rem, 14vw, 8rem)"
            fontWeight={900}
            m={0}
            lineHeight={0.9}
          >
            <CountUp to={4} />
          </Text>
          <Text
            position="relative"
            zIndex={2}
            fontSize="clamp(1rem, 2vw, 1.2rem)"
            color="#00d8ff"
            m={0}
          >
            Contributions
          </Text>
          <Particles
            particleCount={300}
            className="stats-particles"
            particleColors={["#00d8ff"]}
            moveParticlesOnHover
          />
        </Flex>
      </Flex>
      <div className="rot-text"><RotatingTextDemo /></div>
    </FadeContent>
  </Box>
);

export default LandingStats;