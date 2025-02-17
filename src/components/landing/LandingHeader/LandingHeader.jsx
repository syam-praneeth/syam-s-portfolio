import { Flex, Text } from '@chakra-ui/react';
import { useMediaQuery } from 'react-haiku';
import { Link, useLocation } from 'react-router-dom';

import reactbitslogo from '../../../assets/logos/reactbits-logo.svg';
import github from '../../../assets/common/icon-github.svg';
import linkedin from '../../../assets/common/icons8-linkedin.svg';
import showcase from '../../../assets/common/icon-showcase.svg';
import docs from '../../../assets/common/icon-docs.svg';
import profile from '../../../assets/common/profile.svg';
import FadeContent from '../../../content/Animations/FadeContent/FadeContent';

import './LandingHeader.css';

const LandingHeader = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { pathname } = useLocation();

  return (
    <header className="app-header">
      <nav className="header-content">
        <FadeContent blur>
          <Link className='logo' to="/">
          <Text className='text-lg'>&lt;Syam's Portfolio /&gt;</Text>
          </Link>
        </FadeContent>

        <Flex gap="8px" className='menu-items'>
        <FadeContent blur>
                <Text
                  as="a"
                  fontWeight={500}
                  fontSize="16px"
                  href="https://www.linkedin.com/in/praneeth-singuluri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} className='link-linkedin' alt='LinkedIn logo' /> LinkedIn
                </Text>
              </FadeContent>
          {!isMobile && (
            <>
              <FadeContent blur>
                <Text
                  as="a"
                  fontWeight={500}
                  fontSize="16px"
                  href="https://github.com/syam-praneeth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} className='link-github' alt='minimal github octocat logo' /> GitHub
                </Text>
              </FadeContent>
              
              
            </>
          )}

          <FadeContent blur>
            <Text
              as={Link}
              fontWeight={500}
              fontSize="16px"
              to={pathname !== '/showcase' ? '/showcase' : '/text-animations/split-text'}
            >
              {pathname !== '/showcase' && <><img src={showcase} alt='gallery' /> Projects</>}
              {/* {pathname === '/showcase' && <><img src={profile} alt='gallery' /> Profile</>} */}
            </Text>
          </FadeContent>
          

          {/* {pathname !== '/showcase' && (
            <FadeContent blur>
              <Text
                as={Link}
                fontWeight={500}
                fontSize="16px"
                to="/text-animations/split-text"
              >
                <img src={profile} alt='a page with some writing on it' /> Profile
              </Text>
            </FadeContent>
          )} */}
        </Flex>
      </nav>
    </header>
  );
}

export default LandingHeader;
