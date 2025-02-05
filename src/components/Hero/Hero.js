import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { WritingEffect } from './WritingEffect';

const Hero = (props) => (
  <Section row nopadding id='hero'>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        <h1 style={{ color: 'magenta' }}>{`Hi, I am Vani`}</h1>
      </SectionText>
      <WritingEffect />

      <Button onClick={() => window.open('https://drive.google.com/file/d/1XyhQhOAei6WaAVRN5vnMQOOLgNogFHZQ/view?usp=view', '_blank')}>View Resume</Button>
    </LeftSection>

  </Section>
);

export default Hero;