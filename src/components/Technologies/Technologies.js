import React from 'react';
import TechIcons from '../Projects/TechIcons';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { SkillsContainer, SkillsBox, TechTag } from './TechnologiesStyles';

const techStacks = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Postman', 'Node', 'ExpressJS', 'Mongodb', 'Linux', 'Windows', 'VS code']
export const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Skills & Tools</SectionTitle>
    <SkillsContainer>
      {
        techStacks.map((skill, i) => {
          return <SkillsBox>
            <div style={{ textAlign: 'center' }}>
              <TechIcons tag={skill} key={i} />
              <TechTag>{skill}</TechTag>
            </div>
          </SkillsBox>
        })
      }
    </SkillsContainer>
  </Section>
);

export default Technologies;
