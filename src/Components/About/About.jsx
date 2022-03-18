import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { ButtonPrimary, Section } from '../../GlobalStyles/globalstyles'

import {
  Container,
  LeftContent,
  RightContent,
  Card,
  CardDetails,
  Image,
  Icon,
  Paragraph,
} from './About.styles'

import Me from '../../assets/me-about.jpg'
const About = () => {
  return (
    <Section>
      <Container>
        <LeftContent>
          <Image>
            <img src={Me} alt='afdf'></img>
          </Image>
        </LeftContent>
        <RightContent>
          <CardDetails>
            <Card>
              <Icon>
                <FaAward />
              </Icon>
              <h5>Experiance</h5>
              <small>2</small>
            </Card>
            <Card>
              <Icon>
                <VscFolderLibrary />
              </Icon>
              <h5>Experiance</h5>
              <small>4</small>
            </Card>
            <Card>
              <Icon>
                <FiUser />
              </Icon>
              <h5>Experiance</h5>
              <small>5</small>
            </Card>
          </CardDetails>

          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
            deleniti dicta delectus corporis nostrum dolor velit ipsum pariatur
            maiores sit, reiciendis magnam nesciunt accusantium, similique illo
            facere sunt itaque repudiandae!
          </Paragraph>
          <ButtonPrimary>Lets Talk</ButtonPrimary>
        </RightContent>
      </Container>
    </Section>
  )
}

export default About
