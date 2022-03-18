import React from 'react'
import { Section } from '../../GlobalStyles/globalstyles'

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDots } from 'react-icons/bi'

import { NavBar, Icon } from './Nav.styles'

const Nav = () => {
  return (
    <Section>
      <NavBar>
        <Icon href='#'>
          <AiOutlineHome />
        </Icon>
        <Icon href='#about'>
          <AiOutlineUser />
        </Icon>
        <Icon href='#experiance'>
          <BiBook />
        </Icon>
        <Icon href='#services'>
          <RiServiceLine />
        </Icon>
        <Icon href='#contact'>
          <BiMessageSquareDots />
        </Icon>
      </NavBar>
    </Section>
  )
}

export default Nav
