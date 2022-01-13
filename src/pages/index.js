import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Hyper } from '../styles/GlobalComponents';

const Home = () => {


  return (
    <Layout>

      <Hyper>

        <Hero />
        <BgAnimation />

      </Hyper>




      <Timeline />
      <Technologies />
      <Projects />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
