import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 35% 54%;
  gap: 10%;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 5%;
    justify-items: center;
  }
`
export const LeftContent = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(45deg, transparent, #4db5ff, transparent);
  display: grid;
  place-items: center;
  @media (max-width: 768px) {
    width: 65%;
  }
`
export const RightContent = styled.div``

export const Card = styled.div`
  background-color: #2c2c6c;
  padding: 2rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  transition: all 0.5s ease-in-out;
  text-align: center;
  &:hover {
    background: transparent;
    border-color: #2c2c6c;
    transition: all 0.5s ease-in-out;
  }
`
export const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`
export const Paragraph = styled.p`
  margin: 2rem 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`
export const CardDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
`
export const Image = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: rotate(0);
    transition: all 0.5s ease-in-out;
  }
`
