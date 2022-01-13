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
      border: '5px solid red'
    },

  };
  return (
    <Layout>
      <div style={st}>
        <Section>
          <Hero />
          <BgAnimation />
        </Section>
      </div>



      <Timeline />
      <Technologies />
      <Projects />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
