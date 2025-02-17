import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { VscSparkleFilled } from "react-icons/vsc";
import { FaLock } from "react-icons/fa6";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";

import CodeExample from '../../components/code/CodeExample';
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";

import SpotlightCard from "../../content/Components/SpotlightCard/SpotlightCard";
import { spotlightCard } from '../../constants/code/Components/spotlightCardCode';

const SpotlightCardDemo = () => {
 

  return (
    // <TabbedLayout>
    <div >
      <PreviewTab>
        <Box position="relative" className="demo-container" py={10}>
          <SpotlightCard className="custom-spotlight-card">
            <Flex h={'100%'} direction="column" alignItems='flex-start' justifyContent="center">
              <Icon mb={3} boxSize={12} as={VscSparkleFilled} />
              <Text fontWeight={600} fontSize={'1.4rem'} letterSpacing={'-.5px'}>Innovation Engineer Intern!</Text>
              <Text color='#a1a1aa' fontSize={'14px'} mt={1} mb={8} >At Stinnovation Labs Pvt Ltd.</Text>
              <Button as="a" href="https://www.linkedin.com/in/praneeth-singuluri/" target="_blank" 
  rel="noopener noreferrer"  border={'1px solid #222'} background={'linear-gradient(to bottom, #222, #111)'} _hover={{ background: 'linear-gradient(to bottom, #222, #111)' }} rounded="xl" px={6}>Check Out!</Button>
            </Flex>
          </SpotlightCard>
        </Box>

        {/* <PropTable data={propData} /> */}
      </PreviewTab>
      </div>

  );
};

export default SpotlightCardDemo;
