import { Flex, Text } from "@chakra-ui/react";
import FadeContent from "../../content/Animations/FadeContent/FadeContent";
import LandingMarquee from "./LandingMarquee";

const LandingTestimonials = () => (
  <>
    <FadeContent blur>
      <Flex w="100%" justifyContent="center" alignItems="center" direction="column" mt="4em">
        <Text
          textAlign="center"
          lineHeight={1.6}
          fontSize="clamp(1.2rem, 4vw, 3rem)"
        >
          Words that inspire and keep me moving forward.
        </Text>
      </Flex>
      <LandingMarquee />
    </FadeContent>
  </>
);

export default LandingTestimonials;