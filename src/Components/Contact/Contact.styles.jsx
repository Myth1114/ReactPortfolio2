import styled from 'styled-components'

export const Container = styled.div`
  //   width: 80%;
  display: grid;
  grid-template-columns: 30% 60%;
  gap: 12%;
`

export const ContactLeft = styled.div``
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: #2c2c6c;
  padding: 1.3rem;
  margin: 0.5rem 0;
  border-radius: 1.2rem;
  border: 1px solid transparent;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: transparent;
    border-color: rgba(77, 181, 255, 0.4);
    transition: all 0.4s ease-in-out;
  }
`
export const Icon = styled.div`
  margin: 0.5rem;
`
export const Text = styled.span``
export const SocialLinks = styled.span`
  font-size: 0.8rem;
  color: #fff;
`
export const Small = styled.a`
  font-size: 0.8rem;
  margin: 0.5rem 0;
`
export const ContactRight = styled.div``
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`

export const Input = styled.input`
  padding: 1rem;
  margin: 0.6rem;
  border-radius: 0.5rem;
  border: 2px solid #2c2c6c;
  background: transparent;
  color: #fff;
`
export const Textarea = styled.textarea`
  padding: 1rem;
  margin: 0.6rem;
  border-radius: 0.5rem;
  border: 2px solid #2c2c6c;
  background: transparent;
  resize: none;
  color: #fff;
`
