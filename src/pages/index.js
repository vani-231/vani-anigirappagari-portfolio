import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { Media } from 'react-media'
const Home = () => {
  return (
    <Layout>
      <Section>
        <Media query="(min-width:600px)" >
          {matches => {
            return matches ? "hello" : "world"
          }}
        </Media>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <Technologies />
      <Projects />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
