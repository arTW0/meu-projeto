import styled from 'styled-components'

const Container = styled.div`
  background-color: var(--elg-brown);
`

const Content = styled.div`
  max-height: 7rem;
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    button {
      font-weight: 500;
      font-size: 1.1rem;
      color: var(--elg-off-white);
      background: var(--elg-brown);
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
    margin-left: 5rem;
  }
`

export {
  Container,
  Content
}