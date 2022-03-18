import React, { useRef } from 'react'
import { ButtonPrimary, Section } from '../../GlobalStyles/globalstyles'
import {
  Container,
  ContactLeft,
  ContactRight,
  Details,
  Icon,
  Text,
  SocialLinks,
  Small,
  Form,
  Input,
  Textarea,
} from './Contact.styles'

import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    e.target.reset()
    emailjs
      .sendForm(
        'service_rtl8v1f',
        'template_kjituz9',
        form.current,
        'bppa03VjEfa68OtW2'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <Section>
      <h1>contact</h1>
      <Container>
        <ContactLeft>
          <Details>
            <Icon>qwe</Icon>
            <Text>Email</Text>
            <SocialLinks>mythleshyadav114@gmail.com</SocialLinks>
            <Small href='mailto:mythleshyadav114@gmail.com'>send message</Small>
          </Details>
          <Details>
            <Icon>qwe</Icon>
            <Text>Messenger</Text>
            <SocialLinks>messengerlink</SocialLinks>
            <Small>send message</Small>
          </Details>
          <Details>
            <Icon>qwe</Icon>
            <Text>Whatsapp</Text>
            <SocialLinks>link</SocialLinks>
            <Small>send message</Small>
          </Details>
        </ContactLeft>
        <ContactRight>
          <Form ref={form} onSubmit={sendEmail}>
            <Input
              name='name'
              type='text'
              placeholder='Your Full Name'
              required
            />
            <Input
              name='email'
              type='email'
              placeholder='Your Email'
              required
            />
            <Textarea
              name='message'
              rows='7'
              placeholder='Your Message'
              required
            />
            <ButtonPrimary type='submit'>Submit</ButtonPrimary>
          </Form>
        </ContactRight>
      </Container>
    </Section>
  )
}

export default Contact
