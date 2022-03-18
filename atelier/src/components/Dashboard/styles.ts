import styled from "styled-components"

const Container = styled.main`
  max-width: 80%;
  font-size: 1.5rem;
  font-weight: 600;
  
  h1 {
    font-family: 'Fraunces', sans-serif;
    color: var(--insta-yellow);
    margin: 3rem 2rem;
    display: block;
  }

  div {
    img {
      border-radius: 2rem;
      margin: 0 2rem;
    }
  }
`

export {
  Container
}