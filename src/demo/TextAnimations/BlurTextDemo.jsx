import { useState } from "react";
import { toast } from "sonner";
import {
  CliTab,
  CodeTab,
  PreviewTab,
  TabbedLayout,
} from "../../components/common/TabbedLayout";
import {
  Box,
  Button,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from "@chakra-ui/react";

import RefreshButton from "../../components/common/RefreshButton";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import useForceRerender from "../../hooks/useForceRerender";
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";

import BlurText from "../../content/TextAnimations/BlurText/BlurText";
import { blurText } from "../../constants/code/TextAnimations/blurTextCode";

const BlurTextDemo = () => {
  const [animateBy, setAnimateBy] = useState("words");
  const [direction, setDirection] = useState("top");
  const [delay, setDelay] = useState(200);

  const [key, forceRerender] = useForceRerender();

  
  return (
    // <TabbedLayout>
      <PreviewTab>
        <Box
          position="relative"
          className="demo-container"
          minH={400}
          overflow="hidden"
        >
          <RefreshButton onClick={forceRerender} />
          <BlurText
            key={key}
            text="Isn't this so cool?!"
            animateBy={animateBy}
            direction={direction}
            delay={delay}
            className="blur-text-demo"
          />
        </Box>

        

                </PreviewTab>
    // </TabbedLayout>
  );
};

export default BlurTextDemo;
