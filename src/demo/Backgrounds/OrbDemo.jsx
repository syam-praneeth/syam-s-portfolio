import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Switch, Text } from "@chakra-ui/react";
import { useDebounce } from "react-haiku";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import Orb from "../../content/Backgrounds/Orb/Orb";
import { orb } from "../../constants/code/Backgrounds/orbCode";

const OrbDemo = () => {
  const [hue, setHue] = useState(0);
  const [hoverIntensity, setHoverIntensity] = useState(0.5)
  const [rotateOnHover, setRotateOnHover] = useState(true);
  const [forceHoverState, setForceHoverState] = useState(false)

  const debouncedHue = useDebounce(hue, 300);
  const debouncedHoverIntensity = useDebounce(hoverIntensity, 300);


  return (
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} p={0} overflow="hidden">
          <Orb
            hoverIntensity={debouncedHoverIntensity}
            rotateOnHover={rotateOnHover}
            hue={debouncedHue}
            forceHoverState={forceHoverState}
          />

          <Text position="absolute" zIndex={0} fontSize="clamp(2rem, 2vw, 6rem)" fontWeight={900} mb={0} mixBlendMode="difference">
            Praneeth.
          </Text>
        </Box>


        {/* <PropTable data={propData} /> */}
        {/* <Dependencies dependencyList={['ogl']} /> */}
      </PreviewTab>
  );
};

export default OrbDemo;