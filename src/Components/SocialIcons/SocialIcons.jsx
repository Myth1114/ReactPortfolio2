import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { Container, IconList, Icon } from './SocialIcons.styles'

const SocialIcons = () => {
  return (
    <Container>
      <IconList>
        <Icon href='https://www.instagram.com' target='_blank' rel='noreferrer'>
          <BsInstagram />
        </Icon>
        <Icon href='https://www.instagram.com' target='_blank' rel='noreferrer'>
          <BsTwitter />
        </Icon>
        <Icon href='https://www.instagram.com' target='_blank' rel='noreferrer'>
          <BsFacebook />
        </Icon>
      </IconList>
    </Container>
  )
}

export default SocialIcons
