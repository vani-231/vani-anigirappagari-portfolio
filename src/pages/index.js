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
    '@media (max-width: 1400px)': {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
    },

    '@media (max-width: 380px)': {
      display: 'none',
    },


  };
  return (
    <Layout>

      <div style={st}>

        <Hero />
        <BgAnimation />

      </div>




      <Timeline />
      <Technologies />
      <Projects />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
