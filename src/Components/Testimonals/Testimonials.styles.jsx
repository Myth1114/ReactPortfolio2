import styled from 'styled-components'

export const Container = styled.div`
  width: 40%;
margin:0 auto;
  @media (min-width: 900px) {
    width: 60%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`
export const Article = styled.article`
  background-color: #1c1c6c;
  text-align: center;
  border-radius: 2rem;
  user-select: none;
  padding: 2rem;

  & small {
    display: block;
    font-weight: 300;
    color: #fff;
    width: 80%;
    margin: 0.8rem auto 0;
  }
`
export const Box = styled.div``
export const Image = styled.div`
  width: 4rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1rem;
  border: 0.4rem solid #45db55;
`
// export const Container=styled.div``
