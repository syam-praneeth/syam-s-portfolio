import { useState } from "react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Input, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from "@chakra-ui/react";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";

import CodeExample from "../../components/code/CodeExample";
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";

import GradientText from "../../content/TextAnimations/GradientText/GradientText";
import { gradientText } from '../../constants/code/TextAnimations/gradientTextCode';

const GradientTextDemo = () => {
  const [colors, setColors] = useState('#40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa');
  const [speed, setSpeed] = useState(3);
  const [showBorder, setShowBorder] = useState(true);

  const gradientPreview = colors.split(',').map(color => color.trim());



  return (
    // <TabbedLayout>
      <PreviewTab>

        <Box position="relative" className="demo-container" minH={150}>
          <Text fontSize={'2rem'} as='div'>
            <GradientText
              colors={colors.split(',')}
              animationSpeed={speed}
              showBorder={showBorder}
              className="custom-gradient-class"
            >
              Now with a cool border!
            </GradientText>
          </Text>
        </Box>

      </PreviewTab>

    // </TabbedLayout>
  );
};

export default GradientTextDemo;
