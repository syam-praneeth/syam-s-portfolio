import { Box, Flex, Text } from "@chakra-ui/react";
import { CodeTab, PreviewTab, TabbedLayout } from "../common/TabbedLayout";

import FadeContent from "../../content/Animations/FadeContent/FadeContent";
import CodeExample from "../code/CodeExample";

import variants from "../../assets/common/variants.svg";
import Iridescence from "../../content/Backgrounds/Iridescence/Iridescence";
import { iridescenceMock } from "../../constants/code/Backgrounds/iridescenceCode";

const LandingDemo = () => (
  <Flex w="100%" justifyContent="center" alignItems="center" direction="column" mb={12} mt={12}>
    <FadeContent className="fade-full" blur>
      <Flex maxH={300} maxW={1080} overflow="hidden" className="demo-landing">
        <TabbedLayout className="landing-tabs">
          <PreviewTab>
            <Box
              position="relative"
              className="demo-container"
              h={230}
              p={0}
              w="100%"
              maxW={1080}
              overflow="hidden"
            >
              <Iridescence mouseReact={false} color={[0, 1, 1]} />
              <Text
                position="absolute"
                fontWeight={400}
                fontSize="3rem"
                mixBlendMode={"color-burn"}
                letterSpacing={-2}
                textAlign="center"
                color="#514"
                userSelect="none"
              >
                {"<Skills & Technologies />"}
              </Text>
            </Box>
          </PreviewTab>
          <CodeTab>
            <CodeExample codeObject={iridescenceMock} />
          </CodeTab>
        </TabbedLayout>
      </Flex>
    </FadeContent>
  </Flex>
);

export default LandingDemo;