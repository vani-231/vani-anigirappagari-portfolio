import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/ Technologies/ Technologies'

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Projects />
      <Technologies />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
