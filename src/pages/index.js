import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';



const Home = () => {

  return (
    <Layout>
      <style dangerouslySetInnerHTML={{ __html: " .vani{\n @media(max-width:400px){\n   display:grid;\n   grid-template-columns: 8ch auto;\n }\n \n}\n" }} />
      <Section className='vani'>
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
