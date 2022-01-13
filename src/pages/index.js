import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { Update } from '../styles/GlobalComponents';
const Home = () => {
  const st = {

    // Adding media querry..
    '@media (min-width: 380px)': {
      display: 'grid',
    },
  };
  return (
    <Layout>
      <Update>
        <Section style={st}>
          <Hero />
          <BgAnimation />
        </Section>
      </Update>

      <Timeline />
      <Technologies />
      <Projects />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
