import styled from 'styled-components'

export const Section = styled.section`
  // margin-top: 6rem;
  // height: 100vh;
  margin: 10rem;
  @media (max-width: 768px) {
    margin: 10rem 0.5rem;
  }
  & h2,
  & h5 {
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
  }
  & h2 {
    margin-bottom: 3rem;
    color: #4db5ff;
  }
`

export const Button = styled.button`
  display: inline-block;
  width: max-content;
  background-color: transparent;
  margin: 0.5em;
  padding: 0.7em 1em;
  border: 1px solid #4db5ff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 0.4rem;
  & a {
    color: #4db5ff;
  }
  &:hover {
    background: #fff;
    color: #1f1f38;
    border-color: transparent;
    transition: all 0.3s ease-in-out;
  }
`
export const ButtonPrimary = styled(Button)`
  background-color: #4db5ff;
  color: #2c2c6c;
  & a {
    color: #1f1f38;
  }
`
