import styled from "styled-components";

const Container = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 2rem;
    margin: 0 2rem;
    align-items: center;
  }
`

const Seta = styled.div`
  display: grid;
  position: absolute;
  font-size: 2rem;
  color: var(--insta-yellow);
  right: 20rem;
`

export {
  Container,
  Seta
}