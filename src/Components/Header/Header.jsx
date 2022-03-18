import React from 'react'
import Me from '../../assets/me.png'
import Cta from '../../Components/CTA/Cta'
import SocialIcons from '../SocialIcons/SocialIcons'

import { Image, Container,ScrollDown } from './Header.styles'
const Header = () => {
  return (
    <Container>
      <h5>Hello I'm </h5>
      <h1>Myth</h1>
      <h5>Frontend Developer</h5>
      <Cta />
      <SocialIcons />
      <Image>
        <img src={Me} alt='me'></img>
      </Image>
      <ScrollDown href='#contact'>Scroll Down</ScrollDown>
    </Container>
  )
}

export default Header
