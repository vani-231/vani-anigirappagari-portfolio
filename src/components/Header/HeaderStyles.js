import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr; /* Grid for the header layout */
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: black;
  box-shadow: 10px 5px 5px #0277BD;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr 3fr 1fr; /* Adjusted layout for mobile */
    grid-template-rows: auto;
    grid-column-gap: 0;
  }
`;

export const Span = styled.span`
  font-size: 4rem;
  color: magenta;
  font-weight: bold;
  display: inline-block;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.5rem;
    display: none; /* Hide <Vani /> on mobile */
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 769px) {
    font-size: 4rem;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 2;
    justify-content: flex-start;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 3 / 2;
    flex-direction: column;
    display: none; /* Hide links by default on mobile */
    visibility: hidden;
    width: 100%;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 3 / 2 / 4;
    justify-content: flex-end; /* Move hamburger to the right on mobile */
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;

  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size: 1.8rem;
  }
`;

// Social Icons 
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

// Menu Icon for Mobile view (positioned at the end of the navbar)
export const MenuIcon = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    cursor: pointer;
    padding: 10px;
    z-index: 20;
    font-size: 2.5rem; /* Adjust font size of hamburger */
  }
`;

// Mobile navigation (when menu is open)
export const MobileNav = styled.ul`
  position: absolute;
  top: 80px; /* Adjust according to your navbar height */
  left: 0;
  right: 0;
  background-color: black;
  z-index: 9;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: hidden; /* Hidden by default */
  opacity: 0; /* Hidden by default */
  transition: visibility 0.2s ease, opacity 0.3s ease;

  li {
    padding: 10px;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }

  &.open {
    visibility: visible; /* When the menu is open */
    opacity: 1;
  }
`;

export const ContainerWrapper = styled.div`
  margin-top: 100px; /* Default margin for larger screens */
  padding-top: 20px; /* Optional padding for more space */
  
  @media (max-width: 768px) {
    margin-top: 300px; /* Adjust for tablet */
    padding-top: 85px; /* Optional padding for tablet */
  }

  @media (max-width: 480px) {
    margin-top: 70px; /* Adjust for mobile */
    padding-top: 10px; /* Optional padding for mobile */
  }

  /* You can also use padding instead of margin-top for a more fluid effect */
  /* padding-top: 80px; for large devices */
`;


    

// Mobile menu open/close
export const MobileMenuToggle = styled.div`
  position: relative;
  z-index: 10;
`;
