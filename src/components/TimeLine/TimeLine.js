import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';



const Timeline = () => {

  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }





  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <br /><br />
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hello! I am Vani Anigirappagari from Bangalore, Karnataka.Dynamic Frontend Developer skilled in React.js,JavaScript and responsive design, with a strong foundation in integrating server-side APIs. Proficie in using Generative AI and rapid adaptation to new tech stacks. Committed to optimizing performance and enhancing user experiences across platforms.
      </SectionText>

    </Section>
  );
};

export default Timeline;
