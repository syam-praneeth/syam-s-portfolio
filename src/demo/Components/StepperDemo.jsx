import { useState } from "react";
import { toast } from "sonner";
import { Box, Input, Text } from "@chakra-ui/react";


import Stepper, { Step } from "../../content/Components/Stepper/Stepper";
import { stepper } from "../../constants/code/Components/stepperCode";

const StepperDemo = () => {
  const [name, setName] = useState('');
  const [step, setStep] = useState(1);



  return (
        <Box position="relative" className="demo-container-stepper" h={288} overflow="hidden">
          <Stepper
            initialStep={step}
            onStepChange={(step) => {
              if (step === 4) {
                name ? toast(`👋🏻 Thank You for your ${name}!`) : toast(`You didn't provide your experience :(`)
                setStep(4);
              } else {
                toast(`✅ Step ${step}!`);
                setStep(step);
              }
            }}
            onFinalStepCompleted={() => toast('✅ All steps completed!')}
            nextButtonProps={{ disabled: step === 3 && !name }}
            disableStepIndicators={step === 3 && !name}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            <Step>
              <Text color="#00d8ff" fontSize='1.2rem' fontWeight={600}>Welcome to the Connect Section!</Text>
              <p>Check out the next step!</p>
            </Step>

            <Step>
          <h2 className="pb-2">Step 2</h2>
          <a href="https://forms.gle/TD4pLzNxrzs3pvQq9" target="_blank" rel="noopener noreferrer">
            <button style={{
              padding: '12px 24px',
              backgroundColor: '#00d8ff',
              color: 'black',
              border: 'none',
              borderRadius: '30px',  
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
            }}>
              Let's Connect!
            </button>
          </a>
        </Step>



            <Step>
              <h2>Rate your experience</h2>
              <Input type="number" value={name} onChange={(e) => setName(e.target.value)} mt={2} placeholder="1-10"/>
            </Step>

            <Step>
              <Text color="#00d8ff" fontSize='1.2rem' fontWeight={600}>Final Step.</Text>
              <p>Thank You!</p>
            </Step>
          </Stepper>
        </Box>
  );
};

export default StepperDemo;