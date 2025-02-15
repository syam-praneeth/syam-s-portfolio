import { useEffect, useRef, useState, useMemo } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion, useMotionValue, useAnimationFrame, useTransform } from "framer-motion";

import p7 from "../../assets/photos/abdulkalam.jpeg";
import p2 from "../../assets/photos/stevejobs.jpeg";
import p3 from "../../assets/photos/winstonchurchill.jpeg";
import p4 from "../../assets/photos/theodoreroosevelt.webp";
import p5 from "../../assets/photos/nelsonmandela.jpeg";
import p1 from "../../assets/photos/elonmusk.jpg";

function wrap(min, max, value) {
  const range = max - min;
  return (((value - min) % range) + range) % range + min;
}

const MotionDiv = motion.div;

const defaultTweets = [
  {
    photo: p1,
    name: "Elon Musk",
    text: "If things are not failing, you are not innovating enough.",
   
  },
  {
    photo: p2,
    name: "Steve Jobs",
    text: "The only way to do great work is to love what you do.",
    
  },
  {
    photo: p3,
    name: "Winston Churchill",
    text: "Success is not final , failure is not fatal: it is the courage to continue that counts.",
  },
  {
    photo: p4,
    name: "Theodore Roosevelt",
    text: "Do what you can, with what you have, where you are.",
  },
  {
    photo: p1,
    name: "Elon Musk",
    text: "When something is important enough, you do it even if the odds are not in your favour.",
  },
  {
    photo: p5,
    name: "Nelson Mandela",
    text: "It always seems impossible until it's done.",
  },
  {
    photo: p7,
    name: "Dr. A.P.J. Abdul Kalam",
    text: "Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action.",
  }
];

const Card = ({ tweet, rotation, isFirst, onPause, onResume }) => (
  <Flex
    as="a"
    href={tweet.link}
    rel="noreferrer"
    target="_blank"
    direction="column"
    justifyContent="flex-start"
    className="tweet-card"
    px="6"
    py="6"
    bg="#060606"
    border="1px solid #333"
    borderRadius="25px"
    boxShadow="md"
    ml={isFirst ? 0 : "20px"}
    transform={`rotate(${rotation}deg)`}
    onMouseEnter={onPause}
    onMouseLeave={onResume}
  >
    <Flex gap={6} alignItems="center" mb={6}>
      <Image src={tweet.photo} alt={tweet.username} borderRadius="full" boxSize="50px" />
      <Flex direction="column">
        <Text fontWeight={900}>{tweet.name}</Text>
        <Text fontSize=".7rem" color="#999">
          {tweet.username}
        </Text>
      </Flex>
    </Flex>
    <Text fontWeight={300} lineHeight={1.2} color="#fff" whiteSpace="wrap">
      {tweet.text}
    </Text>
  </Flex>
);

const LandingMarquee = ({ tweets = defaultTweets, speed = 50 }) => {
  const trackRef = useRef(null);
  const baseX = useMotionValue(0);
  const [fullWidth, setFullWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  const repeatedTweets = useMemo(() => [...tweets, ...tweets], [tweets]);
  const tweetRotations = useMemo(
    () => tweets.map((_, i) => (i % 2 === 0 ? 5 : -5)),
    [tweets]
  );

  useEffect(() => {
    if (trackRef.current) {
      setFullWidth(trackRef.current.scrollWidth);
    }
  }, [repeatedTweets]);

  const halfWidth = fullWidth / 2;
  const x = useTransform(baseX, (v) => wrap(-halfWidth, 0, v));

  useAnimationFrame((_, delta) => {
    if (!paused && halfWidth > 0) {
      const moveBy = (speed * delta) / 1000;
      baseX.set(baseX.get() - moveBy);
    }
  });

  return (
    <Box position="relative" w="100vw" overflow="hidden" className="marquee-container">
      <MotionDiv ref={trackRef} className="marquee-track" style={{ x }}>
        {repeatedTweets.map((tweet, index) => {
          const rotation = tweetRotations[index % tweets.length];
          return (
            <Card
              key={index}
              tweet={tweet}
              rotation={rotation}
              isFirst={index === 0}
              onPause={() => setPaused(true)}
              onResume={() => setPaused(false)}
            />
          );
        })}
      </MotionDiv>
      <Box className="gradient-overlay" position="absolute" pointerEvents="none" />
    </Box>
  );
};

export default LandingMarquee;
