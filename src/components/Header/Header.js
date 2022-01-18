import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { SocialIcon } from 'react-social-icons';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

export const Header = () => (
  <Container sticky>
    <Div1>
      <Link href='/'>
        <a style={{ display: "flex", alignItems: "center", color: 'white' }}>
          {/* <DiCssdeck size = "3rem" />  */}
          <Span>{`< Vani />`}</Span>
        </a>
      </Link>
    </Div1>
    <Div2>

      <li>
        <Link href='#home'>
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#contact'>
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/vani-231" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/vani-anigirappagari-0066841b7/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/vanivan89006775" target="_blank">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>

    </Div3>
  </Container>
);

export default Header;
