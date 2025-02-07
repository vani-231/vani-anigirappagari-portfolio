import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { IoIosArrowDropdown } from 'react-icons/io';
import { SocialIcon } from 'react-social-icons';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, MenuIcon, MobileNav } from './HeaderStyles';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (e, section) => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
    console.log(`Navigating to ${section}`);
  };

  return (
    <Container>
      <Div1>
        <Link href='/'>
          <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
            {/* <DiCssdeck size="3rem" /> */}
            <Span>{`< Vani />`}</Span>
          </a>
        </Link>
      </Div1>

      <Div2>
        <li>
          <Link href='#home' passHref>
            <NavLink onClick={(e) => handleClick(e, 'home')}>Home</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#about' passHref>
            <NavLink onClick={(e) => handleClick(e, 'about')}>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#skills' passHref>
            <NavLink onClick={(e) => handleClick(e, 'skills')}>Skills</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#projects' passHref>
            <NavLink onClick={(e) => handleClick(e, 'projects')}>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#contact' passHref>
            <NavLink onClick={(e) => handleClick(e, 'contact')}>Contact</NavLink>
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

      {/* Hamburger Menu Icon for mobile */}
      <MenuIcon onClick={toggleMenu}>
        <IoIosArrowDropdown size="3rem" />
      </MenuIcon>

      {/* Mobile Menu */}
      <MobileNav className={isMenuOpen ? 'open' : ''}>
        <li>
          <Link href='#home' passHref>
            <NavLink onClick={(e) => handleClick(e, 'home')}>Home</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#about' passHref>
            <NavLink onClick={(e) => handleClick(e, 'about')}>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#skills' passHref>
            <NavLink onClick={(e) => handleClick(e, 'skills')}>Skills</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#projects' passHref>
            <NavLink onClick={(e) => handleClick(e, 'projects')}>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#contact' passHref>
            <NavLink onClick={(e) => handleClick(e, 'contact')}>Contact</NavLink>
          </Link>
        </li>
      </MobileNav>
    </Container>
  );
};

export default Header;
