import { useState } from "react";
import { toast } from "sonner";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Button, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from "@chakra-ui/react";

import useForceRerender from "../../hooks/useForceRerender";
import RefreshButton from "../../components/common/RefreshButton";
import Dependencies from "../../components/code/Dependencies";
import CodeExample from "../../components/code/CodeExample";
import SplitText from "../../content/TextAnimations/SplitText/SplitText";
import { splitText } from '../../constants/code/TextAnimations/splitTextCode';

const SplitTextDemo = () => {
  const [delay, setDelay] = useState(100);
  const [easing, setEasing] = useState("easeOutCubic");
  const [key, forceRerender] = useForceRerender();

  return (
      <PreviewTab>
        <Box
          position="relative"
          className="demo-container"
          minH={400}
          overflow="hidden"
        >
          <RefreshButton onClick={forceRerender} />
          <SplitText
            key={key}
            text="Hello!"
            delay={delay}
            easing={easing}
            className="split-text-demo"
          />
        </Box>
      </PreviewTab>
  );
};

export default SplitTextDemo;
