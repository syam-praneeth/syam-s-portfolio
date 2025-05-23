import { Box, Flex, Link } from "@chakra-ui/react";
import FadeContent from "../../content/Animations/FadeContent/FadeContent";
import { FiHeart } from "react-icons/fi";
import ParticlesDemo from "../../demo/Backgrounds/ParticlesDemo";

const LandingFooter = () => (
  <Box mb="8em" mt="4em">
    <FadeContent blur>
      <Flex alignItems="center">
        Made with <Box mx={2}><FiHeart /></Box> by
        <Link ml={1} href="#" target="_blank" color="#999">
          Syam Praneeth
        </Link>
      </Flex>
    </FadeContent>
    
  </Box>
);

export default LandingFooter;