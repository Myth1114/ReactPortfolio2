import React from 'react'
import CV from '../../assets/cv.pdf'
import { Button, ButtonPrimary } from '../../GlobalStyles/globalstyles'
import {Container} from './cta.styles'
const Cta = () => {
  return (
    <Container>
      <Button>
        <a href={CV} download>
          Download CV
        </a>
      </Button>
      <ButtonPrimary>
        <a href='#contact'>Let's talk</a>
      </ButtonPrimary>
    </Container>
  )
}

export default Cta
