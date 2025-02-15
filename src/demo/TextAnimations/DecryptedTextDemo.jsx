import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
  Text,
} from "@chakra-ui/react";
import {
  TabbedLayout,
  PreviewTab,
  CodeTab,
  CliTab,
} from "../../components/common/TabbedLayout";
import { toast } from "sonner";

import Dependencies from "../../components/code/Dependencies";
import PropTable from "../../components/common/PropTable";
import RefreshButton from "../../components/common/RefreshButton";
import useForceRerender from "../../hooks/useForceRerender";

import DecryptedText from "../../content/TextAnimations/DecryptedText/DecryptedText";
import { decryptedText } from "../../constants/code/TextAnimations/decryptedTextCode";

const DecryptedTextDemo = () => {
  const [speed, setspeed] = useState(60);
  const [maxIterations, setMaxIterations] = useState(10);
  const [sequential, setSequential] = useState(true);
  const [revealDirection, setRevealDirection] = useState("start");
  const [useOriginalCharsOnly, setUseOriginalCharsOnly] = useState(false);
  const [animateOn, setAnimateOn] = useState("view");

  const [key, forceRerender] = useForceRerender();

  

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box
          position="relative"
          justifyContent="flex-start"
          py={{ md: 6, sm: 4 }}
          className="demo-container"
          overflow="hidden"
        >
          <RefreshButton onClick={forceRerender} />
          <Flex
            pl={{ md: 6, sm: 3 }}
            m={{ md: 8, sm: 2 }}
            direction="column"
            key={key}
          >
            <DecryptedText
              speed={speed}
              text="I'm,"
              maxIterations={maxIterations}
              sequential={sequential}
              revealDirection={revealDirection}
              parentClassName="decrypted-text"
              useOriginalCharsOnly={useOriginalCharsOnly}
              animateOn={animateOn}
            />
            <DecryptedText
              speed={speed}
              text="Developer,"
              maxIterations={maxIterations}
              sequential={sequential}
              revealDirection={revealDirection}
              parentClassName="decrypted-text"
              useOriginalCharsOnly={useOriginalCharsOnly}
              animateOn={animateOn}
            />
            <DecryptedText
              speed={speed}
              text="Programmer,"
              maxIterations={maxIterations}
              sequential={sequential}
              revealDirection={revealDirection}
              parentClassName="decrypted-text"
              useOriginalCharsOnly={useOriginalCharsOnly}
              animateOn={animateOn}
            />
            <DecryptedText
              speed={speed}
              text="Tech Enthusiast!"
              maxIterations={maxIterations}
              sequential={sequential}
              revealDirection={revealDirection}
              parentClassName="decrypted-text"
              useOriginalCharsOnly={useOriginalCharsOnly}
              animateOn={animateOn}
              onAnimationComplete={() => toast("✅ Animation Finished!")}
            />
          </Flex>
        </Box>

        <Flex
          direction="column"
          alignItems="flex-start"
          gap={4}
          my={4}
          style={{ maxWidth: "100%", overflow: "auto" }}
        >
          </Flex>
      </PreviewTab>

    </TabbedLayout>
  );
};

export default DecryptedTextDemo;
