import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { LayoutGroup, motion } from 'framer-motion';
import { Box } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import RotatingText from "../../content/TextAnimations/RotatingText/RotatingText";
import { rotatingText } from "../../constants/code/TextAnimations/rotatingTextCode";

const RotatingTextDemo = () => {
  

  const words = [
    "thinking",
    "coding",
    "Development!",
  ];

  return (
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={400} maxH={400} overflow="hidden">
          <div className="rotating-text-demo">
            <LayoutGroup>
              <motion.p className="rotating-text-ptag" layout>
                <motion.span
                  className="pt-0.5 sm:pt-1 md:pt-2"
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                  Creative{" "}
                </motion.span>
                <RotatingText
                  texts={words}
                  mainClassName="rotating-text-main"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="rotating-text-split"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </motion.p>
            </LayoutGroup>
          </div>
        </Box>
      </PreviewTab>

  );
};

export default RotatingTextDemo;