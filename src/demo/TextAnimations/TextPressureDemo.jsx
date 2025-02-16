import { useState } from 'react';
import {
  CliTab,
  CodeTab,
  PreviewTab,
  TabbedLayout
} from '../../components/common/TabbedLayout';
import {
  Box,
  Flex,
  Input,
  Switch,
  FormControl,
  FormLabel,
  Text
} from '@chakra-ui/react';

import CodeExample from '../../components/code/CodeExample';
import PropTable from '../../components/common/PropTable';
import CliInstallation from '../../components/code/CliInstallation';
import useForceRerender from '../../hooks/useForceRerender';
import RefreshButton from '../../components/common/RefreshButton';

import TextPressure from '../../content/TextAnimations/TextPressure/TextPressure';
import { textPressure } from '../../constants/code/TextAnimations/textPressureCode';

const TextPressureDemo = () => {
  const [text, setText] = useState('Hello!');
  const [flex, setFlex] = useState(true);
  const [alpha, setAlpha] = useState(false);
  const [stroke, setStroke] = useState(false);
  const [width, setWidth] = useState(true);
  const [weight, setWeight] = useState(true);
  const [italic, setItalic] = useState(true);
  const [textColor, setTextColor] = useState('#ffffff');
  const [strokeColor, setStrokeColor] = useState('#00d8ff');

  const [key, forceRerender] = useForceRerender();

  return (
      <PreviewTab>
        <Box position="relative" className="demo-container" bg='#060606' minH={400} maxH={450} overflow="hidden" mb={6}>
          {/* <RefreshButton onClick={forceRerender} /> */}
          <Box w="100%" h="100%">
            <TextPressure
              key={key}
              text={text}
              flex={flex}
              alpha={alpha}
              stroke={stroke}
              width={width}
              weight={weight}
              italic={italic}
              textColor={textColor}
              strokeColor={strokeColor}
              minFontSize={36}
            />
          </Box>
        </Box>



      </PreviewTab>

  );
};

export default TextPressureDemo;
