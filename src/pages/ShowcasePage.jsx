import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Header from "../components/landing/LandingHeader/LandingHeader";
import FadeContent from "../content/Animations/FadeContent/FadeContent";
import logo from "../assets/logos/reactbits-logo.svg";
import { useEffect, useState } from "react";
import Confetti from 'react-confetti';
import { AiOutlinePlusCircle } from "react-icons/ai";

import '../css/showcase.css';

const ShowcasePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const showcaseItems = [
    {
      name: 'SmartPosture',
      url: 'https://github.com/syam-praneeth/SmartPosture',
      using: '<ML-Model, Flask, Mediapipe />'
    },
    {
      name: 'Abdullah Shafiq',
      url: 'https://resume-tex.vercel.app',
      using: '<Squares />'
    },
    {
      name: 'Oscar Hernandez',
      url: 'https://oscarhernandez.vercel.app',
      using: '<LetterGlitch />'
    }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setIsLoaded(true);
    }, 1000)
  }, [])

  return (
    <section className="showcase-wrapper">
      <Header />
      {isLoaded && <Confetti run={window.innerWidth > 1000} recycle={false} colors={["#00d8ff"]} gravity={0.5} frameRate={60} numberOfPieces={100} />}

      <Flex>
        <FadeContent blur duration={1000}>
          <Text className="title">Turning <span className="text-yellow-500">ideas</span> into <span className="text-green-600">reality.</span></Text>
          <Text className=" title"></Text>
        </FadeContent>
      </Flex>
      <FadeContent blur duration={1000}>
        <Text className="sub-text">Each project is a story of problem-solving, optimization, and innovation.</Text>
      </FadeContent>

      <FadeContent blur duration={1000} className="fade-grid">
        <div className="grid-container">
          <Box as="a" href='https://forms.gle/TD4pLzNxrzs3pvQq9' target="_blank" rel='noreferrer' className="grid-item add-yours">
            <AiOutlinePlusCircle className="add-icon" />
            <Text>Wanna Collaborate?</Text>
            <Text>Let's Connect!</Text>
          </Box>

          {showcaseItems.map((item, index) =>
            <Box as="a" href={item.url} rel="noreferrer" target="_blank" className="grid-item" key={item.url}>
              <img className="showcase-img" src={`https://davidhaz.com/react-bits-showcase/showcase-${index + 1}.webp`} alt={`Showcase website submitted by: ${item.name ? item.name : 'Anonymous'}`} />
              <div className="showcase-info">
                {item.name && <Text className="author">{item.name}</Text>}
                <Text className="using">Using {item.using}</Text>
              </div>
            </Box>
          )}
{/* 
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div> */}
        </div>
      </FadeContent>
    </section >
  );
}

export default ShowcasePage;