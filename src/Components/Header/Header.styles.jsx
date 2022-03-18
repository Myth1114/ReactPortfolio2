import styled from 'styled-components'

export const Container = styled.header`
  padding-top: 5rem;
  text-align: center;
  display: flex;
    flex-direction: column;
    align-items: center;

    overflow:hidden;
    position:relative;

    // height:100vh;
}
`
export const Image = styled.div`
  background: linear-gradient(#4db5ff, transparent);
  width: 20rem;
  height: 20rem;
  border-radius: 12rem 12rem 0 0;
  padding: 2rem;
  overflow: hidden;
`
export const ScrollDown = styled.a`
  position: absolute;
  right: 1%;
  top: 90%;
  transform: rotate(90deg);
`
