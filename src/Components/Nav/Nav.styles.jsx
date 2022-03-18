import styled from 'styled-components'

export const NavBar = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  z-index: 2;
  left: 50%;
  position: fixed;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 1rem;
  border-radius: 3rem;
  padding: 0.5rem 0.8rem;
  backdrop-filter: blur(15px);
`
export const Icon = styled.a`
  background: transparent;
  padding: 0.9rem;
  border-radius: 50%;
  display: flex;
  color: #fff;
  font-size: 1.1rem;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`
