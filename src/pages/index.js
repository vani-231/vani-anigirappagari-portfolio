import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import styled from 'styled-components';

const Hey2 = styled.div`
 border:5px solid green;
 display:grid;
 



`
const Hey3 = styled.div`
     border:5px solid yellow;
     display:flex;
     flex-direction:column;
     align-items:center;
`

const Home = () => {

  return (
    <Layout>
      <Section>
        <Hey2>
          <Hero />
          <Hey3>
            <BgAnimation />
          </Hey3>
        </Hey2>
      </Section>
      <Timeline />
      <Technologies />
      <Projects />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
