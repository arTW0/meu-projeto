import styled from "styled-components"

const page = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

`
const login = styled.main`
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  .main-content {
  padding: 0.5rem 1rem;
  text-align: center;

  .logo {
    max-width: 12rem;
  }
}
`

const home = styled.aside`
  width: 50rem;
  background: #835afd;
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 1rem;
  margin: -0.5rem;
  
  img {
    max-width: 24rem;
  }

  strong {
    font: 700 2rem 'Roboto', sans-serif;
    line-height: 1.5rem;
    margin-top: 1rem;
  }

  p {
    font: 400 1.6rem 'Roboto', sans-serif;
    font-size: 0.8rem;
    line-height: 1.5rem;
    margin-top: 1rem;
    color: #f8f8f8;
  }
`

export default {
  page,
  home,
  login
}