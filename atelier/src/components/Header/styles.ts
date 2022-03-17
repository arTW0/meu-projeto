import styled from 'styled-components'

const Container = styled.div`
  background-color: var(--green);
`

const Content = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    max-width: 80%;
    button {
      font-size: 1rem;
      color: var(--shape);
      background: var(--green);
      border: 0;
      padding: 0 1.5rem;
      border-radius: 0.25rem;
      height: 3rem;
      
      transition: filter 0.2s;
  
      &:hover {
        filter: brightness(0.9)
      }
    }
  }
  &.icons {
    min-width: 10rem;
  }
`

export {
  Container,
  Content
}