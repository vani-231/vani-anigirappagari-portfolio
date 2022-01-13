import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
const Home = () => {
  const st = {

    // Adding media querry..
    '@media (max-width: 380px)': {
      display: 'none',
    },
    '@media (max-width: 600px)': {
      display: 'flex',
      flexDirection: 'column',
    },

  };
  return (
    <Layout>

      <Section style={st}>
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
